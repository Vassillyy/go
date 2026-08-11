import type { IMethod } from '@/entities/method';

export const os: IMethod[] = [
  {
    name: 'Args',
    syntax: 'var Args []string',
    returns: [
      {
        name: '[]string',
        description: 'Аргументы командной строки, переданные при запуске',
      },
    ],
    description:
      'Args содержит аргументы командной строки, с которыми была запущена программа. Args[0] — путь к исполняемому файлу, Args[1:] — остальные переданные аргументы.',
    example:
      'fmt.Println(os.Args)\n\n' +
      '// если запустить: go run main.go hello world\n' +
      '// [/tmp/go-build123/main hello world]',
    specification: 'https://pkg.go.dev/os#Args',
  },
  {
    name: 'Getenv',
    syntax: 'func Getenv(key string) string',
    parameters: [
      {
        name: 'key',
        description: 'Имя переменной окружения',
      },
    ],
    returns: [
      {
        name: 'string',
        description: 'Значение переменной, либо пустая строка',
      },
    ],
    description:
      'Getenv возвращает значение key. Если она не установлена или её значение — пустая строка, Getenv в обоих случаях возвращает пустую строку.',
    example:
      'os.Setenv("APP_ENV", "production")\n' +
      'v1 := os.Getenv("APP_ENV")\n' +
      'v2 := os.Getenv("UNKNOWN_VAR")\n' +
      'fmt.Printf("%q %q\\n", v1, v2)\n\n' +
      '// "production" ""',
    specification: 'https://pkg.go.dev/os#Getenv',
  },
  {
    name: 'LookupEnv',
    syntax: 'func LookupEnv(key string) (string, bool)',
    parameters: [
      {
        name: 'key',
        description: 'Имя переменной окружения',
      },
    ],
    returns: [
      {
        name: 'string',
        description: 'Значение переменной окружения',
      },
      {
        name: 'bool',
        description: 'true, если переменная установлена',
      },
    ],
    description:
      'LookupEnv возвращает значение key и признак того, что она установлена. Позволяет отличить отсутствующую переменную от переменной с пустым значением.',
    example:
      'os.Setenv("APP_ENV", "production")\n' +
      'v1, ok1 := os.LookupEnv("APP_ENV")\n' +
      'v2, ok2 := os.LookupEnv("UNKNOWN_VAR")\n' +
      'fmt.Printf("%q %v\\n", v1, ok1)\n' +
      'fmt.Printf("%q %v\\n", v2, ok2)\n\n' +
      '// "production" true\n' +
      '// "" false',
    specification: 'https://pkg.go.dev/os#LookupEnv',
  },
  {
    name: 'Setenv',
    syntax: 'func Setenv(key, value string) error',
    parameters: [
      {
        name: 'key',
        description: 'Имя переменной окружения',
      },
      {
        name: 'value',
        description: 'Значение, которое нужно установить',
      },
    ],
    returns: [
      {
        name: 'error',
        description: 'Ошибка, если имя переменной некорректно, обычно nil',
      },
    ],
    description:
      'Setenv устанавливает значение value для key. Изменение действует в рамках текущего процесса и его дочерних процессов, запущенных после вызова.',
    example:
      'err := os.Setenv("APP_ENV", "production")\n' +
      'fmt.Println(os.Getenv("APP_ENV"), err)\n\n' +
      '// production <nil>',
    specification: 'https://pkg.go.dev/os#Setenv',
  },
  {
    name: 'Unsetenv',
    syntax: 'func Unsetenv(key string) error',
    parameters: [
      {
        name: 'key',
        description: 'Имя переменной окружения',
      },
    ],
    returns: [
      {
        name: 'error',
        description: 'Ошибка, обычно nil',
      },
    ],
    description:
      'Unsetenv удаляет key. Если переменная не была установлена, Unsetenv не возвращает ошибку.',
    example:
      'os.Setenv("APP_ENV", "production")\n' +
      'os.Unsetenv("APP_ENV")\n' +
      'v, ok := os.LookupEnv("APP_ENV")\n' +
      'fmt.Printf("%q %v\\n", v, ok)\n\n' +
      '// "" false',
    specification: 'https://pkg.go.dev/os#Unsetenv',
  },
  {
    name: 'Exit',
    syntax: 'func Exit(code int)',
    parameters: [
      {
        name: 'code',
        description: 'Код завершения процесса; 0 обычно означает успех',
      },
    ],
    description:
      'Exit немедленно завершает текущую программу с code. В отличие от обычного return из main, отложенные вызовы defer не выполняются.',
    example:
      'fmt.Println("before exit")\n' +
      'os.Exit(1)\n' +
      'fmt.Println("this line is never printed")\n\n' +
      '// before exit\n' +
      '// процесс завершается с кодом 1, вторая строка не выполнится',
    specification: 'https://pkg.go.dev/os#Exit',
  },
  {
    name: 'Open',
    syntax: 'func Open(name string) (*File, error)',
    parameters: [
      {
        name: 'name',
        description: 'Путь к файлу',
      },
    ],
    returns: [
      {
        name: '*File',
        description: 'Файл, открытый в режиме только для чтения',
      },
      {
        name: 'error',
        description: 'Ошибка, если файл не существует или недоступен',
      },
    ],
    description:
      'Open открывает файл по name и возвращает *File для дальнейшей работы с ним. Файл нужно закрыть вызовом Close.',
    example:
      'f, err := os.Open("config.txt")\n' +
      'if err != nil {\n' +
      '  fmt.Println(err)\n' +
      '  return\n' +
      '}\n' +
      'defer f.Close()\n\n' +
      '// если файла нет: open config.txt: no such file or directory',
    specification: 'https://pkg.go.dev/os#Open',
  },
  {
    name: 'Create',
    syntax: 'func Create(name string) (*File, error)',
    parameters: [
      {
        name: 'name',
        description: 'Путь к создаваемому файлу',
      },
    ],
    returns: [
      {
        name: '*File',
        description: 'Файл, открытый в режиме чтения и записи',
      },
      {
        name: 'error',
        description: 'Ошибка, если файл не удалось создать',
      },
    ],
    description:
      'Create создаёт файл по name (или обрезает существующий до нулевой длины) и открывает его для чтения и записи. В правах доступа Unix три цифры — для владельца файла, его группы и всех остальных пользователей; 0666 даёт чтение и запись всем троим. umask (системная маска, обычно 022) забирает часть этих прав у группы и остальных, поэтому реально файл чаще создаётся с правами 0644 (запись остаётся только у владельца).',
    example:
      'f, err := os.Create("output.txt")\n' +
      'if err != nil {\n' +
      '  fmt.Println(err)\n' +
      '  return\n' +
      '}\n' +
      'f.WriteString("Hello, Roman!")\n' +
      'f.Close()\n\n' +
      'data, _ := os.ReadFile("output.txt")\n' +
      'fmt.Println(string(data))\n\n' +
      '// Hello, Roman!',
    specification: 'https://pkg.go.dev/os#Create',
  },
  {
    name: 'ReadFile',
    syntax: 'func ReadFile(name string) ([]byte, error)',
    parameters: [
      {
        name: 'name',
        description: 'Путь к файлу',
      },
    ],
    returns: [
      {
        name: '[]byte',
        description: 'Содержимое файла целиком',
      },
      {
        name: 'error',
        description: 'Ошибка чтения, например если файл не существует',
      },
    ],
    description:
      'ReadFile читает файл по name целиком и возвращает его содержимое как []byte. Открывает и закрывает файл автоматически, без явного вызова Close.',
    example:
      'os.WriteFile("greeting.txt", []byte("Hello, Roman!"), 0644)\n' +
      'data, err := os.ReadFile("greeting.txt")\n' +
      'fmt.Println(string(data), err)\n\n' +
      '// Hello, Roman! <nil>',
    specification: 'https://pkg.go.dev/os#ReadFile',
  },
  {
    name: 'WriteFile',
    syntax: 'func WriteFile(name string, data []byte, perm FileMode) error',
    parameters: [
      {
        name: 'name',
        description: 'Путь к файлу',
      },
      {
        name: 'data',
        description: 'Данные, которые нужно записать',
      },
      {
        name: 'perm',
        description: 'Права доступа для создаваемого файла',
      },
    ],
    returns: [
      {
        name: 'error',
        description: 'Ошибка записи, обычно nil',
      },
    ],
    description:
      'WriteFile записывает data в файл по name, создавая файл с perm, если он не существует, либо обрезая его до нового содержимого, если уже существует.',
    example:
      'err := os.WriteFile("greeting.txt", []byte("Hello, Roman!"), 0644)\n' +
      'fmt.Println(err)\n\n' +
      '// <nil>',
    specification: 'https://pkg.go.dev/os#WriteFile',
  },
  {
    name: 'Remove',
    syntax: 'func Remove(name string) error',
    parameters: [
      {
        name: 'name',
        description: 'Путь к файлу или пустой директории',
      },
    ],
    returns: [
      {
        name: 'error',
        description: 'Ошибка, если удаление не удалось',
      },
    ],
    description:
      'Remove удаляет файл или пустую директорию по name. Если по этому пути ничего нет, Remove возвращает ошибку, для которой errors.Is(err, fs.ErrNotExist) равно true. Непустую директорию удалить не получится.',
    example:
      'os.WriteFile("temp.txt", []byte("data"), 0644)\n' +
      'err := os.Remove("temp.txt")\n' +
      'fmt.Println(err)\n\n' +
      '// <nil>',
    specification: 'https://pkg.go.dev/os#Remove',
  },
  {
    name: 'RemoveAll',
    syntax: 'func RemoveAll(path string) error',
    parameters: [
      {
        name: 'path',
        description: 'Путь к файлу или директории',
      },
    ],
    returns: [
      {
        name: 'error',
        description: 'Ошибка, если удаление не удалось',
      },
    ],
    description:
      'RemoveAll удаляет path и всё его содержимое рекурсивно, если path — директория. Если path не существует, RemoveAll возвращает nil без ошибки.',
    example:
      'os.MkdirAll("data/cache", 0755)\n' +
      'err := os.RemoveAll("data")\n' +
      'fmt.Println(err)\n\n' +
      '// <nil>',
    specification: 'https://pkg.go.dev/os#RemoveAll',
  },
  {
    name: 'Mkdir',
    syntax: 'func Mkdir(name string, perm FileMode) error',
    parameters: [
      {
        name: 'name',
        description: 'Путь к создаваемой директории',
      },
      {
        name: 'perm',
        description: 'Права доступа для директории',
      },
    ],
    returns: [
      {
        name: 'error',
        description: 'Ошибка, если директория уже существует',
      },
    ],
    description:
      'Mkdir создаёт одну директорию по name с perm. Родительская директория должна уже существовать.',
    example:
      'err := os.Mkdir("logs", 0755)\n' + 'fmt.Println(err)\n\n' + '// <nil>',
    specification: 'https://pkg.go.dev/os#Mkdir',
  },
  {
    name: 'MkdirAll',
    syntax: 'func MkdirAll(path string, perm FileMode) error',
    parameters: [
      {
        name: 'path',
        description: 'Путь к создаваемой директории',
      },
      {
        name: 'perm',
        description: 'Права доступа для директорий',
      },
    ],
    returns: [
      {
        name: 'error',
        description: 'Ошибка, если создать директории не удалось',
      },
    ],
    description:
      'MkdirAll создаёт директорию path вместе со всеми недостающими родительскими директориями. Если path уже существует и является директорией, MkdirAll не возвращает ошибку.',
    example:
      'err := os.MkdirAll("data/cache/images", 0755)\n' +
      'fmt.Println(err)\n\n' +
      '// <nil>',
    specification: 'https://pkg.go.dev/os#MkdirAll',
  },
  {
    name: 'Rename',
    syntax: 'func Rename(oldpath, newpath string) error',
    parameters: [
      {
        name: 'oldpath',
        description: 'Текущий путь к файлу или директории',
      },
      {
        name: 'newpath',
        description: 'Новый путь',
      },
    ],
    returns: [
      {
        name: 'error',
        description: 'Ошибка, если переименовать не удалось',
      },
    ],
    description:
      'Rename переименовывает (перемещает) файл или директорию с oldpath на newpath. Если newpath уже существует, он заменяется.',
    example:
      'os.WriteFile("draft.txt", []byte("data"), 0644)\n' +
      'err := os.Rename("draft.txt", "final.txt")\n' +
      'fmt.Println(err)\n\n' +
      '// <nil>',
    specification: 'https://pkg.go.dev/os#Rename',
  },
  {
    name: 'Getwd',
    syntax: 'func Getwd() (dir string, err error)',
    returns: [
      {
        name: 'dir string',
        description: 'Абсолютный путь к текущей рабочей директории',
      },
      {
        name: 'err error',
        description: 'Ошибка, если директорию определить не удалось',
      },
    ],
    description: 'Getwd возвращает путь к текущей рабочей директории процесса.',
    example:
      'dir, err := os.Getwd()\n' +
      'fmt.Println(dir, err)\n\n' +
      '// /home/roman/project <nil>',
    specification: 'https://pkg.go.dev/os#Getwd',
  },
];
