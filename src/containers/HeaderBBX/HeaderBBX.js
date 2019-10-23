import React from 'react';
import { Header } from './styles';
import Container from '../../layout/Container';
import LogoBBX from '../../components/LogoBBX/LogoBBX';
import IconMenu from '../../components/IconMenu';

const HeaderBBX = () => {
  return (
    <Header>
      <Container>
        <h1>
          <LogoBBX />
        </h1>
        <IconMenu />
      </Container>
    </Header>
  );
};

export default HeaderBBX;
