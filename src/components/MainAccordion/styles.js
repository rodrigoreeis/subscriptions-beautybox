import styled from 'styled-components';
import { flexColumn, AdditionSymbol } from '../../styles/tools';

export const AccordionContainer = styled.div`
  ${flexColumn};
`;

export const Button = styled.button`
  cursor: pointer;
`;

export const Title = styled.h4`
  position: relative;
  ${AdditionSymbol}
  &::before,
  &::after {
    top: 50%;
    transition: all 0.2s linear;
    right: var(--gap-great);
    background-color: var(--color-black);
  }
  &.-active {
    &::after {
      transform: rotate(0);
    }
  }
`;

export const Content = styled.div`
  overflow: hidden;
  transition: max-height 0.3s linear;
  display: flex;
  flex-direction: column;
`;
