/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { BulletsContainer } from './styles';
import Container from '../../layout/Container';
import MainHeader from '../../containers/MainHeader';
import MainBullets from '../../components/MainBullets/MainBullets';

import BulletsContent from './BulletsContent';
import BannerFull from '../../components/BannerFull/BannerFull';

const Home = () => (
  <>
    <MainHeader />
    <BulletsContainer>
      <Container>
        <MainBullets content={BulletsContent} />
      </Container>
    </BulletsContainer>
    <BannerFull
      name={'Lorem Ipsum'}
      description={
        'Mollit anim consectetur elit esse nulla deserunt magna Lorem adipisicing sit ipsum tempor nisi dolor.'
      }
      src={
        'https://ogimg.infoglobo.com.br/in/2700613-827-06a/FT1086A/652/xBob-Esponja-Reproducao.jpg.pagespeed.ic.Yu09BGtxU5.jpg'
      }
    />
  </>
);

export default Home;
