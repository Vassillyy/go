import type { IGitCommand } from '@/entities/gitCommand';
import { gitAdd } from './add.ts';
import { gitCommit } from './commit.ts';

export const gitCommands: IGitCommand[] = [gitAdd, gitCommit];
