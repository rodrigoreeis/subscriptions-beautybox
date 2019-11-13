import React from 'react';
import shortid from 'shortid';
import { Container, Wrapper, Content, Title, Text } from './styles';
import BannerSimple from '../../components/BannerSimple';

const ProductsBox = ({ content }) => {
  return (
    <Container>
      {content &&
        content.map(({ src, title, text }) => (
          <Wrapper key={shortid.generate()}>
            <BannerSimple src={src} alt={title} />
            <Content>
              <Title>{title}</Title>
              <Text>{text}</Text>
            </Content>
          </Wrapper>
        ))}
    </Container>
  );
};

export default ProductsBox;
