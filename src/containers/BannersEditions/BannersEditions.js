import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import shortid from 'shortid';
import {
  SwapContainer,
  Wrapper,
  Content,
  Title,
  Text,
} from './styles';
import Section from '../../objects/Section';
import MainButton from '../../components/MainButton';

const BannersEditions = forwardRef(({ content }, ref) => (
  <Section ref={ref}>
    <SwapContainer>
      {content &&
        content.map(({ color, title, src, text, link }) => (
          <Wrapper key={shortid.generate()}>
            <Title color={color}>{title}</Title>
            <Content image={src}>
              <Text>{text}</Text>
              <Link to={link}>Edições</Link>
            </Content>
            <MainButton Primary content="Assinar" />
          </Wrapper>
        ))}
    </SwapContainer>
  </Section>
));

export default BannersEditions;
