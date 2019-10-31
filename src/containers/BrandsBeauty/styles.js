import styled from 'styled-components';
import { rem } from 'polished';

export const SwapContainer = styled.ul`
  display: flex;
  overflow-x: scroll;
  margin-left: var(--gap-great);
  justify-content: flex-start;
  align-items: center;
  display: -webkit-box;
`;

export const Item = styled.li`
  width: ${rem('80px')};
  height: ${rem('80px')};
  border-radius: 50%;
  &:not(:last-of-type) {
    margin-right: var(--gap-great);
  }
`;

export const Image = styled.img`
  border-radius: 50%;
`;
