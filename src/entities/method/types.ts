export interface IMethod {
  name: string;
  description: string;
  example: string;
  syntax: string;
  parameters?: Array<{
    name: string;
    description: string;
  }>;
  specification: string;
  errors?: string;
}

export type Methods = string;

export type TConfig = Record<Methods, IMethod[]>;

export const labelMethods: Record<Methods, string> = {};
