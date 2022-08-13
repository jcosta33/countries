export interface IField<T> {
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

export type ICheckbox = IField<boolean>;
export type ISwitch = IField<boolean>;

export interface IInput extends IField<number | string | File> {
  placeholder?: string;
  icon?: string;
  onDelete?: () => void;
  onFileSelect?: (file: File) => void;
  onInput?: (value: string | number) => void;
  maxLength?: number;
  maxValue?: number;
  file?: File;
}

export type IDatePicker = IField<string>;

type InputType =
  | "text"
  | "number"
  | "password"
  | "date"
  | "datetime-local"
  | "file"
  | "email"
  | string;

export type IRadio = IField<boolean>;

export interface ISelect extends IField<string | number> {
  default?: string;
  options: IOption[];
}

export interface IRadios extends IField<string> {
  options: IOption[];
}
export interface ICheckboxes extends IField<string> {
  options: IOption[];
}

export interface IVSelect extends IField<string> {
  placeholder?: string;
  options: IOption[];
}

export interface IOption {
  label: string;
  value: string | number;
  checked?: boolean;
}

export interface ITextarea extends IField<string> {
  placeholder?: string;
  maxLength?: number;
  onInput?: (value: string | number) => void;
  disabled?: boolean;
}

export type IDescription = IField<string>;
