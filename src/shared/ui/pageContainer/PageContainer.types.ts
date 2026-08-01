import type { ReactNode } from 'react';

export interface IPageContainer {
  title: string;
  children: ReactNode;
  filtersSlot?: ReactNode;
}
