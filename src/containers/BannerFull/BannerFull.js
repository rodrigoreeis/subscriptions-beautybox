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

const BannerFull = ({
  link,
  title,
  src,
  alt,
  name,
  description,
  onClick,
}) => {
  return (
    <Section>
      <StyledLink to={link} title={title}>
        <Figure>
          <img src={src} alt={alt} />
        </Figure>
        <BannerContent>
          <BannerTitle>{name}</BannerTitle>
          <BannerDescription>{description}</BannerDescription>
          <MainButton
            Primary
            content="Assinerodri"
            title={title}
            onClick={onClick}
          />
        </BannerContent>
      </StyledLink>
    </Section>
  );
};

export default BannerFull;
