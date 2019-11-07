import React, { createRef } from 'react';

import PreviousData from './PreviousData';
import TestimonialData from './TestimonialData';
import HotPicksData from './HotPicksData';

import Main from '../../../objects/Main';
import Title from '../../../objects/Title';

import LinkPink from '../../../components/LinkPink';
import SectionTitle from '../../../components/SectionTitle';

import Header from '../../../containers/Header';
import MainTitle from '../../../containers/MainTitle';
import DescriptionText from '../../../containers/DescriptionText/DescriptionText';
import BannersPrevious from '../../../containers/BannersPrevious';
import Footer from '../../../containers/Footer';
import UserTestimonial from '../../../containers/UserTestimonial';
import ButtonFixed from '../../../containers/ButtonFixed';

const FirstPicks = () => {
  const footerRef = createRef();

  return (
    <>
      <Header />
      <Main>
        <Title content="Edições Anteriores" />
        <SectionTitle>
          <MainTitle center content="First Picks" />
        </SectionTitle>
        <DescriptionText content="Ea in est id cillum aliquip eu pariatur enim consequat Cillum ea sunt incididunt do minim aliqua tempor reprehenderit" />
        <BannersPrevious ColumnWrap content={PreviousData} />
        <Title content="Depoimentos" />
        <UserTestimonial content={TestimonialData} />
        <Title content="Lorem Ipsum" />
        <SectionTitle>
          <MainTitle content="Hot Picks" />
          <LinkPink href="/"> Ver Mais </LinkPink>
        </SectionTitle>
        <BannersPrevious FlexCenter content={HotPicksData} />
        <ButtonFixed Primary footerRef={footerRef} content="Assine" />
      </Main>
      <Footer ref={footerRef} />
    </>
  );
};

export default FirstPicks;
