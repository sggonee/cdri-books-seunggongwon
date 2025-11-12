import IconClose from '@/assets/icons/icon-close.svg';
import useSearch from '@/hooks/useSearch';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './History.module.css';

const STORAGE_KEY = 'searchHistory';
const HISTORY_LIMIT = 8;
interface Props {
  selectedValue: (value: string) => void;
}

const getHistory = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
};

const syncHistory = (history: string[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
};

const History = ({ selectedValue }: Props) => {
  const [history, setHistory] = useState<string[]>(getHistory());
  const location = useLocation();
  const { updateQuery } = useSearch();

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

  const selectedHistory = (value: string) => {
    selectedValue(value);
    updateQuery(value);
  };

  if (!history.length) return null;

  return (
    <div className={styles.container} data-history="open">
      {history.map((value, index) => (
        <button type="button" key={index} className="text-md" onClick={() => selectedHistory(value)}>
          {value}
          <img
            src={IconClose}
            alt="닫기"
            role="button"
            tabIndex={0}
            className={styles.close}
            onClick={() => removeHistory(value)}
          />
        </button>
      ))}
    </div>
  );
};

export default History;
