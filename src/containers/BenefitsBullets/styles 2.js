import styled from 'styled-components';
import { rem } from 'polished';
import { flexColumn } from '../../styles/tools';

export const BenefitsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const BenefitsWrapper = styled.div`
  width: ${rem('120px')};
  ${flexColumn}
  align-items: center;
  margin-bottom: var(--gap-great);
`;

export const Image = styled.div`
  border-radius: 50%;
  background-color: var(--color-turquoise);
  width: ${rem('90px')};
  height: ${rem('90px')};
  margin-bottom: var(--gap-small);
`;

export const Title = styled.h3`
  font-size: var(--font-medium);
  text-align: center;
  color: var(--color-gray-darkenst);
  margin-bottom: var(--gap-small);
`;

export const Description = styled.p`
  font-size: var(--font-small);
  text-align: center;
`;
