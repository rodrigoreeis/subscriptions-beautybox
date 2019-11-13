import React from 'react';
import { Card, Title, Text } from './styles';
import Header from '../../containers/Header';
import Footer from '../../containers/Footer';

import Main from '../../objects/Main';
import Section from '../../objects/Section';

import Container from '../../layout/Container';
import MainButton from '../../components/MainButton';
import InputField from '../../components/InputField';

const UserLogin = () => {
  return (
    <>
      <Header />
      <Main>
        <Section>
          <Container>
            <Card>
              <Title>Já sou cliente</Title>
              <Text>
                Escolha como você gostaria de fazer o seu login
              </Text>
              <MainButton Primary content="Entrar" />
            </Card>
            <Card>
              <Title>Ainda não sou cliente</Title>
              <form>
                <InputField placeholder="Digite seu email" />
                <MainButton
                  Primary
                  content="Criar Conta"
                  type="submit"
                />
              </form>
            </Card>
          </Container>
        </Section>
      </Main>
      <Footer />
    </>
  );
};

export default UserLogin;
