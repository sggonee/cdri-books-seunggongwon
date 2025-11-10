import IconBook from '@/assets/icons/icon-book.svg';
import styles from './NotFound.module.css';

const SearchNotFound = () => {
  return (
    <div className={styles.container}>
      <img src={IconBook} alt="" />
      <p className="text-md">검색 결과가 없습니다.</p>
    </div>
  );
};

export default SearchNotFound;
