import type { ITopicConfig } from './types.ts';

export const interfaceTopic: ITopicConfig = {
  sections: [
    {
      heading: 'Что такое интерфейс',
      body: 'Интерфейс — это тип, определяемый набором методов, а не структурой данных.\n' +
        'Любой тип, у которого есть все перечисленные в интерфейсе методы с такими же сигнатурами, автоматически удовлетворяет этому интерфейсу — это называется неявной реализацией.',
      examples: [
        {
          caption: 'Circle реализует интерфейс методом Area()',
          code:
            'type Shape interface {\n' +
            '  Area() float64\n' +
            '}\n\n' +
            'type Circle struct{\n' +
            '  R float64\n' +
            '}\n\n' +
            'func (c Circle) Area() float64 {\n' +
            '  return 3.14 * c.R * c.R\n' +
            '}\n\n' +
            'var s Shape = Circle{R: 2}\n' +
            'a := s.Area()\n' +
            'fmt.Println(a)\n\n' +
            '// 12.56',
        },
      ],
    },
    {
      heading: 'Методы: value vs pointer receiver',
      body:
        'Метод можно объявить с получателем-значением или с получателем-указателем — от этого зависит, кто удовлетворяет интерфейсу.\n' +
        'Если метод объявлен с получателем-значением, интерфейсу удовлетворяют и значение, и указатель (при вызове через указатель компилятор сам разыменовывает его).\n' +
        'Если метод объявлен с получателем-указателем, интерфейсу удовлетворяет только указатель — значение не подходит, потому что вызвать метод, меняющий получатель, на копии нельзя.\n' +
        'Правило простое: value receiver — работают оба, pointer receiver — только указатель.',
      examples: [
        {
          caption: 'Value receiver: подходят и Circle, и *Circle',
          code:
            'type Shape interface{\n' +
            '  Area() float64\n' +
            '}\n\n' +
            'type Circle struct{\n' +
            '  R float64\n' +
            '}\n' +
            'func (c Circle) Area() float64 {\n' +
            '  return 3.14 * c.R * c.R\n' +
            '}\n\n' +
            'var s1 Shape = Circle{R: 2}\n' +
            'var s2 Shape = &Circle{R: 2}\n' +
            'fmt.Println(s1.Area(), s2.Area())\n\n' +
            '// 12.56 12.56',
        },
        {
          caption: 'Pointer receiver: подходит только *Circle',
          code:
            'type Shape interface{\n' +
            '  Area() float64\n' +
            '}\n\n' +
            'type Circle struct{\n' +
            '  R float64\n' +
            '}\n\n' +
            'func (c *Circle) Area() float64 {\n' +
            '  return 3.14 * c.R * c.R\n' +
            '}\n\n' +
            'var s Shape = &Circle{R: 2} // указатель\n' +
            '// var s Shape = Circle{R: 2} // ошибка компиляции\n' +
            'fmt.Println(s.Area())\n\n' +
            '// 12.56',
        },
      ],
    },
    {
      heading: 'Пустой интерфейс, any и утверждение типа',
      body: 'interface{} — интерфейс без единого метода, поэтому ему удовлетворяет значение абсолютно любого типа.\n' +
        'any — это просто алиас для interface{}, введённый для читаемости.\n' +
        'За универсальность приходится расплачиваться потерей информации о конкретном типе на этапе компиляции — её приходится доставать обратно через утверждение типа x.(T).\n' +
        'Однопеременная форма — x.(T): если динамический тип x не совпадает с T, происходит паника.\n' +
        'Двухпеременная форма — v, ok := x.(T): вместо паники возвращает ok == false и нулевое значение вместо v — это безопасный способ проверить и достать значение конкретного типа.',
      examples: [
        {
          caption: 'any хранит значения любых типов',
          code:
            'items := []any{1, "two", 3.0, true}\n' +
            'fmt.Println(items)\n\n' +
            '// [1 two 3 true]',
        },
        {
          caption: 'Безопасная форма v, ok := x.(T)',
          code:
            'var v any = "hello"\n\n' +
            's, ok := v.(string)\n' +
            'fmt.Println(s, ok)\n\n' +
            'n, ok := v.(int)\n' +
            'fmt.Println(n, ok)\n\n' +
            '// hello true\n' +
            '// 0 false',
        }
      ],
    },
    {
      heading: 'Значение интерфейсного типа',
      body:
        'Значение переменной интерфейсного типа — это пара: динамический тип и данные.\n' +
        'Пока в переменную ничего не присвоено, обе части пары пусты, и значение равно nil.\n' +
        'После присвоения конкретного значения пара заполняется: интерфейс хранит и тип, и данные.',
      examples: [
        {
          caption: 'any: нулевое значение — nil; после присвоения хранит тип и данные',
          code:
            'var v any\n' +
            'fmt.Println(v == nil)\n\n' +
            'v = 42\n' +
            'fmt.Printf("%T %v\\n", v, v)\n\n' +
            '// true\n' +
            '// int 42',
        },
        {
          caption: 'Кастомный интерфейс: та же пара тип + данные',
          code:
            'type Shape interface {\n' +
            '  Area() float64\n' +
            '}\n\n' +
            'type Circle struct{\n' +
            '  R float64\n' +
            '}\n' +
            'func (c Circle) Area() float64 {\n' +
            '  return 3.14 * c.R * c.R\n' +
            '}\n\n' +
            'var s Shape\n' +
            'fmt.Println(s == nil)\n\n' +
            's = Circle{R: 2}\n' +
            'fmt.Printf("%T %v\\n", s, s)\n\n' +
            '// true\n' +
            '// main.Circle {2}',
        },
      ],
    },
    {
      heading: 'Типизированный nil — частая ловушка',
      body:
        'Значение переменной интерфейсного типа равно nil, только если пуста вся пара — и динамический тип, и данные.\n' +
        'Если присвоить типизированный nil-указатель, тип у пары уже не пуст — значит, значение не равно nil, даже если сами данные (указатель) равны nil. Сравнение с nil проверяет всю пару целиком, а не только данные.',
      examples: [
        {
          caption: 'nil-указатель в интерфейсе ≠ nil-значение интерфейса',
          code:
            'type MyError struct{}\n\n' +
            'func (e *MyError) Error() string {\n' +
            '  return "boom"\n' +
            '}\n\n' +
            'func doWork() *MyError {\n' +
            '  return nil\n' +
            '}\n\n' +
            'func run() error {\n' +
            '  var err *MyError = doWork()\n' +
            '  return err // тип *MyError, данные nil — пара не пуста\n' +
            '}\n\n' +
            'e := run()\n' +
            'fmt.Println(e == nil)\n\n' +
            '// false',
        },
      ],
    },
    {
      heading: 'type switch',
      body:
        'switch со специальной формой x := v.(type) сравнивает динамический тип v поочерёдно с типами в case.\n' +
        'В теле подходящей ветки x уже имеет конкретный тип из этого case — это удобный способ разобрать значение интерфейсного типа на несколько известных вариантов сразу.\n' +
        'Форма x := v.(type) работает только внутри switch; переменную x можно опустить, если она не нужна. Ветка default срабатывает, если ни один тип не совпал.',
      examples: [
        {
          caption: 'Разбор типа через switch x := v.(type)',
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
      body:
        'Интерфейсы можно составлять из других интерфейсов встраиванием — итоговый интерфейс требует всех методов всех встроенных интерфейсов сразу.\n' +
        'Это именно композиция методов, а не наследование: тип обязан иметь все методы, и только тогда он удовлетворяет итоговому интерфейсу.\n' +
        'Встраивать можно сколько угодно интерфейсов. Если два встроенных интерфейса содержат метод с одинаковым именем, но разными сигнатурами — это ошибка компиляции.',
      examples: [
        {
          caption: 'ReadWriter требует и Read, и Write',
          code:
            'type Reader interface{\n' +
            '  Read() string\n' +
            '}\n' +
            'type Writer interface{\n' +
            '  Write(s string)\n' +
            '}\n' +
            'type ReadWriter interface {\n' +
            '  Reader\n' +
            '  Writer\n' +
            '}\n\n' +
            'type Buffer struct{\n' +
            '  data string\n' +
            '}\n\n' +
            'func (b *Buffer) Read() string {\n' +
            '  return b.data\n' +
            '}\n' +
            'func (b *Buffer) Write(s string) {\n' +
            '  b.data += s\n' +
            '}\n\n' +
            'var rw ReadWriter = &Buffer{}\n' +
            'rw.Write("hi")\n' +
            'fmt.Println(rw.Read())\n\n' +
            '// hi',
        },
      ],
    },
  ],
};
