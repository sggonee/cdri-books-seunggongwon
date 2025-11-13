import Icon from '@/components/element/Icon';
import styles from './NotFound.module.css';

const SearchNotFound = () => {
  return (
    <div className={styles.container}>
      <Icon name="book" />
      <p className="text-p2">검색 결과가 없습니다.</p>
    </div>
  );
};

export default SearchNotFound;
