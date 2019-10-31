import React from 'react';
import { Swap, StyledLink } from './styles';
import Container from '../../layout/Container';

const BrandsBeauty = ({ content }) => {
  return (
    <Container>
      <Swap>
        {content &&
          content.map(({ link, src, alt }) => (
            <StyledLink to={link}>
              <img src={src} alt={alt} />
            </StyledLink>
          ))}
      </Swap>
    </Container>
  );
};

export default BrandsBeauty;
