import type { FC } from 'react';
import { ListTopicCard } from '@/widgets/listTopicCard';
import { Input, PageContainer } from '@/shared/ui';
import { useFilters } from '@/shared/hooks';
import { config } from '../config/index';
import styles from './GoContentPage.module.css';

export const GoContentPage: FC = () => {
  const { searchQuery, searchChange, searchReset, loadedCount, loadMore } =
    useFilters();

  return (
    <PageContainer
      title="Основы языка Go"
      filtersSlot={
        <div className={styles.filtersContainer}>
          <Input
            searchQuery={searchQuery}
            onSearchChange={searchChange}
            onSearchReset={searchReset}
          />
        </div>
      }
    >
      <ListTopicCard
        loadedCount={loadedCount}
        loadMore={loadMore}
        searchQuery={searchQuery}
        topics={config}
      />
    </PageContainer>
  );
};
