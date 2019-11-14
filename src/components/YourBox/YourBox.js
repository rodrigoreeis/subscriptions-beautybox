import React from 'react';
import { Wrapper, Content, Title, Text } from './styles';
import BannerSimple from '../BannerSimple';

const YourBox = ({ src, title, text }) => {
  return (
    <Wrapper>
      <BannerSimple src={src} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Content>
    </Wrapper>
  );
};

export default YourBox;
