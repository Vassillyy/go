import { AppPaths } from './route.ts';

export interface ISidebarItem {
  label: string;
  path: string;
  id?: string;
  children?: ISidebarItem[];
}

export const sidebarMenu: ISidebarItem[] = [
  {
    path: AppPaths.MAIN,
    label: 'Главная страница',
  },
  {
    path: '#',
    id: 'go',
    label: 'Go',
    children: [
      {
        path: AppPaths.GO,
        label: 'Основы Go',
      },
      {
        path: AppPaths.GO_METHODS,
        label: 'API GO',
      },
    ],
  },
];
