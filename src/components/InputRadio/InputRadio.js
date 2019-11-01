import React from 'react';
import Wrapper from './styles';

import Label from '../../objects/Label';
import Input from '../../objects/Input';

const InputRadio = ({ name, content, htmlFor }) => (
  <Wrapper>
    <Input id={htmlFor} name={name} type="radio" required />
    <Label htmlFor={htmlFor}>{content}</Label>
  </Wrapper>
);

export default InputRadio;
