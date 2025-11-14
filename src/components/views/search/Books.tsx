import { useState } from 'react';

import Book from '@/components/sections/search/Book';
import { BookDocument } from '@/controller/books/interface';
import { getLikeHistory } from '@/utils/like';
import { setLocalStorageItem, StorageKey } from '@/utils/storage';

import styles from './Books.module.css';

const Books = ({ items }: { items: BookDocument[] }) => {
  const [openDetail, setOpenDetail] = useState(-1);
  const [likeHistory, setLikeHistory] = useState(getLikeHistory());

  const onToggleLike = (title: string, code: string) => {
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
    <div className={styles.books}>
      {items.map((item, i) => (
        <Book
          key={`${item.isbn}-${i}`}
          index={i}
          item={item}
          isLiked={!!likeHistory[item.isbn]}
          isOpenDetail={openDetail === i}
          onOpenDetail={(index: number) => setOpenDetail(index)}
          onToggleLike={onToggleLike}
        />
      ))}
    </div>
  );
};

export default Books;
