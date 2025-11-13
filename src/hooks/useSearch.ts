import { useNavigate } from 'react-router-dom';

const useSearch = () => {
  const navigate = useNavigate();
  const updateQuery = (query: Record<string, string>) => {
    const result = new URLSearchParams(query);
    navigate({ search: result.toString() });
  };

  return { updateQuery };
};

export default useSearch;
