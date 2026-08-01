import { type CSSProperties, type ReactNode, useMemo } from 'react';

interface UseFormattedTextOptions {
  highlightStyle?: CSSProperties;
  excludeWords?: string[];
}

export const useFormattedText = (
  text: string,
  options: UseFormattedTextOptions = {},
) => {
  const {
    highlightStyle = { fontWeight: 600, color: '#1864ab' },
    excludeWords = [],
  } = options;

  return useMemo(() => {
    const parts: ReactNode[] = [];
    const excludedSet = new Set(excludeWords.map((w) => w.toLowerCase()));
    const regex = /([A-Za-z_][A-Za-z0-9'_]*|\n)/g;
    let lastIndex = 0;
    let match;
    let key = 0;

    while ((match = regex.exec(text)) !== null) {
      const matchedText = match[0];

      if (match.index > lastIndex) {
        parts.push(
          <span key={key++}>{text.substring(lastIndex, match.index)}</span>,
        );
      }

      if (matchedText === '\n') {
        parts.push(<br key={key++} />);
      } else if (matchedText) {
        const shouldHighlight = !excludedSet.has(matchedText.toLowerCase());

        if (shouldHighlight) {
          parts.push(
            <strong key={key++} style={highlightStyle}>
              {matchedText}
            </strong>,
          );
        } else {
          parts.push(<span key={key++}>{matchedText}</span>);
        }
      }

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(<span key={key++}>{text.substring(lastIndex)}</span>);
    }

    return parts;
  }, [text, highlightStyle, excludeWords]);
};
