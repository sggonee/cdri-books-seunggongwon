import IconSearch from '@/assets/icons/icon-search.svg';
import Button from '@/components/element/button';
import Filter from '@/components/module/Filter';
import { useState } from 'react';
import style from './Form.module.css';

const Search = () => {
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <div className={style.container}>
      <div className={style.box}>
        <input type="text" placeholder="검색어를 입력하세요" className={style.input} />
        <img src={IconSearch} alt="" />
      </div>
      <Button variant="outline" size="sm" onClick={() => setOpenFilter((prev) => !prev)}>
        상세검색
      </Button>
      {openFilter && <Filter onClose={() => setOpenFilter(false)} />}
    </div>
  );
};

export default Search;
