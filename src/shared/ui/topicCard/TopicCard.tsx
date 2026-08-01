import type { FC } from 'react';
import styles from './TopicCard.module.css';
import type { ITopicCard } from './TopicCard.types.ts';

export const TopicCard: FC<ITopicCard> = ({ onClick, children }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.content}>
        <h3 className={styles.title}>{children}</h3>
      </div>
    </div>
  );
};
