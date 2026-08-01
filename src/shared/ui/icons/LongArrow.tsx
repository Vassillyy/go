import type { FC } from 'react';
import type { ILongArrow } from './LongArrow.types.ts';

export const LongArrow: FC<ILongArrow> = ({ isExpanded = false }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
      }}
    >
      <path
        d="M 2.5 8 L 0 10.5 L 2.5 13 L 4 13 L 2 11 L 19 11 L 19 10 L 2 10 L 4 8 L 2.5 8 z"
        fill="currentColor"
      />
    </svg>
  );
};
