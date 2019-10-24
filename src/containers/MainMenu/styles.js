import styled from 'styled-components';
import { rem } from 'polished';
import {
  flexColumn,
  flexCentered,
  flexSpaced,
} from '../../styles/tools';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  ${flexColumn};
  height: 100%;
  transform: translateY(-100%);
  transition: transform 0.4s ease-in-out 0s;
  background-color: var(--color-gray-lighter);
  &.-active {
    transform: translateY(0);
  }
`;

export const Close = styled.div`
  width: 100%;
  ${flexCentered};
  padding: var(--gap-great) 0px;
  background-color: var(--color-white);
`;

export const User = styled.div`
  ${flexSpaced};
  padding-left: ${rem('30px')};
  padding-right: ${rem('30px')};
  padding-bottom: var(--gap-big);
  background-color: var(--color-white);
`;

export const UserContent = styled.div`
  ${flexColumn};
  > .user-welcome {
    font-size: var(--font-normal);
    font-weight: 500;
  }
  > .user-login {
    font-size: var(--font-small);
    color: var(--color-pink);
    text-decoration: underline;
    font-weight: 500;
    margin-top: var(--gap-normal);
  }
`;

export const UserAvatar = styled.div`
  width: var(--size-big);
  height: var(--size-big);
  background-color: red;
`;

export const Options = styled.div`
  padding: var(--gap-big) ${rem('30px')};
`;

export const OptionsList = styled.ul`
  ${flexColumn};
`;

export const ListName = styled.li`
  font-size: var(--font-medium);
  margin-bottom: var(--gap-big);
  font-weight: 500;
`;
