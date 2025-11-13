import type { BookDocument, BookMeta } from './interface';

const fetchOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `KakaoAK ${import.meta.env.VITE_BOOKS_KEY}`,
  },
};

export const getBook = async (value: string): Promise<{ documents: BookDocument[]; meta: BookMeta }> => {
  const result = await fetch(`https://dapi.kakao.com/v3/search/book?query=${value}`, fetchOptions);
  return await result.json();
};

export const getBooks = async (
  value: string,
  offset: number,
): Promise<{ documents: BookDocument[]; meta: BookMeta }> => {
  const query = new URLSearchParams(value);
  query.set('page', `${offset}`);
  query.set('size', '10');
  const result = await fetch(`https://dapi.kakao.com/v3/search/book?${query.toString()}`, fetchOptions);
  return await result.json();
};
