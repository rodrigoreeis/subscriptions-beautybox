/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { BulletsContainer } from './styles';

import Container from '../../layout/Container';

import Section from '../../objects/Section';

import BulletsContent from './BulletsContent';
import BannerData from './BannerData';

import MainHeader from '../../containers/MainHeader';
import MainBullets from '../../containers/MainBullets';
import BannerFull from '../../containers/BannerFull';
import CardBehave from '../../components/CardBehave';

const Home = () => {
  return (
    <>
      <MainHeader />
      <BulletsContainer>
        <Container>
          <MainBullets content={BulletsContent} />
        </Container>
      </BulletsContainer>
      <Section>
        <BannerFull {...BannerData} />
      </Section>
      <Section>
        <Container>
          <CardBehave />
        </Container>
      </Section>
    </>
  );
};

export default Home;
