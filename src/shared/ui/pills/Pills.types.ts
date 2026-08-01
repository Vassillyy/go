export interface IPillItem<T> {
  label: string;
  value: T;
}

export interface IPills<T> {
  items: IPillItem<T>[];
  onFilterChange: (activeFilters: T[]) => void;
}
