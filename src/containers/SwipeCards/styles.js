import styled from 'styled-components';
// import { flexSpaced } from '../../styles/tools';
import { CardWrapper } from '../../components/CardBehave/styles';

export const SwipeWrapper = styled.section`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  justify-content: flex-start;
  margin-left: var(--gap-great);
  & ${CardWrapper} {
    min-width: 50%;
    &:not(:last-child) {
      margin-right: var(--gap-great);
    }
  }
`;

export const p = [];
