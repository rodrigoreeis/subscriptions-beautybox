import React from 'react';
import Container from './styles';

const ContainerSpaced = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
);
export default ContainerSpaced;
