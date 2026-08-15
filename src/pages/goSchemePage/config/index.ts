export interface ISchemeChild {
  id: string;
  label: string;
}

export interface ISchemeCategory {
  id: string;
  label: string;
  childRoute?: 'topic' | 'package' | 'table';
  children: ISchemeChild[];
}

export interface ISchemeConfig {
  categories: ISchemeCategory[];
}

export const schemeConfig: ISchemeConfig = {
  categories: [
    {
      id: 'builtin-packages',
      label: 'Встроенные пакеты',
      childRoute: 'package',
      children: [
        { id: 'pkg-fmt', label: 'fmt' },
        { id: 'pkg-strings', label: 'strings' },
        { id: 'pkg-os', label: 'os' },
        { id: 'pkg-strconv', label: 'strconv' },
        { id: 'pkg-io', label: 'io' },
        { id: 'pkg-bufio', label: 'bufio' },
        { id: 'pkg-time', label: 'time' },
        { id: 'pkg-sort', label: 'sort' },
      ],
    },
    {
      id: 'pkg-builtin',
      label: 'Встроенные функции',
      childRoute: 'package',
      children: [],
    },
    {
      id: 'tables',
      label: 'Справочники',
      childRoute: 'table',
      children: [
        { id: 'verbs', label: 'Verbs плейсхолдеры' },
        { id: 'types', label: 'Типы данных' },
        { id: 'variables', label: 'Переменные и константы' },
        { id: 'operators', label: 'Операторы' },
      ],
    },
    {
      id: 'composite-types',
      label: 'Составные типы',
      children: [
        { id: 'array', label: 'Массив' },
        { id: 'slice', label: 'Слайс' },
        { id: 'map', label: 'Мапа' },
        { id: 'struct', label: 'Структура' },
        { id: 'pointer', label: 'Указатель' },
        { id: 'interface', label: 'Интерфейс' },
      ],
    },
  ],
};
