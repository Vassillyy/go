import type { FC } from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';
import type { SchemeFlowNode } from '../../model/types';
import styles from './SchemeNode.module.css';

const kindClass: Record<string, string> = {
  category: styles.category,
  child: styles.child,
};

export const SchemeNode: FC<NodeProps<SchemeFlowNode>> = ({ data }) => {
  const isCategory = data.kind === 'category';

  return (
    <div
      className={`${styles.node} ${kindClass[data.kind]} ${
        isCategory && data.clickable ? styles.categoryClickable : ''
      }`}
    >
      {isCategory ? (
        <>
          <Handle
            className={styles.handle}
            type="target"
            position={Position.Top}
            id="top"
          />
          <Handle
            className={styles.handle}
            type="source"
            position={Position.Bottom}
            id="bottom"
          />
          <Handle
            className={styles.handle}
            type="source"
            position={Position.Right}
            id="right"
          />
        </>
      ) : (
        <Handle
          className={styles.handle}
          type="target"
          position={Position.Bottom}
          id="bottom"
        />
      )}
      {data.label}
    </div>
  );
};