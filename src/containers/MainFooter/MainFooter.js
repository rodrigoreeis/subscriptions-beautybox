/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
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

const MainFooter = () => (
  <Footer>
    <WrapperLogo>
      <LogoBeauty />
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
