import React from 'react';
import styled from 'styled-components';
import Section from '../Section';

const TitleSection = styled.h2`
  color: var(--color-black);
  font-size: var(--font-great);
  font-weight: 500;
  margin: var(--gap-big) 0;
  width: 100%;
  @media screen and (max-width: 768px) {
    padding: 0 var(--gap-great);
  }
`;

const Title = ({ children }) => {
  return (
    <Section>
      <TitleSection>{children}</TitleSection>
    </Section>
  );
};

export default Title;
