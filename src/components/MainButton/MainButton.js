import React from 'react';
import Button from './styles';

const MainButton = ({ onClick, Type, Title }) => (
  <Button type={Type} onClick={onClick} title={Title} />
);
export default MainButton;
