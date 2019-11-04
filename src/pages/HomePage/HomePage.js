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

import MainHeader from '../../containers/MainHeader';
import MainBullets from '../../containers/MainBullets';
import BannerFull from '../../containers/BannerFull';
import SwipeCards from '../../containers/SwipeCards';
import BenefitsBullets from '../../containers/BenefitsBullets';
import BannersEditions from '../../containers/BannersEditions/BannersEditions';
import BrandsBeauty from '../../containers/BrandsBeauty';
import CommonQuestions from '../../containers/CommonQuestions';
import MainFooter from '../../containers/MainFooter';

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
      <MainHeader onClick={handleScroll} />
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
      <MainFooter />
    </>
  );
};

export default Home;
