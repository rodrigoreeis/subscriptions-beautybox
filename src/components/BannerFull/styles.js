import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { flexColumn } from '../../styles/tools';

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
`;

export const BannerContent = styled.article`
  ${flexColumn}
`;

export const BannerTitle = styled.h2`
  font-size: var(--font-big);
  font-weight: bold;
`;

export const BannerDescription = styled.p``;
