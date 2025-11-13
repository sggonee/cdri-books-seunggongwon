import Button from '@/components/element/button/Button';
import { FILTER_OPTIONS } from '@/constant/filter';
import useSearch from '@/hooks/useSearch';
import clsx from 'clsx';
import { FormEvent, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Icon from '../element/Icon';
import styles from './SearchFilter.module.css';

interface Props {
  onClose: () => void;
  selectedValue: (value: string) => void;
}

const SearchFilter = ({ selectedValue, onClose }: Props) => {
  const { updateQuery } = useSearch();
  const [searchParams] = useSearchParams();
  const [selected, setSelected] = useState(searchParams.get('target') || 'title');
  const [open, setOpen] = useState(false);

  const isDetailFiltered = !!searchParams.get('target');
  const query = searchParams.get('query') || '';
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = inputRef.current?.value.trim() || '';
    updateQuery({ query: value, target: selected });
    selectedValue(value);
    onClose();
  };

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.formInner}>
          <div className={styles.selector}>
            <button
              type="button"
              className={clsx(styles.selectorBtn, 'text-p3')}
              onClick={() => setOpen((prev) => !prev)}
            >
              {FILTER_OPTIONS.find((opt) => opt.key === selected)!.label}
              <Icon name="arrow" />
            </button>
            {open && (
              <div className={styles.options}>
                {FILTER_OPTIONS.filter((opt) => opt.key !== selected).map((opt) => (
                  <button
                    key={opt.key}
                    type="button"
                    className="text-p3"
                    onClick={() => {
                      setSelected(opt.key);
                      setOpen(false);
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className={styles.inputWrap}>
            <input
              required
              type="text"
              name="search"
              placeholder="검색어 입력"
              className="text-p3"
              defaultValue={isDetailFiltered ? query : ''}
              ref={inputRef}
            />
          </div>
        </div>
        <div className={styles.func}>
          <Button>검색하기</Button>
        </div>
      </form>
      <button type="button" className={styles.close} onClick={onClose}>
        <Icon name="close" />
      </button>
    </div>
  );
};

export default SearchFilter;
