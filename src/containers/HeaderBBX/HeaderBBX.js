import React from 'react';
import { Header } from './styles';
import Container from '../../layout/Container';
import LogoBBX from '../../components/LogoBBX/LogoBBX';

const HeaderBBX = () => {
  return (
    <Header>
      <Container>
        <LogoBBX />
      </Container>
    </Header>
  );
};

export default HeaderBBX;
