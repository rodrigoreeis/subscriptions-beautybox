import { css } from 'styled-components';
import BisonWoff from '../../fonts/bison-boldpersonaluse-webfont.woff';
import BisonWoff2 from '../../fonts/bison-boldpersonaluse-webfont.woff2';

const GlobalFonts = css`
  @font-face {
    font-family: 'bisonbold';
    src: url(${BisonWoff2}) format('woff2'),
      url(${BisonWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

export default GlobalFonts;
