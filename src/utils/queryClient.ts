import { QueryClient } from '@tanstack/react-query';

export default new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      gcTime: 60_000,
      staleTime: 60_000,
      retry: 1,
    },
  },
});
