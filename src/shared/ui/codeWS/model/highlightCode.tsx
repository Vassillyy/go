import type { ReactNode } from 'react';

export const highlightCode = (
  code: string,
  styles: Record<string, string>,
): ReactNode[] => {
  const parts: ReactNode[] = [];
  let i = 0;
  let keyCounter = 0;
  let prevTokenWasDot = false;

  while (i < code.length) {
    if (code[i] === '<') {
      let j = i + 1;
      let hasSlash = false;

      if (j < code.length && code[j] === '/') {
        hasSlash = true;
        j++;
      }

      const nameStart = j;
      while (j < code.length && /[a-zA-Z0-9-]/.test(code[j])) j++;

      if (j > nameStart) {
        parts.push(<span key={`char-${keyCounter++}`}>{code[i]}</span>);
        i++;

        if (hasSlash) {
          parts.push(<span key={`char-${keyCounter++}`}>/</span>);
          i++;
        }

        parts.push(
          <span key={`tag-${keyCounter++}`} className={styles.tag}>
            {code.slice(i, j)}
          </span>
        );
        i = j;
        prevTokenWasDot = false;
        continue;
      }
    }

    if (/\s/.test(code[i])) {
      let j = i;
      while (j < code.length && /\s/.test(code[j])) j++;
      parts.push(<span key={`ws-${keyCounter++}`}>{code.slice(i, j)}</span>);
      i = j;
      continue;
    }

    if (/["'`]/.test(code[i])) {
      const quote = code[i];
      let j = i + 1;
      while (j < code.length && code[j] !== quote) {
        if (code[j] === '\\') j++;
        j++;
      }
      j++;
      parts.push(
        <span key={`str-${keyCounter++}`} className={styles.string}>
          {code.slice(i, j)}
        </span>,
      );
      i = j;
      prevTokenWasDot = false;
      continue;
    }

    if (code[i] === '.') {
      parts.push(<span key={`dot-${keyCounter++}`}>.</span>);
      prevTokenWasDot = true;
      i++;
      continue;
    }

    let j = i;
    while (j < code.length && /[a-zA-Z0-9_$]/.test(code[j])) j++;

    if (j > i) {
      const word = code.slice(i, j);

      if (
        /^(if|else|for|while|do|switch|case|break|continue|return|try|catch|finally|throw)$/.test(
          word,
        )
      ) {
        parts.push(
          <span key={`ctrl-${keyCounter++}`} className={styles.control}>
            {word}
          </span>,
        );
      } else if (/^(let|const|var|function|yield|await|async)$/.test(word)) {
        parts.push(
          <span key={`decl-${keyCounter++}`} className={styles.declaration}>
            {word}
          </span>,
        );
      } else if (
        /^(type|interface|enum|namespace|module|declare|implements|extends|infer|keyof|typeof|instanceof|readonly|Uppercase|Lowercase|Capitalize|Uncapitalize|Partial|Required|Readonly|Pick|Omit|Record|Exclude|Extract|NonNullable|Parameters|ReturnType|ConstructorParameters|InstanceType|Awaited|NoInfer)$/.test(
          word,
        )
      ) {
        parts.push(
          <span key={`ts-${keyCounter++}`} className={styles.tsKeyword}>
            {word}
          </span>,
        );
      } else if (
        /^(string|number|boolean|any|void|delete|in|never|unknown|object|symbol|bigint|null|undefined)$/.test(
          word,
        )
      ) {
        parts.push(
          <span key={`type-${keyCounter++}`} className={styles.type}>
            {word}
          </span>,
        );
      } else if (
        /^(class|constructor|super|public|private|protected|static|new)$/.test(
          word,
        )
      ) {
        parts.push(
          <span key={`class-${keyCounter++}`} className={styles.classKeyword}>
            {word}
          </span>,
        );
      } else if (
        /^(import|export|from|as|default|require|module)$/.test(word)
      ) {
        parts.push(
          <span key={`mod-${keyCounter++}`} className={styles.module}>
            {word}
          </span>,
        );
      } else if (/^(true|false)$/.test(word)) {
        parts.push(
          <span key={`bool-${keyCounter++}`} className={styles.boolean}>
            {word}
          </span>,
        );
      } else if (prevTokenWasDot && /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(word)) {
        parts.push(
          <span key={`method-${keyCounter++}`} className={styles.method}>
            {word}
          </span>,
        );
      } else if (
        /^(setTimeout|setInterval|clearTimeout|clearInterval|Promise|then|catch|finally|console|JSON|Math|Number|String|Symbol|Function|Boolean|Array|Date|Object|RegExp|Error|Map|Set|WeakMap|WeakSet|Proxy|Reflect)$/.test(
          word,
        )
      ) {
        parts.push(
          <span key={`global-${keyCounter++}`} className={styles.global}>
            {word}
          </span>,
        );
      } else if (/^(Infinity|-Infinity|NaN|\d+(\.\d+)?)$/.test(word)) {
        parts.push(
          <span key={`num-${keyCounter++}`} className={styles.number}>
            {word}
          </span>,
        );
      } else {
        parts.push(<span key={`word-${keyCounter++}`}>{word}</span>);
      }

      i = j;
      prevTokenWasDot = false;
      continue;
    }

    parts.push(<span key={`char-${keyCounter++}`}>{code[i]}</span>);
    prevTokenWasDot = false;
    i++;
  }

  return parts;
};
