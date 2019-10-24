import React from 'react';
import { BulletsContainer } from './styles';
import Container from '../../layout/Container';
import MainHeader from '../../containers/MainHeader';
import MainBullets from '../../components/MainBullets/MainBullets';

import BulletsContent from './BulletsContent';

const Home = () => (
  <>
    <MainHeader />
    <BulletsContainer>
      <Container>
        <MainBullets content={BulletsContent} />
      </Container>
    </BulletsContainer>
  </>
);

export default Home;
