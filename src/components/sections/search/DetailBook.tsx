import Button from '@/components/elements/button/Button';
import Like from '@/components/elements/button/Like';
import Link from '@/components/elements/button/Link';
import Icon from '@/components/elements/Icon';
import { PlaceholderImage } from '@/constant/placeholder';
import { BookDocument } from '@/controller/books/interface';
import clsx from 'clsx';
import styles from './DetailBook.module.css';

interface Props {
  item: BookDocument;
  isLiked: boolean;
  onClose: () => void;
  onToggleLike: (title: string, code: string) => void;
}

const DetailBook = ({ item, isLiked, onToggleLike, onClose }: Props) => {
  const { title, authors, price, sale_price, thumbnail, contents, url } = item;

  return (
    <div className={styles.detailBook}>
      <div className={styles.thumb}>
        <img src={thumbnail || PlaceholderImage} alt="" />
        <Like className={styles.like} active={isLiked} onClick={() => onToggleLike(item.title, item.isbn)} />
      </div>
      <div className={styles.content}>
        <strong>
          <span className="text-h3">{title}</span>
          <span className="text-p3">{authors.join(', ')}</span>
        </strong>
        <span className="text-p3">
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
              <strong className={clsx(styles.salePrice, 'text-h3')}>{sale_price?.toLocaleString()}원</strong>
            </>
          )}
        </div>
        <div className={styles.func}>
          <Link to={url} target="_blank" variant="primary" size="md">
            구매하기
          </Link>
          <Button variant="ghost" size="md" onClick={onClose}>
            상세보기 <Icon name="arrow" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DetailBook;
