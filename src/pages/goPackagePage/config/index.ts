import type { IMethod } from '@/entities/method';
import { fmtMethods } from './fmt.ts';

export const packageConfigs: Record<string, IMethod[]> = {
  'pkg-fmt': fmtMethods,
};
