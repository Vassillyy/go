import type { ReactNode } from 'react';
import type { LinkProps } from 'react-router-dom';

export interface INavItem extends Omit<LinkProps, 'to'> {
  to: string;
  children: ReactNode;
  isActive?: boolean;
  variant?: 'default' | 'nested';
  hasChildren?: boolean;
  isExpanded?: boolean;
  onClick?: () => void;
}
