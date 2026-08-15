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
    name: 'Stat',
    syntax: 'func Stat(name string) (FileInfo, error)',
    parameters: [
      {
        name: 'name',
        description: 'Путь к файлу или директории',
      },
    ],
    returns: [
      {
        name: 'FileInfo',
        description: 'Метаданные файла',
      },
      {
        name: 'error',
        description: 'Ошибка, обычно *PathError, если файл не найден',
      },
    ],
    description:
      'Stat возвращает FileInfo с метаданными файла name. Если name — символическая ссылка, Stat переходит по ней и возвращает информацию о файле, на который она указывает.',
    example:
      'os.WriteFile("demo.txt", []byte("Hello"), 0644)\n' +
      'defer os.Remove("demo.txt")\n\n' +
      'info, err := os.Stat("demo.txt")\n' +
      'if err != nil {\n' +
      '  panic(err)\n' +
      '}\n' +
      'fmt.Println(info.Name(), info.Size(), info.IsDir())\n\n' +
      '// demo.txt 5 false',
    specification: 'https://pkg.go.dev/os#Stat',
  },
  {
    name: 'Lstat',
    syntax: 'func Lstat(name string) (FileInfo, error)',
    parameters: [
      {
        name: 'name',
        description: 'Путь к файлу или директории',
      },
    ],
    returns: [
      {
        name: 'FileInfo',
        description: 'Метаданные файла',
      },
      {
        name: 'error',
        description: 'Ошибка, обычно *PathError, если файл не найден',
      },
    ],
    description:
      'Lstat возвращает FileInfo с метаданными файла name. В отличие от Stat, если name — символическая ссылка, Lstat не переходит по ней, а возвращает информацию о самой ссылке.',
    example:
      'os.WriteFile("target.txt", []byte("Hello"), 0644)\n' +
      'defer os.Remove("target.txt")\n' +
      'os.Symlink("target.txt", "link.txt")\n' +
      'defer os.Remove("link.txt")\n\n' +
      'info, _ := os.Stat("link.txt")\n' +
      'linfo, _ := os.Lstat("link.txt")\n' +
      'fmt.Println(info.Mode()&os.ModeSymlink != 0, linfo.Mode()&os.ModeSymlink != 0)\n\n' +
      '// false true',
    specification: 'https://pkg.go.dev/os#Lstat',
  },
  {
    name: 'ReadDir',
    syntax: 'func ReadDir(name string) ([]DirEntry, error)',
    parameters: [
      {
        name: 'name',
        description: 'Путь к директории',
      },
    ],
    returns: [
      {
        name: '[]DirEntry',
        description: 'Записи директории, отсортированные по имени',
      },
      {
        name: 'error',
        description: 'Ошибка чтения директории',
      },
    ],
    description:
      'ReadDir читает директорию name и возвращает её содержимое в виде среза DirEntry, отсортированного по имени файла. Если во время чтения произошла ошибка, ReadDir возвращает записи, которые успел прочитать до неё, вместе с самой ошибкой.',
    example:
      'os.Mkdir("demo_dir", 0755)\n' +
      'defer os.RemoveAll("demo_dir")\n' +
      'os.WriteFile("demo_dir/a.txt", []byte("x"), 0644)\n' +
      'os.WriteFile("demo_dir/b.txt", []byte("y"), 0644)\n\n' +
      'entries, err := os.ReadDir("demo_dir")\n' +
      'if err != nil {\n' +
      '  panic(err)\n' +
      '}\n' +
      'for _, e := range entries {\n' +
      '  fmt.Println(e.Name())\n' +
      '}\n\n' +
      '// a.txt\n' +
      '// b.txt',
    specification: 'https://pkg.go.dev/os#ReadDir',
  },
  {
    name: 'Symlink',
    syntax: 'func Symlink(oldname, newname string) error',
    parameters: [
      {
        name: 'oldname',
        description: 'Путь, на который будет указывать ссылка',
      },
      {
        name: 'newname',
        description: 'Путь создаваемой символической ссылки',
      },
    ],
    returns: [
      {
        name: 'error',
        description: 'Ошибка, обычно *LinkError, если создать ссылку не удалось',
      },
    ],
    description:
      'Symlink создаёт newname как символическую ссылку на oldname. Существование oldname на момент создания ссылки не проверяется — ссылка может указывать и на несуществующий путь.',
    example:
      'os.WriteFile("target.txt", []byte("Hello"), 0644)\n' +
      'defer os.Remove("target.txt")\n\n' +
      'err := os.Symlink("target.txt", "link.txt")\n' +
      'defer os.Remove("link.txt")\n' +
      'fmt.Println(err)\n\n' +
      '// <nil>',
    specification: 'https://pkg.go.dev/os#Symlink',
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
  {
    name: 'OpenRoot',
    syntax: 'func OpenRoot(name string) (*Root, error)',
    parameters: [
      {
        name: 'name',
        description: 'Путь к директории, которая станет корнем',
      },
    ],
    returns: [
      {
        name: '*Root',
        description: 'Root, ограничивающий операции директорией name',
      },
      {
        name: 'error',
        description: 'Ошибка, если директорию не удалось открыть',
      },
    ],
    description:
      'OpenRoot открывает директорию name и возвращает Root — далее все файловые операции через него ограничены этой директорией и её поддеревом, попытки выйти за её пределы завершаются ошибкой.',
    example:
      'root, err := os.OpenRoot("sandbox")\n' +
      'if err != nil {\n' +
      '  panic(err)\n' +
      '}\n' +
      'fmt.Println(root.Name())\n' +
      'root.Close()\n\n' +
      '// sandbox',
    specification: 'https://pkg.go.dev/os#OpenRoot',
  },
  {
    name: 'File',
    kind: 'type',
    syntax:
      'type File struct{ ... }\n\n' +
      'func (f *File) Chmod(mode FileMode) error\n' +
      'func (f *File) Close() error\n' +
      'func (f *File) Name() string\n' +
      'func (f *File) Read(b []byte) (n int, err error)\n' +
      'func (f *File) ReadAt(b []byte, off int64) (n int, err error)\n' +
      'func (f *File) ReadDir(n int) ([]DirEntry, error)\n' +
      'func (f *File) Seek(offset int64, whence int) (ret int64, err error)\n' +
      'func (f *File) Stat() (FileInfo, error)\n' +
      'func (f *File) Sync() error\n' +
      'func (f *File) Truncate(size int64) error\n' +
      'func (f *File) Write(b []byte) (n int, err error)\n' +
      'func (f *File) WriteAt(b []byte, off int64) (n int, err error)\n' +
      'func (f *File) WriteString(s string) (n int, err error)',
    description:
      'File — тип, представляющий открытый файловый дескриптор; создаётся функциями Open, Create, OpenFile, CreateTemp, NewFile или OpenInRoot. Доступны следующие методы:\n' +
      'Write и WriteString пишут данные, сдвигая текущую позицию.\n' +
      'WriteAt пишет по явному смещению, не трогая текущую позицию.\n' +
      'Read читает данные, тоже сдвигая текущую позицию.\n' +
      'ReadAt читает по явному смещению, не трогая текущую позицию.\n' +
      'Seek перемещает текущую позицию чтения-записи.\n' +
      'Name возвращает исходное имя файла.\n' +
      'Stat возвращает FileInfo с метаданными.\n' +
      'Chmod меняет права доступа файла.\n' +
      'Sync сбрасывает буферизованные операционной системой данные на диск.\n' +
      'ReadDir читает содержимое директории, если File открыт как директория.\n' +
      'Truncate обрезает файл до заданного размера.\n' +
      'Close закрывает дескриптор.',
    example:
      'f, _ := os.Create("demo.txt")\n' +
      'f.WriteString("Hello, ")\n' +
      'f.Write([]byte("Roman!"))\n' +
      'fmt.Println(f.Name())\n\n' +
      'f.WriteAt([]byte("r"), 12)\n' +
      'f.Chmod(0644)\n' +
      'f.Sync()\n\n' +
      'f.Seek(0, 0)\n' +
      'buf := make([]byte, 5)\n' +
      'f.Read(buf)\n' +
      'fmt.Println(string(buf))\n\n' +
      'at := make([]byte, 1)\n' +
      'f.ReadAt(at, 12)\n' +
      'fmt.Println(string(at))\n\n' +
      'info, _ := f.Stat()\n' +
      'fmt.Println(info.Size())\n\n' +
      'f.Truncate(5)\n' +
      'f.Close()\n' +
      'os.Remove("demo.txt")\n\n' +
      'os.Mkdir("demo_dir", 0755)\n' +
      'defer os.RemoveAll("demo_dir")\n' +
      'os.WriteFile("demo_dir/a.txt", []byte("x"), 0644)\n' +
      'dir, _ := os.Open("demo_dir")\n' +
      'entries, _ := dir.ReadDir(-1)\n' +
      'fmt.Println(len(entries), entries[0].Name())\n' +
      'dir.Close()\n\n' +
      '// demo.txt\n' +
      '// Hello\n' +
      '// r\n' +
      '// 13\n' +
      '// 1 a.txt',
    specification: 'https://pkg.go.dev/os#File',
  },
  {
    name: 'FileInfo',
    kind: 'type',
    syntax:
      'type FileInfo = fs.FileInfo\n\n' +
      'type FileInfo interface {\n' +
      '\tName() string\n' +
      '\tSize() int64\n' +
      '\tMode() FileMode\n' +
      '\tModTime() time.Time\n' +
      '\tIsDir() bool\n' +
      '\tSys() any\n' +
      '}',
    description:
      'FileInfo — интерфейс с метаданными о файле, возвращаемый функциями Stat, Lstat и методом File.Stat. Доступны следующие методы:\n' +
      'Name возвращает базовое имя файла без пути.\n' +
      'Size возвращает размер в байтах.\n' +
      'Mode возвращает биты режима и прав доступа.\n' +
      'ModTime возвращает время последнего изменения.\n' +
      'IsDir — сокращение для Mode().IsDir().\n' +
      'Sys хранит платформо-зависимые исходные данные (например, *syscall.Stat_t на Unix) и может быть nil.',
    example:
      'os.WriteFile("demo.txt", []byte("Hello"), 0644)\n' +
      'defer os.Remove("demo.txt")\n\n' +
      'info, err := os.Stat("demo.txt")\n' +
      'if err != nil {\n' +
      '  panic(err)\n' +
      '}\n' +
      'fmt.Println(info.Name(), info.Size(), info.Mode(), info.IsDir())\n' +
      'fmt.Println(info.ModTime().IsZero(), info.Sys() != nil)\n\n' +
      '// demo.txt 5 -rw-r--r-- false\n' +
      '// false true',
    specification: 'https://pkg.go.dev/os#FileInfo',
  },
  {
    name: 'DirEntry',
    kind: 'type',
    syntax:
      'type DirEntry = fs.DirEntry\n\n' +
      'type DirEntry interface {\n' +
      '\tName() string\n' +
      '\tIsDir() bool\n' +
      '\tType() FileMode\n' +
      '\tInfo() (FileInfo, error)\n' +
      '}',
    description:
      'DirEntry — интерфейс с записью о файле внутри директории, возвращаемый функцией ReadDir и методом File.ReadDir; экономичнее полного Stat на каждый файл, потому что Name, IsDir и Type не требуют лишнего системного вызова. Доступны следующие методы:\n' +
      'Name возвращает имя файла без пути.\n' +
      'IsDir сообщает, является ли запись директорией.\n' +
      'Type возвращает часть битов режима — тип файла без прав доступа.\n' +
      'Info запрашивает полный FileInfo и может завершиться ошибкой, если файл к этому моменту удалён или переименован.',
    example:
      'os.Mkdir("demo_dir", 0755)\n' +
      'defer os.RemoveAll("demo_dir")\n' +
      'os.WriteFile("demo_dir/a.txt", []byte("x"), 0644)\n\n' +
      'entries, err := os.ReadDir("demo_dir")\n' +
      'if err != nil {\n' +
      '  panic(err)\n' +
      '}\n' +
      'for _, e := range entries {\n' +
      '  info, _ := e.Info()\n' +
      '  fmt.Println(e.Name(), e.IsDir(), e.Type(), info.Size())\n' +
      '}\n\n' +
      '// a.txt false ---------- 1',
    specification: 'https://pkg.go.dev/os#DirEntry',
  },
  {
    name: 'FileMode',
    kind: 'type',
    syntax:
      'type FileMode uint32\n\n' +
      'func (m FileMode) IsDir() bool\n' +
      'func (m FileMode) IsRegular() bool\n' +
      'func (m FileMode) Perm() FileMode\n' +
      'func (m FileMode) String() string\n' +
      'func (m FileMode) Type() FileMode',
    description:
      'FileMode — тип для битов режима файла и прав доступа поверх uint32, возвращаемый методом FileInfo.Mode; старшие биты отвечают за особые свойства файла (например, ModeDir для директорий), а младшие 9 бит — за обычные Unix-права rwxrwxrwx. Доступны следующие методы:\n' +
      'IsDir сообщает, является ли файл директорией.\n' +
      'IsRegular сообщает, является ли файл обычным (не директорией, не устройством и т. п.).\n' +
      'Perm возвращает только биты прав доступа без служебных флагов.\n' +
      'Type возвращает только биты типа файла, без прав.\n' +
      'String форматирует режим в привычном виде вроде drwxr-xr-x.',
    example:
      'os.Mkdir("demo_dir", 0755)\n' +
      'defer os.RemoveAll("demo_dir")\n\n' +
      'info, _ := os.Stat("demo_dir")\n' +
      'm := info.Mode()\n' +
      'fmt.Println(m.String(), m.IsDir(), m.IsRegular(), m.Perm(), m.Type())\n\n' +
      '// drwxr-xr-x true false -rwxr-xr-x d---------',
    specification: 'https://pkg.go.dev/os#FileMode',
  },
  {
    name: 'LinkError',
    kind: 'type',
    syntax:
      'type LinkError struct {\n' +
      '\tOp  string\n' +
      '\tOld string\n' +
      '\tNew string\n' +
      '\tErr error\n' +
      '}\n\n' +
      'func (e *LinkError) Error() string\n' +
      'func (e *LinkError) Unwrap() error',
    description:
      'LinkError описывает ошибку операций Link, Symlink или Rename: Op — имя операции («link», «symlink» или «rename»), Old и New — пути, участвовавшие в вызове, а Err — исходная системная ошибка. Доступны следующие методы:\n' +
      'Error форматирует Op, Old, New и Err в одну строку.\n' +
      'Unwrap возвращает Err, что позволяет проверить исходную ошибку через errors.Is или errors.As.',
    example:
      'err := os.Rename("no_such_file.txt", "target.txt")\n' +
      'fmt.Println(err)\n\n' +
      'var linkErr *os.LinkError\n' +
      'if errors.As(err, &linkErr) {\n' +
      '  fmt.Println(linkErr.Op, linkErr.Old, linkErr.New)\n' +
      '  fmt.Println(linkErr.Unwrap())\n' +
      '}\n\n' +
      '// rename no_such_file.txt target.txt: no such file or directory\n' +
      '// rename no_such_file.txt target.txt\n' +
      '// no such file or directory',
    specification: 'https://pkg.go.dev/os#LinkError',
  },
  {
    name: 'SyscallError',
    kind: 'type',
    syntax:
      'type SyscallError struct {\n' +
      '\tSyscall string\n' +
      '\tErr     error\n' +
      '}\n\n' +
      'func (e *SyscallError) Error() string\n' +
      'func (e *SyscallError) Timeout() bool\n' +
      'func (e *SyscallError) Unwrap() error',
    description:
      'SyscallError оборачивает ошибку конкретного системного вызова: Syscall — его имя (например, «read» или «write»), а Err — исходная ошибка ОС. Доступны следующие методы:\n' +
      'Error форматирует Syscall и Err в одну строку.\n' +
      'Timeout сообщает, была ли ошибка таймаутом.\n' +
      'Unwrap возвращает Err для проверки через errors.Is или errors.As.',
    example:
      'err := &os.SyscallError{Syscall: "read", Err: syscall.EINVAL}\n' +
      'fmt.Println(err.Error(), err.Timeout())\n' +
      'fmt.Println(err.Unwrap())\n\n' +
      '// read: invalid argument false\n' +
      '// invalid argument',
    specification: 'https://pkg.go.dev/os#SyscallError',
  },
  {
    name: 'Signal',
    kind: 'type',
    syntax:
      'type Signal interface {\n' +
      '\tString() string\n' +
      '\tSignal() // отличает Signal от прочих Stringer\n' +
      '}',
    description:
      'Signal — интерфейс сигнала операционной системы; готовые значения — os.Interrupt (аналог Ctrl+C) и os.Kill (принудительное завершение), а на Unix их реальной реализацией выступает syscall.Signal. Доступны следующие методы:\n' +
      'String возвращает читаемое имя сигнала.\n' +
      'Signal — пустой метод без собственной логики, нужен только для того, чтобы отличать Signal от произвольных типов с методом String — обычных Stringer.',
    example:
      'var s os.Signal = os.Interrupt\n' +
      'fmt.Println(s.String())\n' +
      's.Signal() // ничего не делает — метод-маркер\n\n' +
      '// interrupt',
    specification: 'https://pkg.go.dev/os#Signal',
  },
  {
    name: 'ProcAttr',
    kind: 'type',
    syntax:
      'type ProcAttr struct {\n' +
      '\tDir   string\n' +
      '\tEnv   []string\n' +
      '\tFiles []*File\n' +
      '\tSys   *syscall.SysProcAttr\n' +
      '}',
    description:
      'ProcAttr — набор атрибутов для запуска нового процесса функцией StartProcess. Доступны следующие поля:\n' +
      'Dir задаёт рабочую директорию нового процесса, если не пусто.\n' +
      'Env задаёт его переменные окружения; если nil, используется Environ.\n' +
      'Files — файловые дескрипторы, которые процесс унаследует: первые три соответствуют stdin, stdout и stderr, а nil-элемент означает закрытый дескриптор.\n' +
      'Sys содержит платформо-зависимые атрибуты создания процесса и не переносим между операционными системами.',
    example:
      'out, _ := os.Create("out.txt")\n' +
      'defer os.Remove("out.txt")\n\n' +
      'attr := &os.ProcAttr{\n' +
      '  Env:   []string{"GREETING=Hello, Roman!"},\n' +
      '  Files: []*os.File{os.Stdin, out, os.Stderr},\n' +
      '}\n' +
      'p, err := os.StartProcess("/bin/sh", []string{"sh", "-c", "echo $GREETING"}, attr)\n' +
      'if err != nil {\n' +
      '  panic(err)\n' +
      '}\n' +
      'p.Wait()\n' +
      'out.Close()\n\n' +
      'data, _ := os.ReadFile("out.txt")\n' +
      'fmt.Println(strings.TrimSpace(string(data)))\n\n' +
      '// Hello, Roman!',
    specification: 'https://pkg.go.dev/os#ProcAttr',
  },
  {
    name: 'Process',
    kind: 'type',
    syntax:
      'type Process struct {\n' +
      '\tPid int\n' +
      '\t// Has unexported fields.\n' +
      '}\n\n' +
      'func (p *Process) Kill() error\n' +
      'func (p *Process) Signal(sig Signal) error\n' +
      'func (p *Process) Wait() (*ProcessState, error)',
    description:
      'Process хранит информацию о процессе, запущенном функцией StartProcess или найденном через FindProcess; поле Pid — его идентификатор. Доступны следующие методы:\n' +
      'Signal отправляет процессу произвольный сигнал (на Windows поддерживается только Kill).\n' +
      'Kill принудительно завершает процесс — по сути сокращение для Signal(Kill).\n' +
      'Wait блокируется до завершения процесса и возвращает ProcessState.',
    example:
      'p, err := os.StartProcess("/bin/sleep", []string{"sleep", "5"}, &os.ProcAttr{\n' +
      '  Files: []*os.File{os.Stdin, os.Stdout, os.Stderr},\n' +
      '})\n' +
      'if err != nil {\n' +
      '  panic(err)\n' +
      '}\n' +
      'fmt.Println(p.Pid > 0)\n\n' +
      'err = p.Signal(os.Interrupt)\n' +
      'fmt.Println(err == nil)\n\n' +
      'p.Kill()\n' +
      'state, _ := p.Wait()\n' +
      'fmt.Println(state.Exited()) // false — процесс завершён сигналом, а не штатно\n\n' +
      '// true\n' +
      '// true\n' +
      '// false',
    specification: 'https://pkg.go.dev/os#Process',
  },
  {
    name: 'ProcessState',
    kind: 'type',
    syntax:
      'type ProcessState struct{ ... }\n\n' +
      'func (p *ProcessState) ExitCode() int\n' +
      'func (p *ProcessState) Exited() bool\n' +
      'func (p *ProcessState) Pid() int\n' +
      'func (p *ProcessState) String() string\n' +
      'func (p *ProcessState) Success() bool\n' +
      'func (p *ProcessState) SystemTime() time.Duration\n' +
      'func (p *ProcessState) UserTime() time.Duration',
    description:
      'ProcessState хранит информацию о завершённом процессе, возвращаемую методом Process.Wait. Доступны следующие методы:\n' +
      'Pid возвращает идентификатор процесса.\n' +
      'Exited сообщает, завершился ли процесс штатно (false, если его завершил сигнал).\n' +
      'ExitCode возвращает код завершения (-1, если Exited вернул false).\n' +
      'Success — сокращение для ExitCode() == 0.\n' +
      'SystemTime и UserTime возвращают время, потраченное процессом в режиме ядра и пользователя соответственно.\n' +
      'String форматирует состояние в короткую строку вроде «exit status 0».',
    example:
      'devNull, _ := os.OpenFile(os.DevNull, os.O_WRONLY, 0)\n' +
      'defer devNull.Close()\n\n' +
      'p, err := os.StartProcess("/bin/echo", []string{"echo", "hi"}, &os.ProcAttr{\n' +
      '  Files: []*os.File{os.Stdin, devNull, os.Stderr},\n' +
      '})\n' +
      'if err != nil {\n' +
      '  panic(err)\n' +
      '}\n' +
      'state, err := p.Wait()\n' +
      'if err != nil {\n' +
      '  panic(err)\n' +
      '}\n' +
      'fmt.Println(state.Pid() > 0, state.Exited(), state.Success(), state.ExitCode())\n' +
      'fmt.Println(state.String())\n' +
      'fmt.Println(state.SystemTime() >= 0, state.UserTime() >= 0)\n\n' +
      '// true true true 0\n' +
      '// exit status 0\n' +
      '// true true',
    specification: 'https://pkg.go.dev/os#ProcessState',
  },
  {
    name: 'Root',
    kind: 'type',
    syntax:
      'type Root struct{ ... }\n\n' +
      'func (r *Root) Close() error\n' +
      'func (r *Root) Create(name string) (*File, error)\n' +
      'func (r *Root) Mkdir(name string, perm FileMode) error\n' +
      'func (r *Root) Name() string\n' +
      'func (r *Root) Open(name string) (*File, error)\n' +
      'func (r *Root) ReadFile(name string) ([]byte, error)\n' +
      'func (r *Root) Remove(name string) error\n' +
      'func (r *Root) Rename(oldname, newname string) error\n' +
      'func (r *Root) Stat(name string) (FileInfo, error)\n' +
      'func (r *Root) WriteFile(name string, data []byte, perm FileMode) error',
    description:
      'Root — тип, ограничивающий файловые операции одной директорией и её поддеревом: попытка выйти за её пределы (например, через «../») завершается ошибкой, что делает Root удобным для безопасной работы с ненадёжными путями. Создаётся функцией OpenRoot, а методы дублируют одноимённые пакетные функции, но выполняют их относительно корня. Доступны следующие методы:\n' +
      'Name возвращает путь к директории-корню.\n' +
      'Create и Open создают и открывают файл относительно корня.\n' +
      'WriteFile и ReadFile пишут и читают файл целиком за один вызов.\n' +
      'Mkdir создаёт директорию.\n' +
      'Stat возвращает FileInfo с метаданными.\n' +
      'Rename переименовывает или перемещает файл.\n' +
      'Remove удаляет файл или пустую директорию.\n' +
      'Close закрывает Root и делает дальнейшие вызовы недопустимыми.',
    example:
      'os.Mkdir("sandbox", 0755)\n' +
      'defer os.RemoveAll("sandbox")\n\n' +
      'root, err := os.OpenRoot("sandbox")\n' +
      'if err != nil {\n' +
      '  panic(err)\n' +
      '}\n' +
      'defer root.Close()\n\n' +
      'fmt.Println(root.Name())\n\n' +
      'root.Mkdir("sub", 0755)\n\n' +
      'f, _ := root.Create("sub/a.txt")\n' +
      'f.Close()\n' +
      'root.WriteFile("sub/a.txt", []byte("Hello, Root!"), 0644)\n\n' +
      'data, _ := root.ReadFile("sub/a.txt")\n' +
      'fmt.Println(string(data))\n\n' +
      '_, err = root.Open("../secret.txt")\n' +
      'fmt.Println(err != nil) // выход за пределы sandbox запрещён\n\n' +
      'info, _ := root.Stat("sub/a.txt")\n' +
      'fmt.Println(info.Size())\n\n' +
      'root.Rename("sub/a.txt", "sub/b.txt")\n' +
      'root.Remove("sub/b.txt")\n\n' +
      '_, err = root.Stat("sub/b.txt")\n' +
      'fmt.Println(err != nil)\n\n' +
      '// sandbox\n' +
      '// Hello, Root!\n' +
      '// true\n' +
      '// 12\n' +
      '// true',
    specification: 'https://pkg.go.dev/os#Root',
  },
];
