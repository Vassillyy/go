import type { FC } from 'react';
import { BaseEdge, getSmoothStepPath, type EdgeProps } from '@xyflow/react';
import styles from './SchemeEdge.module.css';

export const SchemeEdge: FC<EdgeProps> = ({
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style,
  data,
}) => {
  const [path] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
    borderRadius: 0,
  });

  const highlighted = Boolean(
    (data as { highlighted?: boolean } | undefined)?.highlighted,
  );

  return (
    <>
      <BaseEdge path={path} style={style} />
      {highlighted && (
        <path
          d={path}
          fill="none"
          pathLength={1}
          className={styles.highlighted}
        />
      )}
    </>
  );
};