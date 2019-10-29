import styled from 'styled-components';
import { rem } from 'polished';
import { flexColumn } from '../../styles/tools';

export const BenefitsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const BenefitsWrapper = styled.div`
  width: ${rem('120px')};
  ${flexColumn}
`;

export const Image = styled.div`
  border-radius: 50%;
`;

export const Title = styled.h3`
  font-size: var(--font-medium);
`;

export const Description = styled.p`
  font-size: var(--font-small);
`;

export const p = [];
