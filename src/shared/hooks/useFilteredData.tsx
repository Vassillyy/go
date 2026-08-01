import { useMemo } from 'react';

interface IUseFilteredDataProps<TData, TCategory extends string> {
  activeCategories: TCategory[];
  searchQuery?: string;
  loadedCount?: number;
  config: Record<TCategory, TData[]>;
  getLabel: (category: TCategory) => string;
}

export const useFilteredData = <
  TData extends { name: string },
  TCategory extends string,
>({
  activeCategories,
  searchQuery = '',
  loadedCount = Infinity,
  config,
  getLabel,
}: IUseFilteredDataProps<TData, TCategory>) => {
  const categoriesToShow = useMemo(
    () =>
      activeCategories.length === 0
        ? (Object.keys(config) as TCategory[])
        : activeCategories,
    [activeCategories, config],
  );

  const pillItems = useMemo(
    () =>
      Object.keys(config).map((category) => ({
        label: getLabel(category as TCategory),
        value: category as TCategory,
      })),
    [config, getLabel],
  );

  const totalCount = useMemo(() => {
    return categoriesToShow.reduce((total, category) => {
      const items = config[category] || [];
      const filtered = items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      return total + filtered.length;
    }, 0);
  }, [categoriesToShow, searchQuery, config]);

  const itemsToShow = useMemo(() => {
    let itemsLoaded = 0;
    const result: Record<string, TData[]> = {};

    for (const category of categoriesToShow) {
      if (itemsLoaded >= loadedCount) break;

      const items = config[category] || [];
      const filtered = items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );

      const remainingToLoad = loadedCount - itemsLoaded;
      const itemsToTake = Math.min(filtered.length, remainingToLoad);

      if (itemsToTake > 0) {
        result[category] = filtered.slice(0, itemsToTake);
        itemsLoaded += itemsToTake;
      }
    }

    return result;
  }, [categoriesToShow, loadedCount, searchQuery, config]);

  const hasMore = loadedCount < totalCount;

  return {
    pillItems,
    categoriesToShow,
    totalCount,
    itemsToShow,
    hasMore,
  };
};
