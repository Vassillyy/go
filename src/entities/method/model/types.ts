export type MethodKind = 'function' | 'type';

export interface IMethod {
  name: string;
  description: string;
  example: string;
  syntax: string;
  kind?: MethodKind;
  parameters?: Array<{
    name: string;
    description: string;
  }>;
  returns?: Array<{
    name: string;
    description: string;
  }>;
  specification: string;
}
