import { css } from 'styled-components';
import { rem } from 'polished';

const GlobalSize = css`
  :root {
    --size-biggest: 96px;
    --size-big: 60px;

    --font-small: ${rem('12px')};
    --font-normal: ${rem('16px')};
    --font-medium: ${rem('24px')};
  }
`;

export default GlobalSize;
