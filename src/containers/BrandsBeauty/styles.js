import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { rem } from 'polished';

export const Swap = styled.section`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  width: 100%;
  margin-top: var(--size-great);
  margin-left: var(--gap-great);
`;

export const StyledLink = styled(Link)`
  width: ${rem('80px')};
  height: ${rem('80px')};
  border-radius: 50%;
`;
