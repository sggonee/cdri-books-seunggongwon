import IconClose from '@/assets/icons/icon-close.svg';
import useSearch from '@/hooks/useSearch';
import { StorageKey } from '@/utils/storage';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './History.module.css';

const HISTORY_LIMIT = 8;
interface Props {
  selectedValue: (value: string) => void;
}

const getHistory = () => {
  const saved = localStorage.getItem(StorageKey.SearchHistory);
  return saved ? JSON.parse(saved) : [];
};

const syncLocalStorageHistory = (history: string[]) => {
  localStorage.setItem(StorageKey.SearchHistory, JSON.stringify(history));
};

const History = ({ selectedValue }: Props) => {
  const [history, setHistory] = useState<string[]>(getHistory());
  const [searchParams] = useSearchParams();
  const { updateQuery } = useSearch();

  useEffect(() => {
    const query = searchParams.get('query') || '';
    if (!query) return;
    setHistory((prev) => {
      if (prev.includes(query)) return prev;
      const newHistory = [query, ...prev].slice(0, HISTORY_LIMIT);
      syncLocalStorageHistory(newHistory);
      return newHistory;
    });
  }, [searchParams]);

  const removeHistory = (target: string, isLastItem: boolean) => {
    const newHistory = history.filter((item) => item !== target);
    setHistory(newHistory);
    syncLocalStorageHistory(newHistory);
    isLastItem && selectedHistory('');
  };

  const selectedHistory = (value: string) => {
    selectedValue(value);
    updateQuery({ query: value });
  };

  if (!history.length) return null;

  return (
    <div className={styles.container} data-history="open">
      {history.map((value, index, arr) => (
        <button type="button" key={index} className="text-md" onClick={() => selectedHistory(value)}>
          {value}
          <img
            src={IconClose}
            alt="닫기"
            role="button"
            tabIndex={0}
            className={styles.close}
            onClick={(event) => {
              event.stopPropagation();
              removeHistory(value, arr.length === 1);
            }}
          />
        </button>
      ))}
    </div>
  );
};

export default History;
