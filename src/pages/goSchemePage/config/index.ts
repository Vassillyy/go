export interface ISchemeChild {
  id: string;
  label: string;
}

export interface ISchemeCategory {
  id: string;
  label: string;
  childRoute?: 'topic' | 'package';
  children: ISchemeChild[];
}

export interface ISchemeConfig {
  categories: ISchemeCategory[];
}

export const schemeConfig: ISchemeConfig = {
  categories: [
    {
      id: 'basics',
      label: 'Основы',
      children: [
        { id: 'hello-world', label: 'Hello World' },
        { id: 'variables', label: 'Переменные и константы' },
        { id: 'data-types', label: 'Типы данных' },
        { id: 'zero-values', label: 'Zero values' },
        { id: 'type-conversion', label: 'Type conversion' },
      ],
    },
    // {
    //   id: 'control-flow',
    //   label: 'Управляющие конструкции',
    //   children: [
    //     { id: 'if-else', label: 'if / else' },
    //     { id: 'switch', label: 'switch' },
    //     { id: 'for', label: 'for' },
    //     { id: 'break-continue', label: 'break / continue' },
    //   ],
    // },
    // {
    //   id: 'functions',
    //   label: 'Функции',
    //   children: [
    //     { id: 'multiple-return', label: 'Множественные возвращаемые значения' },
    //     { id: 'variadic', label: 'Вариативные функции' },
    //     { id: 'closures', label: 'Замыкания' },
    //     { id: 'anonymous-functions', label: 'Анонимные функции' },
    //   ],
    // },
    // {
    //   id: 'pointers-structs',
    //   label: 'Указатели и структуры',
    //   children: [
    //     { id: 'pointers', label: 'Указатели' },
    //     { id: 'value-pointer-receivers', label: 'Value / Pointer receivers' },
    //     { id: 'structs', label: 'Структуры' },
    //     { id: 'struct-tags', label: 'Struct tags' },
    //   ],
    // },
    // {
    //   id: 'interfaces-generics',
    //   label: 'Интерфейсы и дженерики',
    //   children: [
    //     { id: 'interfaces', label: 'Интерфейсы' },
    //     { id: 'empty-interface', label: 'Пустой интерфейс' },
    //     { id: 'generics', label: 'Generics' },
    //     { id: 'type-constraints', label: 'Type constraints' },
    //   ],
    // },
    // {
    //   id: 'collections',
    //   label: 'Массивы, срезы и map',
    //   children: [
    //     { id: 'arrays', label: 'Arrays' },
    //     { id: 'slices', label: 'Slices' },
    //     { id: 'maps', label: 'Maps' },
    //     { id: 'iterating-maps', label: 'Iterating maps' },
    //   ],
    // },
    // {
    //   id: 'errors',
    //   label: 'Обработка ошибок',
    //   children: [
    //     { id: 'error-interface', label: 'error interface' },
    //     { id: 'errors-new-fmt-errorf', label: 'errors.New / fmt.Errorf' },
    //     { id: 'sentinel-errors', label: 'Sentinel errors' },
    //     { id: 'panic-recover', label: 'panic / recover' },
    //     { id: 'wrapping-errors', label: 'Wrapping errors' },
    //   ],
    // },
    // {
    //   id: 'concurrency',
    //   label: 'Конкурентность',
    //   children: [
    //     { id: 'goroutines', label: 'Goroutines' },
    //     { id: 'channels', label: 'Channels' },
    //     { id: 'select', label: 'select' },
    //     { id: 'sync-package', label: 'sync (Mutex, WaitGroup)' },
    //     { id: 'race-detector', label: 'Race detector' },
    //     { id: 'worker-pools', label: 'Worker pools' },
    //   ],
    // },
    // {
    //   id: 'tooling',
    //   label: 'Инструменты',
    //   children: [
    //     { id: 'go-build-run-test', label: 'go build / run / test' },
    //     { id: 'go-mod', label: 'go mod' },
    //     { id: 'golangci-lint', label: 'golangci-lint' },
    //     { id: 'pprof-trace', label: 'pprof / trace' },
    //     { id: 'cross-compilation', label: 'Cross-compilation' },
    //   ],
    // },
    // {
    //   id: 'web',
    //   label: 'Веб-разработка',
    //   children: [
    //     { id: 'net-http', label: 'net/http' },
    //     { id: 'web-frameworks', label: 'gin / echo / fiber' },
    //     { id: 'grpc', label: 'gRPC' },
    //     { id: 'middleware', label: 'Middleware' },
    //     { id: 'rest-api', label: 'REST API' },
    //   ],
    // },
    {
      id: 'builtin-packages',
      label: 'Встроенные пакеты',
      childRoute: 'package',
      children: [
        { id: 'pkg-fmt', label: 'fmt' },
        { id: 'pkg-strings', label: 'strings' },
        { id: 'pkg-os', label: 'os' },
        { id: 'pkg-strconv', label: 'strconv' },
        { id: 'pkg-io', label: 'io' },
        { id: 'pkg-bufio', label: 'bufio' },
      ],
    },
  ],
};
