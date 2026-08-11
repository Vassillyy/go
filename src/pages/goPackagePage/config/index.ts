import type { IMethod } from '@/entities/method';
import { fmt } from './fmt.ts';
import { strings } from './strings.ts';
import { os } from './os.ts';
import { strconv } from './strconv.ts';
import { io } from './io.ts';
import { bufio } from './bufio.ts';
import { time } from './time.ts';
import { sort } from './sort.ts';

export const packageConfigs: Record<string, IMethod[]> = {
  'pkg-fmt': fmt,
  'pkg-strings': strings,
  'pkg-os': os,
  'pkg-strconv': strconv,
  'pkg-io': io,
  'pkg-bufio': bufio,
  'pkg-time': time,
  'pkg-sort': sort,
};