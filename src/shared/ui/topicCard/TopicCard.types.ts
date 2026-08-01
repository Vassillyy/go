import type { ReactNode } from 'react';

export interface ITopicCard {
  onClick: () => void;
  children: ReactNode;
}
