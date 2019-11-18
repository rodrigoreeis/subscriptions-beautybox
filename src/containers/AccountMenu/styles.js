import styled from 'styled-components';
import { rem } from 'polished';
import { flexCentered } from '../../styles/tools';

export const MenuFixed = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: ${rem('55px')};
  background-color: var(--color-turquoise);
  width: 100%;
  ${flexCentered};
  z-index: 1;
  transition: all 100ms linear;
  &.-removed {
    transform: translateY(100%);
  }
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ListItem = styled.li`
  cursor: pointer;
  > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--color-purple);
    > span {
      font-size: var(--font-small);
      font-weight: 500;
      margin-top: var(--gap-small);
      text-align: center;
    }
    > img {
      width: 16px;
      height: 16px;
    }
  }
`;
