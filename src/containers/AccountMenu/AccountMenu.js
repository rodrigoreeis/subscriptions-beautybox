import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuFixed, List, ListItem } from './styles';
import Container from '../../layout/Container';

import throttle from '../../helpers/throttleScroll';
import hideElementFixed from '../../helpers/hideElementFixed';

import IconUser from '../../assets/img/icon-useraccount.png';
import IconOrders from '../../assets/img/icon-orders.png';
import IconAddress from '../../assets/img/icon-address.png';

const AccountMenu = ({ elementRef }) => {
  const [remove, setRemove] = useState();

  const handleScrollHide = () => {
    const { current } = elementRef;
    hideElementFixed(current, setRemove);
  };

  useEffect(() => {
    window.addEventListener(
      'scroll',
      throttle(handleScrollHide, 300),
    );
  });

  return (
    <MenuFixed onClick={handleScrollHide} className={remove}>
      <Container>
        <List>
          <ListItem>
            <Link to="/">
              <img src={IconUser} alt="Minha conta" />
              <span>Assinaturas</span>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/">
              <img src={IconUser} alt="Minha conta" />
              <span>Minha conta</span>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/">
              <img src={IconOrders} alt="Meus Pedidos" />
              <span>Pedidos</span>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/">
              <img src={IconAddress} alt="Endereço" />
              <span>Endereço</span>
            </Link>
          </ListItem>
        </List>
      </Container>
    </MenuFixed>
  );
};

export default AccountMenu;
