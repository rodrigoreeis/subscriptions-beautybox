import React from 'react';
import { BulletsContainer } from './styles';

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
        <MainBullets content={BulletsData} />
      </BulletsContainer>
      <BannerFull {...BannerData} />
      <SwipeCards content={CardsData} />
      <Title>Vantagens</Title>
      <BenefitsBullets content={BenefitsData} />
      <Title>Ediçoes</Title>
    </>
  );
};

export default Home;
