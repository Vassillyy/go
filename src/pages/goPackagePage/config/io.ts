import type { IMethod } from '@/entities/method';

export const io: IMethod[] = [
  {
    name: 'Copy',
    syntax: 'func Copy(dst Writer, src Reader) (written int64, err error)',
    parameters: [
      {
        name: 'dst',
        description: 'Получатель данных',
      },
      {
        name: 'src',
        description: 'Источник данных',
      },
    ],
    returns: [
      {
        name: 'written int64',
        description: 'Количество скопированных байт',
      },
      {
        name: 'err error',
        description: 'Первая ошибка при копировании, кроме EOF',
      },
    ],
    description:
      'Copy копирует данные из src в dst, пока не будет достигнут EOF в src или не произойдёт ошибка. Сам EOF ошибкой не считается и в err не возвращается.',
    example:
      'src := strings.NewReader("Hello, Roman!")\n' +
      'var dst bytes.Buffer\n' +
      'n, err := io.Copy(&dst, src)\n' +
      'fmt.Println(dst.String(), n, err)\n\n' +
      '// Hello, Roman! 13 <nil>',
    specification: 'https://pkg.go.dev/io#Copy',
  },
  {
    name: 'ReadAll',
    syntax: 'func ReadAll(r Reader) ([]byte, error)',
    parameters: [
      {
        name: 'r',
        description: 'Источник данных',
      },
    ],
    returns: [
      {
        name: '[]byte',
        description: 'Все данные, прочитанные из r',
      },
      {
        name: 'error',
        description: 'Ошибка чтения, кроме EOF',
      },
    ],
    description:
      'ReadAll читает из r до ошибки или EOF и возвращает прочитанные данные целиком. При успешном чтении err равен nil, а не EOF.',
    example:
      'data, err := io.ReadAll(strings.NewReader("Hello, Roman!"))\n' +
      'fmt.Println(string(data), err)\n\n' +
      '// Hello, Roman! <nil>',
    specification: 'https://pkg.go.dev/io#ReadAll',
  },
  {
    name: 'WriteString',
    syntax: 'func WriteString(w Writer, s string) (n int, err error)',
    parameters: [
      {
        name: 'w',
        description: 'Получатель данных',
      },
      {
        name: 's',
        description: 'Строка для записи',
      },
    ],
    returns: [
      {
        name: 'n int',
        description: 'Количество записанных байт',
      },
      {
        name: 'err error',
        description: 'Ошибка записи',
      },
    ],
    description:
      'WriteString записывает s в w. Если w реализует StringWriter, вызывается его метод WriteString напрямую; иначе w.Write вызывается один раз с []byte(s).',
    example:
      'var buf bytes.Buffer\n' +
      'n, err := io.WriteString(&buf, "Hello, Roman!")\n' +
      'fmt.Println(buf.String(), n, err)\n\n' +
      '// Hello, Roman! 13 <nil>',
    specification: 'https://pkg.go.dev/io#WriteString',
  },
  {
    name: 'EOF',
    syntax: 'var EOF error',
    returns: [
      {
        name: 'error',
        description: 'Ошибка конца потока',
      },
    ],
    description:
      'EOF — ошибка, которую Read возвращает, когда больше нет доступных данных для чтения. Read должна возвращать именно EOF, а не обёрнутую ошибку, потому что вызывающий код сравнивает её через ==. Функции должны возвращать EOF только для сигнала о штатном завершении ввода.',
    example: 'fmt.Println(io.EOF)\n\n' + '// EOF',
    specification: 'https://pkg.go.dev/io#EOF',
  },
];
