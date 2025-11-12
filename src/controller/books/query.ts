import { useQuery } from '@tanstack/react-query';
import { getBooks } from './api';

export const useBooks = (query: string) => {
  return useQuery({
    queryKey: ['books', query],
    enabled: !!query,
    queryFn: () => getBooks(query),
  });
};
