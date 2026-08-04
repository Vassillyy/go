import { useState, type FC } from 'react';
import { CodeWS, ShortArrow } from '@/shared/ui';
import { useFormattedText } from '@/shared/hooks/useFormattedText.tsx';
import styles from './MethodCard.module.css';
import type { IMethodCard } from './MethodCard.types.ts';

export const MethodCard: FC<IMethodCard> = ({ method }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const descriptionParts = useFormattedText(method.description, {
    highlightStyle: { fontWeight: 600, color: '#1864ab' },
  });

  return (
    <div className={styles.methodCard}>
      <div className={styles.methodInfo}>
        <button
          className={styles.methodHeader}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <h3 className={styles.methodName}>{method.name}</h3>
          <div className={styles.buttonArrow}>
            <ShortArrow isOpen={isOpen} />
          </div>
        </button>

        {isOpen && (
          <>
            <code className={styles.methodSyntax}>{method.syntax}</code>

            {method.parameters && method.parameters.length > 0 && (
              <div className={styles.parametersBlock}>
                <div className={styles.parametersTitle}>Параметры:</div>
                <div className={styles.parametersList}>
                  {method.parameters.map((param, index) => (
                    <div key={index} className={styles.parameterItem}>
                      <span className={styles.parameterName}>
                        {param.name} {' - '}
                        <span className={styles.parameterDescription}>
                          {param.description}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {method.returns && method.returns.length > 0 && (
              <div className={styles.parametersBlock}>
                <div className={styles.parametersTitle}>Возвращает:</div>
                <div className={styles.parametersList}>
                  {method.returns.map((ret, index) => (
                    <div key={index} className={styles.parameterItem}>
                      <span className={styles.parameterName}>
                        {ret.name} {' - '}
                        <span className={styles.parameterDescription}>
                          {ret.description}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <p className={styles.methodDescription}>{descriptionParts}</p>

            {method.specification && (
              <a
                href={method.specification}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.specLink}
              >
                📖 Подробнее в документации
              </a>
            )}
          </>
        )}
      </div>

      {isOpen && method.example && <CodeWS text={method.example} />}
    </div>
  );
};
