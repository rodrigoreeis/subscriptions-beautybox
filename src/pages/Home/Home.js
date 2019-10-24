import React from 'react';
import MainHeader from '../../containers/MainHeader';
import Container from '../../layout/Container';
import MainBullets from '../../components/MainBullets/MainBullets';
import BulletsContent from './BulletsContent';

const Home = () => (
  <>
    <MainHeader />
    <Container>
      <MainBullets content={BulletsContent} />
    </Container>
  </>
);

export default Home;
