import type { FetchNextPageOptions, InfiniteQueryObserverResult } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';

interface IntersectionObserver {
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: (options?: FetchNextPageOptions) => Promise<InfiniteQueryObserverResult<unknown, Error>>;
}

const useIntersectionObserver = ({ hasNextPage, isFetchingNextPage, fetchNextPage }: IntersectionObserver) => {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!targetRef.current) return;
    const observer = new IntersectionObserver((entries) => {
      const [first] = entries;
      if (first.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    });
    observer.observe(targetRef.current);
    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  return { targetRef };
};

export default useIntersectionObserver;
