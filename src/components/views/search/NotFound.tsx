import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <img src="/images/book.jpg" alt="book" />
      <p className="text-p2">검색 결과가 없습니다.</p>
    </div>
  );
};

export default NotFound;
