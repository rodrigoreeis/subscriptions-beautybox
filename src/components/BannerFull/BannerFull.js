import React from 'react';
import { StyledLink } from './styles';
import Figure from '../../objects/Figure';

const BannerFull = ({ link, title, src, alt }) => {
  return (
    <StyledLink to={link} title={title}>
      <Figure>
        <img src={src} alt={alt} />
      </Figure>
    </StyledLink>
  );
};

export default BannerFull;
