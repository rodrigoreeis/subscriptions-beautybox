import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ScrollToTop from '../helpers/scrollToTop';

import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/product" component={ProductPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
