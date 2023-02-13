import React from 'react';
import TextField from '@mui/material/TextField';
import { IPasswordInput, IPhoneNumberInput } from './entities';

const PasswordInput = ({
  value,
  handleChange,
  disabled,
  ...props
}: IPasswordInput) => {
  return (
    <TextField
      {...props}
      margin='normal'
      required
      fullWidth
      name='password'
      label='Password'
      type='password'
      id='password'
      autoComplete='current-password'
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      disabled={disabled}
    />
  );
};

export default PasswordInput;
