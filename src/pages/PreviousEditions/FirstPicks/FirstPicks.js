import React, { createRef } from 'react';
import { ButtonHotPicks } from './styles';

import PreviousData from './PreviousData';

import Main from '../../../objects/Main';
import Title from '../../../objects/Title';

import MainHeader from '../../../containers/MainHeader';
import MainTitle from '../../../containers/MainTitle';
import DescriptionText from '../../../containers/DescriptionText/DescriptionText';
import BannersPrevious from '../../../containers/BannersPrevious';
import MainFooter from '../../../containers/MainFooter';
import UserTestimonial from '../../../containers/UserTestimonial';
import TestimonialData from './TestimonialData';
import HotPicksData from './HotPicksData';
import MainButton from '../../../components/MainButton';
import Section from '../../../objects/Section';

const FirstPicks = () => {
  const footerRef = createRef();

  console.log(footerRef);

  return (
    <>
      <MainHeader />
      <Main>
        <Title content="Edições Anteriores" />
        <MainTitle center content="First Picks" />
        <DescriptionText content="Ea in est id cillum aliquip eu pariatur enim consequat Cillum ea sunt incididunt do minim aliqua tempor reprehenderit" />
        <BannersPrevious content={PreviousData} />
        <Title content="Depoimentos" />
        <UserTestimonial content={TestimonialData} />
        <Title content="Lorem Ipsum" />
        <Section>
          <MainTitle content="Hot Picks" />
        </Section>
        <BannersPrevious content={HotPicksData} />
        <ButtonHotPicks>
          <MainButton Secondary content="Ver Mais" />
        </ButtonHotPicks>
      </Main>
      <MainFooter ref={footerRef} />
    </>
  );
};

export default FirstPicks;
