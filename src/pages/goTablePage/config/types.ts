export interface ITableSubtitle {
  subtitle: string;
}

export type ITableRow = string[] | ITableSubtitle;

export interface ITableConfig {
  columns: string[];
  rows: ITableRow[];
}

export const isTableSubtitle = (row: ITableRow): row is ITableSubtitle =>
  !Array.isArray(row);
