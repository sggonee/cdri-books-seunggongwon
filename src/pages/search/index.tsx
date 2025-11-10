import SearchNotFound from '@/components/template/search/NotFound';
import Search from '@/components/template/search/Search';

const Index = () => {
  return (
    <section>
      <h2>도서 검색</h2>
      <Search />
      <SearchNotFound />;
    </section>
  );
};

export default Index;
