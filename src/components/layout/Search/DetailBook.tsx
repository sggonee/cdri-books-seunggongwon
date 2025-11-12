import Button from '@/components/element/button';
import Like from '@/components/element/button/Like';
import Toggle from '@/components/element/button/Toggle';
import { PlaceholderImage } from '@/constant/placeholder';
import { BookDocument } from '@/controller/books/interface';
import clsx from 'clsx';
import styles from './DetailBook.module.css';

interface Props {
  item: BookDocument;
  onClose: () => void;
}

const DetailBook = ({ item, onClose }: Props) => {
  const { title, publisher, price, sale_price, thumbnail, contents, url } = item;

  return (
    <div className={styles.container}>
      <div className={styles.thumb}>
        <img src={thumbnail || PlaceholderImage} alt="" />
        <Like className={styles.like} active={false} />
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
          dangerouslySetInnerHTML={{ __html: contents || '책 소개 문구가 없습니다.' }}
        />
      </div>
      <div className={styles.purchase}>
        <div className={styles.price}>
          <span className={styles.priceLabel}>원가</span>
          <strong
            className={clsx(styles.originPrice, {
              [styles['is--discounted']]: sale_price < price,
            })}
          >
            {price?.toLocaleString()}원
          </strong>
          {!!sale_price && (
            <>
              <span className={styles.priceLabel}>할인가</span>
              <strong className={clsx(styles.salePrice, 'heading-sm')}>{sale_price?.toLocaleString()}원</strong>
            </>
          )}
        </div>
        <div className={styles.func}>
          <Button variant="primary" size="md" onClick={() => window.open(url, '_blank')}>
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
