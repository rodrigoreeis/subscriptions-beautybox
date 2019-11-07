import React, { useEffect, useState } from 'react';
import Container from './styles';
import throttle from '../../helpers/throttleScroll';

import MainButton from '../../components/MainButton';

const ButtonFixed = ({ content, footerRef, ...props }) => {
  const [removeButton, setRemoveButton] = useState('');

  const handleHideButton = () => {
    const footer = footerRef.current;
    if (footer) {
      const bounding = footer.getBoundingClientRect().top;
      const spaceBelow = bounding - window.innerHeight;
      if (spaceBelow < 0) {
        setRemoveButton('-removed');
      } else {
        setRemoveButton('');
      }
    }
  };

  useEffect(() => {
    window.addEventListener(
      'scroll',
      throttle(handleHideButton, 300),
    );
  });
  return (
    <Container>
      <MainButton
        {...props}
        content={content}
        className={removeButton}
      />
    </Container>
  );
};

export default ButtonFixed;
