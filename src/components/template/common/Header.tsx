import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const routes = [
  {
    label: '도서 검색',
    to: '/search',
  },
  {
    label: '내가 찜한 책',
    to: '/like',
  },
];

const Header = () => {
  return (
    <header className={clsx(styles.container)}>
      <h1 className={clsx(styles.logo, 'text-h1')}>CERTICOS BOOKS</h1>
      <nav className={styles.nav}>
        {routes.map((route) => (
          <NavLink
            key={route.to}
            to={route.to}
            className={({ isActive }) => clsx('text-p1', isActive && styles['is--active'])}
          >
            {route.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
