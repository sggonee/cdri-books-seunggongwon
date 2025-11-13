import { FilterKey } from './filter.interface';

export const FILTER_OPTIONS: Array<{ key: FilterKey; label: string }> = [
  { key: 'title', label: '제목' },
  { key: 'person', label: '저자명' },
  { key: 'publisher', label: '출판사' },
];
