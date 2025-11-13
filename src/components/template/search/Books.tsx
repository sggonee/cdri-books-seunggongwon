import Book from '@/components/layout/Search/Book';
import { BookDocument } from '@/controller/books/interface';
import { getLocalStorageItem, setLocalStorageItem, StorageKey } from '@/utils/storage';
import { useState } from 'react';
import styles from './Books.module.css';

const getLikeHistory = () => {
  try {
    return JSON.parse(getLocalStorageItem(StorageKey.Like) || '{}');
  } catch {
    return {};
  }
};

const Books = ({ items }: { items: BookDocument[] }) => {
  const [openDetail, setOpenDetail] = useState(-1);
  const [likeHistory, setLikeHistory] = useState(getLikeHistory());

  const toggleLike = (title: string, code: string) => {
    const likes = getLikeHistory();
    const exists = likes[code];

    if (exists) {
      delete likes[code];
    } else {
      likes[code] = title;
    }

    setLocalStorageItem(StorageKey.Like, JSON.stringify(likes));
    setLikeHistory(likes);
  };

  return (
    <div className={styles.container}>
      {items.map((item, i) => (
        <Book
          key={`${item.isbn}-${i}`}
          index={i}
          item={item}
          isLiked={!!likeHistory[item.isbn]}
          isOpenDetail={openDetail === i}
          onOpenDetail={(index: number) => setOpenDetail(index)}
          toggleLike={toggleLike}
        />
      ))}
    </div>
  );
};

export default Books;
