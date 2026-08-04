import type { Node } from '@xyflow/react';

export type SchemeNodeKind = 'category' | 'child';
export type SchemeNodeRoute = 'topic' | 'package';

export interface SchemeNodeData extends Record<string, unknown> {
  label: string;
  kind: SchemeNodeKind;
  route: SchemeNodeRoute;
}

export type SchemeFlowNode = Node<SchemeNodeData, 'schemeNode'>;
