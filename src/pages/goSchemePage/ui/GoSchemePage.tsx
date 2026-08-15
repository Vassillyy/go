import { type FC, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useDragToScroll } from '@/shared/hooks';
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

  const isClickableNode = (node: SchemeFlowNode) =>
    node.data.kind === 'child' ||
    (node.data.kind === 'category' && node.data.clickable);

  const handleNodeClick = (_: unknown, node: SchemeFlowNode) => {
    if (!isClickableNode(node)) return;

    const idPrefix = node.data.kind === 'child' ? /^child-/ : /^category-/;
    const childId = node.id.replace(idPrefix, '');
    const basePathByRoute: Record<typeof node.data.route, string> = {
      package: '/go-scheme/package',
      table: '/go-scheme/table',
      topic: '/go-scheme/topic',
    };
    const basePath = basePathByRoute[node.data.route];

    navigate(`${basePath}/${childId}`, {
      state: { label: node.data.label },
    });
  };

  const handleNodeMouseEnter = (_: unknown, node: SchemeFlowNode) => {
    if (!isClickableNode(node)) return;
    setHoveredNodeId(node.id);
  };

  const handleNodeMouseLeave = () => {
    setHoveredNodeId(null);
  };

  const {
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onPointerCancel,
    onClickCapture,
  } = useDragToScroll();

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Схема Go</h1>
      </header>

      <div
        className={styles.canvas}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
        onClickCapture={onClickCapture}
      >
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
