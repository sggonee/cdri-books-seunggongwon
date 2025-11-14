import { useInfiniteQuery, useQueries } from '@tanstack/react-query';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';

import { getBook, getBooks } from './api';

export const useLikeBooks = (likes: string[]) => {
  return useQueries({
    queries: likes.map((code) => {
      return {
        queryKey: ['like', code],
        queryFn: () => getBook(code),
      };
    }),
  });
};

export const useInfiniteBooks = (query: string, enabled: boolean) => {
  const { data, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['books', 'infinite', query],
    enabled,
    queryFn: ({ pageParam }) => getBooks(query, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage?.meta?.is_end || !lastPage?.meta?.total_count) return;
      return allPages.length + 1;
    },
    select: (data) => ({
      pages: data.pages.flatMap((page) => page.documents),
      pageParams: data.pageParams,
      meta: data.pages.at(-1)?.meta,
    }),
  });
  const { targetRef } = useIntersectionObserver({ isFetchingNextPage, hasNextPage, fetchNextPage });

  return { data, targetRef };
};
