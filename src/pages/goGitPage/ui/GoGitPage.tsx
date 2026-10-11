import { type FC, useMemo } from 'react';
import { GitCommandCard } from '@/entities/gitCommand';
import { Input } from '@/shared/ui';
import { useFilters, useInfiniteScroll } from '@/shared/hooks';
import { gitCommands } from '../config';
import styles from './GoGitPage.module.css';

export const GoGitPage: FC = () => {
  const {
    searchQuery,
    loadedCount,
    searchChange,
    searchReset,
    loadMore,
  } = useFilters();

  const filteredCommands = useMemo(
    () =>
      gitCommands.filter((command) =>
        command.name.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    [searchQuery],
  );

  const itemsToShow = filteredCommands.slice(0, loadedCount);
  const hasMore = loadedCount < filteredCommands.length;

  const sentinelRef = useInfiniteScroll({
    hasMore,
    onLoadMore: loadMore,
  });

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Git</h1>
          <div className={styles.controls}>
            <Input
              searchQuery={searchQuery}
              onSearchChange={searchChange}
              onSearchReset={searchReset}
            />
          </div>
        </header>

        <div className={styles.content}>
          {itemsToShow.length > 0 ? (
            <div className={styles.commandsList}>
              {itemsToShow.map((command, index) => (
                <GitCommandCard key={index} command={command} />
              ))}
            </div>
          ) : (
            <div className={styles.noResult}>По данному запросу данных нет</div>
          )}

          {hasMore && <div ref={sentinelRef} className={styles.sentinel} />}
        </div>
      </div>
    </div>
  );
};
