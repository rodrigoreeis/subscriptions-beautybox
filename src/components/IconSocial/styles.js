import styled from 'styled-components';
import { rem } from 'polished';
import { flexSpaced } from '../../styles/tools';

const SocialList = styled.ul`
  ${flexSpaced};
  > li {
    width: ${rem('32px')};
    height: ${rem('32px')};
  }
`;

export default SocialList;
