import React from 'react';
import renderer from 'react-test-renderer';

import IconSocial from '../IconSocial';

describe('<IconSocial />', () => {
  it('render correctly', () => {
    const iconSocial = renderer.create(<IconSocial />).toJSON();
    expect(iconSocial).toMatchSnapshot();
  });
});
