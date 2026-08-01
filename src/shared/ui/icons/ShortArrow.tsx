import type { FC } from 'react';
import type { IShortArrow } from './ShortArrow.types.ts';

export const ShortArrow: FC<IShortArrow> = ({ isOpen = false }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
      }}
    >
      <path
        d="M6 12L10 8L6 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
