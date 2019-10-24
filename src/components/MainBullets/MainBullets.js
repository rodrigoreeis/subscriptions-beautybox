import React from 'react';
import { Link } from 'react-router-dom';
import Figure from '../../objects/Figure';
import {
  Bullets,
  BulletsItem,
  BulletsTitle,
  BulletsImage,
} from './styles';

const MainBullets = ({ content }) => (
  <Bullets>
    {content &&
      content.map(({ link, src, alt, name }) => (
        <BulletsItem>
          <Link to={link} title={alt}>
            <Figure>
              <BulletsImage src={src} alt={alt} />
            </Figure>
            <BulletsTitle>{name}</BulletsTitle>
          </Link>
        </BulletsItem>
      ))}
  </Bullets>
);

export default MainBullets;
