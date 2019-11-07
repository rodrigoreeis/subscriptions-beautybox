import React, { createRef } from 'react';
import BulletsContainer from './styles';

import BulletsData from './BulletsData';
import BannerData from './BannerData';
import CardsData from './CardsData';
import BenefitsData from './BenefitsData';
import EditionsData from './EditionsData';
import BrandsData from './BrandsData';

import Main from '../../objects/Main';
import Title from '../../objects/Title';

import Header from '../../containers/Header';
import MainBullets from '../../containers/MainBullets';
import BannerFull from '../../containers/BannerFull';
import SwipeCards from '../../containers/SwipeCards';
import BenefitsBullets from '../../containers/BenefitsBullets';
import BannersEditions from '../../containers/BannersEditions/BannersEditions';
import BrandsBeauty from '../../containers/BrandsBeauty';
import CommonQuestions from '../../containers/CommonQuestions';
import Footer from '../../containers/Footer';

const Home = () => {
  const editionsRef = createRef();

  function handleScroll(ev) {
    ev.preventDefault();
    const { current: bannersEditions } = editionsRef;
    bannersEditions.scrollIntoView({
      block: 'center',
      behavior: 'smooth',
    });
  }

  return (
    <>
      <Header onClick={handleScroll} />
      <Main>
        <BulletsContainer>
          <MainBullets content={BulletsData} />
        </BulletsContainer>
        <BannerFull {...BannerData} onClick={handleScroll} />
        <SwipeCards content={CardsData} />
        <Title content="Vantagens" />
        <BenefitsBullets content={BenefitsData} />
        <Title content="Edições" />
        <BannersEditions content={EditionsData} ref={editionsRef} />
        <Title content="Marcas" />
        <BrandsBeauty content={BrandsData} />
        <Title content="Dúvidas Frequentes" />
        <CommonQuestions />
      </Main>
      <Footer />
    </>
  );
};

export default Home;
