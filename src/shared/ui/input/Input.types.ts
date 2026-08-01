import type { ChangeEvent } from 'react';

export interface IInput {
  searchQuery: string;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearchReset: () => void;
}
