import React from 'react';
import IconClose from '../../components/IconClose';
import { Nav } from './styles';

const MainMenu = ({ className, onClick }) => {
  return (
    <Nav className={className}>
      <IconClose onClick={onClick} />
    </Nav>
  );
};

export default MainMenu;
