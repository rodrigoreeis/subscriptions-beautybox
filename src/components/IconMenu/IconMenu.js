import React from 'react';
import { ButtonIcon, Icon } from './styles';

const IconMenu = ({ onClick }) => {
  return (
    <ButtonIcon type="button" title="Menu" onClick={onClick}>
      <Icon />
    </ButtonIcon>
  );
};

export default IconMenu;
