import React from 'react';
import { BulletsContainer } from './styles';

import Container from '../../layout/Container';

import Section from '../../objects/Section';

import BulletsData from './BulletsData';
import BannerData from './BannerData';
import CardsData from './CardsData';
import BenefitsData from './BenefitsData';

import Title from '../../objects/Title';

import MainHeader from '../../containers/MainHeader';
import MainBullets from '../../containers/MainBullets';
import BannerFull from '../../containers/BannerFull';
import SwipeCards from '../../containers/SwipeCards';
import BenefitsBullets from '../../containers/BenefitsBullets';

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
      <Title>Vantagens</Title>
      <BenefitsBullets content={BenefitsData} />
    </>
  );
};

export default Home;
