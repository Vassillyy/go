import type { ReactNode } from 'react';

const CONTROL_FLOW = new Set([
  'if',
  'else',
  'for',
  'range',
  'switch',
  'case',
  'default',
  'select',
  'goto',
  'fallthrough',
  'break',
  'continue',
  'return',
  'defer',
  'go',
]);

const DECLARATION = new Set([
  'func',
  'var',
  'const',
  'type',
  'package',
  'import',
  'struct',
  'interface',
  'map',
  'chan',
]);

const BUILTIN_FUNCS = new Set([
  'append',
  'cap',
  'clear',
  'close',
  'complex',
  'copy',
  'delete',
  'imag',
  'len',
  'make',
  'max',
  'min',
  'new',
  'panic',
  'print',
  'println',
  'real',
  'recover',
]);

const CONSTANTS = new Set(['true', 'false', 'nil', 'iota']);

const PACKAGES = new Set([
  'bufio',
  'bytes',
  'context',
  'errors',
  'flag',
  'fmt',
  'io',
  'json',
  'log',
  'math',
  'net',
  'os',
  'path',
  'reflect',
  'regexp',
  'sort',
  'strconv',
  'strings',
  'sync',
  'time',
]);

const BUILTIN_TYPES = new Set([
  'any',
  'bool',
  'byte',
  'comparable',
  'complex64',
  'complex128',
  'error',
  'float32',
  'float64',
  'int',
  'int8',
  'int16',
  'int32',
  'int64',
  'rune',
  'string',
  'uint',
  'uint8',
  'uint16',
  'uint32',
  'uint64',
  'uintptr',
]);

const NUMBER = /^(0x[\da-fA-F]+|\d+(\.\d+)?([eE][+-]?\d+)?)$/;

export const highlightCode = (
  code: string,
  styles: Record<string, string>,
): ReactNode[] => {
  const parts: ReactNode[] = [];
  let i = 0;
  let keyCounter = 0;
  let prevTokenWasDot = false;

  while (i < code.length) {
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

      if (CONTROL_FLOW.has(word)) {
        parts.push(
          <span key={`ctrl-${keyCounter++}`} className={styles.control}>
            {word}
          </span>,
        );
      } else if (DECLARATION.has(word)) {
        parts.push(
          <span key={`decl-${keyCounter++}`} className={styles.declaration}>
            {word}
          </span>,
        );
      } else if (BUILTIN_FUNCS.has(word)) {
        parts.push(
          <span key={`builtin-${keyCounter++}`} className={styles.builtin}>
            {word}
          </span>,
        );
      } else if (CONSTANTS.has(word)) {
        parts.push(
          <span key={`const-${keyCounter++}`} className={styles.constant}>
            {word}
          </span>,
        );
      } else if (PACKAGES.has(word)) {
        parts.push(
          <span key={`pkg-${keyCounter++}`} className={styles.package}>
            {word}
          </span>,
        );
      } else if (BUILTIN_TYPES.has(word)) {
        parts.push(
          <span key={`type-${keyCounter++}`} className={styles.type}>
            {word}
          </span>,
        );
      } else if (prevTokenWasDot) {
        parts.push(
          <span key={`method-${keyCounter++}`} className={styles.method}>
            {word}
          </span>,
        );
      } else if (NUMBER.test(word)) {
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
