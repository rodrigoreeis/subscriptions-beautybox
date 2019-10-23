import React from 'react';
import renderer from 'react-test-renderer';

import HeaderBBX from '../HeaderBBX';

describe('<HeaderBBX />', () => {
  it('render correctly', () => {
    const headerBBX = renderer.create(<HeaderBBX />).toJSON();
    expect(headerBBX).toMatchSnapshot();
  });
});
