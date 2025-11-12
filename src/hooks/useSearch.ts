import { useNavigate } from 'react-router-dom';

const useSearch = () => {
  const navigate = useNavigate();
  const updateQuery = (value: string) => {
    navigate({ search: `?query=${value}` });
  };

  return { updateQuery };
};

export default useSearch;
