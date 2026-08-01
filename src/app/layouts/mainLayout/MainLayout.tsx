import type {FC} from "react";
import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/widgets/sidebar';
import styles from './MainLayout.module.css';

export const MainLayout: FC = () => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};
