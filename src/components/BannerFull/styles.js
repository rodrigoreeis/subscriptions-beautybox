import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { flexColumn } from '../../styles/tools';
import Button from '../MainButton/styles';

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
`;

export const BannerContent = styled.article`
  ${flexColumn}
  padding: 0 var(--size-great);
  transform: translateY(-22px);
  & ${Button} {
    max-width: var(--size-button);
    padding: var(--size-normal) var(--size-medium);
    margin-top: var(--gap-medium);
  }
`;

export const BannerTitle = styled.h2`
  font-size: var(--font-big);
  font-family: 'Bison', sans-serif;
  margin-bottom: var(--gap-small);
`;

export const BannerDescription = styled.p`
  font-size: var(--font-small);
  font-weight: 500;
  margin-top: var(--gap-medium);
`;
