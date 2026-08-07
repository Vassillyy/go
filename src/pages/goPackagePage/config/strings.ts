import type { IMethod } from '@/entities/method';

export const stringsMethods: IMethod[] = [
  {
    name: 'Contains',
    syntax: 'func Contains(s, substr string) bool',
    parameters: [
      {
        name: 's',
        description: 'Строка, в которой выполняется поиск',
      },
      {
        name: 'substr',
        description: 'Подстрока, наличие которой проверяется',
      },
    ],
    returns: [
      {
        name: 'bool',
        description: 'true, если substr содержится в s',
      },
    ],
    description:
      'Contains сообщает, содержит ли строка s подстроку substr. Пустая подстрока считается содержащейся в любой строке.',

    example:
      'ok := strings.Contains("roman@example.com", "@")\n' +
      'fmt.Println(ok)\n\n' +
      '// true',
    specification: 'https://pkg.go.dev/strings#Contains',
  },
  {
    name: 'ContainsAny',
    syntax: 'func ContainsAny(s, chars string) bool',
    parameters: [
      {
        name: 's',
        description: 'Строка, в которой выполняется поиск',
      },
      {
        name: 'chars',
        description: 'Набор символов, наличие любого из которых проверяется',
      },
    ],
    returns: [
      {
        name: 'bool',
        description: 'true, если хотя бы один символ из chars встречается в s',
      },
    ],
    description:
      'ContainsAny сообщает, содержит ли строка s хотя бы один из символов, перечисленных в chars.',

    example:
      'ok := strings.ContainsAny("qwerty123", "!@#$")\n' +
      'fmt.Println(ok)\n\n' +
      '// false',
    specification: 'https://pkg.go.dev/strings#ContainsAny',
  },
  {
    name: 'HasPrefix',
    syntax: 'func HasPrefix(s, prefix string) bool',
    parameters: [
      {
        name: 's',
        description: 'Проверяемая строка',
      },
      {
        name: 'prefix',
        description: 'Ожидаемый префикс',
      },
    ],
    returns: [
      {
        name: 'bool',
        description: 'true, если s начинается с prefix',
      },
    ],
    description:
      'HasPrefix сообщает, начинается ли строка s с указанного префикса prefix.',

    example:
      'ok := strings.HasPrefix("https://example.com", "https://")\n' +
      'fmt.Println(ok)\n\n' +
      '// true',
    specification: 'https://pkg.go.dev/strings#HasPrefix',
  },
  {
    name: 'HasSuffix',
    syntax: 'func HasSuffix(s, suffix string) bool',
    parameters: [
      {
        name: 's',
        description: 'Проверяемая строка',
      },
      {
        name: 'suffix',
        description: 'Ожидаемый суффикс',
      },
    ],
    returns: [
      {
        name: 'bool',
        description: 'true, если s заканчивается на suffix',
      },
    ],
    description:
      'HasSuffix сообщает, заканчивается ли строка s указанным суффиксом suffix.',

    example:
      'ok := strings.HasSuffix("report.pdf", ".pdf")\n' +
      'fmt.Println(ok)\n\n' +
      '// true',
    specification: 'https://pkg.go.dev/strings#HasSuffix',
  },
  {
    name: 'Index',
    syntax: 'func Index(s, substr string) int',
    parameters: [
      {
        name: 's',
        description: 'Строка, в которой выполняется поиск',
      },
      {
        name: 'substr',
        description: 'Искомая подстрока',
      },
    ],
    returns: [
      {
        name: 'int',
        description:
          'Индекс первого вхождения substr в s, либо -1, если подстрока не найдена',
      },
    ],
    description:
      'Index возвращает индекс первого вхождения подстроки substr в строке s. Поиск ведётся по байтам, а не по символам (rune).',

    example:
      'i := strings.Index("roman@example.com", "@")\n' +
      'fmt.Println(i)\n\n' +
      '// 5',
    specification: 'https://pkg.go.dev/strings#Index',
  },
  {
    name: 'IndexByte',
    syntax: 'func IndexByte(s string, c byte) int',
    parameters: [
      {
        name: 's',
        description: 'Строка, в которой выполняется поиск',
      },
      {
        name: 'c',
        description: 'Искомый байт',
      },
    ],
    returns: [
      {
        name: 'int',
        description:
          'Индекс первого вхождения байта c в s, либо -1, если байт не найден',
      },
    ],
    description:
      'IndexByte возвращает индекс первого вхождения байта c в строке s. Работает быстрее Index за счёт поиска одного конкретного байта, а не подстроки.',

    example:
      'i := strings.IndexByte("14:05", \':\')\n' +
      'fmt.Println(i)\n\n' +
      '// 2',
    specification: 'https://pkg.go.dev/strings#IndexByte',
  },
  {
    name: 'LastIndex',
    syntax: 'func LastIndex(s, substr string) int',
    parameters: [
      {
        name: 's',
        description: 'Строка, в которой выполняется поиск',
      },
      {
        name: 'substr',
        description: 'Искомая подстрока',
      },
    ],
    returns: [
      {
        name: 'int',
        description:
          'Индекс последнего вхождения substr в s, либо -1, если подстрока не найдена',
      },
    ],
    description:
      'LastIndex возвращает индекс последнего вхождения подстроки substr в строке s.',

    example:
      'i := strings.LastIndex("/usr/local/bin", "/")\n' +
      'fmt.Println(i)\n\n' +
      '// 10',
    specification: 'https://pkg.go.dev/strings#LastIndex',
  },
  {
    name: 'Count',
    syntax: 'func Count(s, substr string) int',
    parameters: [
      {
        name: 's',
        description: 'Строка, в которой выполняется подсчёт',
      },
      {
        name: 'substr',
        description: 'Подстрока, вхождения которой подсчитываются',
      },
    ],
    returns: [
      {
        name: 'int',
        description: 'Количество непересекающихся вхождений substr в s',
      },
    ],
    description:
      'Count возвращает количество непересекающихся вхождений подстроки substr в строке s. Если substr — пустая строка, Count возвращает число символов (rune) в s плюс один.',

    example:
      'n := strings.Count("Roman,30,Moscow", ",")\n' +
      'fmt.Println(n)\n\n' +
      '// 2',
    specification: 'https://pkg.go.dev/strings#Count',
  },
  {
    name: 'Split',
    syntax: 'func Split(s, sep string) []string',
    parameters: [
      {
        name: 's',
        description: 'Строка, которую нужно разбить',
      },
      {
        name: 'sep',
        description: 'Разделитель, по которому выполняется разбиение',
      },
    ],
    returns: [
      {
        name: '[]string',
        description: 'Срез подстрок, полученных при разбиении s по sep',
      },
    ],
    description:
      'Split разбивает строку s на все подстроки, разделённые sep, и возвращает срез этих подстрок. Если sep — пустая строка, Split разбивает строку после каждого символа (rune).',

    example:
      'parts := strings.Split("Roman,30,Moscow", ",")\n' +
      'fmt.Println(parts)\n\n' +
      '// [Roman 30 Moscow]',
    specification: 'https://pkg.go.dev/strings#Split',
  },
  {
    name: 'SplitN',
    syntax: 'func SplitN(s, sep string, n int) []string',
    parameters: [
      {
        name: 's',
        description: 'Строка, которую нужно разбить',
      },
      {
        name: 'sep',
        description: 'Разделитель, по которому выполняется разбиение',
      },
      {
        name: 'n',
        description:
          'Максимальное число возвращаемых подстрок; при n < 0 ограничения нет',
      },
    ],
    returns: [
      {
        name: '[]string',
        description: 'Срез не более чем из n подстрок',
      },
    ],
    description:
      'SplitN работает как Split, но ограничивает количество возвращаемых подстрок значением n. Последний элемент результата содержит остаток исходной строки, не тронутый разбиением.',

    example:
      'parts := strings.SplitN("key=value=extra", "=", 2)\n' +
      'fmt.Println(parts)\n\n' +
      '// [key value=extra]',
    specification: 'https://pkg.go.dev/strings#SplitN',
  },
  {
    name: 'Fields',
    syntax: 'func Fields(s string) []string',
    parameters: [
      {
        name: 's',
        description: 'Строка, которую нужно разбить на слова',
      },
    ],
    returns: [
      {
        name: '[]string',
        description: 'Срез подстрок без пробельных символов между ними',
      },
    ],
    description:
      'Fields разбивает строку s на подстроки, удаляя один или несколько идущих подряд пробельных символов, согласно unicode.IsSpace. Пустой срез возвращается, если строка состоит только из пробелов.',

    example:
      'words := strings.Fields("  The quick   brown fox ")\n' +
      'fmt.Println(words)\n\n' +
      '// [The quick brown fox]',
    specification: 'https://pkg.go.dev/strings#Fields',
  },
  {
    name: 'Join',
    syntax: 'func Join(elems []string, sep string) string',
    parameters: [
      {
        name: 'elems',
        description: 'Срез строк, которые нужно объединить',
      },
      {
        name: 'sep',
        description: 'Разделитель, вставляемый между элементами',
      },
    ],
    returns: [
      {
        name: 'string',
        description: 'Строка из элементов elems, объединённых через sep',
      },
    ],
    description:
      'Join объединяет элементы среза elems в одну строку, вставляя разделитель sep между соседними элементами.',

    example:
      's := strings.Join([]string{"usr", "local", "bin"}, "/")\n' +
      'fmt.Println(s)\n\n' +
      '// usr/local/bin',
    specification: 'https://pkg.go.dev/strings#Join',
  },
  {
    name: 'Repeat',
    syntax: 'func Repeat(s string, count int) string',
    parameters: [
      {
        name: 's',
        description: 'Строка, которую нужно повторить',
      },
      {
        name: 'count',
        description: 'Количество повторений',
      },
    ],
    returns: [
      {
        name: 'string',
        description: 'Строка s, повторённая count раз подряд',
      },
    ],
    description:
      'Repeat возвращает новую строку, состоящую из count копий строки s, идущих подряд без разделителей. Паникует, если count отрицательный.',

    example:
      's := strings.Repeat("-", 10)\n' + 'fmt.Println(s)\n\n' + '// ----------',
    specification: 'https://pkg.go.dev/strings#Repeat',
  },
  {
    name: 'Replace',
    syntax: 'func Replace(s, old, new string, n int) string',
    parameters: [
      {
        name: 's',
        description: 'Исходная строка',
      },
      {
        name: 'old',
        description: 'Подстрока, которую нужно заменить',
      },
      {
        name: 'new',
        description: 'Строка, на которую выполняется замена',
      },
      {
        name: 'n',
        description:
          'Максимальное число замен; при n < 0 заменяются все вхождения',
      },
    ],
    returns: [
      {
        name: 'string',
        description: 'Строка с выполненными заменами',
      },
    ],
    description:
      'Replace возвращает копию строки s, в которой первые n непересекающихся вхождений old заменены на new.',

    example:
      's := strings.Replace("error error error", "error", "warning", 2)\n' +
      'fmt.Println(s)\n\n' +
      '// warning warning error',
    specification: 'https://pkg.go.dev/strings#Replace',
  },
  {
    name: 'ReplaceAll',
    syntax: 'func ReplaceAll(s, old, new string) string',
    parameters: [
      {
        name: 's',
        description: 'Исходная строка',
      },
      {
        name: 'old',
        description: 'Подстрока, которую нужно заменить',
      },
      {
        name: 'new',
        description: 'Строка, на которую выполняется замена',
      },
    ],
    returns: [
      {
        name: 'string',
        description: 'Строка со всеми выполненными заменами',
      },
    ],
    description:
      'ReplaceAll возвращает копию строки s, в которой все непересекающиеся вхождения old заменены на new. Эквивалентно Replace с n = -1.',

    example:
      's := strings.ReplaceAll("final report v2", " ", "_")\n' +
      'fmt.Println(s)\n\n' +
      '// final_report_v2',
    specification: 'https://pkg.go.dev/strings#ReplaceAll',
  },
  {
    name: 'ToUpper',
    syntax: 'func ToUpper(s string) string',
    parameters: [
      {
        name: 's',
        description: 'Исходная строка',
      },
    ],
    returns: [
      {
        name: 'string',
        description: 'Строка s, приведённая к верхнему регистру',
      },
    ],
    description:
      'ToUpper возвращает копию строки s, в которой все буквы приведены к верхнему регистру согласно правилам Unicode.',

    example:
      's := strings.ToUpper("success")\n' + 'fmt.Println(s)\n\n' + '// SUCCESS',
    specification: 'https://pkg.go.dev/strings#ToUpper',
  },
  {
    name: 'ToLower',
    syntax: 'func ToLower(s string) string',
    parameters: [
      {
        name: 's',
        description: 'Исходная строка',
      },
    ],
    returns: [
      {
        name: 'string',
        description: 'Строка s, приведённая к нижнему регистру',
      },
    ],
    description:
      'ToLower возвращает копию строки s, в которой все буквы приведены к нижнему регистру согласно правилам Unicode.',

    example:
      's := strings.ToLower("Roman@Example.COM")\n' +
      'fmt.Println(s)\n\n' +
      '// roman@example.com',
    specification: 'https://pkg.go.dev/strings#ToLower',
  },
  {
    name: 'TrimSpace',
    syntax: 'func TrimSpace(s string) string',
    parameters: [
      {
        name: 's',
        description: 'Исходная строка',
      },
    ],
    returns: [
      {
        name: 'string',
        description: 'Строка s без пробельных символов по краям',
      },
    ],
    description:
      'TrimSpace возвращает копию строки s без пробельных символов в начале и в конце, согласно unicode.IsSpace.',

    example:
      'input := "  roman  "\n' +
      's := strings.TrimSpace(input)\n' +
      'fmt.Println(s)\n\n' +
      '// roman',
    specification: 'https://pkg.go.dev/strings#TrimSpace',
  },
  {
    name: 'Trim',
    syntax: 'func Trim(s, cutset string) string',
    parameters: [
      {
        name: 's',
        description: 'Исходная строка',
      },
      {
        name: 'cutset',
        description: 'Набор символов, удаляемых по краям строки',
      },
    ],
    returns: [
      {
        name: 'string',
        description: 'Строка s без символов из cutset по краям',
      },
    ],
    description:
      'Trim возвращает копию строки s без всех начальных и конечных символов, входящих в набор cutset.',

    example:
      'value := `"Moscow"`\n' +
      's := strings.Trim(value, `"`)\n' +
      'fmt.Println(s)\n\n' +
      '// Moscow',
    specification: 'https://pkg.go.dev/strings#Trim',
  },
  {
    name: 'TrimPrefix',
    syntax: 'func TrimPrefix(s, prefix string) string',
    parameters: [
      {
        name: 's',
        description: 'Исходная строка',
      },
      {
        name: 'prefix',
        description: 'Префикс, который нужно удалить',
      },
    ],
    returns: [
      {
        name: 'string',
        description:
          'Строка s без префикса prefix, либо исходная строка без изменений, если s не начинается с prefix',
      },
    ],
    description:
      'TrimPrefix возвращает строку s без указанного префикса prefix. Если s не начинается с prefix, строка возвращается без изменений.',

    example:
      's := strings.TrimPrefix("https://example.com", "https://")\n' +
      'fmt.Println(s)\n\n' +
      '// example.com',
    specification: 'https://pkg.go.dev/strings#TrimPrefix',
  },
  {
    name: 'TrimSuffix',
    syntax: 'func TrimSuffix(s, suffix string) string',
    parameters: [
      {
        name: 's',
        description: 'Исходная строка',
      },
      {
        name: 'suffix',
        description: 'Суффикс, который нужно удалить',
      },
    ],
    returns: [
      {
        name: 'string',
        description:
          'Строка s без суффикса suffix, либо исходная строка без изменений, если s не заканчивается на suffix',
      },
    ],
    description:
      'TrimSuffix возвращает строку s без указанного суффикса suffix. Если s не заканчивается на suffix, строка возвращается без изменений.',

    example:
      's := strings.TrimSuffix("report.pdf", ".pdf")\n' +
      'fmt.Println(s)\n\n' +
      '// report',
    specification: 'https://pkg.go.dev/strings#TrimSuffix',
  },
  {
    name: 'EqualFold',
    syntax: 'func EqualFold(s, t string) bool',
    parameters: [
      {
        name: 's',
        description: 'Первая сравниваемая строка',
      },
      {
        name: 't',
        description: 'Вторая сравниваемая строка',
      },
    ],
    returns: [
      {
        name: 'bool',
        description: 'true, если s и t равны без учёта регистра',
      },
    ],
    description:
      'EqualFold сообщает, совпадают ли строки s и t без учёта регистра букв, согласно упрощённому Unicode case-folding.',

    example:
      'ok := strings.EqualFold("Roman", "roman")\n' +
      'fmt.Println(ok)\n\n' +
      '// true',
    specification: 'https://pkg.go.dev/strings#EqualFold',
  },
];
