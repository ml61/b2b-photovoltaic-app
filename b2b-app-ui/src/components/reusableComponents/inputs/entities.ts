import { TextFieldProps } from '@mui/material/TextField';

export type IPhoneNumberInput = {
  value: string;
  handleChange: (newValue: string) => void;
} & TextFieldProps;

export type IPasswordInput = {
  value: string;
  handleChange: (newValue: string) => void;
} & TextFieldProps;
