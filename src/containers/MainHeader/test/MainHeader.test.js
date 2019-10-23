import React from 'react';
import renderer from 'react-test-renderer';

import MainHeader from '../MainHeader';

describe('<MainHeader />', () => {
  it('render correctly', () => {
    const mainHeader = renderer.create(<MainHeader />).toJSON();
    expect(mainHeader).toMatchSnapshot();
  });
});
