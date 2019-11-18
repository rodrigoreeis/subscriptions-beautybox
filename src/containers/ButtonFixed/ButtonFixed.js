import React, { useEffect, useState } from 'react';
import Container from './styles';

import throttle from '../../helpers/throttleScroll';
import hideFixed from '../../helpers/hideElementFixed';

import MainButton from '../../components/MainButton';

const ButtonFixed = ({ content, elementRef, ...props }) => {
  const [remove, setRemove] = useState('');

  const handleHideButton = () => {
    const element = elementRef.current;
    hideFixed(element, setRemove);
  };

  useEffect(() => {
    window.addEventListener(
      'scroll',
      throttle(handleHideButton, 300),
    );
  });

  return (
    <Container>
      <MainButton {...props} content={content} className={remove} />
    </Container>
  );
};

export default ButtonFixed;
