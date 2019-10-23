import React from 'react';
import renderer from 'react-test-renderer';

import MainButton from '../MainButton';

describe('<MainButton />', () => {
  it('render correctly', () => {
    const mainButton = renderer.create(<MainButton />).toJSON();
    expect(mainButton).toMatchSnapshot();
  });
});
