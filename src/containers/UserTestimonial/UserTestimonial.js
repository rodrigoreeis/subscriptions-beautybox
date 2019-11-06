import React from 'react';
import { Container, Wrapper, Text, Name, UserName } from './styles';

import Section from '../../objects/Section';
import ImageBullet from '../../components/ImageBullet';

const UserTestimonial = ({ content }) => {
  return (
    <Section>
      <Container>
        {content &&
          content.map(({ src, alt, text, name, userName }) => (
            <Wrapper>
              <ImageBullet src={src} alt={alt} />
              <Text>{text}</Text>
              <Name>{name}</Name>
              <UserName>{userName}</UserName>
            </Wrapper>
          ))}
      </Container>
    </Section>
  );
};

export default UserTestimonial;
