import React from 'react';
import renderer from 'react-test-renderer';

import IconClose from '../IconClose';

describe('<IconClose />', () => {
  it('render correctly', () => {
    const iconClose = renderer.create(<IconClose />).toJSON();
    expect(iconClose).toMatchSnapshot();
  });
});
