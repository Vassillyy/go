import type { FC } from 'react';
import ClearIcon from '../icons/clear.svg';
import styles from './Input.module.css';
import type { IInput } from './Input.types.ts';

export const Input: FC<IInput> = ({
  searchQuery,
  onSearchChange,
  onSearchReset,
}) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Поиск..."
        value={searchQuery}
        onChange={onSearchChange}
        className={styles.input}
      />
      {searchQuery && (
        <button className={styles.clear} onClick={onSearchReset}>
          <ClearIcon />
        </button>
      )}
    </div>
  );
};
