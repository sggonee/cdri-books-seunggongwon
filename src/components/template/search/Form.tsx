import IconSearch from '@/assets/icons/icon-search.svg';
import Button from '@/components/element/button';
import History from '@/components/layout/Search/History';
import Filter from '@/components/module/Filter';
import useSearch from '@/hooks/useSearch';
import { FormEvent, useRef, useState } from 'react';
import styles from './Form.module.css';

const Search = () => {
  const { updateQuery } = useSearch();
  const [openFilter, setOpenFilter] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateQuery(inputRef.current?.value.trim() || '');
  };

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit} className={styles.form}>
        <input type="text" name="search" placeholder="검색어를 입력하세요" ref={inputRef} />
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
      {openFilter && <Filter onClose={() => setOpenFilter(false)} />}
    </div>
  );
};

export default Search;
