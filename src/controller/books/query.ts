import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getBooks } from './api';

export const useInfiniteBooks = (query: string) => {
  const { data, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['books', 'infinite', query],
    enabled: !!query,
    queryFn: ({ pageParam }) => getBooks(query, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage?.meta?.is_end) return;
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
