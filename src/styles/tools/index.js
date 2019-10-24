import { css } from 'styled-components';
import { rem } from 'polished';

export const center = () => css`
  margin-left: auto;
  margin-right: auto;
`;

export const flexCentered = () => css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const flexColumn = () => css`
  display: flex;
  flex-direction: column;
`;

export const flexSpaced = () => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const flexAround = () => css`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const AdditionSymbol = () => css`
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: ${rem('20px')};
    height: ${rem('2px')};
  }
  &:after {
    transform: rotate(90deg);
  }
`;
