import styled from 'styled-components';
import { rem } from 'polished';
import { flexColumn, AdditionSymbol } from '../../styles/tools';

export const AccordionContainer = styled.div`
  ${flexColumn};
`;

export const Button = styled.button`
  padding: var(--gap-great) 0;
  cursor: pointer;
`;

export const Title = styled.h4`
  font-size: ${rem('18px')};
  text-transform: uppercase;
  font-weight: 500;
  width: 100%;
  position: relative;
  text-align: left;
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
`;
