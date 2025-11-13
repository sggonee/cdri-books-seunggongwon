import type { BookDocument, BookMeta } from './interface';

export const getBooks = async (query: string): Promise<{ documents: BookDocument[]; meta: BookMeta }> => {
  const result = await fetch(`https://dapi.kakao.com/v3/search/book?${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `KakaoAK ${import.meta.env.VITE_BOOKS_KEY}`,
    },
  });
  return await result.json();
};
