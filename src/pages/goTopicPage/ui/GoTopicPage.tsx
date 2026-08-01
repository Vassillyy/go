import { type FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import type { ITopic } from '@/entities/topic';
import { useFormattedText } from '@/shared/hooks';
import { SectionItem } from './sectionItem/SectionItem.tsx';
import styles from './GoTopicPage.module.css';

export const GoTopicPage: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { topicData } = location.state as { topicData: ITopic };

  const introductionParts = useFormattedText(topicData.content.introduction, {
    highlightStyle: {
      fontWeight: 600,
      color: 'black',
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.backButton} onClick={() => navigate(-1)}>
          Вернуться к списку тем
        </button>
        <h1 className={styles.title}>{topicData.name}</h1>
      </div>

      <div className={styles.content}>
        <div className={styles.introduction}>{introductionParts}</div>

        {topicData.content.sections.map((section, index) => (
          <SectionItem key={index} section={section} />
        ))}
      </div>
    </div>
  );
};
