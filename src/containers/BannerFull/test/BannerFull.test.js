import React from 'react';
import renderer from 'react-test-renderer';

import BannerFull from '../BannerFull';

describe('<BannerFull />', () => {
  it('render correctly', () => {
    const bannerFull = renderer.create(<BannerFull />).toJSON();
    expect(bannerFull).toMatchSnapshot();
  });
});
