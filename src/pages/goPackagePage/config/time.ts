import type { IMethod } from '@/entities/method';

export const time: IMethod[] = [
  {
    name: 'Now',
    syntax: 'func Now() Time',
    returns: [
      {
        name: 'Time',
        description: 'Текущее локальное время',
      },
    ],
    description: 'Now возвращает текущее локальное время.',
    example:
      'now := time.Now()\n' +
      'fmt.Println(now.Year() > 2000)\n\n' +
      '// true',
    specification: 'https://pkg.go.dev/time#Now',
  },
  {
    name: 'Date',
    syntax:
      'func Date(year int, month Month, day, hour, min, sec, nsec int, loc *Location) Time',
    parameters: [
      {
        name: 'year',
        description: 'Год',
      },
      {
        name: 'month',
        description: 'Месяц',
      },
      {
        name: 'day',
        description: 'День месяца',
      },
      {
        name: 'hour',
        description: 'Час',
      },
      {
        name: 'min',
        description: 'Минута',
      },
      {
        name: 'sec',
        description: 'Секунда',
      },
      {
        name: 'nsec',
        description: 'Наносекунда',
      },
      {
        name: 'loc',
        description: 'Часовой пояс',
      },
    ],
    returns: [
      {
        name: 'Time',
        description: 'Собранное значение времени',
      },
    ],
    description:
      'Date собирает Time из отдельных компонентов в loc. Значения day, hour, min, sec и nsec могут выходить за обычные границы, Date нормализует результат.',
    example:
      't := time.Date(2026, time.August, 9, 15, 4, 5, 0, time.UTC)\n' +
      'fmt.Println(t)\n\n' +
      '// 2026-08-09 15:04:05 +0000 UTC',
    specification: 'https://pkg.go.dev/time#Date',
  },
  {
    name: 'Since',
    syntax: 'func Since(t Time) Duration',
    parameters: [
      {
        name: 't',
        description: 'Момент времени, от которого считается интервал',
      },
    ],
    returns: [
      {
        name: 'Duration',
        description: 'Время, прошедшее с t до настоящего момента',
      },
    ],
    description:
      'Since возвращает время, прошедшее с момента t. Это сокращение для time.Now().Sub(t).',
    example:
      'start := time.Now()\n' +
      'time.Sleep(10 * time.Millisecond)\n' +
      'elapsed := time.Since(start)\n' +
      'fmt.Println(elapsed)\n\n' +
      '// 10ms',
    specification: 'https://pkg.go.dev/time#Since',
  },
  {
    name: 'Sleep',
    syntax: 'func Sleep(d Duration)',
    parameters: [
      {
        name: 'd',
        description: 'Длительность паузы',
      },
    ],
    description:
      'Sleep приостанавливает текущую горутину не менее чем на d. Отрицательная или нулевая длительность заставляет Sleep вернуться немедленно.',
    example:
      'start := time.Now()\n' +
      'time.Sleep(10 * time.Millisecond)\n' +
      'elapsed := time.Since(start)\n' +
      'fmt.Println(elapsed)\n\n' +
      '// 10ms',
    specification: 'https://pkg.go.dev/time#Sleep',
  },
  {
    name: 'Parse',
    syntax: 'func Parse(layout, value string) (Time, error)',
    parameters: [
      {
        name: 'layout',
        description: 'Образец формата',
      },
      {
        name: 'value',
        description: 'Строка с датой и/или временем для разбора',
      },
    ],
    returns: [
      {
        name: 'Time',
        description: 'Разобранное значение времени',
      },
      {
        name: 'error',
        description: 'Ошибка, если value не соответствует layout',
      },
    ],
    description:
      'Parse разбирает value согласно layout и возвращает Time. В Go формат задаётся не буквами вроде YYYY-MM-DD, а конкретной эталонной датой 2006-01-02 15:04:05 — каждая часть value должна стоять на том же месте, что и соответствующая часть эталона в layout.',
    example:
      't1, err1 := time.Parse("2006-01-02", "2026-08-09")\n' +
      'fmt.Println(t1.Year(), t1.Month(), t1.Day(), err1)\n\n' +
      't2, err2 := time.Parse("2006-01-02 15:04:05", "2026-08-09 14:30:00")\n' +
      'fmt.Println(t2.Hour(), t2.Minute(), err2)\n\n' +
      '// 2026 August 9 <nil>\n' +
      '// 14 30 <nil>',
    specification: 'https://pkg.go.dev/time#Parse',
  },
  {
    name: 'ParseDuration',
    syntax: 'func ParseDuration(s string) (Duration, error)',
    parameters: [
      {
        name: 's',
        description: 'Строка с длительностью',
      },
    ],
    returns: [
      {
        name: 'Duration',
        description: 'Разобранная длительность',
      },
      {
        name: 'error',
        description: 'Ошибка, если s не является корректной длительностью',
      },
    ],
    description:
      'ParseDuration разбирает s — последовательность чисел с необязательным знаком и суффиксом единицы измерения ("ns", "us"/"µs", "ms", "s", "m", "h").',
    example:
      'd1, err1 := time.ParseDuration("1h30m")\n' +
      'd2, err2 := time.ParseDuration("300ms")\n' +
      'd3, err3 := time.ParseDuration("abc")\n' +
      'fmt.Println(d1, err1)\n' +
      'fmt.Println(d2, err2)\n' +
      'fmt.Println(d3, err3)\n\n' +
      '// 1h30m0s <nil>\n' +
      '// 300ms <nil>\n' +
      '// 0s time: invalid duration "abc"',
    specification: 'https://pkg.go.dev/time#ParseDuration',
  },
  {
    name: '(Time).Format',
    syntax: 'func (t Time) Format(layout string) string',
    parameters: [
      {
        name: 'layout',
        description: 'Образец формата',
      },
    ],
    returns: [
      {
        name: 'string',
        description: 'Текстовое представление t в формате layout',
      },
    ],
    description:
      'Format возвращает t в виде строки. layout задаётся эталонной датой 2006-01-02 15:04:05 — каждая часть результата встаёт на то же место, где в layout стоит соответствующая часть эталона.',
    example:
      't := time.Date(2026, time.August, 9, 15, 4, 5, 0, time.UTC)\n' +
      'formatted1 := t.Format("2006-01-02 15:04:05")\n' +
      'fmt.Println(formatted1)\n\n' +
      'formatted2 := t.Format("02.01.2006, Monday")\n' +
      'fmt.Println(formatted2)\n\n' +
      '// 2026-08-09 15:04:05\n' +
      '// 09.08.2026, Sunday',
    specification: 'https://pkg.go.dev/time#Time.Format',
  },
  {
    name: '(Time).Unix',
    syntax: 'func (t Time) Unix() int64',
    returns: [
      {
        name: 'int64',
        description: 'Число секунд, прошедших с 1 января 1970 UTC',
      },
    ],
    description:
      'Unix возвращает t как Unix-время — число секунд, прошедших с 1 января 1970 UTC. Результат не зависит от часового пояса, связанного с t.',
    example:
      't := time.Date(2026, time.August, 9, 0, 0, 0, 0, time.UTC)\n' +
      'unix := t.Unix()\n' +
      'fmt.Println(unix)\n\n' +
      '// 1786233600',
    specification: 'https://pkg.go.dev/time#Time.Unix',
  },
  {
    name: '(Time).Add',
    syntax: 'func (t Time) Add(d Duration) Time',
    parameters: [
      {
        name: 'd',
        description: 'Длительность, которую нужно прибавить',
      },
    ],
    returns: [
      {
        name: 'Time',
        description: 'Момент времени t + d',
      },
    ],
    description:
      'Add возвращает время t + d. Отрицательная d сдвигает время назад.',
    example:
      't := time.Date(2026, time.August, 9, 12, 0, 0, 0, time.UTC)\n' +
      'later := t.Add(2 * time.Hour)\n' +
      'formatted := later.Format("15:04")\n' +
      'fmt.Println(formatted)\n\n' +
      '// 14:00',
    specification: 'https://pkg.go.dev/time#Time.Add',
  },
  {
    name: '(Time).Sub',
    syntax: 'func (t Time) Sub(u Time) Duration',
    parameters: [
      {
        name: 'u',
        description: 'Момент времени, который нужно вычесть из t',
      },
    ],
    returns: [
      {
        name: 'Duration',
        description: 'Разница t - u',
      },
    ],
    description: 'Sub возвращает длительность t - u.',
    example:
      't1 := time.Date(2026, time.August, 9, 14, 0, 0, 0, time.UTC)\n' +
      't2 := time.Date(2026, time.August, 9, 12, 0, 0, 0, time.UTC)\n' +
      'diff := t1.Sub(t2)\n' +
      'fmt.Println(diff)\n\n' +
      '// 2h0m0s',
    specification: 'https://pkg.go.dev/time#Time.Sub',
  },
  {
    name: '(Time).Before',
    syntax: 'func (t Time) Before(u Time) bool',
    parameters: [
      {
        name: 'u',
        description: 'Момент времени для сравнения',
      },
    ],
    returns: [
      {
        name: 'bool',
        description: 'true, если t раньше u',
      },
    ],
    description: 'Before сообщает, наступает ли момент t раньше момента u.',
    example:
      't1 := time.Date(2026, time.August, 9, 12, 0, 0, 0, time.UTC)\n' +
      't2 := time.Date(2026, time.August, 10, 12, 0, 0, 0, time.UTC)\n' +
      'ok1 := t1.Before(t2)\n' +
      'ok2 := t2.Before(t1)\n' +
      'fmt.Println(ok1, ok2)\n\n' +
      '// true false',
    specification: 'https://pkg.go.dev/time#Time.Before',
  },
  {
    name: '(Time).After',
    syntax: 'func (t Time) After(u Time) bool',
    parameters: [
      {
        name: 'u',
        description: 'Момент времени для сравнения',
      },
    ],
    returns: [
      {
        name: 'bool',
        description: 'true, если t позже u',
      },
    ],
    description: 'After сообщает, наступает ли момент t позже момента u.',
    example:
      't1 := time.Date(2026, time.August, 9, 12, 0, 0, 0, time.UTC)\n' +
      't2 := time.Date(2026, time.August, 10, 12, 0, 0, 0, time.UTC)\n' +
      'ok1 := t2.After(t1)\n' +
      'ok2 := t1.After(t2)\n' +
      'fmt.Println(ok1, ok2)\n\n' +
      '// true false',
    specification: 'https://pkg.go.dev/time#Time.After',
  },
  {
    name: '(Time).Equal',
    syntax: 'func (t Time) Equal(u Time) bool',
    parameters: [
      {
        name: 'u',
        description: 'Момент времени для сравнения',
      },
    ],
    returns: [
      {
        name: 'bool',
        description: 'true, если t и u — один и тот же момент времени',
      },
    ],
    description:
      'Equal сообщает, представляют ли t и u один и тот же момент времени, даже если они в разных часовых поясах. В отличие от оператора ==, который сравнивает t и u как структуры (включая часовой пояс), Equal сравнивает именно момент времени.',
    example:
      'utc := time.Date(2026, time.August, 9, 12, 0, 0, 0, time.UTC)\n' +
      'msk := utc.In(time.FixedZone("MSK", 3*3600))\n' +
      'sameStruct := utc == msk\n' +
      'sameInstant := utc.Equal(msk)\n' +
      'fmt.Println(sameStruct, sameInstant)\n\n' +
      '// false true',
    specification: 'https://pkg.go.dev/time#Time.Equal',
  },
  {
    name: '(Duration).String',
    syntax: 'func (d Duration) String() string',
    returns: [
      {
        name: 'string',
        description: 'Текстовое представление d',
      },
    ],
    description:
      'String возвращает длительность d в виде строки. Ведущие нулевые единицы опускаются; для длительностей короче секунды используется более мелкая единица (милли-, микро- или наносекунды).',
    example:
      'd1 := 90 * time.Minute\n' +
      's1 := d1.String()\n' +
      'fmt.Println(s1)\n\n' +
      'd2 := 250 * time.Millisecond\n' +
      's2 := d2.String()\n' +
      'fmt.Println(s2)\n\n' +
      '// 1h30m0s\n' +
      '// 250ms',
    specification: 'https://pkg.go.dev/time#Duration.String',
  },
  {
    name: 'Nanosecond',
    syntax: 'const Nanosecond Duration = 1',
    returns: [
      {
        name: 'Duration',
        description: 'Единица длительности, равная одной наносекунде',
      },
    ],
    description:
      'Nanosecond — базовая единица Duration: сама Duration хранится как число наносекунд, поэтому Nanosecond равна 1. От неё через умножение выражены остальные единицы: Microsecond, Millisecond, Second, Minute и Hour.',
    example: 'd := 5 * time.Nanosecond\n' + 'fmt.Println(d)\n\n' + '// 5ns',
    specification: 'https://pkg.go.dev/time#Nanosecond',
  },
  {
    name: 'Microsecond',
    syntax: 'const Microsecond Duration = 1000 * Nanosecond',
    returns: [
      {
        name: 'Duration',
        description: 'Единица длительности, равная одной микросекунде',
      },
    ],
    description: 'Microsecond — единица Duration, равная 1000 наносекунд.',
    example: 'd := 5 * time.Microsecond\n' + 'fmt.Println(d)\n\n' + '// 5µs',
    specification: 'https://pkg.go.dev/time#Microsecond',
  },
  {
    name: 'Millisecond',
    syntax: 'const Millisecond Duration = 1000 * Microsecond',
    returns: [
      {
        name: 'Duration',
        description: 'Единица длительности, равная одной миллисекунде',
      },
    ],
    description: 'Millisecond — единица Duration, равная 1000 микросекунд.',
    example: 'd := 5 * time.Millisecond\n' + 'fmt.Println(d)\n\n' + '// 5ms',
    specification: 'https://pkg.go.dev/time#Millisecond',
  },
  {
    name: 'Second',
    syntax: 'const Second Duration = 1000 * Millisecond',
    returns: [
      {
        name: 'Duration',
        description: 'Единица длительности, равная одной секунде',
      },
    ],
    description: 'Second — единица Duration, равная 1000 миллисекунд.',
    example: 'd := 5 * time.Second\n' + 'fmt.Println(d)\n\n' + '// 5s',
    specification: 'https://pkg.go.dev/time#Second',
  },
  {
    name: 'Minute',
    syntax: 'const Minute Duration = 60 * Second',
    returns: [
      {
        name: 'Duration',
        description: 'Единица длительности, равная одной минуте',
      },
    ],
    description: 'Minute — единица Duration, равная 60 секунд.',
    example: 'd := 5 * time.Minute\n' + 'fmt.Println(d)\n\n' + '// 5m0s',
    specification: 'https://pkg.go.dev/time#Minute',
  },
  {
    name: 'Hour',
    syntax: 'const Hour Duration = 60 * Minute',
    returns: [
      {
        name: 'Duration',
        description: 'Единица длительности, равная одному часу',
      },
    ],
    description: 'Hour — единица Duration, равная 60 минут.',
    example: 'd := 5 * time.Hour\n' + 'fmt.Println(d)\n\n' + '// 5h0m0s',
    specification: 'https://pkg.go.dev/time#Hour',
  },
];
