import type { IMethod } from '@/entities/method';

export const strings: IMethod[] = [
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
      'Contains проверяет, содержится ли substr в s. Пустая подстрока считается содержащейся в любой строке.',
    example:
      'ok1 := strings.Contains("roman@example.com", "@")\n' +
      'ok2 := strings.Contains("roman@example.com", "#")\n' +
      'fmt.Println(ok1, ok2)\n\n' +
      '// true false',
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
      'ContainsAny проверяет, содержит ли s хотя бы один из символов, перечисленных в chars.',
    example:
      'ok1 := strings.ContainsAny("qwerty123", "0123456789")\n' +
      'ok2 := strings.ContainsAny("qwerty123", "!@#$")\n' +
      'fmt.Println(ok1, ok2)\n\n' +
      '// true false',
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
    description: 'HasPrefix проверяет, начинается ли s с prefix.',
    example:
      'ok1 := strings.HasPrefix("https://example.com", "https://")\n' +
      'ok2 := strings.HasPrefix("https://example.com", "http://")\n' +
      'fmt.Println(ok1, ok2)\n\n' +
      '// true false',
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
    description: 'HasSuffix проверяет, заканчивается ли s на suffix.',
    example:
      'ok1 := strings.HasSuffix("report.pdf", ".pdf")\n' +
      'ok2 := strings.HasSuffix("report.pdf", ".docx")\n' +
      'fmt.Println(ok1, ok2)\n\n' +
      '// true false',
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
        description: 'Индекс первого вхождения substr, либо -1',
      },
    ],
    description:
      'Index возвращает индекс первого вхождения substr в s, либо -1, если substr не найдена. Поиск ведётся по байтам, а не по символам (rune).',
    example:
      'i1 := strings.Index("roman@example.com", "@")\n' +
      'i2 := strings.Index("roman@example.com", "#")\n' +
      'fmt.Println(i1, i2)\n\n' +
      '// 5 -1',
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
        description: 'Индекс первого вхождения c, либо -1',
      },
    ],
    description:
      'IndexByte возвращает индекс первого вхождения c в s, либо -1, если байт не найден. Работает быстрее Index за счёт поиска одного конкретного байта, а не подстроки.',
    example:
      'i1 := strings.IndexByte("14:05", \':\')\n' +
      'i2 := strings.IndexByte("14:05", \'/\')\n' +
      'fmt.Println(i1, i2)\n\n' +
      '// 2 -1',
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
        description: 'Индекс последнего вхождения substr, либо -1',
      },
    ],
    description:
      'LastIndex возвращает индекс последнего вхождения substr в s, либо -1, если substr не найдена.',
    example:
      'i1 := strings.LastIndex("/usr/local/bin", "/")\n' +
      'i2 := strings.LastIndex("/usr/local/bin", "#")\n' +
      'fmt.Println(i1, i2)\n\n' +
      '// 10 -1',
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
      'Count возвращает количество непересекающихся вхождений substr в s: после каждого найденного совпадения поиск продолжается со следующего символа за ним, поэтому перекрывающиеся вхождения не считаются повторно. Если substr — пустая строка, Count возвращает число символов (rune) в s плюс один.',
    example:
      'n1 := strings.Count("Roman,30,Moscow", ",")\n' +
      'n2 := strings.Count("aaaa", "aa")\n' +
      'fmt.Println(n1, n2)\n\n' +
      '// 2 2',
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
      'Split разбивает s на все подстроки, разделённые sep, и возвращает срез этих подстрок. Если sep — пустая строка, Split разбивает строку после каждого символа (rune).',
    example:
      'parts1 := strings.Split("Roman,30,Moscow", ",")\n' +
      'parts2 := strings.Split("Roman", "")\n' +
      'fmt.Println(parts1)\n' +
      'fmt.Println(parts2)\n\n' +
      '// [Roman 30 Moscow]\n' +
      '// [R o m a n]',
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
        description: 'Ограничение на число возвращаемых подстрок',
      },
    ],
    returns: [
      {
        name: '[]string',
        description: 'Срез подстрок, полученных при разбиении s по sep',
      },
    ],
    description:
      'SplitN разбивает s на подстроки, разделённые sep, и возвращает не более n из них. Если n > 0, последний элемент результата содержит остаток строки, не тронутый разбиением. Если n == 0, возвращается nil. Если n < 0, возвращаются все подстроки без ограничений.',
    example:
      'parts1 := strings.SplitN("key=value=extra", "=", 2)\n' +
      'parts2 := strings.SplitN("key=value=extra", "=", -1)\n' +
      'fmt.Println(parts1)\n' +
      'fmt.Println(parts2)\n\n' +
      '// [key value=extra]\n' +
      '// [key value extra]',
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
      'Fields разбивает s на подстроки, удаляя один или несколько идущих подряд пробельных символов (пробел, таб, перевод строки и другие — согласно unicode.IsSpace). Пустой срез возвращается, если строка состоит только из пробельных символов.',
    example:
      'words := strings.Fields("  The quick\\tbrown\\nfox ")\n' +
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
      'Join объединяет элементы elems в одну строку, вставляя sep между соседними элементами.',
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
      'Repeat возвращает новую строку, состоящую из count копий s, идущих подряд без разделителей. Паникует, если count отрицательный.',
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
        description: 'Максимальное число замен',
      },
    ],
    returns: [
      {
        name: 'string',
        description: 'Строка с выполненными заменами',
      },
    ],
    description:
      'Replace возвращает копию s, в которой первые n непересекающихся вхождений old заменены на new. Если n < 0, заменяются все вхождения.',
    example:
      's1 := strings.Replace("error error error", "error", "warning", 2)\n' +
      's2 := strings.Replace("error error error", "error", "warning", -1)\n' +
      'fmt.Println(s1)\n' +
      'fmt.Println(s2)\n\n' +
      '// warning warning error\n' +
      '// warning warning warning',
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
      'ReplaceAll возвращает копию s, в которой все непересекающиеся вхождения old заменены на new. Эквивалентно Replace с n = -1.',
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
      'ToUpper возвращает копию s, в которой все буквы приведены к верхнему регистру согласно правилам Unicode.',
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
      'ToLower возвращает копию s, в которой все буквы приведены к нижнему регистру согласно правилам Unicode.',
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
      'TrimSpace возвращает копию s без пробельных символов в начале и в конце, согласно unicode.IsSpace.',
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
      'Trim возвращает копию s без всех начальных и конечных символов, входящих в набор cutset.',
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
        description: 'Строка s без prefix',
      },
    ],
    description:
      'TrimPrefix возвращает s без prefix. Если s не начинается с prefix, строка возвращается без изменений.',
    example:
      's1 := strings.TrimPrefix("https://example.com", "https://")\n' +
      's2 := strings.TrimPrefix("https://example.com", "ftp://")\n' +
      'fmt.Println(s1)\n' +
      'fmt.Println(s2)\n\n' +
      '// example.com\n' +
      '// https://example.com',
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
        description: 'Строка s без suffix',
      },
    ],
    description:
      'TrimSuffix возвращает s без suffix. Если s не заканчивается на suffix, строка возвращается без изменений.',
    example:
      's1 := strings.TrimSuffix("report.pdf", ".pdf")\n' +
      's2 := strings.TrimSuffix("report.pdf", ".docx")\n' +
      'fmt.Println(s1)\n' +
      'fmt.Println(s2)\n\n' +
      '// report\n' +
      '// report.pdf',
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
      'EqualFold проверяет, совпадают ли s и t без учёта регистра букв, согласно упрощённому Unicode case-folding.',
    example:
      'ok1 := strings.EqualFold("Roman", "roman")\n' +
      'ok2 := strings.EqualFold("Roman", "Vasya")\n' +
      'fmt.Println(ok1, ok2)\n\n' +
      '// true false',
    specification: 'https://pkg.go.dev/strings#EqualFold',
  },
  {
    name: 'NewReader',
    syntax: 'func NewReader(s string) *Reader',
    parameters: [
      {
        name: 's',
        description: 'Строка, из которой будет читать Reader',
      },
    ],
    returns: [
      {
        name: '*Reader',
        description: 'Reader, читающий байты s',
      },
    ],
    description:
      'NewReader оборачивает s в *strings.Reader, реализующий io.Reader и другие интерфейсы чтения. Reader только читает s и не поддерживает запись.',
    example:
      'r := strings.NewReader("Hello, Roman!")\n' +
      'buf := make([]byte, 5)\n' +
      'n, err := r.Read(buf)\n' +
      'fmt.Println(string(buf), n, err)\n\n' +
      '// Hello 5 <nil>',
    specification: 'https://pkg.go.dev/strings#NewReader',
  },
  {
    name: 'NewReplacer',
    syntax: 'func NewReplacer(oldnew ...string) *Replacer',
    parameters: [
      {
        name: 'oldnew',
        description: 'Чередующиеся пары old, new, old, new, ...',
      },
    ],
    returns: [
      {
        name: '*Replacer',
        description: 'Replacer, заменяющий все old на соответствующий new',
      },
    ],
    description:
      'NewReplacer создаёт Replacer из чередующихся пар old, new: каждое вхождение oldnew[2i] заменяется на oldnew[2i+1]. Замены выполняются за один проход по строке без пересечения совпадений, а если в одной позиции способны совпасть сразу несколько old, побеждает та пара, что раньше по порядку в oldnew. При нечётном количестве oldnew паникует.',
    example:
      'r1 := strings.NewReplacer("ab", "X", "a", "Y")\n' +
      'fmt.Println(r1.Replace("abc"))\n\n' +
      'r2 := strings.NewReplacer("a", "Y", "ab", "X")\n' +
      'fmt.Println(r2.Replace("abc"))\n\n' +
      '// Xc\n' +
      '// Ybc',
    specification: 'https://pkg.go.dev/strings#NewReplacer',
  },
  {
    name: 'Builder',
    kind: 'type',
    syntax:
      'type Builder struct{ ... }\n\n' +
      'func (b *Builder) Cap() int\n' +
      'func (b *Builder) Grow(n int)\n' +
      'func (b *Builder) Len() int\n' +
      'func (b *Builder) Reset()\n' +
      'func (b *Builder) String() string\n' +
      'func (b *Builder) Write(p []byte) (int, error)\n' +
      'func (b *Builder) WriteByte(c byte) error\n' +
      'func (b *Builder) WriteRune(r rune) (int, error)\n' +
      'func (b *Builder) WriteString(s string) (int, error)',
    description:
      'Builder — тип для эффективной сборки строки из частей. Данные копятся во внутреннем буфере без лишних промежуточных аллокаций, в отличие от конкатенации через +=. Нулевое значение Builder уже готово к использованию, но копировать Builder после первой записи нельзя. Доступны следующие методы:\n' +
      'Write, WriteString, WriteByte и WriteRune дописывают данные в конец.\n' +
      'String возвращает накопленный результат.\n' +
      'Len возвращает его текущую длину в байтах.\n' +
      'Grow заранее резервирует память под n байт.\n' +
      'Cap возвращает текущую вместимость буфера.\n' +
      'Reset очищает Builder для повторного использования.',
    example:
      'var b strings.Builder\n' +
      'b.Grow(16)\n' +
      'b.WriteString("Hello, ")\n' +
      "b.WriteByte('R')\n" +
      "b.WriteRune('o')\n" +
      'b.Write([]byte("man!"))\n' +
      'fmt.Println(b.String(), b.Len(), b.Cap())\n\n' +
      'b.Reset()\n' +
      'fmt.Println(b.Len())\n\n' +
      '// Hello, Roman! 13 16\n' +
      '// 0',
    specification: 'https://pkg.go.dev/strings#Builder',
  },
  {
    name: 'Reader',
    kind: 'type',
    syntax:
      'type Reader struct{ ... }\n\n' +
      'func (r *Reader) Len() int\n' +
      'func (r *Reader) Read(b []byte) (n int, err error)\n' +
      'func (r *Reader) ReadAt(b []byte, off int64) (n int, err error)\n' +
      'func (r *Reader) ReadByte() (byte, error)\n' +
      'func (r *Reader) ReadRune() (ch rune, size int, err error)\n' +
      'func (r *Reader) Reset(s string)\n' +
      'func (r *Reader) Seek(offset int64, whence int) (int64, error)\n' +
      'func (r *Reader) Size() int64\n' +
      'func (r *Reader) UnreadByte() error\n' +
      'func (r *Reader) UnreadRune() error\n' +
      'func (r *Reader) WriteTo(w io.Writer) (n int64, err error)',
    description:
      'Reader — тип, реализующий чтение из обычной строки как io.Reader и одновременно io.ReaderAt, io.ByteReader, io.ByteScanner, io.RuneReader, io.RuneScanner, io.Seeker и io.WriterTo, без копирования строки в []byte. Доступны следующие методы:\n' +
      'Read, ReadByte и ReadRune читают данные и сдвигают текущую позицию.\n' +
      'UnreadByte и UnreadRune возвращают последний прочитанный байт или символ обратно.\n' +
      'ReadAt читает по произвольному смещению, не трогая текущую позицию.\n' +
      'Seek перемещает текущую позицию.\n' +
      'WriteTo дочитывает всё оставшееся содержимое в io.Writer.\n' +
      'Len возвращает количество ещё не прочитанных байт.\n' +
      'Size возвращает размер исходной строки целиком.\n' +
      'Reset позволяет переиспользовать Reader для новой строки, не создавая новый объект.',
    example:
      'r := strings.NewReader("Hello")\n\n' +
      'c, _ := r.ReadByte()\n' +
      'r.UnreadByte() // возвращаем байт обратно\n\n' +
      'ch, _, _ := r.ReadRune()\n' +
      'r.UnreadRune() // и символ тоже\n\n' +
      'buf := make([]byte, 2)\n' +
      'r.Read(buf)\n\n' +
      'at := make([]byte, 2)\n' +
      'r.ReadAt(at, 3) // чтение по смещению не двигает позицию\n\n' +
      'fmt.Println(string(c), string(ch), string(buf), string(at), r.Len(), r.Size())\n\n' +
      'r.Seek(0, 0)\n' +
      'var sb strings.Builder\n' +
      'r.WriteTo(&sb)\n' +
      'fmt.Println(sb.String())\n\n' +
      'r.Reset("New")\n' +
      'fmt.Println(r.Len())\n\n' +
      '// H H He lo 3 5\n' +
      '// Hello\n' +
      '// 3',
    specification: 'https://pkg.go.dev/strings#Reader',
  },
  {
    name: 'Replacer',
    kind: 'type',
    syntax:
      'type Replacer struct{ ... }\n\n' +
      'func (r *Replacer) Replace(s string) string\n' +
      'func (r *Replacer) WriteString(w io.Writer, s string) (n int, err error)',
    description:
      'Replacer — тип, хранящий набор пар «что заменить → на что» и выполняющий все замены сразу за один проход по строке; в отличие от последовательных вызовов strings.ReplaceAll, ни один участок результата не обрабатывается повторно. Replacer безопасен для конкурентного использования из нескольких горутин. Доступны следующие методы:\n' +
      'Replace возвращает результат новой строкой.\n' +
      'WriteString делает то же самое, но пишет прямо в io.Writer, не создавая промежуточную строку.',
    example:
      'rep := strings.NewReplacer("<", "&lt;", ">", "&gt;")\n\n' +
      'fmt.Println(rep.Replace("<b>"))\n\n' +
      'var b strings.Builder\n' +
      'rep.WriteString(&b, "<b>")\n' +
      'fmt.Println(b.String())\n\n' +
      '// &lt;b&gt;\n' +
      '// &lt;b&gt;',
    specification: 'https://pkg.go.dev/strings#Replacer',
  },
];
