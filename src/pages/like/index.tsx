import Books from '@/components/views/search/Books';
import SearchNotFound from '@/components/views/search/NotFound';
import Summary from '@/components/views/search/Summary';
import { useLikeBooks } from '@/controller/books/query';
import { getLikeHistory } from '@/utils/like';
import { useState } from 'react';

const getLikeBookCode = () => {
  return Object.entries(getLikeHistory()).map(([code]) => {
    const [isbn] = code.split(' ');
    return isbn;
  });
};

const Like = () => {
  const [likes] = useState(getLikeBookCode());
  const data = useLikeBooks(likes);
  const books = data.flatMap((item) => item.data?.documents ?? []);
  const totalCount = books.length;
  return (
    <section className="like-section">
      <h2 className="text-h2">내가 찜한 책</h2>
      <Summary content="찜한 책" count={totalCount} />
      {totalCount ? <Books items={books} /> : <SearchNotFound />}
    </section>
  );
};

export default Like;
