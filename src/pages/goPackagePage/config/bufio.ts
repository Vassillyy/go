import type { IMethod } from '@/entities/method';

export const bufioMethods: IMethod[] = [
  {
    name: 'NewReader',
    syntax: 'func NewReader(rd io.Reader) *Reader',
    parameters: [
      {
        name: 'rd',
        description: 'Источник данных для буферизации',
      },
    ],
    returns: [
      {
        name: '*Reader',
        description: 'Буферизованный Reader поверх rd',
      },
    ],
    description:
      'NewReader оборачивает rd в Reader с буфером размера по умолчанию, снижая число системных вызовов чтения за счёт чтения большими порциями наперёд.',
    example:
      'br := bufio.NewReader(strings.NewReader("line1\\nline2\\n"))\n' +
      "line, err := br.ReadString('\\n')\n" +
      'fmt.Printf("%q %v\\n", line, err)\n\n' +
      '// "line1\\n" <nil>',
    specification: 'https://pkg.go.dev/bufio#NewReader',
  },
  {
    name: 'NewWriter',
    syntax: 'func NewWriter(w io.Writer) *Writer',
    parameters: [
      {
        name: 'w',
        description: 'Получатель данных для буферизации',
      },
    ],
    returns: [
      {
        name: '*Writer',
        description: 'Буферизованный Writer поверх w',
      },
    ],
    description:
      'NewWriter оборачивает w в Writer с буфером размера по умолчанию. Данные накапливаются в буфере и попадают в w только при заполнении буфера или явном вызове Flush.',
    example:
      'bw := bufio.NewWriter(os.Stdout)\n' +
      'bw.WriteString("Hello, Roman!")\n' +
      'bw.Flush()\n\n' +
      '// Hello, Roman!',
    specification: 'https://pkg.go.dev/bufio#NewWriter',
  },
  {
    name: 'NewScanner',
    syntax: 'func NewScanner(r io.Reader) *Scanner',
    parameters: [
      {
        name: 'r',
        description: 'Источник данных для построчного чтения',
      },
    ],
    returns: [
      {
        name: '*Scanner',
        description: 'Scanner для последовательного чтения токенов из r',
      },
    ],
    description:
      'NewScanner создаёт Scanner для последовательного чтения токенов из r. По умолчанию Scanner разбивает вход на строки функцией bufio.ScanLines; заменить её на другую, например bufio.ScanWords для разбиения по словам, можно через Scanner.Split.',
    example:
      'scanner := bufio.NewScanner(strings.NewReader("Roman\\n30\\nMoscow"))\n' +
      'for scanner.Scan() {\n' +
      '  fmt.Println(scanner.Text())\n' +
      '}\n\n' +
      '// Roman\n' +
      '// 30\n' +
      '// Moscow',
    specification: 'https://pkg.go.dev/bufio#NewScanner',
  },
  {
    name: '(*Reader).ReadString',
    syntax: 'func (b *Reader) ReadString(delim byte) (string, error)',
    parameters: [
      {
        name: 'delim',
        description: 'Байт-разделитель, до которого нужно читать',
      },
    ],
    returns: [
      {
        name: 'string',
        description: 'Прочитанные данные вместе с разделителем',
      },
      {
        name: 'error',
        description: 'Ошибка, если delim не встретился до конца потока',
      },
    ],
    description:
      'ReadString читает из b до первого вхождения delim включительно и возвращает прочитанное как строку. Если delim не найден до конца потока, ReadString возвращает то, что успела прочитать, и ошибку (обычно io.EOF).',
    example:
      'br := bufio.NewReader(strings.NewReader("line1\\nline2"))\n' +
      "l1, err1 := br.ReadString('\\n')\n" +
      "l2, err2 := br.ReadString('\\n')\n" +
      'fmt.Printf("%q %v\\n", l1, err1)\n' +
      'fmt.Printf("%q %v\\n", l2, err2)\n\n' +
      '// "line1\\n" <nil>\n' +
      '// "line2" EOF',
    specification: 'https://pkg.go.dev/bufio#Reader.ReadString',
  },
  {
    name: '(*Writer).WriteString',
    syntax: 'func (b *Writer) WriteString(s string) (int, error)',
    parameters: [
      {
        name: 's',
        description: 'Строка для записи в буфер',
      },
    ],
    returns: [
      {
        name: 'int',
        description: 'Количество записанных байт',
      },
      {
        name: 'error',
        description: 'Ошибка, если запись оказалась короче len(s)',
      },
    ],
    description:
      'WriteString дописывает s в буфер b. Данные физически не попадают в исходный io.Writer, пока буфер не заполнится или не будет вызван Flush.',
    example:
      'var buf bytes.Buffer\n' +
      'bw := bufio.NewWriter(&buf)\n' +
      'n, err := bw.WriteString("Hello, Roman!")\n' +
      'fmt.Println(n, err)\n\n' +
      '// 13 <nil>',
    specification: 'https://pkg.go.dev/bufio#Writer.WriteString',
  },
  {
    name: '(*Writer).Flush',
    syntax: 'func (b *Writer) Flush() error',
    returns: [
      {
        name: 'error',
        description: 'Ошибка записи в исходный io.Writer',
      },
    ],
    description:
      'Flush записывает все данные, накопленные в буфере b, в исходный io.Writer. Пока Flush не вызван (или буфер не заполнился сам), данные могут не дойти до получателя — забытый Flush часто становится причиной "пустого" вывода.',
    example:
      'var buf bytes.Buffer\n' +
      'bw := bufio.NewWriter(&buf)\n' +
      'bw.WriteString("Hello, Roman!")\n' +
      'fmt.Println(buf.String())\n\n' +
      'bw.Flush()\n' +
      'fmt.Println(buf.String())\n\n' +
      '// (пусто — данные ещё в буфере)\n' +
      '// Hello, Roman!',
    specification: 'https://pkg.go.dev/bufio#Writer.Flush',
  },
  {
    name: '(*Scanner).Scan',
    syntax: 'func (s *Scanner) Scan() bool',
    returns: [
      {
        name: 'bool',
        description: 'true, если найден очередной токен',
      },
    ],
    description:
      'Scan продвигает Scanner к следующему токену (по умолчанию — строке), который затем доступен через Text. Возвращает false, когда данные закончились или произошла ошибка; саму ошибку нужно проверять через Err.',
    example:
      'scanner := bufio.NewScanner(strings.NewReader("Roman\\n30"))\n' +
      'ok1 := scanner.Scan()\n' +
      'ok2 := scanner.Scan()\n' +
      'ok3 := scanner.Scan()\n' +
      'fmt.Println(ok1, ok2, ok3)\n\n' +
      '// true true false',
    specification: 'https://pkg.go.dev/bufio#Scanner.Scan',
  },
  {
    name: '(*Scanner).Text',
    syntax: 'func (s *Scanner) Text() string',
    returns: [
      {
        name: 'string',
        description: 'Текущий токен как строка',
      },
    ],
    description:
      'Text возвращает токен, найденный последним вызовом Scan. Вызывать имеет смысл только после Scan, вернувшего true.',
    example:
      'scanner := bufio.NewScanner(strings.NewReader("Roman 30 Moscow"))\n' +
      'scanner.Split(bufio.ScanWords)\n' +
      'for scanner.Scan() {\n' +
      '  fmt.Println(scanner.Text())\n' +
      '}\n\n' +
      '// Roman\n' +
      '// 30\n' +
      '// Moscow',
    specification: 'https://pkg.go.dev/bufio#Scanner.Text',
  },
  {
    name: '(*Scanner).Err',
    syntax: 'func (s *Scanner) Err() error',
    returns: [
      {
        name: 'error',
        description: 'Первая ошибка чтения, отличная от EOF',
      },
    ],
    description:
      'Err возвращает первую ошибку, остановившую Scan. Если данные закончились штатно (EOF), Err возвращает nil, поэтому EOF не нужно обрабатывать как ошибку отдельно.',
    example:
      'scanner := bufio.NewScanner(strings.NewReader("Roman\\n30"))\n' +
      'for scanner.Scan() {\n' +
      '  fmt.Println(scanner.Text())\n' +
      '}\n' +
      'fmt.Println(scanner.Err())\n\n' +
      '// Roman\n' +
      '// 30\n' +
      '// <nil>',
    specification: 'https://pkg.go.dev/bufio#Scanner.Err',
  },
  {
    name: '(*Scanner).Split',
    syntax: 'func (s *Scanner) Split(split SplitFunc)',
    parameters: [
      {
        name: 'split',
        description: 'Функция разбиения входных данных на токены',
      },
    ],
    description:
      'Split задаёт функцию разбиения для Scanner вместо используемой по умолчанию ScanLines. Стандартная библиотека предоставляет готовые ScanLines, ScanWords, ScanRunes и ScanBytes; можно передать и свою функцию с сигнатурой SplitFunc. Split паникует, если вызвать его после того, как сканирование уже началось.',
    example:
      'scanner := bufio.NewScanner(strings.NewReader("Roman 30 Moscow"))\n' +
      'scanner.Split(bufio.ScanWords)\n' +
      'for scanner.Scan() {\n' +
      '  fmt.Println(scanner.Text())\n' +
      '}\n\n' +
      '// Roman\n' +
      '// 30\n' +
      '// Moscow',
    specification: 'https://pkg.go.dev/bufio#Scanner.Split',
  },
  {
    name: 'ScanLines',
    syntax:
      'func ScanLines(data []byte, atEOF bool) (advance int, token []byte, err error)',
    parameters: [
      {
        name: 'data',
        description: 'Необработанный остаток входных данных',
      },
      {
        name: 'atEOF',
        description: 'true, если больше данных не поступит',
      },
    ],
    returns: [
      {
        name: 'advance int',
        description: 'Число обработанных байт data',
      },
      {
        name: 'token []byte',
        description: 'Найденная строка без завершающего \\r\\n или \\n',
      },
      {
        name: 'err error',
        description: 'Ошибка разбиения',
      },
    ],
    description:
      'ScanLines — функция разбиения для Scanner, возвращающая по одной строке текста без завершающего перевода строки. Передаётся в Scanner.Split, но для ScanLines это не обязательно — она и так используется по умолчанию.',
    example:
      'advance, token, err := bufio.ScanLines([]byte("Roman\\n30"), false)\n' +
      'fmt.Println(advance, string(token), err)\n\n' +
      '// 6 Roman <nil>',
    specification: 'https://pkg.go.dev/bufio#ScanLines',
  },
  {
    name: 'ScanWords',
    syntax:
      'func ScanWords(data []byte, atEOF bool) (advance int, token []byte, err error)',
    parameters: [
      {
        name: 'data',
        description: 'Необработанный остаток входных данных',
      },
      {
        name: 'atEOF',
        description: 'true, если больше данных не поступит',
      },
    ],
    returns: [
      {
        name: 'advance int',
        description: 'Число обработанных байт data',
      },
      {
        name: 'token []byte',
        description: 'Найденное слово без окружающих пробелов',
      },
      {
        name: 'err error',
        description: 'Ошибка разбиения',
      },
    ],
    description:
      'ScanWords — функция разбиения для Scanner, возвращающая слова, разделённые пробельными символами (согласно unicode.IsSpace). Окружающие пробелы отбрасываются, пустая строка никогда не возвращается. Передаётся в Scanner.Split.',
    example:
      'advance, token, err := bufio.ScanWords([]byte("Roman 30"), false)\n' +
      'fmt.Println(advance, string(token), err)\n\n' +
      '// 6 Roman <nil>',
    specification: 'https://pkg.go.dev/bufio#ScanWords',
  },
  {
    name: 'ScanRunes',
    syntax:
      'func ScanRunes(data []byte, atEOF bool) (advance int, token []byte, err error)',
    parameters: [
      {
        name: 'data',
        description: 'Необработанный остаток входных данных',
      },
      {
        name: 'atEOF',
        description: 'true, если больше данных не поступит',
      },
    ],
    returns: [
      {
        name: 'advance int',
        description: 'Число обработанных байт data',
      },
      {
        name: 'token []byte',
        description: 'Байты одного UTF-8 символа (rune)',
      },
      {
        name: 'err error',
        description: 'Ошибка разбиения',
      },
    ],
    description:
      'ScanRunes — функция разбиения для Scanner, возвращающая по одному UTF-8 символу (rune) за раз. Некорректные последовательности байт заменяются символом U+FFFD. Передаётся в Scanner.Split.',
    example:
      'advance, token, err := bufio.ScanRunes([]byte("Привет"), false)\n' +
      'fmt.Println(advance, string(token), err)\n\n' +
      '// 2 П <nil>',
    specification: 'https://pkg.go.dev/bufio#ScanRunes',
  },
  {
    name: 'ScanBytes',
    syntax:
      'func ScanBytes(data []byte, atEOF bool) (advance int, token []byte, err error)',
    parameters: [
      {
        name: 'data',
        description: 'Необработанный остаток входных данных',
      },
      {
        name: 'atEOF',
        description: 'true, если больше данных не поступит',
      },
    ],
    returns: [
      {
        name: 'advance int',
        description: 'Число обработанных байт data',
      },
      {
        name: 'token []byte',
        description: 'Один байт входных данных',
      },
      {
        name: 'err error',
        description: 'Ошибка разбиения',
      },
    ],
    description:
      'ScanBytes — функция разбиения для Scanner, возвращающая по одному байту за раз. Многобайтовые UTF-8 символы при этом разрезаются на отдельные байты. Передаётся в Scanner.Split.',
    example:
      'advance, token, err := bufio.ScanBytes([]byte("Go"), false)\n' +
      'fmt.Println(advance, string(token), err)\n\n' +
      '// 1 G <nil>',
    specification: 'https://pkg.go.dev/bufio#ScanBytes',
  },
];
