import type { IGitCommand } from '@/entities/gitCommand';

export const gitAdd: IGitCommand = {
  name: 'git add',
  syntax: 'git add [флаги] [--] [параметры]',
  parameters: [
    {
      name: '<файл>',
      description: 'Один или несколько конкретных файлов для добавления',
    },
    {
      name: '<каталог>',
      description: 'Один или несколько каталогов целиком, со всеми файлами внутри',
    },
    {
      name: '<маска>',
      description: 'Один или несколько шаблонов пути',
    },
    {
      name: '.',
      description: 'Весь рабочий каталог',
    },
  ],
  flags: [
    {
      name: '-A, --all',
      description: 'Добавить все изменения, включая удалённые файлы.',
    },
    {
      name: '-u, --update',
      description: 'Обновить только уже отслеживаемые файлы',
    },
    {
      name: '-p, --patch',
      description: 'Интерактивно выбрать только часть изменений, по фрагментам.',
    },
    {
      name: '-n, --dry-run',
      description:
        'Просто показать, что будет добавлено, ничего не меняя.',
    },
    {
      name: '-f, --force',
      description: 'Добавить в индекс игнорируемые файлы',
    },
  ],
  description:
    'git add — добавляет содержимое файлов в индекс. В индекс попадает текущее состояние файла на момент выполнения команды.',
  examples:
    '// Добавить один файл\n' +
    'git add index.js\n\n' +
    '// Добавить каталог целиком\n' +
    'git add src/\n\n' +
    '// Добавить файлы по маске (кавычки, чтобы маску раскрыл git, а не оболочка)\n' +
    "git add '*.js'\n\n" +
    '// Добавить все изменения (самый частый вариант)\n' +
    'git add -A\n\n' +
    '// Проверить, что добавится, ничего не меняя\n' +
    'git add -n .\n\n' +
    '// Выбрать только часть изменений\n' +
    'git add -p',
  specification: 'https://git-scm.com/docs/git-add/ru',
};
