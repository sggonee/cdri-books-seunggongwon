import Book from '@/components/layout/Search/Book';
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
  return (
    <ul className={styles.container}>
      {[mock, mock, mock, mock].map((item, i) => (
        <li key={i}>
          <Book item={item} />
        </li>
      ))}
    </ul>
  );
};

export default Books;
