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
  query: string,
  offset: number,
): Promise<{ documents: BookDocument[]; meta: BookMeta }> => {
  const result = await fetch(`https://dapi.kakao.com/v3/search/book?${query}&size=10&page=${offset}`, fetchOptions);
  return await result.json();
};
