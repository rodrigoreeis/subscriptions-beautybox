import styled from 'styled-components';
import { rem } from 'polished';

const Logo = styled.div`
  width: ${rem('82px')};
  height: ${rem('8px')};
  @media (min-width: 1024px) {
    width: ${rem('165px')};
    height: ${rem('16px')};
  }
`;

export default Logo;
