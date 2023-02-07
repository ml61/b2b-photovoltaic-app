import React from 'react';
import TextField from '@mui/material/TextField';
import { IPhoneNumberInput } from './entities';

const PhoneNumberInput = ({
  value,
  handleChange,
  disabled,
}: IPhoneNumberInput) => {
  const allowedPhoneNumberChars = React.useMemo(
    () => ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    []
  );
  return (
    <TextField
      margin='normal'
      required
      fullWidth
      id='phoneNumber'
      label='Phone number'
      name='phoneNumber'
      autoFocus
      inputProps={{ maxLength: 13, minLength: 3 }}
      value={value}
      onChange={(e) => {
        const value = e.target.value;
        if (value.length < 4) return;
        if (!allowedPhoneNumberChars.includes(value[value.length - 1])) return;
        handleChange(value);
      }}
      disabled={disabled}
    />
  );
};

export default PhoneNumberInput;
