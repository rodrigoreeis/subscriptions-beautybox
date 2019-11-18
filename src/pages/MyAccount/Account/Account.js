import React, { createRef } from 'react';
import { Card } from './styles';

import Container from '../../../layout/Container';

import Header from '../../../containers/Header';
import Footer from '../../../containers/Footer';

import EditionsData from '../../HomePage/EditionsData';

import Section from '../../../objects/Section';
import Main from '../../../objects/Main';
import Title from '../../../objects/Title';

import YourBox from '../../../components/YourBox';
import SectionTitle from '../../../components/SectionTitle';

import MainTitle from '../../../containers/MainTitle';
import AccountMenu from '../../../containers/AccountMenu';
import BannersEditions from '../../../containers/BannersEditions';

const MyAccount = () => {
  const footerRef = createRef();

  return (
    <>
      <Header />
      <AccountMenu elementRef={footerRef} />
      <Main>
        <Title content="Hello, Assinante!" />
        <SectionTitle>
          <MainTitle Purple content="Sua Box" />
        </SectionTitle>
        <Section>
          <Container>
            <YourBox
              src="http://via.placeholder.com/150x150"
              title="Lorem Ipsum"
              text="Reprehenderit laborum occaecat proident excepteur tempor est culpa sint aute."
            />
          </Container>
        </Section>
        <Title content="Edições Anteriores" />
        <BannersEditions content={EditionsData} />
      </Main>
      <Footer ref={footerRef} />
    </>
  );
};

export default MyAccount;
