import type { ITopic } from '@/entities/topic';

export interface IListTopicCard {
  searchQuery: string;
  loadedCount: number;
  loadMore: () => void;
  topics: ITopic[];
}
