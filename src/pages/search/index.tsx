import Books from '@/components/template/search/Books';
import Form from '@/components/template/search/Form';
import SearchNotFound from '@/components/template/search/NotFound';
import Summary from '@/components/template/search/Summary';
import { useInfiniteBooks } from '@/controller/books/query';
import { useSearchParams } from 'react-router-dom';

/**
 * TODO
 * [x] 목록 UI
 * [x] 검색 UI
 * [x] 상세 검색 팝업 UI
 * [x] total count UI
 * [x] 검색 히스토리
 * [x] Not found
 * [x] 상세 검색 필터
 * [x] 무한 스크롤
 * [] 찜하기
 * [] heading 컴포넌트 분리
 * [] 스타일 변수 정리
 * [] 컴포넌트 이름 & 구조 정리
 * [] 글로벌 네비게이션
 * [] 아이콘 정리
 */

const Search = () => {
  const [searchParams] = useSearchParams();
  const { data, targetRef } = useInfiniteBooks(searchParams.toString());
  const books = data?.pages ?? [];
  const totalCount = data?.meta?.total_count ?? 0;

  return (
    <section>
      <h2 className="heading-md">도서 검색</h2>
      <Form />
      <Summary count={totalCount} />
      {totalCount ? <Books items={books} /> : <SearchNotFound />}
      <div ref={targetRef} />
    </section>
  );
};

export default Search;
