import { type FC, useMemo } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { MethodCard } from '@/entities/method';
import { Input } from '@/shared/ui';
import { useFilters, useInfiniteScroll } from '@/shared/hooks';
import { AppPaths } from '@/shared/constants/route';
import { packageConfigs } from '../config';
import styles from './GoPackagePage.module.css';

export const GoPackagePage: FC = () => {
  const { packageId = '' } = useParams();
  const location = useLocation();
  const { label } = location.state;

  const { searchQuery, loadedCount, searchChange, searchReset, loadMore } =
    useFilters();

  const filteredMethods = useMemo(
    () =>
      (packageConfigs[packageId] ?? []).filter((method) =>
        method.name.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    [packageId, searchQuery],
  );

  const itemsToShow = filteredMethods.slice(0, loadedCount);
  const hasMore = loadedCount < filteredMethods.length;

  const sentinelRef = useInfiniteScroll({
    hasMore,
    onLoadMore: loadMore,
  });

  return (
    <div className={styles.page}>
      <Link to={AppPaths.GO_SCHEME} className={styles.back}>
        ← Назад к схеме
      </Link>

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>{label ?? packageId}</h1>
          <Input
            searchQuery={searchQuery}
            onSearchChange={searchChange}
            onSearchReset={searchReset}
          />
        </header>

        <div className={styles.content}>
          {itemsToShow.length > 0 ? (
            <div className={styles.methodsList}>
              {itemsToShow.map((method, index) => (
                <MethodCard key={index} method={method} />
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
