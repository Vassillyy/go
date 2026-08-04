import type { FC } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { AppPaths } from '@/shared/constants/route';
import styles from './GoSchemeTopicPage.module.css';

export const GoSchemeTopicPage: FC = () => {
  const { topicId } = useParams();
  const location = useLocation();
  const { label } = location.state;

  return (
    <div className={styles.page}>
      <Link to={AppPaths.GO_SCHEME} className={styles.back}>
        ← Назад к схеме
      </Link>

      <div className={styles.card}>
        <span className={styles.badge}>Тема</span>
        <h1 className={styles.title}>{label ?? topicId}</h1>
        <p className={styles.placeholder}>
          Содержание этой темы скоро появится здесь.
        </p>
      </div>
    </div>
  );
};
