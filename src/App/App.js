import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ScrollToTop from '../helpers/scrollToTop';

import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import FirstPicks from '../pages/PreviousEditions/FirstPicks';
import BoxMounth from '../pages/BoxMounth';
import UserLogin from '../pages/UserLogin';
import Account from '../pages/MyAccount/Account';

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/product" component={ProductPage} />
      <Route path="/first-picks" component={FirstPicks} />
      <Route path="/box-page" component={BoxMounth} />
      <Route path="/login" component={UserLogin} />
      <Route path="/minha-conta" component={Account} />
    </Switch>
  </BrowserRouter>
);

export default App;
