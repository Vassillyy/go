import { type FC } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { AppPaths } from '@/shared/constants/route';
import { useFormattedText } from '@/shared/hooks';
import { CodeWS } from '@/shared/ui';
import { topicConfigs } from '../config';
import styles from './GoSchemeTopicPage.module.css';

const SectionParagraph: FC<{ text: string }> = ({ text }) => {
  const parts = useFormattedText(text);

  return <p className={styles.sectionBody}>{parts}</p>;
};

export const GoSchemeTopicPage: FC = () => {
  const { topicId = '' } = useParams();
  const location = useLocation();
  const { label } = location.state ?? {};

  const topic = topicConfigs[topicId];

  return (
    <div className={styles.page}>
      {topic && (
        <aside className={styles.sidebar}>
          <nav className={styles.nav}>
            {topic.sections.map((section, index) => (
              <a
                key={index}
                href={`#section-${index}`}
                className={styles.navLink}
              >
                {section.heading}
              </a>
            ))}
          </nav>
        </aside>
      )}

      <div className={styles.main}>
        <header className={styles.header}>
          <Link to={AppPaths.GO_SCHEME} className={styles.back}>
            ← Назад
          </Link>
        </header>

        {topic ? (
          <div className={styles.container}>
            <h1 className={styles.title}>{label ?? topicId}</h1>

            <div className={styles.sections}>
              {topic.sections.map((section, index) => (
                <section
                  key={index}
                  id={`section-${index}`}
                  className={styles.section}
                >
                  <h2 className={styles.sectionHeading}>{section.heading}</h2>
                  {section.body.split('\n\n').map((paragraph, pIndex) => (
                    <SectionParagraph key={pIndex} text={paragraph} />
                  ))}
                  {section.examples?.map((example, eIndex) => (
                    <div key={eIndex} className={styles.example}>
                      {example.caption && (
                        <p className={styles.exampleCaption}>
                          {example.caption}
                        </p>
                      )}
                      <CodeWS text={example.code} />
                    </div>
                  ))}
                </section>
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.card}>
            <h1 className={styles.title}>{label ?? topicId}</h1>
            <p className={styles.placeholder}>
              Содержание этой темы скоро появится здесь.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};