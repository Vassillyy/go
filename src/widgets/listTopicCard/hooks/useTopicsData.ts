import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { type ITopic } from '@/entities/topic';
import { AppPaths } from '@/shared/constants/route.ts';

interface IUseTopicsData {
  searchQuery: string;
  loadedCount: number;
  config: ITopic[];
}

export const useTopicsData = ({
  searchQuery = '',
  loadedCount,
  config,
}: IUseTopicsData) => {
  const navigate = useNavigate();

  const allTopics = config;

  const filteredTopics = useMemo(
    () =>
      searchQuery
        ? allTopics.filter((t) =>
            t.name.toLowerCase().includes(searchQuery.toLowerCase()),
          )
        : allTopics,
    [allTopics, searchQuery],
  );

  const topicsToShow = filteredTopics.slice(0, loadedCount);

  const hasMore = loadedCount < filteredTopics.length;

  const navigateToTopic = (topic: ITopic) => {
    navigate(`${AppPaths.GO}/topic/${topic.value}`, {
      state: { topicData: topic },
    });
  };

  return {
    topicsToShow,
    navigateToTopic,
    hasMore,
  };
};
