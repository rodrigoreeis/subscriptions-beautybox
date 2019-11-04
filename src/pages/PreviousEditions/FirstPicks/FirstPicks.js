import React from 'react';

import PreviousData from './PreviousData';

import Main from '../../../objects/Main';
import Title from '../../../objects/Title';

import MainHeader from '../../../containers/MainHeader';
import MainTitle from '../../../containers/MainTitle';
import DescriptionText from '../../../containers/DescriptionText/DescriptionText';
import BannersPrevious from '../../../containers/BannersPrevious';
import MainFooter from '../../../containers/MainFooter';

const FirstPicks = () => {
  return (
    <>
      <MainHeader />
      <Main>
        <Title content="Edições Anteriores" />
        <MainTitle center content="First Picks" />
        <DescriptionText content="Ea in est id cillum aliquip eu pariatur enim consequat Cillum ea sunt incididunt do minim aliqua tempor reprehenderit" />
        <BannersPrevious content={PreviousData} />
        <Title content="Depoimentos" />
      </Main>
      <MainFooter />
    </>
  );
};

export default FirstPicks;
