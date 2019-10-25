import React from 'react';
import renderer from 'react-test-renderer';

import SwipeCards from '../SwipeCards';

describe('<SwipeCards />', () => {
  it('render correctly', () => {
    const swipeCards = renderer.create(<SwipeCards />).toJSON();
    expect(swipeCards).toMatchSnapshot();
  });
});
