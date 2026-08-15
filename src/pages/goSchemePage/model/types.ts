import type { Node } from '@xyflow/react';

export type SchemeNodeKind = 'category' | 'child';
export type SchemeNodeRoute = 'topic' | 'package' | 'table';

export interface SchemeNodeData extends Record<string, unknown> {
  label: string;
  kind: SchemeNodeKind;
  route: SchemeNodeRoute;
  clickable?: boolean;
}

export type SchemeFlowNode = Node<SchemeNodeData, 'schemeNode'>;
