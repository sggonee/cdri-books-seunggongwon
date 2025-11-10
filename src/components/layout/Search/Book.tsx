import Button from '@/components/element/button';
import styles from './Book.module.css';

interface Props {
  item: {
    title: string;
    publisher: string;
    price: number;
    salePrice?: number;
    thumbnail: string;
  };
}

const Book = ({ item }: Props) => {
  const { title, publisher, price, salePrice, thumbnail } = item;

  return (
    <>
      <div className={styles.thumb}>
        <img src={thumbnail} alt="" />
      </div>
      <div className={styles.meta}>
        <strong className="heading-sm">{title}</strong>
        <b className="text-md-s">{publisher}</b>
      </div>
      <div className="heading-sm">{salePrice ?? price}원</div>
      <div className={styles.func}>
        <Button variant="primary" size="md">
          구매하기
        </Button>
        <Button variant="ghost" size="md">
          상세보기
        </Button>
      </div>
    </>
  );
};

export default Book;
