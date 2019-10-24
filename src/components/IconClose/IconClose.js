import React from 'react';
import { ButtonClose, Icon } from './styles';

const IconClose = ({ onClick, title }) => (
  <ButtonClose type="button" title={title} onClick={onClick}>
    <Icon />
  </ButtonClose>
);

export default IconClose;
