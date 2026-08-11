import type { IMethod } from '@/entities/method';

export const sort: IMethod[] = [
  {
    name: 'Ints',
    syntax: 'func Ints(x []int)',
    parameters: [
      {
        name: 'x',
        description: 'Слайс, который нужно отсортировать',
      },
    ],
    description:
      'Ints сортирует x по возрастанию, изменяя сам слайс. Использует pdqsort — быструю сортировку за O(n log n), неустойчивую (порядок равных элементов не сохраняется).',
    example:
      'nums := []int{5, 2, 8, 1}\n' +
      'sort.Ints(nums)\n' +
      'fmt.Println(nums)\n\n' +
      '// [1 2 5 8]',
    specification: 'https://pkg.go.dev/sort#Ints',
  },
  {
    name: 'Strings',
    syntax: 'func Strings(x []string)',
    parameters: [
      {
        name: 'x',
        description: 'Слайс, который нужно отсортировать',
      },
    ],
    description:
      'Strings сортирует x по возрастанию (лексикографически, побайтово), изменяя сам слайс. Использует pdqsort — быструю сортировку за O(n log n), неустойчивую (порядок равных элементов не сохраняется).',
    example:
      'words := []string{"banana", "apple", "cherry"}\n' +
      'sort.Strings(words)\n' +
      'fmt.Println(words)\n\n' +
      '// [apple banana cherry]',
    specification: 'https://pkg.go.dev/sort#Strings',
  },
  {
    name: 'Float64s',
    syntax: 'func Float64s(x []float64)',
    parameters: [
      {
        name: 'x',
        description: 'Слайс, который нужно отсортировать',
      },
    ],
    description:
      'Float64s сортирует x по возрастанию, изменяя сам слайс. Значения NaN размещаются перед остальными. Использует pdqsort — быструю сортировку за O(n log n), неустойчивую (порядок равных элементов не сохраняется).',
    example:
      'nums := []float64{3.1, 1.4, 2.7}\n' +
      'sort.Float64s(nums)\n' +
      'fmt.Println(nums)\n\n' +
      'withNaN := []float64{3.1, math.NaN(), 1.4, 2.7}\n' +
      'sort.Float64s(withNaN)\n' +
      'fmt.Println(withNaN)\n\n' +
      '// [1.4 2.7 3.1]\n' +
      '// [NaN 1.4 2.7 3.1]',
    specification: 'https://pkg.go.dev/sort#Float64s',
  },
  {
    name: 'Slice',
    syntax: 'func Slice(x any, less func(i, j int) bool)',
    parameters: [
      {
        name: 'x',
        description: 'Слайс, который нужно отсортировать',
      },
      {
        name: 'less',
        description: 'Функция сравнения элементов по их индексам',
      },
    ],
    description:
      'Slice сортирует x на месте согласно less(i, j), которая должна возвращать true, если элемент i должен стоять раньше элемента j. Паникует, если x — не слайс. Использует pdqsort — быструю сортировку за O(n log n), неустойчивую (порядок равных элементов не сохраняется).',
    example:
      'people := []string{"Roman", "Al", "Anna"}\n' +
      'sort.Slice(people, func(i, j int) bool {\n' +
      '  return len(people[i]) < len(people[j])\n' +
      '})\n' +
      'fmt.Println(people)\n\n' +
      '// [Al Anna Roman]',
    specification: 'https://pkg.go.dev/sort#Slice',
  },
  {
    name: 'SliceStable',
    syntax: 'func SliceStable(x any, less func(i, j int) bool)',
    parameters: [
      {
        name: 'x',
        description: 'Слайс, который нужно отсортировать',
      },
      {
        name: 'less',
        description: 'Функция сравнения элементов по их индексам',
      },
    ],
    description:
      'SliceStable сортирует x на месте согласно less(i, j), которая должна возвращать true, если элемент i должен стоять раньше элемента j. Паникует, если x — не слайс. Исходный относительный порядок элементов, для которых less возвращает false в обе стороны, сохраняется. Использует устойчивую сортировку за O(n log²n) — сохранение порядка равных элементов обходится дороже.',
    example:
      'type person struct {\n' +
      '  name string\n' +
      '  age  int\n' +
      '}\n\n' +
      'people := []person{{"Roman", 30}, {"Anna", 25}, {"Vasya", 30}}\n' +
      'sort.SliceStable(people, func(i, j int) bool {\n' +
      '  return people[i].age < people[j].age\n' +
      '})\n' +
      'fmt.Println(people)\n\n' +
      '// [{Anna 25} {Roman 30} {Vasya 30}]',
    specification: 'https://pkg.go.dev/sort#SliceStable',
  },
  {
    name: 'Sort',
    syntax: 'func Sort(data Interface)',
    parameters: [
      {
        name: 'data',
        description: 'Значение, реализующее sort.Interface',
      },
    ],
    description:
      'Sort сортирует data по возрастанию, используя её реализацию sort.Interface. Использует pdqsort — быструю сортировку за O(n log n), неустойчивую (порядок равных элементов не сохраняется).',
    example:
      'nums := []int{5, 2, 8, 1}\n' +
      'sort.Sort(sort.IntSlice(nums))\n' +
      'fmt.Println(nums)\n\n' +
      '// [1 2 5 8]',
    specification: 'https://pkg.go.dev/sort#Sort',
  },
  {
    name: 'Reverse',
    syntax: 'func Reverse(data Interface) Interface',
    parameters: [
      {
        name: 'data',
        description: 'Значение, реализующее sort.Interface',
      },
    ],
    returns: [
      {
        name: 'Interface',
        description: 'Обёртка над data с инвертированным порядком сравнения',
      },
    ],
    description:
      'Reverse возвращает sort.Interface, у которого Less(i, j) вызывает data.Less(j, i) — то есть меняет местами направление сравнения. Сама data не сортируется; результат нужно передать в Sort или SliceStable, чтобы получить убывающий порядок.',
    example:
      'nums := []int{5, 2, 8, 1}\n' +
      'sort.Sort(sort.Reverse(sort.IntSlice(nums)))\n' +
      'fmt.Println(nums)\n\n' +
      '// [8 5 2 1]',
    specification: 'https://pkg.go.dev/sort#Reverse',
  },
  {
    name: 'Search',
    syntax: 'func Search(n int, f func(int) bool) int',
    parameters: [
      {
        name: 'n',
        description: 'Число элементов в диапазоне поиска [0, n)',
      },
      {
        name: 'f',
        description: 'Предикат, ложный на начале диапазона и истинный на конце',
      },
    ],
    returns: [
      {
        name: 'int',
        description: 'Наименьший индекс i, для которого f(i) истинно',
      },
    ],
    description:
      'Search бинарным поиском находит в [0, n) точку, где f переключается с false на true, и возвращает индекс первого i, для которого f(i) — true. Это работает, только если f сначала возвращает false, а начиная с какого-то индекса — всегда true, без чередования. Если f нигде не истинна, Search возвращает n.',
    example:
      'sorted := []int{1, 3, 5, 7, 9, 11}\n' +
      'idx := sort.Search(len(sorted), func(i int) bool {\n' +
      '  return sorted[i] >= 7\n' +
      '})\n' +
      'fmt.Println(idx)\n\n' +
      '// 3',
    specification: 'https://pkg.go.dev/sort#Search',
  },
  {
    name: 'SearchInts',
    syntax: 'func SearchInts(a []int, x int) int',
    parameters: [
      {
        name: 'a',
        description: 'Слайс, отсортированный по возрастанию',
      },
      {
        name: 'x',
        description: 'Искомое значение',
      },
    ],
    returns: [
      {
        name: 'int',
        description: 'Индекс x в a, либо индекс, куда его следует вставить',
      },
    ],
    description:
      'SearchInts ищет x в отсортированном по возрастанию a. По возвращённому индексу нельзя понять, найден элемент или нет — для этого нужна дополнительная проверка a[idx] == x. Использует двоичный поиск за O(log n).',
    example:
      'sorted := []int{1, 3, 5, 7, 9, 11}\n' +
      'idx1 := sort.SearchInts(sorted, 7)\n' +
      'idx2 := sort.SearchInts(sorted, 6)\n' +
      'fmt.Println(idx1, idx2)\n\n' +
      '// 3 3',
    specification: 'https://pkg.go.dev/sort#SearchInts',
  },
  {
    name: 'IntsAreSorted',
    syntax: 'func IntsAreSorted(x []int) bool',
    parameters: [
      {
        name: 'x',
        description: 'Проверяемый слайс',
      },
    ],
    returns: [
      {
        name: 'bool',
        description: 'true, если x отсортирован по возрастанию',
      },
    ],
    description:
      'IntsAreSorted сообщает, отсортирован ли x по возрастанию. Проверяет соседние элементы по порядку за O(n).',
    example:
      'ok1 := sort.IntsAreSorted([]int{1, 2, 3})\n' +
      'ok2 := sort.IntsAreSorted([]int{3, 1, 2})\n' +
      'fmt.Println(ok1, ok2)\n\n' +
      '// true false',
    specification: 'https://pkg.go.dev/sort#IntsAreSorted',
  },
  {
    name: 'SliceIsSorted',
    syntax: 'func SliceIsSorted(x any, less func(i, j int) bool) bool',
    parameters: [
      {
        name: 'x',
        description: 'Проверяемый слайс',
      },
      {
        name: 'less',
        description: 'Функция сравнения элементов по их индексам',
      },
    ],
    returns: [
      {
        name: 'bool',
        description: 'true, если x отсортирован согласно less',
      },
    ],
    description:
      'SliceIsSorted сообщает, отсортирован ли x согласно less. Паникует, если x — не слайс. Проверяет соседние элементы по порядку за O(n).',
    example:
      'words := []string{"apple", "banana", "cherry"}\n' +
      'ok := sort.SliceIsSorted(words, func(i, j int) bool {\n' +
      '  return words[i] < words[j]\n' +
      '})\n' +
      'fmt.Println(ok)\n\n' +
      '// true',
    specification: 'https://pkg.go.dev/sort#SliceIsSorted',
  },
];
