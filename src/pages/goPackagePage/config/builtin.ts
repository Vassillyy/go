import type { IMethod } from '@/entities/method';

export const builtin: IMethod[] = [
  {
    name: 'len',
    syntax: 'func len(v Type) int',
    parameters: [
      {
        name: 'v',
        description:
          'Строка, массив, слайс, мапа, канал или указатель на массив',
      },
    ],
    returns: [
      {
        name: 'int',
        description:
          'Количество элементов: для строки — число байт, для массива и слайса — число элементов, для мапы — число пар ключ-значение, для канала — число значений в буфере',
      },
    ],
    description: 'len возвращает размер v, смысл которого зависит от его типа.',
    example:
      'nums := []int{1, 2, 3}\n' +
      'n := len(nums)\n' +
      'fmt.Println(n)\n\n' +
      '// 3',
    specification: 'https://pkg.go.dev/builtin#len',
  },
  {
    name: 'cap',
    syntax: 'func cap(v Type) int',
    parameters: [
      {
        name: 'v',
        description: 'Слайс, массив, указатель на массив или канал',
      },
    ],
    returns: [
      {
        name: 'int',
        description:
          'Сколько элементов поместится в v, прежде чем при append слайса потребуется выделять новый массив (реаллокация)',
      },
    ],
    description: 'cap возвращает ёмкость v, смысл которой зависит от его типа.',
    example:
      's := make([]int, 2, 5)\n' +
      'c := cap(s)\n' +
      'fmt.Println(c)\n\n' +
      '// 5',
    specification: 'https://pkg.go.dev/builtin#cap',
  },
  {
    name: 'make',
    syntax: 'func make(t Type, size ...int) Type',
    parameters: [
      {
        name: 't',
        description: 'Тип слайса, мапы или канала, который нужно создать',
      },
      {
        name: 'size',
        description:
          'Один или два необязательных числа: длина и опционально ёмкость для слайса, ожидаемый размер для мапы, размер буфера для канала',
      },
    ],
    returns: [
      {
        name: 'Type',
        description: 'Готовое к использованию значение указанного типа',
      },
    ],
    description:
      'make создаёт и сразу инициализирует слайс, мапу или канал, возвращая не указатель, а само значение этого типа.',
    example: 's := make([]int, 3)\n' + 'fmt.Println(s)\n\n' + '// [0 0 0]',
    specification: 'https://pkg.go.dev/builtin#make',
  },
  {
    name: 'new',
    syntax: 'func new(Type) *Type',
    parameters: [
      {
        name: 'Type',
        description: 'Тип, под который выделяется память',
      },
    ],
    returns: [
      {
        name: '*Type',
        description:
          'Указатель на область памяти, заполненную нулевым значением этого типа',
      },
    ],
    description:
      'new выделяет память под значение указанного типа и возвращает указатель на него.',
    example: 'p := new(int)\n' + 'v := *p\n' + 'fmt.Println(v)\n\n' + '// 0',
    specification: 'https://pkg.go.dev/builtin#new',
  },
  {
    name: 'append',
    syntax: 'func append(slice []Type, elems ...Type) []Type',
    parameters: [
      {
        name: 'slice',
        description: 'Исходный слайс',
      },
      {
        name: 'elems',
        description: 'Один или несколько добавляемых элементов',
      },
    ],
    returns: [
      {
        name: '[]Type',
        description:
          'Слайс с добавленными элементами; если исходной ёмкости не хватило, выделяется новый массив побольше и данные копируются в него (реаллокация)',
      },
    ],
    description: 'append добавляет elems в конец slice.',
    example:
      's := []int{1, 2}\n' +
      's = append(s, 3)\n' +
      'fmt.Println(s)\n\n' +
      '// [1 2 3]',
    specification: 'https://pkg.go.dev/builtin#append',
  },
  {
    name: 'copy',
    syntax: 'func copy(dst, src []Type) int',
    parameters: [
      {
        name: 'dst',
        description: 'Слайс-приёмник',
      },
      {
        name: 'src',
        description: 'Слайс-источник',
      },
    ],
    returns: [
      {
        name: 'int',
        description:
          'Число скопированных элементов, равное меньшей из длин dst и src',
      },
    ],
    description: 'copy копирует элементы из src в dst.',
    example:
      'src := []int{1, 2, 3}\n' +
      'dst := make([]int, 3)\n' +
      'n := copy(dst, src)\n' +
      'fmt.Println(dst, n)\n\n' +
      '// [1 2 3] 3',
    specification: 'https://pkg.go.dev/builtin#copy',
  },
  {
    name: 'delete',
    syntax: 'func delete(m map[Key]Value, key Key)',
    parameters: [
      {
        name: 'm',
        description: 'Мапа',
      },
      {
        name: 'key',
        description: 'Ключ удаляемой пары',
      },
    ],
    description:
      'delete удаляет из m пару с ключом key; если такого ключа в мапе не было, ничего не делает.',
    example:
      'm := map[string]int{"a": 1, "b": 2}\n' +
      'delete(m, "a")\n' +
      'fmt.Println(m)\n\n' +
      '// map[b:2]',
    specification: 'https://pkg.go.dev/builtin#delete',
  },
  {
    name: 'clear',
    syntax: 'func clear(t Type)',
    parameters: [
      {
        name: 't',
        description: 'Мапа или слайс',
      },
    ],
    description:
      'clear очищает t: для мапы удаляет все пары ключ-значение, для слайса обнуляет каждый элемент, не меняя его длину.',
    example:
      'm := map[string]int{"a": 1}\n' +
      'clear(m)\n' +
      'fmt.Println(m)\n\n' +
      '// map[]',
    specification: 'https://pkg.go.dev/builtin#clear',
  },
  {
    name: 'min',
    syntax: 'func min(x Type, y ...Type) Type',
    parameters: [
      {
        name: 'x',
        description: 'Первое значение',
      },
      {
        name: 'y',
        description: 'Одно или несколько дополнительных значений того же типа',
      },
    ],
    returns: [
      {
        name: 'Type',
        description: 'Наименьшее значение среди всех переданных аргументов',
      },
    ],
    description: 'min возвращает наименьшее значение среди x и y.',
    example: 'm := min(3, 1, 2)\n' + 'fmt.Println(m)\n\n' + '// 1',
    specification: 'https://pkg.go.dev/builtin#min',
  },
  {
    name: 'max',
    syntax: 'func max(x Type, y ...Type) Type',
    parameters: [
      {
        name: 'x',
        description: 'Первое значение',
      },
      {
        name: 'y',
        description: 'Одно или несколько дополнительных значений того же типа',
      },
    ],
    returns: [
      {
        name: 'Type',
        description: 'Наибольшее значение среди всех переданных аргументов',
      },
    ],
    description: 'max возвращает наибольшее значение среди x и y.',
    example: 'm := max(3, 1, 2)\n' + 'fmt.Println(m)\n\n' + '// 3',
    specification: 'https://pkg.go.dev/builtin#max',
  },
  {
    name: 'complex',
    syntax: 'func complex(r, i FloatType) ComplexType',
    parameters: [
      {
        name: 'r',
        description: 'Действительная часть числа (float32 или float64)',
      },
      {
        name: 'i',
        description: 'Мнимая часть числа, того же типа, что и r',
      },
    ],
    returns: [
      {
        name: 'ComplexType',
        description: 'Комплексное число, собранное из r и i',
      },
    ],
    description:
      'complex строит комплексное число из действительной и мнимой части.',
    example: 'c := complex(2.0, 3.0)\n' + 'fmt.Println(c)\n\n' + '// (2+3i)',
    specification: 'https://pkg.go.dev/builtin#complex',
  },
  {
    name: 'real',
    syntax: 'func real(c ComplexType) FloatType',
    parameters: [
      {
        name: 'c',
        description: 'Комплексное число',
      },
    ],
    returns: [
      {
        name: 'FloatType',
        description: 'Действительная часть c',
      },
    ],
    description: 'real возвращает действительную часть комплексного числа c.',
    example: 'c := 2 + 3i\n' + 'r := real(c)\n' + 'fmt.Println(r)\n\n' + '// 2',
    specification: 'https://pkg.go.dev/builtin#real',
  },
  {
    name: 'imag',
    syntax: 'func imag(c ComplexType) FloatType',
    parameters: [
      {
        name: 'c',
        description: 'Комплексное число',
      },
    ],
    returns: [
      {
        name: 'FloatType',
        description: 'Мнимая часть c',
      },
    ],
    description: 'imag возвращает мнимую часть комплексного числа c.',
    example:
      'c := 2 + 3i\n' + 'im := imag(c)\n' + 'fmt.Println(im)\n\n' + '// 3',
    specification: 'https://pkg.go.dev/builtin#imag',
  },
  {
    name: 'close',
    syntax: 'func close(c chan<- Type)',
    parameters: [
      {
        name: 'c',
        description: 'Канал, доступный на отправку',
      },
    ],
    description:
      'close закрывает канал c: после этого отправка новых значений вызывает панику, а приём продолжает работать, пока не будут вычитаны все значения из буфера.',
    example:
      'ch := make(chan int, 1)\n' +
      'ch <- 42\n' +
      'close(ch)\n' +
      'v, ok := <-ch\n' +
      'fmt.Println(v, ok)\n\n' +
      '// 42 true',
    specification: 'https://pkg.go.dev/builtin#close',
  },
  {
    name: 'panic',
    syntax: 'func panic(v any)',
    parameters: [
      {
        name: 'v',
        description:
          'Произвольное значение, описывающее причину остановки (часто ошибка или строка)',
      },
    ],
    description:
      'panic прерывает обычное выполнение текущей функции и начинает раскрутку стека вызовов, выполняя по пути все отложенные вызовы defer.',
    example:
      'func mightPanic() {\n' +
      '  panic("что-то пошло не так")\n' +
      '}\n\n' +
      'mightPanic()\n\n' +
      '// panic: что-то пошло не так',
    specification: 'https://pkg.go.dev/builtin#panic',
  },
  {
    name: 'recover',
    syntax: 'func recover() any',
    returns: [
      {
        name: 'any',
        description:
          'Значение, переданное в panic, если паника была активна в момент вызова; иначе nil',
      },
    ],
    description:
      'recover останавливает раскрутку стека, начатую panic. Вызов имеет смысл только внутри функции, отложенной через defer.',
    example:
      'func safeCall() {\n' +
      '  defer func() {\n' +
      '    if r := recover(); r != nil {\n' +
      '      fmt.Println("recovered:", r)\n' +
      '    }\n' +
      '  }()\n' +
      '  panic("boom")\n' +
      '}\n\n' +
      'safeCall()\n\n' +
      '// recovered: boom',
    specification: 'https://pkg.go.dev/builtin#recover',
  },
  {
    name: 'print',
    syntax: 'func print(args ...Type)',
    parameters: [
      {
        name: 'args',
        description: 'Произвольные значения для вывода',
      },
    ],
    description:
      'print низкоуровнево выводит args в поток ошибок (stderr) в служебном формате, без участия пакета fmt; используется только для отладки рантайма.',
    example: 'print("debug")\n\n' + '// debug (в stderr)',
    specification: 'https://pkg.go.dev/builtin#print',
  },
  {
    name: 'println',
    syntax: 'func println(args ...Type)',
    parameters: [
      {
        name: 'args',
        description: 'Произвольные значения для вывода',
      },
    ],
    description:
      'println низкоуровнево выводит args в stderr, разделяя пробелами и добавляя перевод строки в конце.',
    example: 'println("a", "b")\n\n' + '// a b (в stderr)',
    specification: 'https://pkg.go.dev/builtin#println',
  },
];
