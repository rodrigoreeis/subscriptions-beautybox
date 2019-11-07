import styled from 'styled-components';
import { rem } from 'polished';
import { flexSpaced } from '../../styles/tools';

import Button from '../../components/MainButton/styles';
import ContainerWrapper from '../../layout/Container/styles';

export const Header = styled.header`
  height: ${rem('50px')};
  width: 100%;
  display: flex;
  background-color: var(--color-white);
  position: fixed;
  top: 0;
  z-index: 2;
  & ${ContainerWrapper} {
    height: 100%;
    flex-direction: row;
    ${flexSpaced}
  }
  h1 {
    width: 40%;
  }
`;

export const User = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  svg {
    height: ${rem('20px')};
    width: ${rem('20px')};
    padding: var(--gap-normal);
  }
  & ${Button} {
    width: var(--size-biggest);
    padding: ${rem('6px')} 0;
  }
`;
