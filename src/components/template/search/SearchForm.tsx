import IconSearch from '@/assets/icons/icon-search.svg';
import Button from '@/components/element/button/Button';
import History from '@/components/layout/search/History';
import SearchFilter from '@/components/module/SearchFilter';
import useSearch from '@/hooks/useSearch';
import { FormEvent, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './Form.module.css';

/**
 * 조건
 *
 * [x] 검색시 팝업은 닫힌다
 * [x] 기존 검색어는 초기화 한다
 * [x] 상세 검색 도중 전체 검색하면 상세 검색은 초기화
 * [x] 검색어 유지
 */

const SearchForm = () => {
  const [searchParams] = useSearchParams();
  const { updateQuery } = useSearch();
  const [openFilter, setOpenFilter] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateQuery({ query: inputRef.current?.value.trim() || '' });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit} className={styles.form}>
        <input
          required
          type="text"
          name="search"
          placeholder="검색어를 입력하세요"
          autoComplete="off"
          defaultValue={searchParams.get('query') || ''}
          ref={inputRef}
        />
        <img src={IconSearch} alt="" />
        <History
          selectedValue={(value: string) => {
            inputRef.current!.value = value;
          }}
        />
      </form>
      <Button type="submit" variant="outline" size="sm" onClick={() => setOpenFilter((prev) => !prev)}>
        상세검색
      </Button>
      {openFilter && (
        <SearchFilter
          selectedValue={(value: string) => {
            inputRef.current!.value = value;
          }}
          onClose={() => setOpenFilter(false)}
        />
      )}
    </div>
  );
};

export default SearchForm;
