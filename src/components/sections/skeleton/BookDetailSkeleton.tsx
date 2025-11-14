import styles from './BookDetailSkeleton.module.css';

const BookDetailSkeleton = () => {
  return (
    <div className={styles.bookDetailSkeleton}>
      <div className={styles.thumbnail} />

      <div className={styles.content}>
        <div className={styles.title} />
        <div className={styles.subTitle} />

        <div className={styles.textLine} />
        <div className={styles.textLine} />

        <div className={styles.price} />
        <div className={styles.button} />
      </div>
    </div>
  );
};

export default BookDetailSkeleton;
