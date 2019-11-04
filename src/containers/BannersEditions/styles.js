import styled from 'styled-components';
import { rem } from 'polished';
import { flexColumn, Arrow } from '../../styles/tools';
import MainButton from '../../components/MainButton/styles';

export const SwapContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  justify-content: flex-start;
  padding-bottom: var(--size-great);
  margin-left: var(--gap-great);
  ${MainButton} {
    border-radius: 0;
    padding: var(--gap-medium);
  }
`;

export const Wrapper = styled.div`
  ${flexColumn};
  min-width: ${rem('280px')};
  height: ${rem('390px')};
  background-color: var(--color-white);
  &:not(:last-of-type) {
    margin-right: var(--gap-great);
  }
`;

export const Content = styled.div`
  height: 100%;
  padding: var(--gap-great);
  ${flexColumn};
  justify-content: space-between;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ image }) => `url(${image})`};
  > a {
    color: var(--color-white);
    position: relative;
    ${Arrow};
    &::after {
      right: -57%;
    }
  }
`;

export const Title = styled.h3`
  font-family: 'Bison', sans-serif;
  color: var(--color-white);
  background-color: ${({ color }) => color};
  font-size: var(--font-big);
  padding: var(--gap-great);
`;

export const Text = styled.p`
  font-size: var(--font-small);
  font-weight: 500;
  color: var(--color-white);
`;
