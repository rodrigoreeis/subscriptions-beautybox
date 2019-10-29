import React from 'react';
import {
  StyledLink,
  BannerContent,
  BannerTitle,
  BannerDescription,
} from './styles';

import Figure from '../../objects/Figure';
import Section from '../../objects/Section';

import MainButton from '../../components/MainButton';

const BannerFull = ({ link, title, src, alt, name, description }) => {
  return (
    <Section>
      <StyledLink to={link} title={title}>
        <Figure>
          <img src={src} alt={alt} />
        </Figure>
        <BannerContent>
          <BannerTitle>{name}</BannerTitle>
          <BannerDescription>{description}</BannerDescription>
          <MainButton Primary content="CTA" title={title} />
        </BannerContent>
      </StyledLink>
    </Section>
  );
};

export default BannerFull;
