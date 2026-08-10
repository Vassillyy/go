export interface ISwitcherOption<T extends string> {
  value: T;
  label: string;
}

export interface ISwitcher<T extends string> {
  options: ISwitcherOption<T>[];
  value: T;
  onChange: (value: T) => void;
}
