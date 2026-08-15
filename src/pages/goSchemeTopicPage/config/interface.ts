import type { ITopicConfig } from './types.ts';

export const interfaceTopic: ITopicConfig = {
  sections: [
    {
      heading: 'Что такое интерфейс',
      body: 'Интерфейс — это тип, который описывает поведение через набор сигнатур методов, а не через данные. Любой тип, у которого есть все перечисленные в интерфейсе методы с такими же сигнатурами, автоматически удовлетворяет этому интерфейсу.',
      examples: [
        {
          code:
            'type Shape interface {\n' +
            '  Area() float64\n' +
            '}\n\n' +
            'type Circle struct{ R float64 }\n\n' +
            'func (c Circle) Area() float64 { return 3.14 * c.R * c.R }\n\n' +
            'var s Shape = Circle{R: 2}\n' +
            'a := s.Area()\n' +
            'fmt.Println(a)\n\n' +
            '// 12.56',
        },
      ],
    },
    {
      heading: 'Неявная реализация',
      body: 'Тип реализует интерфейс просто по факту наличия нужных методов — компилятор проверяет это структурно в месте присваивания или передачи значения, а не по явной декларации, как implements в других языках. Это позволяет реализовать чужой интерфейс для своего типа, даже не зная заранее о его существовании. Соответствие типа интерфейсу можно проверить сразу на этапе компиляции идиомой var _ Interface = Type{} — если метод отсутствует, ошибка появится тут же, а не в месте реального использования.',
      examples: [
        {
          code:
            'type Stringer interface {\n' +
            '  String() string\n' +
            '}\n\n' +
            'type ID int\n\n' +
            'func (id ID) String() string { return fmt.Sprintf("ID(%d)", int(id)) }\n\n' +
            'var _ Stringer = ID(0) // проверка соответствия на этапе компиляции',
        },
      ],
    },
    {
      heading: 'Пустой интерфейс и any',
      body: 'interface{} — интерфейс без единого метода, поэтому ему удовлетворяет значение абсолютно любого типа. any — это просто алиас для interface{}, введённый для читаемости. За универсальность приходится расплачиваться потерей информации о конкретном типе на этапе компиляции — её приходится доставать обратно через утверждение типа.',
      examples: [
        {
          code:
            'items := []any{1, "two", 3.0, true}\n' +
            'fmt.Println(items)\n\n' +
            '// [1 two 3 true]',
        },
      ],
    },
    {
      heading: 'Значение интерфейса: тип и значение',
      body: 'Переменная интерфейсного типа — это пара: конкретный (динамический) тип значения и само значение. Пока в интерфейс не присвоено ничего, обе части пары пусты, и интерфейс равен nil; как только присвоено конкретное значение, интерфейс хранит и его тип, и его данные.',
      examples: [
        {
          code:
            'var v any\n' +
            'empty := v == nil\n' +
            'fmt.Println(empty)\n\n' +
            'v = 42\n' +
            't := reflect.TypeOf(v)\n' +
            'fmt.Println(t, v)\n\n' +
            '// true\n' +
            '// int 42',
        },
      ],
    },
    {
      heading: 'Типизированный nil — частая ловушка',
      body: 'Интерфейс равен nil, только если пуста вся пара целиком — и тип, и значение. Если в интерфейсную переменную положить типизированный nil-указатель (например, nil *MyError), тип у пары уже не пуст, а значит сам интерфейс не равен nil, даже если хранящийся внутри указатель равен nil. Эта ловушка регулярно ломает код, где error возвращается как интерфейс, а фактическое значение — как nil-указатель на конкретный тип ошибки.',
      examples: [
        {
          code:
            'type MyError struct{}\n\n' +
            'func (e *MyError) Error() string { return "boom" }\n\n' +
            'func doWork() *MyError { return nil }\n\n' +
            'func run() error {\n' +
            '  var err *MyError = doWork()\n' +
            '  return err // тип известен, значение nil — интерфейс не nil\n' +
            '}\n\n' +
            'e := run()\n' +
            'fmt.Println(e == nil)\n\n' +
            '// false',
        },
      ],
    },
    {
      heading: 'Утверждение типа',
      body: 'x.(T) достаёт из интерфейса x конкретное значение типа T. Однопеременная форма паникует, если динамический тип x не совпадает с T; форма v, ok := x.(T) вместо паники возвращает ok == false и нулевое значение вместо v — это безопасный способ проверить и достать значение конкретного типа.',
      examples: [
        {
          code:
            'var v any = "hello"\n\n' +
            's, ok := v.(string)\n' +
            'fmt.Println(s, ok)\n\n' +
            'n, ok := v.(int)\n' +
            'fmt.Println(n, ok)\n\n' +
            '// hello true\n' +
            '// 0 false',
        },
      ],
    },
    {
      heading: 'type switch',
      body: 'switch со специальной формой x := x.(type) сравнивает динамический тип x поочерёдно с типами в case, и в теле подходящей ветки x уже имеет этот конкретный тип — удобный способ разобрать значение произвольного интерфейсного типа на несколько известных вариантов сразу.',
      examples: [
        {
          code:
            'func describe(v any) string {\n' +
            '  switch x := v.(type) {\n' +
            '  case int:\n' +
            '    return fmt.Sprintf("int: %d", x)\n' +
            '  case string:\n' +
            '    return fmt.Sprintf("string: %q", x)\n' +
            '  default:\n' +
            '    return "unknown"\n' +
            '  }\n' +
            '}\n\n' +
            'r1 := describe(42)\n' +
            'r2 := describe("hi")\n' +
            'fmt.Println(r1)\n' +
            'fmt.Println(r2)\n\n' +
            '// int: 42\n' +
            '// string: "hi"',
        },
      ],
    },
    {
      heading: 'Композиция интерфейсов',
      body: 'Интерфейсы можно составлять из других интерфейсов встраиванием — итоговый интерфейс требует всех методов всех встроенных интерфейсов сразу. Так в стандартной библиотеке io.ReadWriter собран из io.Reader и io.Writer: ему удовлетворяет только тип, у которого есть оба метода, Read и Write.',
      examples: [
        {
          code:
            'type Reader interface{ Read() string }\n' +
            'type Writer interface{ Write(s string) }\n\n' +
            'type ReadWriter interface {\n' +
            '  Reader\n' +
            '  Writer\n' +
            '}\n\n' +
            'type Buffer struct{ data string }\n\n' +
            'func (b *Buffer) Read() string   { return b.data }\n' +
            'func (b *Buffer) Write(s string) { b.data += s }\n\n' +
            'var rw ReadWriter = &Buffer{}\n' +
            'rw.Write("hi")\n' +
            'v := rw.Read()\n' +
            'fmt.Println(v)\n\n' +
            '// hi',
        },
      ],
    },
  ],
};