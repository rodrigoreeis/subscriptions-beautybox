import styled from 'styled-components';
import { rem } from 'polished';
import { flexColumn } from '../../styles/tools';

export const CardWrapper = styled.div`
  height: ${rem('390px')};
  ${flexColumn};
  padding: var(--size-great);
  background-color: var(--color-turquoise);
  border: var(--size-normal) solid var(--color-turquoise);
  margin-bottom: var(--size-medium);
  justify-content: center;
`;

export const CardNumber = styled.span`
  font-size: var(--size-biggest);
  color: var(--color-white);
  margin-bottom: var(--gap-medium);
`;

export const CardTitle = styled.h3`
  margin-bottom: var(--gap-great);
  font-size: var(--font-big);
  font-family: 'Bison', sans-serif;
  font-weight: 500;
  color: var(--color-purple);
`;

export const CardDescription = styled.p`
  font-weight: 500;
  font-size: var(--font-normal);
`;
