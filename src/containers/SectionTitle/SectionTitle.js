import React from 'react';
import { SectionWrapper, Title } from './styles';
import Container from '../../layout/Container';

const SectionTitle = ({ content }) => (
  <SectionWrapper>
    <Container>
      <Title>{content}</Title>
    </Container>
  </SectionWrapper>
);

export default SectionTitle;
