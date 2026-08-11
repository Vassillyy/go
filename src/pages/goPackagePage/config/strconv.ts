import type { IMethod } from '@/entities/method';

export const strconv: IMethod[] = [
  {
    name: 'Atoi',
    syntax: 'func Atoi(s string) (int, error)',
    parameters: [
      {
        name: 's',
        description: 'Строка, которую нужно преобразовать в число',
      },
    ],
    returns: [
      {
        name: 'int',
        description: 'Число, полученное из s',
      },
      {
        name: 'error',
        description: 'Ошибка, если s не является корректным целым числом',
      },
    ],
    description:
      'Atoi преобразует s в int, интерпретируя её как десятичное число со знаком. Эквивалентно ParseInt(s, 10, 0).',
    example:
      'n1, err1 := strconv.Atoi("42")\n' +
      'n2, err2 := strconv.Atoi("abc")\n' +
      'fmt.Println(n1, err1)\n' +
      'fmt.Println(n2, err2)\n\n' +
      '// 42 <nil>\n' +
      '// 0 strconv.Atoi: parsing "abc": invalid syntax',
    specification: 'https://pkg.go.dev/strconv#Atoi',
  },
  {
    name: 'Itoa',
    syntax: 'func Itoa(i int) string',
    parameters: [
      {
        name: 'i',
        description: 'Число, которое нужно преобразовать в строку',
      },
    ],
    returns: [
      {
        name: 'string',
        description: 'Десятичное представление i',
      },
    ],
    description:
      'Itoa преобразует i в его десятичное строковое представление. Эквивалентно FormatInt(int64(i), 10).',
    example: 's := strconv.Itoa(42)\n' + 'fmt.Println(s)\n\n' + '// 42',
    specification: 'https://pkg.go.dev/strconv#Itoa',
  },
  {
    name: 'ParseInt',
    syntax:
      'func ParseInt(s string, base int, bitSize int) (i int64, err error)',
    parameters: [
      {
        name: 's',
        description: 'Строка с числом, возможно со знаком + или -',
      },
      {
        name: 'base',
        description: 'Система счисления',
      },
      {
        name: 'bitSize',
        description: 'Разрядность результата',
      },
    ],
    returns: [
      {
        name: 'i int64',
        description: 'Число, полученное из s',
      },
      {
        name: 'err error',
        description:
          'Ошибка, если s не удалось разобрать или число не влезает в bitSize',
      },
    ],
    description:
      'ParseInt разбирает s как целое число в base и возвращает i, которое должно помещаться в bitSize (8, 16, 32, 64 соответствуют int8, int16, int32, int64; 0 означает int). Если base равен 0, система счисления определяется по префиксу s: "0x" — 16-ричная, "0" или "0o" — 8-ричная, "0b" — двоичная, иначе десятичная.',
    example:
      'i1, err1 := strconv.ParseInt("2A", 16, 64)\n' +
      'i2, err2 := strconv.ParseInt("0x2A", 0, 64)\n' +
      'fmt.Println(i1, err1)\n' +
      'fmt.Println(i2, err2)\n\n' +
      '// 42 <nil>\n' +
      '// 42 <nil>',
    specification: 'https://pkg.go.dev/strconv#ParseInt',
  },
  {
    name: 'ParseUint',
    syntax: 'func ParseUint(s string, base int, bitSize int) (uint64, error)',
    parameters: [
      {
        name: 's',
        description: 'Строка с числом без знака',
      },
      {
        name: 'base',
        description: 'Система счисления',
      },
      {
        name: 'bitSize',
        description: 'Разрядность результата',
      },
    ],
    returns: [
      {
        name: 'uint64',
        description: 'Число, полученное из s',
      },
      {
        name: 'error',
        description: 'Ошибка, если s содержит знак или не удалось разобрать',
      },
    ],
    description:
      'ParseUint разбирает s как целое число без знака в base и возвращает результат, который должен помещаться в bitSize (8, 16, 32, 64 соответствуют uint8, uint16, uint32, uint64; 0 означает uint). Если base равен 0, система счисления определяется по префиксу s: "0x" — 16-ричная, "0" или "0o" — 8-ричная, "0b" — двоичная, иначе десятичная. s не должна содержать знак "+" или "-".',
    example:
      'u1, err1 := strconv.ParseUint("255", 10, 64)\n' +
      'u2, err2 := strconv.ParseUint("-5", 10, 64)\n' +
      'fmt.Println(u1, err1)\n' +
      'fmt.Println(u2, err2)\n\n' +
      '// 255 <nil>\n' +
      '// 0 strconv.ParseUint: parsing "-5": invalid syntax',
    specification: 'https://pkg.go.dev/strconv#ParseUint',
  },
  {
    name: 'ParseFloat',
    syntax: 'func ParseFloat(s string, bitSize int) (float64, error)',
    parameters: [
      {
        name: 's',
        description: 'Строка с числом с плавающей точкой',
      },
      {
        name: 'bitSize',
        description: 'Разрядность исходного числа',
      },
    ],
    returns: [
      {
        name: 'float64',
        description: 'Число, полученное из s',
      },
      {
        name: 'error',
        description: 'Ошибка, если s не является корректным числом',
      },
    ],
    description:
      'ParseFloat преобразует s в float64, округляя результат так, как если бы он был получен из числа bitSize — 32 соответствует float32, 64 — float64.',
    example:
      'f1, err1 := strconv.ParseFloat("3.14", 64)\n' +
      'f2, err2 := strconv.ParseFloat("abc", 64)\n' +
      'fmt.Println(f1, err1)\n' +
      'fmt.Println(f2, err2)\n\n' +
      '// 3.14 <nil>\n' +
      '// 0 strconv.ParseFloat: parsing "abc": invalid syntax',
    specification: 'https://pkg.go.dev/strconv#ParseFloat',
  },
  {
    name: 'ParseBool',
    syntax: 'func ParseBool(str string) (bool, error)',
    parameters: [
      {
        name: 'str',
        description: 'Строка с булевым значением',
      },
    ],
    returns: [
      {
        name: 'bool',
        description: 'Распознанное булево значение',
      },
      {
        name: 'error',
        description:
          'Ошибка, если строка не входит в список допустимых значений',
      },
    ],
    description:
      'ParseBool распознаёт "1", "t", "T", "TRUE", "true", "True" как true, а "0", "f", "F", "FALSE", "false", "False" — как false. Любое другое значение — ошибка.',
    example:
      'b1, err1 := strconv.ParseBool("true")\n' +
      'b2, err2 := strconv.ParseBool("yes")\n' +
      'fmt.Println(b1, err1)\n' +
      'fmt.Println(b2, err2)\n\n' +
      '// true <nil>\n' +
      '// false strconv.ParseBool: parsing "yes": invalid syntax',
    specification: 'https://pkg.go.dev/strconv#ParseBool',
  },
  {
    name: 'FormatInt',
    syntax: 'func FormatInt(i int64, base int) string',
    parameters: [
      {
        name: 'i',
        description: 'Число, которое нужно преобразовать в строку',
      },
      {
        name: 'base',
        description: 'Система счисления',
      },
    ],
    returns: [
      {
        name: 'string',
        description: 'Представление i в системе счисления base',
      },
    ],
    description:
      'FormatInt возвращает строковое представление i в base (от 2 до 36), используя строчные буквы a-z для цифр больше 9.',
    example:
      's1 := strconv.FormatInt(255, 16)\n' +
      's2 := strconv.FormatInt(-42, 2)\n' +
      'fmt.Println(s1)\n' +
      'fmt.Println(s2)\n\n' +
      '// ff\n' +
      '// -101010',
    specification: 'https://pkg.go.dev/strconv#FormatInt',
  },
  {
    name: 'FormatFloat',
    syntax: 'func FormatFloat(f float64, fmt byte, prec, bitSize int) string',
    parameters: [
      {
        name: 'f',
        description: 'Число, которое нужно преобразовать в строку',
      },
      {
        name: 'fmt',
        description: 'Формат записи',
      },
      {
        name: 'prec',
        description: 'Точность записи',
      },
      {
        name: 'bitSize',
        description: 'Разрядность исходного числа',
      },
    ],
    returns: [
      {
        name: 'string',
        description: 'Представление f в выбранном формате',
      },
    ],
    description:
      "FormatFloat преобразует f в строку согласно fmt и prec, округляя результат так, как если бы f было получено из числа bitSize (32 для float32, 64 для float64). Формат fmt: 'f' — без экспоненты, 'e'/'E' — с экспонентой, 'g'/'G' — компактная запись. prec задаёт число знаков после запятой; -1 использует минимально необходимое число знаков для точного восстановления f.",
    example:
      "s1 := strconv.FormatFloat(3.14159, 'f', 2, 64)\n" +
      "s2 := strconv.FormatFloat(3.14159, 'f', -1, 64)\n" +
      'fmt.Println(s1)\n' +
      'fmt.Println(s2)\n\n' +
      '// 3.14\n' +
      '// 3.14159',
    specification: 'https://pkg.go.dev/strconv#FormatFloat',
  },
  {
    name: 'FormatBool',
    syntax: 'func FormatBool(b bool) string',
    parameters: [
      {
        name: 'b',
        description: 'Значение, которое нужно преобразовать в строку',
      },
    ],
    returns: [
      {
        name: 'string',
        description: '"true" или "false"',
      },
    ],
    description: 'FormatBool возвращает "true" или "false" в зависимости от b.',
    example:
      's := strconv.FormatBool(true)\n' + 'fmt.Println(s)\n\n' + '// true',
    specification: 'https://pkg.go.dev/strconv#FormatBool',
  },
  {
    name: 'Quote',
    syntax: 'func Quote(s string) string',
    parameters: [
      {
        name: 's',
        description: 'Строка, которую нужно представить как литерал',
      },
    ],
    returns: [
      {
        name: 'string',
        description: 's в виде Go-литерала в двойных кавычках',
      },
    ],
    description:
      'Quote возвращает s в виде литерала Go-строки в двойных кавычках, экранируя управляющие и непечатаемые символы escape-последовательностями (\\t, \\n, \\xFF, \\u0100 и другими).',
    example:
      'q := strconv.Quote("hi\\tthere\\n")\n' +
      'fmt.Println(q)\n\n' +
      '// "hi\\tthere\\n"',
    specification: 'https://pkg.go.dev/strconv#Quote',
  },
  {
    name: 'Unquote',
    syntax: 'func Unquote(s string) (string, error)',
    parameters: [
      {
        name: 's',
        description: 'Строка-литерал',
      },
    ],
    returns: [
      {
        name: 'string',
        description: 'Значение литерала без кавычек и экранирования',
      },
      {
        name: 'error',
        description: 'Ошибка, если s не является корректным литералом',
      },
    ],
    description:
      'Unquote разбирает s как одинарный, двойной или обратный Go-литерал и возвращает его значение, раскрывая escape-последовательности.',
    example:
      's1, err1 := strconv.Unquote(`"hello"`)\n' +
      's2, err2 := strconv.Unquote(`hello`)\n' +
      'fmt.Printf("%q %v\\n", s1, err1)\n' +
      'fmt.Printf("%q %v\\n", s2, err2)\n\n' +
      '// "hello" <nil>\n' +
      '// "" invalid syntax',
    specification: 'https://pkg.go.dev/strconv#Unquote',
  },
  {
    name: 'AppendInt',
    syntax: 'func AppendInt(dst []byte, i int64, base int) []byte',
    parameters: [
      {
        name: 'dst',
        description: 'Слайс байт, к которому будет дописан результат',
      },
      {
        name: 'i',
        description: 'Число, которое нужно дописать',
      },
      {
        name: 'base',
        description: 'Система счисления',
      },
    ],
    returns: [
      {
        name: '[]byte',
        description: 'Слайс dst с дописанным представлением i',
      },
    ],
    description:
      'AppendInt дописывает представление i в base (от 2 до 36) в конец dst, переиспользуя его capacity — это снижает число аллокаций.',
    example:
      'b := strconv.AppendInt([]byte("n="), 42, 10)\n' +
      'fmt.Println(string(b))\n\n' +
      '// n=42',
    specification: 'https://pkg.go.dev/strconv#AppendInt',
  },
];
