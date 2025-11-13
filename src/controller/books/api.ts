import type { BookDocument, BookMeta } from './interface';

export const getBooks = async (
  value: string,
  offset: number,
): Promise<{ documents: BookDocument[]; meta: BookMeta }> => {
  const query = new URLSearchParams(value);
  query.set('page', `${offset}`);
  query.set('size', '10');
  const result = await fetch(`https://dapi.kakao.com/v3/search/book?${query.toString()}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `KakaoAK ${import.meta.env.VITE_BOOKS_KEY}`,
    },
  });
  return await result.json();
};
