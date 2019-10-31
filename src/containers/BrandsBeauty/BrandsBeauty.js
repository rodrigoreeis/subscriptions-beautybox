import React from 'react';
import { Link } from 'react-router-dom';
import { SwapContainer, Image, Item } from './styles';
import Section from '../../objects/Section';

const BrandsBeauty = ({ content }) => {
  return (
    <Section>
      <SwapContainer>
        {content &&
          content.map(({ link, src, alt }) => (
            <Item>
              <Link to={link}>
                <Image src={src} alt={alt} />
              </Link>
            </Item>
          ))}
      </SwapContainer>
    </Section>
  );
};

export default BrandsBeauty;
