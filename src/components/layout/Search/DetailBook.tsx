import Button from '@/components/element/button';
import Toggle from '@/components/element/button/Toggle';
import clsx from 'clsx';
import styles from './DetailBook.module.css';

interface Props {
  item: {
    title: string;
    publisher: string;
    description: string;
    price: number;
    salePrice: number;
    thumbnail: string;
  };
  onClose: () => void;
}

const DetailBook = ({ item, onClose }: Props) => {
  const { title, publisher, price, salePrice, thumbnail, description } = item;

  return (
    <div className={styles.container}>
      <div className={styles.thumb}>
        <img src={thumbnail} alt="" />
      </div>
      <div className={styles.content}>
        <strong>
          <span className="heading-sm">{title}</span>
          <span className="text-md-s">{publisher}</span>
        </strong>
        <span className="text-md-s">
          <b>책 소개</b>
        </span>
        <pre
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: description ?? '책 소개 문구가 없습니다.' }}
        />
      </div>
      <div className={styles.purchase}>
        <div className={styles.price}>
          <span className={styles.priceLabel}>원가</span>
          <strong className={clsx(styles.originPrice, 'is--discounted')}>{price?.toLocaleString()}원</strong>
          <span className={styles.priceLabel}>할인가</span>
          <strong className={clsx(styles.salePrice, 'heading-sm')}>{salePrice?.toLocaleString()}원</strong>
        </div>
        <div className={styles.func}>
          <Button variant="primary" size="md">
            구매하기
          </Button>
          <Toggle variant="ghost" size="md" onClick={onClose} active>
            상세보기
          </Toggle>
        </div>
      </div>
    </div>
  );
};

export default DetailBook;
