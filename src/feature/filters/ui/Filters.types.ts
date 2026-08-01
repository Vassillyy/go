import type {ChangeEvent} from "react";

export interface IFilters<T extends string> {
    pillItems: Array<{ label: string; value: T }>;
    searchQuery: string;
    onFilterChange: (filters: T[]) => void;
    onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSearchReset: () => void;
}