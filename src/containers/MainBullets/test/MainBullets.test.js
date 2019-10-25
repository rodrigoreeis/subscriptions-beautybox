import React from 'react';
import renderer from 'react-test-renderer';

import MainBullets from '../MainBullets';

describe('<MainBullets />', () => {
  it('render correctly', () => {
    const mainBullets = renderer.create(<MainBullets />).toJSON();
    expect(mainBullets).toMatchSnapshot();
  });
});
