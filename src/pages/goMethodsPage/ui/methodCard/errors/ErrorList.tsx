import type { FC } from 'react';
import { useFormattedText } from '@/shared/hooks';
import styles from './ErorsList.module.css';
import type { IErrorList } from './ErrorList.types.ts';

export const ErrorList: FC<IErrorList> = ({ method }) => {
  const formattedError = useFormattedText(method.errors, {
    highlightStyle: { fontWeight: 600, color: '#da3030ff' },
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>Возможные ошибки:</div>
      <ul className={styles.list}>
        <div className={styles.error}>{formattedError}</div>
      </ul>
    </div>
  );
};
