import React from 'react';
import renderer from 'react-test-renderer';

import Container from '../index';

describe('<Container />', () => {
  it('render correctly', () => {
    const container = renderer.create(<Container />).toJSON();
    expect(container).toMatchSnapshot();
  });
});
