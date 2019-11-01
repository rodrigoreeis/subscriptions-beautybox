import React from 'react';
import { Form, Legend } from './styles';
import MainButton from '../../components/MainButton';
import Fieldset from '../../objects/Fieldset';
import Container from '../../layout/Container';

import InputRadio from '../../components/InputRadio/InputRadio';

const PaymentFormn = () => (
  <Form>
    <Container>
      <Fieldset>
        <Legend>Escolha o melhor dia para pagamento</Legend>
        <InputRadio name="payment" htmlFor="8" content="Dia 8" />
        <InputRadio name="payment" htmlFor="13" content="Dia 13" />
        <InputRadio name="payment" htmlFor="25" content="Dia 25" />
        <MainButton Primary type="submit" content="Assinar" />
      </Fieldset>
    </Container>
  </Form>
);

export default PaymentFormn;
