import { type FC, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { schemeConfig } from '../config';
import { buildScheme } from '../model/buildScheme';
import type { SchemeFlowNode } from '../model/types';
import { SchemeNode } from './schemeNode/SchemeNode';
import styles from './GoSchemePage.module.css';

export const GoSchemePage: FC = () => {
  const navigate = useNavigate();
  const { nodes, edges, width, height } = useMemo(
    () => buildScheme(schemeConfig),
    [],
  );

  const handleNodeClick = (_: unknown, node: SchemeFlowNode) => {
    if (node.data.kind !== 'child') return;

    const childId = node.id.replace(/^child-/, '');
    const basePath =
      node.data.route === 'package' ? '/go-scheme/package' : '/go-scheme/topic';

    navigate(`${basePath}/${childId}`, {
      state: { label: node.data.label },
    });
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Схема Go</h1>
      </header>

      <div className={styles.canvas}>
        <div className={styles.diagram} style={{ width, height }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={{ schemeNode: SchemeNode }}
            onNodeClick={handleNodeClick}
            nodesDraggable={false}
            nodesConnectable={false}
            elementsSelectable={false}
            panOnDrag={false}
            zoomOnScroll={false}
            zoomOnPinch={false}
            zoomOnDoubleClick={false}
            preventScrolling={false}
            proOptions={{ hideAttribution: true }}
          />
        </div>
      </div>
    </div>
  );
};
