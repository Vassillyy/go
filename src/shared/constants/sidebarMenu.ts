import { AppPaths } from './route.ts';

export interface ISidebarItem {
  label: string;
  path: string;
  id?: string;
  children?: ISidebarItem[];
}

export const sidebarMenu: ISidebarItem[] = [
  {
    path: AppPaths.GO_SCHEME,
    label: 'Go',
  },
];
