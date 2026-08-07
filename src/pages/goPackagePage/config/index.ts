import type { IMethod } from '@/entities/method';
import { fmtMethods } from './fmt.ts';
import { stringsMethods } from './strings.ts';

export const packageConfigs: Record<string, IMethod[]> = {
  'pkg-fmt': fmtMethods,
  'pkg-strings': stringsMethods,
};
