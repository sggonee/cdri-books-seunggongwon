import clsx from 'clsx';
import styles from './Summary.module.css';

interface Props {
  content: string;
  count: number;
}

const Summary = ({ content, count }: Props) => {
  return (
    <p className={clsx(styles.container, 'text-p2')}>
      {content} 총 <span>{count}</span>건
    </p>
  );
};

export default Summary;
