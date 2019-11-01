import React, { useState, useRef } from 'react';
import { AccordionContainer, Button, Title, Content } from './styles';

const MainAccordion = ({ title, children }) => {
  const [activeHeight, setActiveHeight] = useState('0px');
  const [activeAccordion, setActiveAccordion] = useState('');
  const [activeRotate, seActiveRotate] = useState('');
  const contentRef = useRef(null);

  function toggleAccordion() {
    setActiveAccordion(activeAccordion === '' ? '-active' : '');
    setActiveHeight(
      activeAccordion !== '-active'
        ? `${contentRef.current.scrollHeight}px`
        : '0px',
    );
    seActiveRotate(activeRotate === '-active' ? '' : '-active');
  }

  return (
    <AccordionContainer>
      <Button
        onClick={toggleAccordion}
        className={activeAccordion}
        title={title}
      >
        <Title className={activeRotate}>{title}</Title>
      </Button>
      <Content
        ref={contentRef}
        style={{ maxHeight: `${activeHeight}` }}
      >
        {children}
      </Content>
    </AccordionContainer>
  );
};

export default MainAccordion;
