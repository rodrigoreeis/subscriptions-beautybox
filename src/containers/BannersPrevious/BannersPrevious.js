import React from 'react';
import shortid from 'shortid';
import { Container, Wrapper } from './styles';
import BannerSimple from '../../components/BannerSimple/BannerSimple';

const BannersPrevious = ({ content }) => (
  <Container>
    {content &&
      content.map(data => (
        <Wrapper key={shortid.generate()}>
          <BannerSimple {...data} />
        </Wrapper>
      ))}
  </Container>
);

export default BannersPrevious;
