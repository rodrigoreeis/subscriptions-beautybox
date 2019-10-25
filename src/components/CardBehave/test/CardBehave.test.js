import React from 'react';
import renderer from 'react-test-renderer';

import CardBehave from '../CardBehave';

describe('<CardBehave />', () => {
  it('render correctly', () => {
    const cardBehave = renderer.create(<CardBehave />).toJSON();
    expect(cardBehave).toMatchSnapshot();
  });
});
