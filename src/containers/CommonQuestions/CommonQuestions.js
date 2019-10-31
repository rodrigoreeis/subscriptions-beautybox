import React from 'react';
import Container from '../../layout/Container';
import Accordion from '../../components/Accordion/Accordion';
import Section from '../../objects/Section';

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
