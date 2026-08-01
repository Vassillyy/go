import type { FC } from 'react';
import styles from './PageContainer.module.css';
import type { IPageContainer } from './PageContainer.types.ts';

export const PageContainer: FC<IPageContainer> = ({
  title,
  filtersSlot,
  children,
}) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
      </header>

      {filtersSlot}

      <div className={styles.content}>{children}</div>
    </div>
  );
};
