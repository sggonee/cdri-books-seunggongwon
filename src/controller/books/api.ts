import type { BookDocument, BookMeta } from './interface';

export const getBooks = async (query: string): Promise<{ documents: BookDocument[]; meta: BookMeta }> => {
  const res = await fetch(`https://dapi.kakao.com/v3/search/book?query="${query}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `KakaoAK ${import.meta.env.VITE_BOOKS_KEY}`,
    },
  });
  return await res.json();
};
