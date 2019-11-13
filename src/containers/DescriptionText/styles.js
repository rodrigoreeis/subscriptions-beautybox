import styled from 'styled-components';
import { rem } from 'polished';

const Text = styled.p`
  font-size: var(--font-normal);
  line-height: ${rem('24px')};
  font-weight: 400;
  text-align: center;
  padding: 0 var(--gap-great);
`;

export default Text;
