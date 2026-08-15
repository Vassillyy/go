import { type FC, useMemo } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { MethodCard, type MethodKind } from '@/entities/method';
import { Input, Switcher } from '@/shared/ui';
import { useFilters, useInfiniteScroll } from '@/shared/hooks';
import { AppPaths } from '@/shared/constants/route';
import { packageConfigs } from '../config';
import styles from './GoPackagePage.module.css';

const KIND_OPTIONS: { value: MethodKind; label: string }[] = [
  { value: 'function', label: 'Функции' },
  { value: 'type', label: 'Типы' },
];

export const GoPackagePage: FC = () => {
  const { packageId = '' } = useParams();
  const location = useLocation();
  const { label } = location.state;

  const {
    activeCategories,
    searchQuery,
    loadedCount,
    filterChange,
    searchChange,
    searchReset,
    loadMore,
  } = useFilters<MethodKind>();

  const packageMethods = useMemo(
    () => packageConfigs[packageId] ?? [],
    [packageId],
  );
  const hasTypes = packageMethods.some((method) => method.kind === 'type');

  const activeKind = hasTypes ? (activeCategories[0] ?? 'function') : 'function';

  const filteredMethods = useMemo(
    () =>
      packageMethods.filter(
        (method) =>
          (method.kind ?? 'function') === activeKind &&
          method.name.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    [packageMethods, searchQuery, activeKind],
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
          <div className={styles.controls}>
            <Input
              searchQuery={searchQuery}
              onSearchChange={searchChange}
              onSearchReset={searchReset}
            />
            {hasTypes && (
              <Switcher
                options={KIND_OPTIONS}
                value={activeKind}
                onChange={(kind) => filterChange([kind])}
              />
            )}
          </div>
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
