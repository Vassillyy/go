import type { IMethod } from '@/entities/method';
import { fmtMethods } from './fmt.ts';
import { stringsMethods } from './strings.ts';
import { osMethods } from './os.ts';
import { strconvMethods } from './strconv.ts';

export const packageConfigs: Record<string, IMethod[]> = {
  'pkg-fmt': fmtMethods,
  'pkg-strings': stringsMethods,
  'pkg-os': osMethods,
  'pkg-strconv': strconvMethods,
};
