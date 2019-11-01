import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Header, User } from './styles';
import Container from '../../layout/Container';

import IconUser from '../../assets/icons/icon-user-login.svg';
import LogoBeauty from '../../components/LogoBeauty';
import IconMenu from '../../components/IconMenu';
import MainButton from '../../components/MainButton';
import Menu from '../Menu';

const MainHeader = () => {
  const [activeMenu, setActiveMenu] = useState([]);

  const handleOpenMenu = () => setActiveMenu('-active');
  const handleCloseMenu = () => setActiveMenu('');
  return (
    <>
      <Header>
        <Container>
          <h1>
            <Link to="/" title="Beautybox - Club de Assinaturas">
              <LogoBeauty />
            </Link>
          </h1>
          <IconMenu onClick={handleOpenMenu} />
          <User>
            <IconUser />
            <MainButton
              Primary
              title="Assine"
              type="button"
              content="Assine"
            />
          </User>
        </Container>
        <Menu className={activeMenu} onClick={handleCloseMenu} />
      </Header>
    </>
  );
};

export default MainHeader;
