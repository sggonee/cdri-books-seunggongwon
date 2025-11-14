import Header from '@/components/views/common/Header';
import clsx from 'clsx';
import { Outlet } from 'react-router-dom';
import styles from './App.module.css';

function App() {
  return (
    <>
      <Header />
      <main className={clsx(styles.app, 'l-container')}>
        <Outlet />
      </main>
    </>
  );
}

export default App;
