import { Input, Pills } from '@/shared/ui';
import styles from './Filters.module.css';
import type { IFilters } from './Filters.types.ts';

export const Filters = <T extends string>({
  pillItems,
  searchQuery,
  onFilterChange,
  onSearchChange,
  onSearchReset,
}: IFilters<T>) => {
  return (
    <div className={styles.container}>
      <Pills<T> items={pillItems} onFilterChange={onFilterChange} />

      <Input
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        onSearchReset={onSearchReset}
      />
    </div>
  );
};
