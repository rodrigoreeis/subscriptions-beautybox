import styled from 'styled-components';
import { rem } from 'polished';
import { flexCentered } from '../../styles/tools';

export const Button = styled.button`
  height: 100%;
  padding-left: ${rem('32px')};
  padding-right: ${rem('32px')};
  ${flexCentered}
`;

export const Icon = styled.span`
  width: ${rem('18px')};
  height: var(--gap-smallest);
  background-color: var(--color-black);
  position: relative;
  &::before,
  &::after {
    content: '';
    width: ${rem('23px')};
    height: var(--gap-smallest);
    position: absolute;
    background-color: var(--color-black);
    left: -2px;
  }
  &::before {
    top: var(--gap-small);
  }
  &::after {
    bottom: var(--gap-small);
  }
`;
