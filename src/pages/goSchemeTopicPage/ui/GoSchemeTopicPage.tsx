import type { FC } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { AppPaths } from '@/shared/constants/route';
import { CodeWS } from '@/shared/ui';
import { topicConfigs } from '../config';
import styles from './GoSchemeTopicPage.module.css';

export const GoSchemeTopicPage: FC = () => {
  const { topicId = '' } = useParams();
  const location = useLocation();
  const { label } = location.state;

  const topic = topicConfigs[topicId];

  return (
    <div className={styles.page}>
      <Link to={AppPaths.GO_SCHEME} className={styles.back}>
        ← Назад к схеме
      </Link>

      {topic ? (
        <div className={styles.container}>
          <h1 className={styles.title}>{label ?? topicId}</h1>

          <div className={styles.sections}>
            {topic.sections.map((section, index) => (
              <section key={index} className={styles.section}>
                <h2 className={styles.sectionHeading}>{section.heading}</h2>
                {section.body.split('\n\n').map((paragraph, pIndex) => (
                  <p key={pIndex} className={styles.sectionBody}>
                    {paragraph}
                  </p>
                ))}
                {section.examples?.map((example, eIndex) => (
                  <div key={eIndex} className={styles.example}>
                    {example.caption && (
                      <p className={styles.exampleCaption}>{example.caption}</p>
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
  );
};
