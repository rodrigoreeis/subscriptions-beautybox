import React from 'react';
import { Link } from 'react-router-dom';
import ContainerButton from './styles';

import Header from '../../containers/Header';
import Footer from '../../containers/Footer';

import Main from '../../objects/Main';
import Title from '../../objects/Title';
import Section from '../../objects/Section';

import ProductsBoxData from './ProductsBoxData';

import SectionTitle from '../../components/SectionTitle';
import BannerSimple from '../../components/BannerSimple';

import MainTitle from '../../containers/MainTitle';
import MainButton from '../../components/MainButton';
import ProductsBox from '../../containers/ProductsBox/ProductsBox';

const BoxPage = () => {
  return (
    <>
      <Header />
      <Main>
        <Title content="Edições Anteriores" />
        <SectionTitle FlexColumn>
          <MainTitle content="Hot Picks" subTitle="Novembro" />
        </SectionTitle>
        <Section>
          <BannerSimple src="http://via.placeholder.com/1080x650" />
        </Section>
        <Title content="Título Video" />
        <Title content="Lorem Ipsum" />
        <ProductsBox content={ProductsBoxData} />
        <SectionTitle>
          <MainTitle
            subTitle="Ver outras edições"
            as={Link}
            to="/first-pick"
          />
        </SectionTitle>
        <Section>
          <ContainerButton>
            <MainButton Primary content="Assine" />
          </ContainerButton>
        </Section>
      </Main>
      <Footer />
    </>
  );
};

export default BoxPage;
