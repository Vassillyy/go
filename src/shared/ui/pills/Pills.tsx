import { useState } from 'react';
import cn from 'classnames';
import styles from './Pills.module.css';
import type { IPills } from './Pills.types.ts';

export const Pills = <T extends string>({
  items,
  onFilterChange,
}: IPills<T>) => {
  const [activePills, setActivePills] = useState<T[]>([]);

  const updatePills = (value: T) => {
    const newPills = activePills.includes(value)
      ? activePills.filter((item) => item !== value)
      : [...activePills, value];

    setActivePills(newPills);
    onFilterChange(newPills);
  };

  return (
    <div className={cn(styles.containerPills)}>
      {items.map((item) => (
        <div
          className={cn(styles.pills, {
            [styles.active]: activePills.includes(item.value),
          })}
          key={item.value}
          onClick={() => updatePills(item.value)}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};
