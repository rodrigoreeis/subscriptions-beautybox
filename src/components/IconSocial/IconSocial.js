import React from 'react';
import SocialList from './styles';
import IconFacebook from '../../assets/img/icon-facebook.png';
import IconInstagram from '../../assets/img/icon-instagram.png';
import IconYoutube from '../../assets/img/icon-youtube.png';

const IconSocial = () => {
  return (
    <SocialList>
      <li>
        <a
          href="https://www.google.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={IconFacebook} alt="Icone Facebook" />
        </a>
      </li>
      <li>
        <a
          href="https://www.google.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={IconInstagram} alt="Icone Instagram" />
        </a>
      </li>
      <li>
        <a
          href="https://www.google.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={IconYoutube} alt="Icone Youtube" />
        </a>
      </li>
    </SocialList>
  );
};

export default IconSocial;
