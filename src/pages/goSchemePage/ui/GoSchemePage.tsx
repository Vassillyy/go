import { type FC, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { schemeConfig } from '../config';
import { buildScheme } from '../model/buildScheme';
import type { SchemeFlowNode } from '../model/types';
import { SchemeNode } from './schemeNode/SchemeNode';
import { SchemeEdge } from './schemeEdge/SchemeEdge';
import styles from './GoSchemePage.module.css';

export const GoSchemePage: FC = () => {
  const navigate = useNavigate();
  const { nodes, edges, width, height } = useMemo(
    () => buildScheme(schemeConfig),
    [],
  );
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  const styledEdges = useMemo(
    () =>
      edges.map((edge) => {
        const highlighted = edge.target === hoveredNodeId;
        return {
          ...edge,
          zIndex: highlighted ? 1 : 0,
          data: { ...edge.data, highlighted },
        };
      }),
    [edges, hoveredNodeId],
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

  const handleNodeMouseEnter = (_: unknown, node: SchemeFlowNode) => {
    if (node.data.kind !== 'child') return;
    setHoveredNodeId(node.id);
  };

  const handleNodeMouseLeave = () => {
    setHoveredNodeId(null);
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
            edges={styledEdges}
            nodeTypes={{ schemeNode: SchemeNode }}
            edgeTypes={{ schemeEdge: SchemeEdge }}
            onNodeClick={handleNodeClick}
            onNodeMouseEnter={handleNodeMouseEnter}
            onNodeMouseLeave={handleNodeMouseLeave}
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
