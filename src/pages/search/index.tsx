import Form from '@/components/template/search/Form';
import SearchNotFound from '@/components/template/search/NotFound';
import Summary from '@/components/template/search/Summary';

const Search = () => {
  const search = [];
  return (
    <section>
      <h2>도서 검색</h2>
      <Form />
      <Summary count={0} />
      {search.length ? [] : <SearchNotFound />}
    </section>
  );
};

export default Search;
