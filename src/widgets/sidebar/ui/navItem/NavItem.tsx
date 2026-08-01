import { Link } from 'react-router-dom';
import cn from 'classnames';
import { ShortArrow } from '@/shared/ui';
import styles from './NavItem.module.css';
import type { INavItem } from './NavItem.types.ts';

export const NavItem = ({
  to,
  children,
  isActive = false,
  variant = 'default',
  hasChildren = false,
  isExpanded = false,
  onClick,
  ...props
}: INavItem) => {
  return (
    <Link
      to={to}
      className={cn(styles.navItem, styles[variant], isActive && styles.active)}
      onClick={onClick}
      {...props}
    >
      <span className={styles.content}>
        {children}
        {hasChildren && <ShortArrow isOpen={isExpanded} />}
      </span>
    </Link>
  );
};
