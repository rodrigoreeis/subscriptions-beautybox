/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Footer,
  WrapperLogo,
  Content,
  Infos,
  Small,
  Phone,
} from './styles';
import LogoBeauty from '../../components/LogoBeauty';
import MainAccordion from '../../components/MainAccordion';
import IconSocial from '../../components/IconSocial/IconSocial';

// eslint-disable-next-line no-unused-vars
const MainFooter = () => (
  <Footer>
    <WrapperLogo>
      <Link to="/">
        <LogoBeauty />
      </Link>
    </WrapperLogo>
    <Content>
      <MainAccordion title="Lorem Ipsum">
        <p>Lorem</p>
        <p>Lorem</p>
      </MainAccordion>
    </Content>
    <Content>
      <MainAccordion title="Lorem Ipsum">
        <p>Lorem</p>
        <p>Lorem</p>
      </MainAccordion>
    </Content>
    <Infos>
      <Small>Seg. a Sex. das 09h às 18h</Small>
      <Phone>0800-729-9070</Phone>
      <Small>
        Seg. a Sex. das 08h às 20h
        <br />e Sáb. das 09h às 16h
      </Small>
    </Infos>
    <Content>
      <IconSocial />
    </Content>
  </Footer>
);

export default MainFooter;
