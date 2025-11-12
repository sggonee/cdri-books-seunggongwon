import Books from '@/components/template/search/Books';
import Form from '@/components/template/search/Form';
import SearchNotFound from '@/components/template/search/NotFound';
import Summary from '@/components/template/search/Summary';
import { useBooks } from '@/controller/books/query';
import { useSearchParams } from 'react-router-dom';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const { data } = useBooks(query ?? '');
  const books = data?.documents ?? [];
  const totalCount = data?.meta?.total_count ?? 0;

  return (
    <section>
      <h2 className="heading-md">도서 검색</h2>
      <Form />
      <Summary count={totalCount} />
      {totalCount ? <Books items={books} /> : <SearchNotFound />}
    </section>
  );
};

export default Search;
