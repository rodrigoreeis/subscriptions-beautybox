import React, { createRef } from 'react';
import { PaymentWrapper } from './styles';

import Title from '../../objects/Title';
import Main from '../../objects/Main';
import Figure from '../../objects/Figure';

import BenefitsData from '../HomePage/BenefitsData';
import EditionsData from '../HomePage/EditionsData';

import SectionTitle from '../../components/SectionTitle';

import Header from '../../containers/Header';
import Footer from '../../containers/Footer';
import PaymentForm from '../../containers/PaymentForm';
import BenefitsBullets from '../../containers/BenefitsBullets';
import BannersEditions from '../../containers/BannersEditions';
import MainTitle from '../../containers/MainTitle';

const ProductPage = () => {
  const footerRef = createRef();
  return (
    <>
      <Header />
      <Main>
        <SectionTitle>
          <MainTitle content="Lorem Ipsum" />
        </SectionTitle>
        <PaymentWrapper>
          <Figure>
            <img
              src="http://via.placeholder.com/1280x853"
              alt="Lorem Ipsum"
            />
          </Figure>
          <PaymentForm footerRef={footerRef} />
        </PaymentWrapper>
        <Title content="O que voce vai receber" />
        <BenefitsBullets content={BenefitsData} />
        <Title content="Assine também" />
        <BannersEditions content={EditionsData} />
      </Main>
      <Footer ref={footerRef} />
    </>
  );
};

export default ProductPage;
