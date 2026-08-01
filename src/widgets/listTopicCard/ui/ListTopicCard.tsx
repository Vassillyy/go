import type { FC } from 'react';
import { TopicCard } from '@/shared/ui';
import { useInfiniteScroll } from '@/shared/hooks';
import { useTopicsData } from '../hooks/useTopicsData.ts';
import styles from './ListTopicCard.module.css';
import type { IListTopicCard } from './ListTopicCard.types.ts';

export const ListTopicCard: FC<IListTopicCard> = ({
  searchQuery,
  loadedCount,
  loadMore,
  topics,
}) => {
  const { topicsToShow, navigateToTopic, hasMore } = useTopicsData({
    searchQuery,
    loadedCount,
    config: topics,
  });

  const sentinelRef = useInfiniteScroll({
    hasMore,
    onLoadMore: loadMore,
  });

  const filteredTopics = topicsToShow.filter((section) =>
    section.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className={styles.container}>
      {filteredTopics.map((section) => (
        <TopicCard key={section.value} onClick={() => navigateToTopic(section)}>
          {section.name}
        </TopicCard>
      ))}

      {filteredTopics.length === 0 && (
        <div className={styles.noResult}>По данному запросу данных нет</div>
      )}

      {hasMore && <div ref={sentinelRef} className={styles.sentinel} />}
    </div>
  );
};
