import React, { createRef } from 'react';
import { ButtonHotPicks } from './styles';

import PreviousData from './PreviousData';

import Main from '../../../objects/Main';
import Title from '../../../objects/Title';

import LinkPink from '../../../components/LinkPink';
import SectionTitle from '../../../components/SectionTitle';

import MainHeader from '../../../containers/MainHeader';
import MainTitle from '../../../containers/MainTitle';
import DescriptionText from '../../../containers/DescriptionText/DescriptionText';
import BannersPrevious from '../../../containers/BannersPrevious';
import MainFooter from '../../../containers/MainFooter';
import UserTestimonial from '../../../containers/UserTestimonial';
import TestimonialData from './TestimonialData';
import HotPicksData from './HotPicksData';

const FirstPicks = () => {
  const footerRef = createRef();

  console.log(footerRef);

  return (
    <>
      <MainHeader />
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
        <ButtonHotPicks />
      </Main>
      <MainFooter ref={footerRef} />
    </>
  );
};

export default FirstPicks;
