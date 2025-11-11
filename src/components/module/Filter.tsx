import IconArrow from '@/assets/icons/icon-arrow.svg';
import IconClose from '@/assets/icons/icon-close.svg';
import Button from '@/components/element/button';
import clsx from 'clsx';
import { FormEvent, useState } from 'react';
import styles from './Filter.module.css';

type FilterKey = 'title' | 'author' | 'publisher';

const FILTER_OPTIONS: Array<{ key: FilterKey; label: string }> = [
  { key: 'title', label: '제목' },
  { key: 'author', label: '저자명' },
  { key: 'publisher', label: '출판사' },
];

interface Props {
  onClose: () => void;
}

const Filter = ({ onClose }: Props) => {
  const [selected, setSelected] = useState<FilterKey>('title');
  const [open, setOpen] = useState(false);
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.formInner}>
          <div className={styles.selector}>
            <button
              type="button"
              className={clsx(styles.selectorBtn, 'text-md-s')}
              onClick={() => setOpen((prev) => !prev)}
            >
              {FILTER_OPTIONS.find((opt) => opt.key === selected)!.label}
              <img src={IconArrow} alt="" />
            </button>
            {open && (
              <div className={styles.options}>
                {FILTER_OPTIONS.filter((opt) => opt.key !== selected).map((opt) => (
                  <button
                    key={opt.key}
                    type="button"
                    className="text-md-s"
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
            <input type="text" name="search" placeholder="검색어 입력" className="text-md-s" />
          </div>
        </div>
        <div className={styles.func}>
          <Button>검색하기</Button>
        </div>
      </form>
      <button type="button" className={styles.close} onClick={onClose}>
        <img src={IconClose} alt="닫기" />
      </button>
    </div>
  );
};

export default Filter;
