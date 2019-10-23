import React from 'react';
import renderer from 'react-test-renderer';

import IconMenu from '../IconMenu';

describe('<IconMenu />', () => {
  it('render correctly', () => {
    const iconMenu = renderer.create(<IconMenu />).toJSON();
    expect(iconMenu).toMatchSnapshot();
  });
});
