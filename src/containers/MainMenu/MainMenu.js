import React from 'react';
import IconClose from '../../components/IconClose';
import {
  Nav,
  Close,
  User,
  UserContent,
  UserAvatar,
  Options,
  OptionsList,
  ListName,
  Sing,
  Social,
} from './styles';
import MainButton from '../../components/MainButton';
import IconSocial from '../../components/IconSocial/IconSocial';

const MainMenu = ({ className, onClick }) => {
  return (
    <Nav className={className}>
      <Close>
        <IconClose onClick={onClick} />
      </Close>
      <User>
        <UserContent>
          <h4 className="user-welcome">Olá, Visitante</h4>
          <span className="user-login">
            Faça seu login ou cadastre-se
          </span>
        </UserContent>
        <UserAvatar />
      </User>
      <Options>
        <OptionsList>
          <ListName>Como funciona?</ListName>
          <ListName>Vantagens</ListName>
          <ListName>Edições</ListName>
          <ListName>Depoimentos</ListName>
          <ListName>Dúvidas</ListName>
        </OptionsList>
      </Options>
      <Sing>
        <MainButton
          Primary
          title="Assine"
          type="button"
          content="Assine"
        />
      </Sing>
      <Social>
        <IconSocial />
      </Social>
    </Nav>
  );
};

export default MainMenu;
