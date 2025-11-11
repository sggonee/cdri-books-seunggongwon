import Button from '@/components/element/button';
import Toggle from '@/components/element/button/Toggle';
import clsx from 'clsx';
import styles from './Book.module.css';
import DetailBook from './DetailBook';

interface Props {
  item: {
    title: string;
    publisher: string;
    price: number;
    salePrice?: number;
    thumbnail: string;
  };
  index: number;
  isOpenDetail: boolean;
  onOpenDetail: (index: number) => void;
}

const Book = ({ item, index, isOpenDetail, onOpenDetail }: Props) => {
  const { title, publisher, price, salePrice, thumbnail } = item;

  if (isOpenDetail) return <DetailBook item={item} onClose={() => onOpenDetail(-1)} />;

  return (
    <div className={styles.container}>
      <div className={styles.thumb}>
        <img src={thumbnail} alt="" />
      </div>
      <div className={styles.meta}>
        <strong className="heading-sm">{title}</strong>
        <b className="text-md-s">{publisher}</b>
      </div>
      <div className={clsx(styles.price, 'heading-sm')}>{salePrice ?? price}원</div>
      <div className={styles.func}>
        <Button variant="primary" size="md">
          구매하기
        </Button>
        <Toggle variant="ghost" size="md" onClick={() => onOpenDetail(index)}>
          상세보기
        </Toggle>
      </div>
    </div>
  );
};

export default Book;
