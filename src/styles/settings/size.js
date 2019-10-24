import { css } from 'styled-components';
import { rem } from 'polished';

const GlobalSize = css`
  :root {
    --size-normal: ${rem('15px')};
    --size-medium: ${rem('25px')};
    --size-big: ${rem('60px')};
    --size-biggest: ${rem('96px')};

    --font-smallest: ${rem('10px')};
    --font-small: ${rem('12px')};
    --font-normal: ${rem('16px')};
    --font-medium: ${rem('24px')};
  }
`;

export default GlobalSize;
