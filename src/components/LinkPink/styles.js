import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { rem } from 'polished';

const StyledLink = styled(Link)`
  font-size: ${rem('14px')};
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
  color: var(--color-pink);
`;

export default StyledLink;
