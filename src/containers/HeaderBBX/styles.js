import styled from 'styled-components';
import { rem } from 'polished';
import { flexSpaced } from '../../styles/tools';
import ContainerWrapper from '../../layout/Container/styles';

export const Header = styled.header`
  height: ${rem('50px')};
  width: 100%;
  display: flex;
  & ${ContainerWrapper} {
    height: 100%;
    flex-direction: row;
    ${flexSpaced}
  }
`;

export const p = styled.p``;
