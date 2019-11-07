import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ScrollToTop from '../helpers/scrollToTop';

import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import FirstPicks from '../pages/PreviousEditions/FirstPicks';
import HotPicks from '../pages/PreviousEditions/HotPicks';

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/product" component={ProductPage} />
      <Route path="/first-picks" component={FirstPicks} />
      <Route
        path="/edicoes-anteriores/hot-picks"
        component={HotPicks}
      />
    </Switch>
  </BrowserRouter>
);

export default App;
