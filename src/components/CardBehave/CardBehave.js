import React from 'react';
import {
  CardWrapper,
  CardNumber,
  CardTitle,
  CardDescription,
} from './styles';

const CardBehave = ({ number, title, description }) => (
  <CardWrapper>
    <CardNumber>{number}</CardNumber>
    <CardTitle>{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
  </CardWrapper>
);

export default CardBehave;
