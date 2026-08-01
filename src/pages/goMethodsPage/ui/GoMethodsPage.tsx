import { type FC } from 'react';
import { type IMethod, labelMethods, type Methods } from '@/entities/method';
import { Filters } from '@/feature/filters';
import { PageContainer } from '@/shared/ui';
import { useFilters, useFilteredData, useInfiniteScroll } from '@/shared/hooks';
import { MethodCard } from './methodCard/MethodCard.tsx';
import { config } from '../config';
import styles from './GoMethodsPage.module.css';

export const GoMethodsPage: FC = () => {
  const {
    activeCategories,
    searchQuery,
    loadedCount,
    filterChange,
    searchChange,
    searchReset,
    loadMore,
  } = useFilters<Methods>();

  const { pillItems, itemsToShow, hasMore } = useFilteredData<IMethod, Methods>(
    {
      activeCategories,
      searchQuery,
      loadedCount,
      config,
      getLabel: (category) => labelMethods[category],
    },
  );

  const sentinelRef = useInfiniteScroll({
    hasMore,
    onLoadMore: loadMore,
  });

  return (
    <PageContainer
      title="API Go"
      filtersSlot={
        <Filters<Methods>
          pillItems={pillItems}
          onFilterChange={filterChange}
          searchQuery={searchQuery}
          onSearchChange={searchChange}
          onSearchReset={searchReset}
        />
      }
    >
      {Object.entries(itemsToShow).map(([category, methods]) => (
        <div key={category} className={styles.categorySection}>
          <h2 className={styles.categoryTitle}>
            {labelMethods[category as keyof typeof labelMethods]}
          </h2>
          <div className={styles.methodsList}>
            {methods.map((method, index) => (
              <MethodCard key={`${category}-${index}`} method={method} />
            ))}
          </div>
        </div>
      ))}

      {Object.entries(itemsToShow).length === 0 && (
        <div className={styles.noResult}>По данному запросу данных нет</div>
      )}

      {hasMore && <div ref={sentinelRef} className={styles.sentinel} />}
    </PageContainer>
  );
};
