import styles from './Switcher.module.css';
import type { ISwitcher } from './Switcher.types.ts';

export const Switcher = <T extends string>({
  options,
  value,
  onChange,
}: ISwitcher<T>) => {
  return (
    <div className={styles.container}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={
            option.value === value
              ? `${styles.option} ${styles.optionActive}`
              : styles.option
          }
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};
