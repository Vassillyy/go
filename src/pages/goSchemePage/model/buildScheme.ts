import type { Edge } from '@xyflow/react';
import type { ISchemeConfig } from '../config';
import type { SchemeFlowNode } from './types';

const NODE_WIDTH = 180;
const NODE_HEIGHT = 40;
const PADDING = 30;
const FIRST_CHILD_GAP = 50;
const CHILD_GAP_X = 40;
const TICK_HEIGHT = 60;
const ROW_SPACING = 120;

const CATEGORY_X = PADDING;

interface IBuildSchemeResult {
  nodes: SchemeFlowNode[];
  edges: Edge[];
  width: number;
  height: number;
}

export const buildScheme = (scheme: ISchemeConfig): IBuildSchemeResult => {
  const nodes: SchemeFlowNode[] = [];
  const edges: Edge[] = [];

  let maxX = CATEGORY_X + NODE_WIDTH;
  let maxY = PADDING;
  let previousCategoryId: string | null = null;

  scheme.categories.forEach((category, rowIndex) => {
    const rowY = PADDING + TICK_HEIGHT + rowIndex * ROW_SPACING;
    const categoryId = `category-${category.id}`;

    const route = category.childRoute ?? 'topic';

    nodes.push({
      id: categoryId,
      type: 'schemeNode',
      position: { x: CATEGORY_X, y: rowY },
      data: { label: category.label, kind: 'category', route },
      draggable: false,
      selectable: false,
    });
    maxY = Math.max(maxY, rowY + NODE_HEIGHT);

    if (previousCategoryId) {
      edges.push({
        id: `${previousCategoryId}-${categoryId}`,
        source: previousCategoryId,
        sourceHandle: 'bottom',
        target: categoryId,
        targetHandle: 'top',
        type: 'straight',
      });
    }

    category.children.forEach((child, childIndex) => {
      const childId = `child-${child.id}`;
      const x =
        CATEGORY_X +
        NODE_WIDTH +
        FIRST_CHILD_GAP +
        childIndex * (NODE_WIDTH + CHILD_GAP_X);
      const y = rowY - TICK_HEIGHT;

      nodes.push({
        id: childId,
        type: 'schemeNode',
        position: { x, y },
        data: { label: child.label, kind: 'child', route },
        draggable: false,
        selectable: false,
      });

      edges.push({
        id: `${categoryId}-${childId}`,
        source: categoryId,
        sourceHandle: 'right',
        target: childId,
        targetHandle: 'bottom',
        type: 'step',
      });

      maxX = Math.max(maxX, x + NODE_WIDTH);
    });

    previousCategoryId = categoryId;
  });

  return {
    nodes,
    edges,
    width: maxX + PADDING,
    height: maxY + PADDING,
  };
};
