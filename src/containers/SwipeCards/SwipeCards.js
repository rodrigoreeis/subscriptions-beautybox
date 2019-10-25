import React from 'react';
import shortid from 'shortid';
import CardBehave from '../../components/CardBehave';
import { SwipeWrapper } from './styles';

const SwipeCards = ({ content }) => {
  return (
    <SwipeWrapper>
      {content &&
        content.map(({ number, title, description, className }) => (
          <CardBehave
            key={shortid.generate()}
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
