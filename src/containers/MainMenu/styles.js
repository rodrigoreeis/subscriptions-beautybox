import styled from 'styled-components';
import { flexColumn } from '../../styles/tools';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  ${flexColumn};
  background-color: var(--color-white);
  height: 100%;
  transform: translateY(-100%);
  transition: transform 200ms linear;
  &.-active {
    transform: translateY(0);
  }
`;

export const p = styled.p``;
