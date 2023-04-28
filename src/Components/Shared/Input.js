import React from 'react';
import { TextField } from '@material-ui/core';

const Input = ({ label, value, onChange, className, placeholder }) => {
  return (
    <TextField
      label={label}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
      variant="outlined"
      margin="normal"
    />
  );
}
export default Input;