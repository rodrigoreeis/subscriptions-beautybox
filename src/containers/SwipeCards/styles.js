import styled from 'styled-components';
import { CardWrapper } from '../../components/CardBehave/styles';

// eslint-disable-next-line import/prefer-default-export
export const SwipeWrapper = styled.section`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  justify-content: flex-start;
  margin-bottom: var(--size-great);
  margin-top: var(--size-great);
  margin-left: var(--gap-great);
  & ${CardWrapper} {
    min-width: 50%;
    &:not(:last-child) {
      margin-right: var(--gap-great);
    }
  }
`;
