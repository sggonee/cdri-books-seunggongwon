import styles from './AppSkeleton.module.css';

const AppSkeleton = () => {
  return (
    <div className={styles.appSkeleton}>
      <div className={styles.search}>
        <div className={styles.input} />
        <div className={styles.button} />
      </div>
      <div className={styles.emptyWrapper}>
        <div className={styles.emptyIcon} />
        <div className={styles.emptyText} />
      </div>
    </div>
  );
};

export default AppSkeleton;
