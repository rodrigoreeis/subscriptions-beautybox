import React from 'react';
import { Questions, Text } from './styles';
import Container from '../../layout/Container';
import MainAccordion from '../../components/MainAccordion';

const CommonQuestions = () => (
  <Questions>
    <Container>
      <MainAccordion title="Lorem Ipsum">
        <Text>
          Adipisicing excepteur mollit cillum enim occaecat dolore
          sint aliquip officia.
        </Text>
      </MainAccordion>

      <MainAccordion title="Lorem Ipsum">
        <Text> Amet velit id occaecat et nulla tempor.</Text>
      </MainAccordion>
      <MainAccordion title="Lorem Ipsum">
        <Text>
          Cupidatat eiusmod quis officia magna aliqua ea ea incididunt
          exercitation.
        </Text>
      </MainAccordion>

      <MainAccordion title="Lorem Ipsum">
        <Text>
          Non adipisicing ea exercitation ex officia amet sit minim
          ullamco ut nostrud elit eu exercitation.
        </Text>
      </MainAccordion>
      <MainAccordion title="Lorem Ipsum">
        <Text>
          Deserunt aliquip sunt minim reprehenderit cupidatat officia
          amet exercitation.
        </Text>
      </MainAccordion>
      <MainAccordion title="Lorem Ipsum">
        <Text>
          Mollit est nostrud culpa labore amet quis nisi elit elit id
          sit.
        </Text>
      </MainAccordion>
    </Container>
  </Questions>
);
export default CommonQuestions;
