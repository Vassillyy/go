import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import cn from 'classnames';
import { sidebarMenu } from '@/shared/constants/sidebarMenu.ts';
import { findParentItemIdForActivePath } from '../model/findParentItemIdForActivePath.ts';
import { NavItem } from './navItem/NavItem.tsx';
import styles from './Sidebar.module.css';
import { LongArrow } from '@/shared/ui/icons/LongArrow.tsx';

export const Sidebar = () => {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>(() => {
    const parentId = findParentItemIdForActivePath(
      sidebarMenu,
      location.pathname,
    );
    return parentId ? [parentId] : [];
  });
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleItem = (itemId: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId],
    );
  };

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  const closeOnMobile = () => {
    if (window.innerWidth <= 768) {
      setIsCollapsed(true);
    }
  };

  return (
    <div className={cn(styles.sidebar, isCollapsed && styles.hidden)}>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          {!isCollapsed && <h2 className={styles.title}>Навигация</h2>}
          <button className={styles.toggle} onClick={toggleSidebar}>
            <LongArrow isExpanded={isCollapsed} />
          </button>
        </div>
        {!isCollapsed && <p className={styles.subtitle}>Выберите раздел</p>}
      </div>

      {!isCollapsed && (
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {sidebarMenu.map((item) => {
              const itemHasChildren = item.children && item.children.length > 0;
              const isExpanded = item.id
                ? expandedItems.includes(item.id)
                : false;

              return (
                <li key={item.id || item.path} className={styles.navItem}>
                    <NavItem
                      to={item.path}
                      isActive={isActive(item.path)}
                      hasChildren={itemHasChildren}
                      isExpanded={isExpanded}
                    onClick={
                      itemHasChildren
                        ? () => toggleItem(item.id!)
                        : closeOnMobile
                    }
                    >
                      {item.label}
                    </NavItem>

                    {itemHasChildren && isExpanded && item.children && (
                      <ul className={styles.childrenList}>
                        {item.children.map((child) => (
                          <li key={child.path} className={styles.navItem}>
                            <NavItem
                              to={child.path}
                              isActive={isActive(child.path)}
                              variant="nested"
                              onClick={closeOnMobile}
                            >
                              {child.label}
                            </NavItem>
                          </li>
                        ))}
                      </ul>
                    )}
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </div>
  );
};
