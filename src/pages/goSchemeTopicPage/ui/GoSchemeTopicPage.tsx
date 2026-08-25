import { type FC, useEffect, useState } from 'react';
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
  const { label } = location.state;
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

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
                  <SectionParagraph key={pIndex} text={paragraph} />
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

      <button
        type="button"
        className={`${styles.scrollTop} ${showScrollTop ? styles.scrollTopVisible : ''}`}
        onClick={scrollToTop}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 10L8 6L12 10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};
