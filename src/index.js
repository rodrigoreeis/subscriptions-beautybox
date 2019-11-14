import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';

import GlobalSettings from './styles/settings';
import GlobalStyles from './styles/generic';
import GlobalBase from './styles/base/root';

ReactDOM.render(
  <>
    <GlobalBase />
    <GlobalStyles />
    <GlobalSettings />
    <App />
  </>,
  document.querySelector('[data-js="app"]'),
);
