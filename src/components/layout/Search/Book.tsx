import Like from '@/components/element/button/Like';
import Link from '@/components/element/button/Link';
import Toggle from '@/components/element/button/Toggle';
import { PlaceholderImage } from '@/constant/placeholder';
import { BookDocument } from '@/controller/books/interface';
import clsx from 'clsx';
import styles from './Book.module.css';
import DetailBook from './DetailBook';

interface Props {
  item: BookDocument;
  index: number;
  isOpenDetail: boolean;
  onOpenDetail: (index: number) => void;
}

const Book = ({ item, index, isOpenDetail, onOpenDetail }: Props) => {
  const { title, publisher, price, sale_price, thumbnail, url } = item;

  if (isOpenDetail) return <DetailBook item={item} onClose={() => onOpenDetail(-1)} />;

  return (
    <div className={styles.container}>
      <div className={styles.thumb}>
        <img src={thumbnail || PlaceholderImage} alt="" />
        <Like className={styles.like} active={true} />
      </div>
      <div className={styles.meta}>
        <strong className="heading-sm">{title}</strong>
        <b className="text-md-s">{publisher}</b>
      </div>
      <div className={clsx(styles.price, 'heading-sm')}>{(sale_price ?? price).toLocaleString()}원</div>
      <div className={styles.func}>
        <Link to={url} target="_blank" variant="primary" size="md">
          구매하기
        </Link>
        <Toggle variant="ghost" size="md" onClick={() => onOpenDetail(index)}>
          상세보기
        </Toggle>
      </div>
    </div>
  );
};

export default Book;
