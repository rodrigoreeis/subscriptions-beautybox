import React from 'react';
import CardBehave from '../../components/CardBehave';
import { SwipeWrapper } from './styles';

const SwipeCards = ({ content }) => {
  return (
    <SwipeWrapper>
      {content &&
        content.map(({ number, title, description, className }) => (
          <CardBehave
            className={className}
            number={number}
            title={title}
            description={description}
          />
        ))}
    </SwipeWrapper>
  );
};
export default SwipeCards;
