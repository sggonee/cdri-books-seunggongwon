import Book from '@/components/layout/Search/Book';
import { BookDocument } from '@/controller/books/interface';
import { useState } from 'react';
import styles from './Books.module.css';

const Books = ({ items }: { items: BookDocument[] }) => {
  const [openDetail, setOpenDetail] = useState(-1);
  return (
    <div className={styles.container}>
      {items.map((item, i) => (
        <Book
          key={i}
          index={i}
          item={item}
          isOpenDetail={openDetail === i}
          onOpenDetail={(index: number) => setOpenDetail(index)}
        />
      ))}
    </div>
  );
};

export default Books;
