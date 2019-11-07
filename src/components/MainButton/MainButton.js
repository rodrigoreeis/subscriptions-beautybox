import React from 'react';
import Button from './styles';

const MainButton = ({
  onClick,
  type,
  title,
  content,
  children,
  ...props
}) => (
  <Button {...props} type={type} onClick={onClick} title={title}>
    {content}
    {children}
  </Button>
);
export default MainButton;
