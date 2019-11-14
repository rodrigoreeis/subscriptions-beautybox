import React from 'react';

import Header from '../../../containers/Header';
import Footer from '../../../containers/Footer';

import Main from '../../../objects/Main';

import AccountMenu from '../../../containers/AccountMenu';

const MyAccount = () => {
  return (
    <>
      <Header />
      <AccountMenu />
      <Main />
      <Footer />
    </>
  );
};

export default MyAccount;
