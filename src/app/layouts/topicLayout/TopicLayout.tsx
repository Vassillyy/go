import {type FC, useState} from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import cn from 'classnames';
import type { ITopic } from '@/entities/topic';
import { LongArrow } from '@/shared/ui/icons/LongArrow.tsx';
import styles from './TopicLayout.module.css';

export const TopicLayout: FC = () => {
  const location = useLocation();
  const [isHidden, setIsHidden] = useState<boolean>(() => window.innerWidth <= 768);

  const topicData = location.state as { topicData?: ITopic };
  const sections = topicData?.topicData?.content?.sections || [];

  const scrollToSection = (title: string) => {
    const element = document.getElementById(title);

    if (element) element.scrollIntoView({ behavior: 'smooth' });

    if (window.innerWidth <= 768) {
      setIsHidden(true);
    }
  };

  const toggleSidebar = () => {
    setIsHidden((prev) => !prev);
  };

  return (
    <div className={styles.layout}>
      <aside className={cn(styles.sidebar, isHidden && styles.hidden)}>
        <div className={styles.header}>
          <div className={styles.headerTop}>
            {!isHidden && <h2 className={styles.title}>Навигация</h2>}
            <button className={styles.toggle} onClick={toggleSidebar}>
              <LongArrow isExpanded={isHidden} />
            </button>
          </div>
          {!isHidden && (
            <span className={styles.subtitle}>Выберите секцию</span>
          )}
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {sections.map((section, index) => (
              <li key={index}>
                <button
                  className={styles.link}
                  onClick={() => scrollToSection(section.title)}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};
