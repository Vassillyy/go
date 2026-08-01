import type { ReactNode } from 'react';
import { highlightCode } from './highlightCode';

export const formatExample = (
  example: string,
  styles: Record<string, string>,
) => {
  if (!example) return [];

  const lines = example.split('\n');
  const formattedLines: ReactNode[] = [];

  lines.forEach((line, index) => {
    if (line === '') {
      formattedLines.push(<br key={`empty-${index}`} />);
      return;
    }

    const doubleSlashMatch = line.match(/(?<!:)\/\//);
    const doubleSlashIndex = doubleSlashMatch?.index ?? -1;
    const htmlCommentStart = line.indexOf('<!--');

    let commentIndex = -1;

    if (doubleSlashIndex !== -1 && htmlCommentStart !== -1) {
      commentIndex = Math.min(doubleSlashIndex, htmlCommentStart);
    } else if (doubleSlashIndex !== -1) {
      commentIndex = doubleSlashIndex;
    } else if (htmlCommentStart !== -1) {
      commentIndex = htmlCommentStart;
    }

    if (commentIndex !== -1) {
      const codePart = line.substring(0, commentIndex);
      const commentPart = line.substring(commentIndex);

      const highlightedCode = highlightCode(codePart, styles);

      formattedLines.push(
        <div key={`line-${index}`} className={styles.exampleLine}>
          {highlightedCode}
          <span className={styles.comment}>{commentPart}</span>
        </div>,
      );
    } else {
      const highlightedCode = highlightCode(line, styles);

      formattedLines.push(
        <div key={`line-${index}`} className={styles.exampleLine}>
          {highlightedCode}
        </div>,
      );
    }
  });

  return formattedLines;
};
