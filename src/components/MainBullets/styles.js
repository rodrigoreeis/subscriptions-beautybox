import styled from 'styled-components';
import { rem } from 'polished';
// import { flexColumn } from '../../styles/tools';

export const Bullets = styled.ul`
  display: flex;
`;

export const BulletsItem = styled.li`
  margin-right: var(--gap-medium);
`;

export const BulletsImage = styled.img`
  border-radius: 50%;
  height: ${rem('60px')};
  width: ${rem('60px')};
`;

export const BulletsTitle = styled.h3`
  font-size: var(--font-smallest);
  font-weight: 500;
  color: var(--color-gray-darkenst);
  margin-top: var(--gap-small);
  text-align: center;
`;
