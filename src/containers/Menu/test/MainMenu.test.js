import React from 'react';
import renderer from 'react-test-renderer';

import MainMenu from '../MainMenu';

describe('<MainMenu />', () => {
  it('render correctly', () => {
    const mainMenu = renderer.create(<MainMenu />).toJSON();
    expect(mainMenu).toMatchSnapshot();
  });
});
