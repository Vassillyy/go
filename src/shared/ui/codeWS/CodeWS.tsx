import { type FC, useState } from 'react';
import { formatExample } from './model/formatExample.tsx';
import styles from './CodeWS.module.css';
import type { ICodeWS } from './CodeWS.types.ts';

export const CodeWS: FC<ICodeWS> = ({
  text,
  isShowToggle = false,
  isHiddenDefault = false,
}) => {
  const [isHidden, setIsHidden] = useState<boolean>(isHiddenDefault);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Примеры:
        {isShowToggle && (
          <button
            className={styles.toggleButton}
            onClick={() => setIsHidden((prev) => !prev)}
          >
            {isHidden ? 'Показать' : 'Скрыть'}
          </button>
        )}
      </div>
      {!isHidden && (
        <div className={styles.code}>{formatExample(text, styles)}</div>
      )}
    </div>
  );
};
