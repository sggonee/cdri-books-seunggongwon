import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="l-container">
      <Link to="/search">Survey</Link>
      <Link to="/like">Admin</Link>
    </header>
  );
};

export default Header;
