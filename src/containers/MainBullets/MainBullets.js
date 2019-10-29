import React from 'react';
import shortid from 'shortid';
import { Link } from 'react-router-dom';
import Figure from '../../objects/Figure';
import {
  Bullets,
  BulletsItem,
  BulletsTitle,
  BulletsImage,
} from './styles';
import Container from '../../layout/Container';

const MainBullets = ({ content }) => (
  <Container>
    <Bullets>
      {content &&
        content.map(({ link, src, alt, name }) => (
          <BulletsItem key={shortid.generate()}>
            <Link to={link} title={alt}>
              <Figure>
                <BulletsImage src={src} alt={alt} />
              </Figure>
              <BulletsTitle>{name}</BulletsTitle>
            </Link>
          </BulletsItem>
        ))}
    </Bullets>
  </Container>
);

export default MainBullets;
