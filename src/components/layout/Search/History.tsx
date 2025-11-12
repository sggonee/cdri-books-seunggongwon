import IconClose from '@/assets/icons/icon-close.svg';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './History.module.css';

const STORAGE_KEY = 'searchHistory';
const HISTORY_LIMIT = 8;

const getHistory = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
};

const syncHistory = (history: string[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
};

const History = () => {
  const [history, setHistory] = useState<string[]>(getHistory());
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('query')?.trim() || '';
    if (!query) return;
    setHistory((prev) => {
      if (prev.includes(query)) return prev;
      const newHistory = [query, ...prev].slice(0, HISTORY_LIMIT);
      syncHistory(newHistory);
      return newHistory;
    });
  }, [location.search]);

  const removeHistory = (target: string) => {
    const newHistory = history.filter((item) => item !== target);
    setHistory(newHistory);
    syncHistory(newHistory);
  };

  if (!history.length) return null;

  return (
    <ul className={styles.container}>
      {history.map((item, index) => (
        <li key={index}>
          {item}
          <button type="button" className={styles.close} onClick={() => removeHistory(item)}>
            <img src={IconClose} alt="닫기" />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default History;
