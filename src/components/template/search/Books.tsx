import Book from '@/components/layout/Search/Book';
import { useState } from 'react';
import styles from './Books.module.css';

const mock = {
  title: 'title',
  publisher: 'publisher',
  price: 10000,
  salePrice: 1000,
  thumbnail: 'https://placehold.co/480x680/jpg',
  status: 'status',
};

const Books = () => {
  const [openDetail, setOpenDetail] = useState(-1);
  return (
    <div className={styles.container}>
      {[mock, mock, mock, mock].map((item, i) => (
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
