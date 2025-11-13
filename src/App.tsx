import clsx from 'clsx';
import { Outlet } from 'react-router-dom';
import styles from './App.module.css';
import Header from './components/template/common/Header';

function App() {
  return (
    <>
      <Header />
      <main className={clsx(styles.container, 'l-container')}>
        <Outlet />
      </main>
    </>
  );
}

export default App;
