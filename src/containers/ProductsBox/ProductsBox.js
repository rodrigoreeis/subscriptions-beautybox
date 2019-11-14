import React from 'react';
import shortid from 'shortid';
import Container from './styles';
import YourBox from '../../components/YourBox';

const ProductsBox = ({ content }) => {
  return (
    <Container>
      {content &&
        content.map(({ src, title, text }) => (
          <YourBox
            key={shortid.generate()}
            src={src}
            title={title}
            text={text}
          />
        ))}
    </Container>
  );
};

export default ProductsBox;
