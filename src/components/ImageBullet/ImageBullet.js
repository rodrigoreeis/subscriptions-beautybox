import React from 'react';
import Image from './styles';
import Figure from '../../objects/Figure';

const ImageBullet = ({ src, alt }) => (
  <Figure>
    <Image src={src} alt={alt} />
  </Figure>
);

export default ImageBullet;
