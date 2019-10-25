import React from 'react';
import {
  StyledLink,
  BannerContent,
  BannerTitle,
  BannerDescription,
} from './styles';
import Figure from '../../objects/Figure';
import MainButton from '../../components/MainButton';

const BannerFull = ({ title, src, alt, name, description }) => {
  return (
    <StyledLink to="/" title={title}>
      <Figure>
        <img src={src} alt={alt} />
      </Figure>
      <BannerContent>
        <BannerTitle>{name}</BannerTitle>
        <BannerDescription>{description}</BannerDescription>
        <MainButton Primary content="CTA" title={title} />
      </BannerContent>
    </StyledLink>
  );
};

export default BannerFull;
