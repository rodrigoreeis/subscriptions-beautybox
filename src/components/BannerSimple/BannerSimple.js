import React from 'react';
import Title from './styles';
import Figure from '../../objects/Figure';

const BannerSimple = ({ src, alt, title }) => (
  <>
    <Figure>
      <img src={src} alt={alt} />
    </Figure>
    <Title>{title}</Title>
  </>
);

export default BannerSimple;
