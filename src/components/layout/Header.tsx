import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="l-container">
      <Link to="/search">도서 검색</Link>
      <Link to="/like">내가 찜한 책</Link>
    </header>
  );
};

export default Header;
