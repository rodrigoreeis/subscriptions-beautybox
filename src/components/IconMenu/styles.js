import styled from 'styled-components';
import { rem } from 'polished';
import { flexCentered } from '../../styles/tools';

export const ButtonIcon = styled.button`
  height: 100%;
  padding-left: ${rem('32px')};
  padding-right: ${rem('32px')};
  ${flexCentered}
`;

export const Icon = styled.span`
  width: var(--gap-medium);
  height: var(--gap-smallest);
  background-color: var(--color-black);
  position: relative;
  cursor: pointer;
  &::before,
  &::after {
    content: '';
    width: var(--gap-great);
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
