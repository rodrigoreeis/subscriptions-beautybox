import React from 'react';
import renderer from 'react-test-renderer';

import LogoBBX from '../LogoBBX';

describe('<LogoBBX />', () => {
  it('render correctly', () => {
    const logoBBX = renderer.create(<LogoBBX />).toJSON();
    expect(logoBBX).toMatchSnapshot();
  });
});
