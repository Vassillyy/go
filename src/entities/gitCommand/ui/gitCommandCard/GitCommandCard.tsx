import { useState, type FC } from 'react';
import { CodeWS, ShortArrow } from '@/shared/ui';
import { useFormattedText } from '@/shared/hooks/useFormattedText.tsx';
import type { IGitCommandFlag, IGitCommandSection } from '../../model/types.ts';
import styles from './GitCommandCard.module.css';
import type { IGitCommandCard } from './GitCommandCard.types.ts';

const FlagList: FC<{ items: IGitCommandFlag[] }> = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className={styles.flagsList}>
      {items.map((item, index) => (
        <div key={index} className={styles.flagItem}>
          <span className={styles.flagName}>
            {item.name} {' - '}
            <span className={styles.flagDescription}>{item.description}</span>
          </span>
        </div>
      ))}
    </div>
  );
};

const CommandSectionKeys: FC<{ section: IGitCommandSection }> = ({
  section,
}) => {
  if (!section.keys || section.keys.length === 0) return null;

  return (
    <div className={styles.keysBlock}>
      <FlagList items={section.keys} />
    </div>
  );
};

const CommandSection: FC<{ section: IGitCommandSection }> = ({ section }) => {
  const bodyParts = useFormattedText(section.body, {
    highlightStyle: { fontWeight: 600, color: '#c92a2a' },
  });

  return (
    <div className={styles.section}>
      <h4 className={styles.sectionHeading}>{section.heading}</h4>

      {section.body && <p className={styles.sectionBody}>{bodyParts}</p>}

      <CommandSectionKeys section={section} />

      {section.examples && <CodeWS text={section.examples} />}
    </div>
  );
};

export const GitCommandCard: FC<IGitCommandCard> = ({ command }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const descriptionParts = useFormattedText(command.description, {
    highlightStyle: { fontWeight: 600, color: '#c92a2a' },
  });

  return (
    <div className={styles.commandCard}>
      <div className={styles.commandInfo}>
        <button
          className={styles.commandHeader}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <h3 className={styles.commandName}>{command.name}</h3>
          <div className={styles.buttonArrow}>
            <ShortArrow isOpen={isOpen} />
          </div>
        </button>

        {isOpen && (
          <>
            <code className={styles.commandSyntax}>{command.syntax}</code>

            {command.parameters && command.parameters.length > 0 && (
              <div className={styles.flagsBlock}>
                <div className={styles.flagsTitle}>Параметры:</div>
                <FlagList items={command.parameters} />
              </div>
            )}

            {command.flags.length > 0 && (
              <div className={styles.flagsBlock}>
                <div className={styles.flagsTitle}>Флаги:</div>
                <FlagList items={command.flags} />
              </div>
            )}

            <p className={styles.commandDescription}>{descriptionParts}</p>

            {command.sections?.map((section, index) => (
              <CommandSection key={index} section={section} />
            ))}

            {command.specification && (
              <a
                href={command.specification}
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

      {isOpen && command.examples && <CodeWS text={command.examples} />}
    </div>
  );
};