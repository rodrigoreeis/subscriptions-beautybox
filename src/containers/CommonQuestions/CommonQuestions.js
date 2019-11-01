import React from 'react';
import Section from './styles';
import Container from '../../layout/Container';
import Accordion from '../../components/Accordion/Accordion';

const CommonQuestions = () => (
  <Section>
    <Container>
      <Accordion
        title="Lorem Ipsum"
        content="Ipsum labore mollit deserunt proident ex. Ipsum labore mollit deserunt proident ex.Ipsum labore mollit deserunt proident ex.Ipsum labore mollit deserunt proident ex.Ipsum labore mollit deserunt proident ex.Ipsum labore mollit deserunt proident ex.Ipsum labore mollit deserunt proident ex.Ipsum labore mollit deserunt proident ex."
      />

      <Accordion
        title="Lorem Ipsum"
        content="Ipsum labore mollit deserunt proident ex."
      />
      <Accordion
        title="Lorem Ipsum"
        content="Ipsum labore mollit deserunt proident ex."
      />

      <Accordion
        title="Lorem Ipsum"
        content="Ipsum labore mollit deserunt proident ex."
      />
      <Accordion
        title="Lorem Ipsum"
        content="Ipsum labore mollit deserunt proident ex."
      />
      <Accordion
        title="Lorem Ipsum"
        content="Ipsum labore mollit deserunt proident ex."
      />
    </Container>
  </Section>
);
export default CommonQuestions;
