import React from 'react';
import Input from './styles';

const InputField = ({ placeholder, value }) => (
  <Input placeholder={placeholder} value={value} required />
);

export default InputField;
