export interface Field<T> {
  id: number | string;
  name: string;
  label?: string;
  value?: T;
  error?: boolean;
  message?: string;
  info?: string;
  isHorizontal?: boolean;
  onClick?: any;
  onChange?: any;
  onFocus?: (e: Event) => void;
  onBlur?: () => void;
  disabled?: boolean;
  type?: InputType;
  loading?: boolean;
}

export interface Input extends Field<number | string | File> {
  placeholder?: string;
  icon?: string;
  onDelete?: () => void;
  onFileSelect?: (file: File) => void;
  onInput?: (value: string | number) => void;
  maxLength?: number;
  maxValue?: number;
  file?: File;
}

type InputType =
  | "text"
  | "number"
  | "password"
  | "date"
  | "datetime-local"
  | "file"
  | "email"
  | string;

export interface Select extends Field<string | number> {
  default?: string;
  options: Option[];
}

export interface Option {
  label: string;
  value: string | number;
  checked?: boolean;
}
