import type { ReactNode } from 'react';
import { highlightCode } from './highlightCode';

export const formatExample = (
  example: string,
  styles: Record<string, string>,
) => {
  if (!example) return [];

  const lines = example.split('\n');
  const formattedLines: ReactNode[] = [];
  let inBlockComment = false;

  lines.forEach((line, index) => {
    if (line === '') {
      formattedLines.push(<br key={`empty-${index}`} />);
      return;
    }

    let rest = line;
    const parts: { code: string; comment: string }[] = [];

    while (rest.length > 0) {
      if (inBlockComment) {
        const blockEnd = rest.indexOf('*/');

        if (blockEnd === -1) {
          parts.push({ code: '', comment: rest });
          rest = '';
        } else {
          const comment = rest.slice(0, blockEnd + 2);
          rest = rest.slice(blockEnd + 2);
          inBlockComment = false;
          if (comment) parts.push({ code: '', comment });
        }
        continue;
      }

      const lineCommentMatch = rest.match(/(?<!:)\/\//);
      const lineCommentIndex = lineCommentMatch?.index ?? -1;
      const blockCommentIndex = rest.indexOf('/*');

      const starts: { index: number; kind: 'line' | 'block' }[] = [];
      if (lineCommentIndex !== -1) {
        starts.push({ index: lineCommentIndex, kind: 'line' });
      }
      if (blockCommentIndex !== -1) {
        starts.push({ index: blockCommentIndex, kind: 'block' });
      }
      starts.sort((a, b) => a.index - b.index);

      const first = starts[0];

      if (!first) {
        parts.push({ code: rest, comment: '' });
        rest = '';
        continue;
      }

      if (first.index > 0) {
        parts.push({ code: rest.slice(0, first.index), comment: '' });
      }

      if (first.kind === 'line') {
        parts.push({ code: '', comment: rest.slice(first.index) });
        rest = '';
      } else {
        const blockEnd = rest.indexOf('*/', first.index + 2);

        if (blockEnd === -1) {
          parts.push({ code: '', comment: rest.slice(first.index) });
          inBlockComment = true;
          rest = '';
        } else {
          const comment = rest.slice(first.index, blockEnd + 2);
          parts.push({ code: '', comment });
          rest = rest.slice(blockEnd + 2);
        }
      }
    }

    if (parts.length === 0) {
      formattedLines.push(
        <div key={`line-${index}`} className={styles.exampleLine} />,
      );
      return;
    }

    formattedLines.push(
      <div key={`line-${index}`} className={styles.exampleLine}>
        {parts.map((part, partIndex) => (
          <span key={`part-${index}-${partIndex}`}>
            {part.code && highlightCode(part.code, styles)}
            {part.comment && <span className={styles.comment}>{part.comment}</span>}
          </span>
        ))}
      </div>,
    );
  });

  return formattedLines;
};
