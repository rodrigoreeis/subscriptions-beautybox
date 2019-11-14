import React from 'react';
import shortid from 'shortid';
import { Container, Wrapper } from './styles';
import BannerSimple from '../../components/BannerSimple';

const BannersPrevious = ({ content, children, ...props }) => (
  <Container {...props}>
    {content &&
      content.map(data => (
        <Wrapper key={shortid.generate()}>
          <BannerSimple {...data} />
        </Wrapper>
      ))}
    {children}
  </Container>
);

export default BannersPrevious;
