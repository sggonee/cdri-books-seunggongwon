import clsx from 'clsx';
import styles from './Summary.module.css';

interface Props {
  count: number;
}

const Summary = ({ count }: Props) => {
  return (
    <p className={clsx(styles.container, 'text-md')}>
      도서 검색 결과 총 <span>{count}</span>건
    </p>
  );
};

export default Summary;
