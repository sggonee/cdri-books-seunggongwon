import clsx from 'clsx';
import { lazy, memo, Suspense } from 'react';

import Button from '@/components/elements/button/Button';
import Like from '@/components/elements/button/Like';
import Link from '@/components/elements/button/Link';
import Icon from '@/components/elements/Icon';
import BookDetailSkeleton from '@/components/sections/skeleton/BookDetailSkeleton';
import { PlaceholderImage } from '@/constant/placeholder';
import { BookDocument } from '@/controller/books/interface';

import styles from './Book.module.css';

const DetailBook = lazy(() => import('./DetailBook'));

interface Props {
  index: number;
  item: BookDocument;
  isLiked: boolean;
  isOpenDetail: boolean;
  onOpenDetail: (index: number) => void;
  onToggleLike: (title: string, code: string) => void;
}

const Book = ({ index, item, isLiked, isOpenDetail, onOpenDetail, onToggleLike }: Props) => {
  const { title, authors, price, sale_price, thumbnail, url } = item;

  if (isOpenDetail) {
    return (
      <Suspense fallback={<BookDetailSkeleton />}>
        <DetailBook item={item} isLiked={isLiked} onToggleLike={onToggleLike} onClose={() => onOpenDetail(-1)} />
      </Suspense>
    );
  }

  return (
    <div className={styles.book}>
      <div className={styles.thumb}>
        <img src={thumbnail || PlaceholderImage} alt="" />
        <Like className={styles.like} active={isLiked} onClick={() => onToggleLike(item.title, item.isbn)} />
      </div>
      <div className={styles.meta}>
        <strong className="text-h3">{title}</strong>
        <b className="text-p3">{authors.join(', ')}</b>
      </div>
      <div className={clsx(styles.price, 'text-h3')}>{(sale_price ?? price).toLocaleString()}원</div>
      <div className={styles.func}>
        <Link to={url} target="_blank" variant="primary" size="md">
          구매하기
        </Link>
        <Button variant="ghost" size="md" onClick={() => onOpenDetail(index)}>
          상세보기 <Icon name="arrow" />
        </Button>
      </div>
    </div>
  );
};

export default memo(Book);
