import React from 'react';
import { ButtonClose, Icon } from './styles';

const IconClose = ({ onClick }) => (
  <ButtonClose type="button" title="Fechar" onClick={onClick}>
    <Icon />
  </ButtonClose>
);

export default IconClose;
