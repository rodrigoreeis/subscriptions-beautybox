import styled from 'styled-components';
import { rem } from 'polished';
import { flexColumn } from '../../styles/tools';

export const Wrapper = styled.div`
  display: flex;
  max-width: ${rem('280px')};
  margin-right: var(--gap-great);
  margin-bottom: var(--gap-great);
`;

export const Content = styled.div`
  ${flexColumn};
  margin-left: var(--gap-great);
  max-width: 40%;
  justify-content: center;
  text-align: center;
`;

export const Title = styled.h4`
  margin-bottom: var(--gap-medium);
  font-size: var(--font-normal);
`;

export const Text = styled.p`
  font-size: var(--font-small);
`;
