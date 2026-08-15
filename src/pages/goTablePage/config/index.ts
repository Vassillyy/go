import type { ITableConfig } from './types.ts';
import { verbsTable } from './verbs.ts';
import { typesTable } from './types-table.ts';
import { variablesTable } from './variables.ts';
import { operatorsTable } from './operators.ts';

export type { ITableConfig } from './types.ts';

export const tableConfigs: Record<string, ITableConfig> = {
  verbs: verbsTable,
  types: typesTable,
  variables: variablesTable,
  operators: operatorsTable,
};