import styled from 'styled-components';
import { rem } from 'polished';

export const Bullets = styled.ul`
  display: flex;
`;

export const BulletsImage = styled.img`
  border-radius: 50%;
  height: ${rem('60px')};
  width: ${rem('60px')};
`;

export const BulletsItem = styled.li`
  &:not(:last-of-type) {
    margin-right: var(--gap-great);
  }
  &:first-of-type {
    & ${BulletsImage} {
      border: 2px solid var(--color-pink);
    }
  }
`;

export const BulletsTitle = styled.h3`
  font-size: var(--font-smallest);
  font-weight: 500;
  color: var(--color-gray-darkenst);
  margin-top: var(--gap-small);
  text-align: center;
`;
