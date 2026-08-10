import type { IMethod } from '@/entities/method';

export const fmtMethods: IMethod[] = [
  {
    name: 'Print',
    syntax: 'func Print(a ...any) (n int, err error)',
    parameters: [
      {
        name: 'a',
        description: 'Одно или несколько значений любого типа для вывода',
      },
    ],
    returns: [
      {
        name: 'n int',
        description: 'Количество записанных байт',
      },
      {
        name: 'err error',
        description: 'Ошибка записи в os.Stdout, обычно nil',
      },
    ],
    description:
      'Print форматирует a, используя для них форматы по умолчанию, и записывает результат в os.Stdout. Пробелы добавляются между a, только если ни один из них не является строкой, а перевод строки в конце не добавляется.',
    example:
      'n, err := fmt.Print("Status:", "OK", "\\n")\n' +
      'fmt.Println("n =", n, "err =", err)\n\n' +
      '// Status:OK\n' +
      '// n = 10 err = <nil>',
    specification: 'https://pkg.go.dev/fmt#Print',
  },
  {
    name: 'Printf',
    syntax: 'func Printf(format string, a ...any) (n int, err error)',
    parameters: [
      {
        name: 'format',
        description: 'Строка формата с verbs-плейсхолдерами',
      },
      {
        name: 'a',
        description: 'Значения, подставляемые вместо verbs по порядку',
      },
    ],
    returns: [
      {
        name: 'n int',
        description: 'Количество записанных байт',
      },
      {
        name: 'err error',
        description: 'Ошибка записи в os.Stdout, обычно nil',
      },
    ],
    description:
      'Printf форматирует a согласно format и записывает результат в os.Stdout.',
    example:
      'name := "Roman"\n' +
      'age := 30\n' +
      'city := "Moscow"\n' +
      'n, err := fmt.Printf("%s is %d years old and lives in %s\\n", name, age, city)\n' +
      'fmt.Println("n =", n, "err =", err)\n\n' +
      '// Roman is 30 years old and lives in Moscow\n' +
      '// n = 42 err = <nil>',
    specification: 'https://pkg.go.dev/fmt#Printf',
  },
  {
    name: 'Println',
    syntax: 'func Println(a ...any) (n int, err error)',
    parameters: [
      {
        name: 'a',
        description: 'Одно или несколько значений любого типа для вывода',
      },
    ],
    returns: [
      {
        name: 'n int',
        description: 'Количество записанных байт',
      },
      {
        name: 'err error',
        description: 'Ошибка записи в os.Stdout, обычно nil',
      },
    ],
    description:
      'Println выводит a, используя для них форматы по умолчанию, и записывает результат в os.Stdout. Между a всегда добавляются пробелы, а в конце выводится символ новой строки.',
    example:
      'n, err := fmt.Println("Status:", "OK")\n' +
      'fmt.Println("n =", n, "err =", err)\n\n' +
      '// Status: OK\n' +
      '// n = 11 err = <nil>',
    specification: 'https://pkg.go.dev/fmt#Println',
  },
  {
    name: 'Sprint',
    syntax: 'func Sprint(a ...any) string',
    parameters: [
      {
        name: 'a',
        description: 'Одно или несколько значений любого типа',
      },
    ],
    returns: [
      {
        name: 'string',
        description: 'Отформатированная строка',
      },
    ],
    description:
      'Sprint форматирует a, используя для них форматы по умолчанию, и возвращает string. Пробелы добавляются между a, только если ни один из них не является строкой, а перевод строки в конце не добавляется.',
    example:
      's := fmt.Sprint("a", "b", 1, 2)\n' + 'fmt.Println(s)\n\n' + '// ab1 2',
    specification: 'https://pkg.go.dev/fmt#Sprint',
  },
  {
    name: 'Sprintf',
    syntax: 'func Sprintf(format string, a ...any) string',
    parameters: [
      {
        name: 'format',
        description: 'Строка формата с verbs-плейсхолдерами',
      },
      {
        name: 'a',
        description: 'Значения, подставляемые вместо verbs по порядку',
      },
    ],
    returns: [
      {
        name: 'string',
        description: 'Отформатированная строка',
      },
    ],
    description: 'Sprintf форматирует a согласно format и возвращает string.',
    example:
      'msg := fmt.Sprintf("%d + %d = %d", 2, 3, 5)\n' +
      'fmt.Println(msg)\n\n' +
      '// 2 + 3 = 5',
    specification: 'https://pkg.go.dev/fmt#Sprintf',
  },
  {
    name: 'Sprintln',
    syntax: 'func Sprintln(a ...any) string',
    parameters: [
      {
        name: 'a',
        description: 'Одно или несколько значений любого типа',
      },
    ],
    returns: [
      {
        name: 'string',
        description: 'Отформатированная строка',
      },
    ],
    description:
      'Sprintln форматирует a, используя для них форматы по умолчанию, и возвращает string. Между a всегда добавляются пробелы, а в конце добавляется символ новой строки.',
    example:
      's := fmt.Sprintln("Count:", 3)\n' + 'fmt.Print(s)\n\n' + '// Count: 3',
    specification: 'https://pkg.go.dev/fmt#Sprintln',
  },
  {
    name: 'Fprint',
    syntax: 'func Fprint(w io.Writer, a ...any) (n int, err error)',
    parameters: [
      {
        name: 'w',
        description: 'Получатель вывода, реализующий io.Writer',
      },
      {
        name: 'a',
        description: 'Одно или несколько значений любого типа для вывода',
      },
    ],
    returns: [
      {
        name: 'n int',
        description: 'Количество записанных байт',
      },
      {
        name: 'err error',
        description: 'Ошибка записи в w, обычно nil',
      },
    ],
    description:
      'Fprint форматирует a, используя для них форматы по умолчанию, и записывает результат в w. Пробелы добавляются между a, только если ни один из них не является строкой, а перевод строки в конце не добавляется.',
    example:
      'var buf bytes.Buffer\n' +
      'n, err := fmt.Fprint(&buf, "id=", 42)\n' +
      'fmt.Println(buf.String())\n' +
      'fmt.Println("n =", n, "err =", err)\n\n' +
      '// id=42\n' +
      '// n = 5 err = <nil>',
    specification: 'https://pkg.go.dev/fmt#Fprint',
  },
  {
    name: 'Fprintf',
    syntax:
      'func Fprintf(w io.Writer, format string, a ...any) (n int, err error)',
    parameters: [
      {
        name: 'w',
        description: 'Получатель вывода, реализующий io.Writer',
      },
      {
        name: 'format',
        description: 'Строка формата с verbs-плейсхолдерами',
      },
      {
        name: 'a',
        description: 'Значения, подставляемые вместо verbs по порядку',
      },
    ],
    returns: [
      {
        name: 'n int',
        description: 'Количество записанных байт',
      },
      {
        name: 'err error',
        description: 'Ошибка записи в w, обычно nil',
      },
    ],
    description:
      'Fprintf форматирует a согласно format и записывает результат в w вместо стандартного вывода — основной способ форматированного вывода в файлы, буферы и сетевые соединения.',
    example:
      'var buf bytes.Buffer\n' +
      'n, err := fmt.Fprintf(&buf, "%s has %d unread messages", "Roman", 5)\n' +
      'fmt.Println(buf.String())\n' +
      'fmt.Println("n =", n, "err =", err)\n\n' +
      '// Roman has 5 unread messages\n' +
      '// n = 27 err = <nil>',
    specification: 'https://pkg.go.dev/fmt#Fprintf',
  },
  {
    name: 'Fprintln',
    syntax: 'func Fprintln(w io.Writer, a ...any) (n int, err error)',
    parameters: [
      {
        name: 'w',
        description: 'Получатель вывода, реализующий io.Writer',
      },
      {
        name: 'a',
        description: 'Одно или несколько значений любого типа для вывода',
      },
    ],
    returns: [
      {
        name: 'n int',
        description: 'Количество записанных байт',
      },
      {
        name: 'err error',
        description: 'Ошибка записи в w, обычно nil',
      },
    ],
    description:
      'Fprintln форматирует a, используя для них форматы по умолчанию, и записывает результат в w. Между a всегда добавляются пробелы, а в конце выводится символ новой строки.',
    example:
      'n, err := fmt.Fprintln(os.Stderr, "warning: something went wrong")\n' +
      'fmt.Println("n =", n, "err =", err)\n\n' +
      '// warning: something went wrong\n' +
      '// n = 30 err = <nil>',
    specification: 'https://pkg.go.dev/fmt#Fprintln',
  },
  {
    name: 'Errorf',
    syntax: 'func Errorf(format string, a ...any) error',
    parameters: [
      {
        name: 'format',
        description: 'Строка формата с verbs-плейсхолдерами',
      },
      {
        name: 'a',
        description: 'Значения, подставляемые вместо verbs по порядку',
      },
    ],
    returns: [
      {
        name: 'error',
        description: 'Новая ошибка, созданная по шаблону',
      },
    ],
    description:
      'Errorf форматирует a согласно format и возвращает результат как error. Verb %w оборачивает переданную ошибку.',
    example:
      'err := fmt.Errorf("Не удалось открыть файл %q: %w", "data.txt", os.ErrNotExist)\n' +
      'fmt.Println(err)\n\n' +
      '// Не удалось открыть файл "data.txt": file does not exist',
    specification: 'https://pkg.go.dev/fmt#Errorf',
  },
  {
    name: 'Scan',
    syntax: 'func Scan(a ...any) (n int, err error)',
    parameters: [
      {
        name: 'a',
        description:
          'Указатели на переменные, в которые будут записаны считанные значения',
      },
    ],
    returns: [
      {
        name: 'n int',
        description: 'Количество успешно отсканированных элементов',
      },
      {
        name: 'err error',
        description:
          'Ошибка чтения или несоответствия типа, io.EOF при преждевременном конце ввода',
      },
    ],
    description:
      'Scan читает из os.Stdin, разделяя ввод по пробелам и переводам строк, и записывает считанные значения в a. Каждый элемент a должен быть указателем — функция автоматически определяет его тип и сохраняет в него очередное отсканированное значение, преобразуя его к нужному типу.',
    example:
      'var login string\n' +
      'var score int\n' +
      'n, err := fmt.Scan(&login, &score)\n' +
      'fmt.Println("login =", login, "score =", score)\n' +
      'fmt.Println("n =", n, "err =", err)\n\n' +
      '// если в stdin ввести: vasya 42\n' +
      '// login = vasya score = 42\n' +
      '// n = 2 err = <nil>',
    specification: 'https://pkg.go.dev/fmt#Scan',
  },
  {
    name: 'Scanf',
    syntax: 'func Scanf(format string, a ...any) (n int, err error)',
    parameters: [
      {
        name: 'format',
        description:
          'Строка формата с verbs-плейсхолдерами, описывающая ожидаемую структуру ввода',
      },
      {
        name: 'a',
        description:
          'Указатели на переменные, в которые будут записаны считанные значения',
      },
    ],
    returns: [
      {
        name: 'n int',
        description: 'Количество успешно отсканированных элементов',
      },
      {
        name: 'err error',
        description: 'Ошибка, если ввод не совпал с format',
      },
    ],
    description:
      'Scanf читает из os.Stdin по format: обычный текст должен совпасть с вводом, а каждый verb сопоставляется с очередным элементом a и парсится согласно своему типу.',
    example:
      'var day, month, year int\n' +
      'n, err := fmt.Scanf("%d/%d/%d", &day, &month, &year)\n' +
      'fmt.Println("n =", n, "err =", err)\n\n' +
      '// если в stdin ввести: 02/08/2026\n' +
      '// n = 3 err = <nil>',
    specification: 'https://pkg.go.dev/fmt#Scanf',
  },
  {
    name: 'Scanln',
    syntax: 'func Scanln(a ...any) (n int, err error)',
    parameters: [
      {
        name: 'a',
        description:
          'Указатели на переменные, в которые будут записаны считанные значения',
      },
    ],
    returns: [
      {
        name: 'n int',
        description: 'Количество успешно отсканированных элементов',
      },
      {
        name: 'err error',
        description:
          'Ошибка чтения, если строка закончилась раньше, чем заполнились все элементы a',
      },
    ],
    description:
      'Scanln читает из os.Stdin, разделяя ввод по пробелам, и записывает считанные значения в a. Каждый элемент a должен быть указателем — функция автоматически определяет его тип и сохраняет в него очередное отсканированное значение, преобразуя его к нужному типу. Сканирование останавливается на первом переводе строки, поэтому все элементы a должны быть введены в одной строке.',
    example:
      'var width, height int\n' +
      'n, err := fmt.Scanln(&width, &height)\n' +
      'fmt.Println("n =", n, "err =", err)\n\n' +
      '// если в stdin ввести: 1920 1080\n' +
      '// n = 2 err = <nil>',
    specification: 'https://pkg.go.dev/fmt#Scanln',
  },
  {
    name: 'Sscan',
    syntax: 'func Sscan(str string, a ...any) (n int, err error)',
    parameters: [
      {
        name: 'str',
        description: 'Строка-источник данных для сканирования',
      },
      {
        name: 'a',
        description:
          'Указатели на переменные, в которые будут записаны считанные значения',
      },
    ],
    returns: [
      {
        name: 'n int',
        description: 'Количество успешно отсканированных элементов',
      },
      {
        name: 'err error',
        description: 'Ошибка чтения или несоответствия типа',
      },
    ],
    description:
      'Sscan читает из str, разделяя его содержимое по пробелам и переводам строк, и записывает считанные значения в a. Каждый элемент a должен быть указателем — функция автоматически определяет его тип и сохраняет в него очередное отсканированное значение, преобразуя его к нужному типу.',
    example:
      'var x, y int\n' +
      'n, err := fmt.Sscan("10 20", &x, &y)\n' +
      'fmt.Println("x =", x, "y =", y)\n' +
      'fmt.Println("n =", n, "err =", err)\n\n' +
      '// x = 10 y = 20\n' +
      '// n = 2 err = <nil>',
    specification: 'https://pkg.go.dev/fmt#Sscan',
  },
  {
    name: 'Sscanf',
    syntax:
      'func Sscanf(str string, format string, a ...any) (n int, err error)',
    parameters: [
      {
        name: 'str',
        description: 'Строка-источник данных',
      },
      {
        name: 'format',
        description:
          'Строка формата с verbs-плейсхолдерами, описывающая ожидаемую структуру str',
      },
      {
        name: 'a',
        description:
          'Указатели на переменные, в которые будут записаны считанные значения',
      },
    ],
    returns: [
      {
        name: 'n int',
        description: 'Количество успешно отсканированных элементов',
      },
      {
        name: 'err error',
        description: 'Ошибка, если str не совпала с format',
      },
    ],
    description:
      'Sscanf читает из str по format: обычный текст должен совпасть с его содержимым, а каждый verb сопоставляется с очередным элементом a и парсится согласно своему типу.',
    example:
      'var h, m int\n' +
      'n, err := fmt.Sscanf("14:05", "%d:%d", &h, &m)\n' +
      'fmt.Println("h =", h, "m =", m)\n' +
      'fmt.Println("n =", n, "err =", err)\n\n' +
      '// h = 14 m = 5\n' +
      '// n = 2 err = <nil>',
    specification: 'https://pkg.go.dev/fmt#Sscanf',
  },
  {
    name: 'Sscanln',
    syntax: 'func Sscanln(str string, a ...any) (n int, err error)',
    parameters: [
      {
        name: 'str',
        description: 'Строка-источник данных для сканирования',
      },
      {
        name: 'a',
        description:
          'Указатели на переменные, в которые будут записаны считанные значения',
      },
    ],
    returns: [
      {
        name: 'n int',
        description: 'Количество успешно отсканированных элементов',
      },
      {
        name: 'err error',
        description:
          'Ошибка, если строка закончилась раньше, чем заполнились все элементы a',
      },
    ],
    description:
      'Sscanln читает из str, разделяя его содержимое по пробелам, и записывает считанные значения в a. Каждый элемент a должен быть указателем — функция автоматически определяет его тип и сохраняет в него очередное отсканированное значение, преобразуя его к нужному типу. Сканирование останавливается на первом переводе строки внутри str.',
    example:
      'var a, b string\n' +
      'n, err := fmt.Sscanln("foo bar", &a, &b)\n' +
      'fmt.Println("a =", a, "b =", b)\n' +
      'fmt.Println("n =", n, "err =", err)\n\n' +
      '// a = foo b = bar\n' +
      '// n = 2 err = <nil>',
    specification: 'https://pkg.go.dev/fmt#Sscanln',
  },
  {
    name: 'Fscan',
    syntax: 'func Fscan(r io.Reader, a ...any) (n int, err error)',
    parameters: [
      {
        name: 'r',
        description: 'Источник данных, реализующий io.Reader',
      },
      {
        name: 'a',
        description:
          'Указатели на переменные, в которые будут записаны считанные значения',
      },
    ],
    returns: [
      {
        name: 'n int',
        description: 'Количество успешно отсканированных элементов',
      },
      {
        name: 'err error',
        description: 'Ошибка чтения из r, io.EOF при достижении конца',
      },
    ],
    description:
      'Fscan читает из r, разделяя содержимое по пробелам и переводам строк, и записывает считанные значения в a. Каждый элемент a должен быть указателем — функция автоматически определяет его тип и сохраняет в него очередное отсканированное значение, преобразуя его к нужному типу.',
    example:
      'r := strings.NewReader("10 20")\n' +
      'var x, y int\n' +
      'n, err := fmt.Fscan(r, &x, &y)\n' +
      'fmt.Println("x =", x, "y =", y)\n' +
      'fmt.Println("n =", n, "err =", err)\n\n' +
      '// x = 10 y = 20\n' +
      '// n = 2 err = <nil>',
    specification: 'https://pkg.go.dev/fmt#Fscan',
  },
  {
    name: 'Fscanf',
    syntax:
      'func Fscanf(r io.Reader, format string, a ...any) (n int, err error)',
    parameters: [
      {
        name: 'r',
        description: 'Источник данных, реализующий io.Reader',
      },
      {
        name: 'format',
        description:
          'Строка формата с verbs-плейсхолдерами, описывающая ожидаемую структуру ввода',
      },
      {
        name: 'a',
        description:
          'Указатели на переменные, в которые будут записаны считанные значения',
      },
    ],
    returns: [
      {
        name: 'n int',
        description: 'Количество успешно отсканированных элементов',
      },
      {
        name: 'err error',
        description: 'Ошибка, если ввод не совпал с format',
      },
    ],
    description:
      'Fscanf читает из r по format: обычный текст должен совпасть с вводом, а каждый verb сопоставляется с очередным элементом a и парсится согласно своему типу.',
    example:
      'r := strings.NewReader("14:05")\n' +
      'var h, m int\n' +
      'n, err := fmt.Fscanf(r, "%d:%d", &h, &m)\n' +
      'fmt.Println("h =", h, "m =", m)\n' +
      'fmt.Println("n =", n, "err =", err)\n\n' +
      '// h = 14 m = 5\n' +
      '// n = 2 err = <nil>',
    specification: 'https://pkg.go.dev/fmt#Fscanf',
  },
  {
    name: 'Fscanln',
    syntax: 'func Fscanln(r io.Reader, a ...any) (n int, err error)',
    parameters: [
      {
        name: 'r',
        description: 'Источник данных, реализующий io.Reader',
      },
      {
        name: 'a',
        description:
          'Указатели на переменные, в которые будут записаны считанные значения',
      },
    ],
    returns: [
      {
        name: 'n int',
        description: 'Количество успешно отсканированных элементов',
      },
      {
        name: 'err error',
        description:
          'Ошибка, если строка в r закончилась раньше, чем заполнились все элементы a',
      },
    ],
    description:
      'Fscanln читает из r, разделяя содержимое по пробелам, и записывает считанные значения в a. Каждый элемент a должен быть указателем — функция автоматически определяет его тип и сохраняет в него очередное отсканированное значение, преобразуя его к нужному типу. Сканирование останавливается на первом переводе строки в r.',
    example:
      'r := strings.NewReader("foo bar\\n")\n' +
      'var a, b string\n' +
      'n, err := fmt.Fscanln(r, &a, &b)\n' +
      'fmt.Println("a =", a, "b =", b)\n' +
      'fmt.Println("n =", n, "err =", err)\n\n' +
      '// a = foo b = bar\n' +
      '// n = 2 err = <nil>',
    specification: 'https://pkg.go.dev/fmt#Fscanln',
  },
  {
    name: 'Append',
    syntax: 'func Append(b []byte, a ...any) []byte',
    parameters: [
      {
        name: 'b',
        description:
          'Слайс байт, к которому будет дописан результат форматирования',
      },
      {
        name: 'a',
        description: 'Одно или несколько значений любого типа',
      },
    ],
    returns: [
      {
        name: '[]byte',
        description:
          'Слайс b с дописанным в конец отформатированным результатом',
      },
    ],
    description:
      'Append форматирует a, используя для них форматы по умолчанию, и дописывает результат в конец b, переиспользуя его capacity — это снижает число аллокаций. Пробелы добавляются между a, только если ни один из них не является строкой, а перевод строки в конце не добавляется.',
    example:
      'b := []byte("id=")\n' +
      'b = fmt.Append(b, 42)\n' +
      'fmt.Println(string(b))\n\n' +
      '// id=42',
    specification: 'https://pkg.go.dev/fmt#Append',
  },
  {
    name: 'Appendf',
    syntax: 'func Appendf(b []byte, format string, a ...any) []byte',
    parameters: [
      {
        name: 'b',
        description:
          'Слайс байт, к которому будет дописан результат форматирования',
      },
      {
        name: 'format',
        description: 'Строка формата с verbs-плейсхолдерами',
      },
      {
        name: 'a',
        description:
          'Переданные значения, подставляемые вместо verbs по порядку',
      },
    ],
    returns: [
      {
        name: '[]byte',
        description: 'Слайс b с дописанным отформатированным результатом',
      },
    ],
    description:
      'Appendf форматирует a согласно format и дописывает результат в конец b.',
    example:
      'b := fmt.Appendf(nil, "%d/%d", 2026, 8)\n' +
      'fmt.Println(string(b))\n\n' +
      '// 2026/8',
    specification: 'https://pkg.go.dev/fmt#Appendf',
  },
  {
    name: 'Appendln',
    syntax: 'func Appendln(b []byte, a ...any) []byte',
    parameters: [
      {
        name: 'b',
        description:
          'Слайс байт, к которому будет дописан результат форматирования',
      },
      {
        name: 'a',
        description: 'Одно или несколько переданных значений любого типа',
      },
    ],
    returns: [
      {
        name: '[]byte',
        description:
          'Слайс b с дописанным результатом и завершающим переводом строки',
      },
    ],
    description:
      'Appendln форматирует a, используя для них форматы по умолчанию, и дописывает результат в конец b. Между a всегда добавляются пробелы, а в конце добавляется символ новой строки.',
    example:
      'b := fmt.Appendln(nil, "a", "b", 1)\n' +
      'fmt.Print(string(b))\n\n' +
      '// a b 1',
    specification: 'https://pkg.go.dev/fmt#Appendln',
  },
  {
    name: 'Stringer',
    kind: 'interface',
    syntax: 'type Stringer interface {\n\tString() string\n}',
    description:
      'Stringer реализуется типом, у которого есть метод String() string, определяющий его текстовое представление. Метод автоматически вызывается при форматировании значения через fmt (verb %v/%s) — в том числе внутри других пакетов, которые используют fmt для вывода.',
    example:
      'type Point struct{ X, Y int }\n\n' +
      'func (p Point) String() string { return "Stringer" }\n\n' +
      'func describe(s fmt.Stringer) string {\n' +
      '  return s.String()\n' +
      '}\n\n' +
      'fmt.Println(describe(Point{1, 2}))\n\n' +
      '// Stringer',
    specification: 'https://pkg.go.dev/fmt#Stringer',
  },
  {
    name: 'GoStringer',
    kind: 'interface',
    syntax: 'type GoStringer interface {\n\tGoString() string\n}',
    description:
      'GoStringer реализуется типом, у которого есть метод GoString() string, задающий его представление в виде Go-синтаксиса. Метод автоматически вызывается при форматировании значения через fmt (verb %#v) — в том числе внутри других пакетов, которые используют fmt для вывода.',
    example:
      'type Point struct{ X, Y int }\n\n' +
      'func (p Point) GoString() string { return "GoStringer" }\n\n' +
      'fmt.Printf("%#v\\n", Point{1, 2})\n\n' +
      '// GoStringer',
    specification: 'https://pkg.go.dev/fmt#GoStringer',
  },
  {
    name: 'Formatter',
    kind: 'interface',
    syntax: 'type Formatter interface {\n\tFormat(f State, verb rune)\n}',
    description:
      'Formatter реализуется типом, у которого есть метод Format(f State, verb rune), который полностью берёт на себя вывод значения для любого verb, включая %v — метод автоматически вызывается при форматировании через fmt, в том числе внутри других пакетов, которые используют fmt для вывода. Внутри метода можно писать в f напрямую (он реализует io.Writer) или через fmt.Fprint/Fprintf(f, ...).',
    example:
      'type Percent float64\n\n' +
      'func (p Percent) Format(f fmt.State, verb rune) {\n' +
      "  if verb == 'd' {\n" +
      '    f.Write([]byte("Formatter(d)")) // напрямую через Write\n' +
      '    return\n' +
      '  }\n' +
      '  fmt.Fprint(f, "Formatter") // через Fprint\n' +
      '}\n\n' +
      'fmt.Println(Percent(42.567))\n' +
      'fmt.Printf("%d\\n", Percent(42.567))\n\n' +
      '// Formatter\n' +
      '// Formatter(d)',
    specification: 'https://pkg.go.dev/fmt#Formatter',
  },
  {
    name: 'State',
    kind: 'interface',
    syntax:
      'type State interface {\n\tWrite(b []byte) (n int, err error)\n\tWidth() (wid int, ok bool)\n\tPrecision() (prec int, ok bool)\n\tFlag(c int) bool\n}',
    description:
      "State передаётся в Format методом Formatter и даёт доступ к параметрам форматирования: Write пишет отформатированный вывод, Width и Precision возвращают заданные ширину и точность (и признак, что они указаны), а Flag проверяет, установлен ли флаг форматирования (например, int('+') или int('-')).",
    example:
      'type Marker int\n\n' +
      'func (m Marker) Format(f fmt.State, verb rune) {\n' +
      '  if width, ok := f.Width(); ok {\n' +
      '    fmt.Fprintf(f, "width=%d ", width)\n' +
      '  }\n' +
      '  if prec, ok := f.Precision(); ok {\n' +
      '    fmt.Fprintf(f, "prec=%d ", prec)\n' +
      '  }\n' +
      "  if f.Flag('+') {\n" +
      '    fmt.Fprint(f, "flag=+ ")\n' +
      '  }\n' +
      '  f.Write([]byte("State"))\n' +
      '}\n\n' +
      'fmt.Printf("%+5.2v\\n", Marker(0))\n\n' +
      '// width=5 prec=2 flag=+ State',
    specification: 'https://pkg.go.dev/fmt#State',
  },
  {
    name: 'Scanner',
    kind: 'interface',
    syntax:
      'type Scanner interface {\n\tScan(state ScanState, verb rune) error\n}',
    description:
      'Scanner реализуется типом, у которого есть метод Scan(state ScanState, verb rune) error, который сам разбирает своё значение из ввода; получатель должен быть указателем. Метод автоматически вызывается при сканировании значения через fmt — в том числе внутри других пакетов, которые используют fmt для чтения.',
    example:
      'type Word string\n\n' +
      'func (w *Word) Scan(state fmt.ScanState, verb rune) error {\n' +
      '  tok, err := state.Token(true, nil)\n' +
      '  if err != nil {\n' +
      '    return err\n' +
      '  }\n' +
      '  *w = Word(tok)\n' +
      '  return nil\n' +
      '}\n\n' +
      'var w Word\n' +
      'fmt.Sscan("Scanner", &w)\n' +
      'fmt.Println(w)\n\n' +
      '// Scanner',
    specification: 'https://pkg.go.dev/fmt#Scanner',
  },
  {
    name: 'ScanState',
    kind: 'interface',
    syntax:
      'type ScanState interface {\n\tReadRune() (r rune, size int, err error)\n\tUnreadRune() error\n\tSkipSpace()\n\tToken(skipSpace bool, f func(rune) bool) (token []byte, err error)\n\tWidth() (wid int, ok bool)\n\tRead(buf []byte) (n int, err error)\n}',
    description:
      'ScanState передаётся в Scan методом Scanner и даёт доступ к вводу: ReadRune и UnreadRune читают один символ с возможностью вернуть его обратно, SkipSpace пропускает пробелы, Token считывает подряд идущие символы, удовлетворяющие предикату f, а Width сообщает заданную ширину поля (и признак, что она указана). Read тоже есть в интерфейсе, но сама fmt его не вызывает и не рассчитана на вызов из Scan — она нужна только для реализации обёрток вокруг ScanState; при вызове из Scan вернёт ошибку.',
    example:
      'type Word string\n\n' +
      'func (w *Word) Scan(state fmt.ScanState, verb rune) error {\n' +
      '  state.SkipSpace()\n\n' +
      '  r, _, err := state.ReadRune() // читаем первый символ\n' +
      '  if err != nil {\n' +
      '    return err\n' +
      '  }\n' +
      '  state.UnreadRune() // и возвращаем его обратно\n' +
      '  fmt.Print("peek: ", string(r), " ")\n\n' +
      '  if width, ok := state.Width(); ok {\n' +
      '    fmt.Print("width: ", width, " ")\n' +
      '  }\n\n' +
      '  tok, err := state.Token(true, nil)\n' +
      '  if err != nil {\n' +
      '    return err\n' +
      '  }\n' +
      '  *w = Word(tok)\n' +
      '  fmt.Println(*w)\n' +
      '  return nil\n' +
      '}\n\n' +
      'var w Word\n' +
      'fmt.Sscanf("  ScanState", "%9v", &w)\n\n' +
      '// peek: S width: 9 ScanState',
    specification: 'https://pkg.go.dev/fmt#ScanState',
  },
];
