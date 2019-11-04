import React from 'react';
import shortid from 'shortid';
import {
  BenefitsContainer,
  BenefitsWrapper,
  Title,
  Description,
} from './styles';

import Container from '../../layout/Container';
import Section from '../../objects/Section';
import ImageBullet from '../../components/ImageBullet';

const BenefitsBullets = ({ content }) => (
  <Section>
    <Container>
      <BenefitsContainer>
        {content &&
          content.map(({ src, alt, title, description }) => (
            <BenefitsWrapper key={shortid.generate()}>
              <ImageBullet src={src} alt={alt} />
              <Title>{title}</Title>
              <Description>{description}</Description>
            </BenefitsWrapper>
          ))}
      </BenefitsContainer>
    </Container>
  </Section>
);

export default BenefitsBullets;
