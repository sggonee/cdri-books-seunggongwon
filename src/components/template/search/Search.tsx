import IconSearch from '@/assets/icons/icon-search.svg';
import Button from '@/components/element/button';
import style from './Search.module.css';

const Search = () => {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <input type="text" placeholder="검색어를 입력하세요" className={style.input} />
        <img src={IconSearch} alt="" />
      </div>
      <Button variant="outline" size="sm">
        상세검색
      </Button>
    </div>
  );
};

export default Search;
