/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { BulletsContainer } from './styles';

import Container from '../../layout/Container';

import Section from '../../objects/Section';

import BulletsData from './BulletsData';
import BannerData from './BannerData';
import CardsData from './CardsData';

import MainHeader from '../../containers/MainHeader';
import MainBullets from '../../containers/MainBullets';
import BannerFull from '../../containers/BannerFull';
import SwipeCards from '../../containers/SwipeCards';

const Home = () => {
  return (
    <>
      <MainHeader />
      <BulletsContainer>
        <Container>
          <MainBullets content={BulletsData} />
        </Container>
      </BulletsContainer>
      <Section>
        <BannerFull {...BannerData} />
      </Section>
      <SwipeCards content={CardsData} />
    </>
  );
};

export default Home;
