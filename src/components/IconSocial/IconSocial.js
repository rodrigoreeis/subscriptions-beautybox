import React from 'react';
import { SocialList } from './styles';
import IconFacebook from '../../assets/img/icon-facebook.png';
// import IconInstagram from '../../assets/img/icon-instagram.png';
// import IconYoutube from '../../assets/img/icon-youtube.png';

const IconSocial = () => {
  return (
    <SocialList>
      <li>
        <img src={IconFacebook} alt="Icone Facebook" />
      </li>
    </SocialList>
  );
};

export default IconSocial;
