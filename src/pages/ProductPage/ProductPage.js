import React from 'react';
import { PaymentWrapper } from './styles';

import Title from '../../objects/Title';
import Main from '../../objects/Main';
import Figure from '../../objects/Figure';

import BenefitsData from '../HomePage/BenefitsData';
import EditionsData from '../HomePage/EditionsData';

import MainHeader from '../../containers/MainHeader';
import MainFooter from '../../containers/MainFooter';
import PaymentForm from '../../containers/PaymentForm';
import BenefitsBullets from '../../containers/BenefitsBullets';
import BannersEditions from '../../containers/BannersEditions';
import MainTitle from '../../containers/MainTitle';

const ProductPage = () => (
  <>
    <MainHeader />
    <Main>
      <MainTitle content="Lorem Ipsum" />
      <PaymentWrapper>
        <Figure>
          <img
            src="http://via.placeholder.com/1280x853"
            alt="Lorem Ipsum"
          />
        </Figure>
        <PaymentForm />
      </PaymentWrapper>
      <Title content="O que voce vai receber" />
      <BenefitsBullets content={BenefitsData} />
      <Title content="Assine também" />
      <BannersEditions content={EditionsData} />
    </Main>
    <MainFooter />
  </>
);

export default ProductPage;
