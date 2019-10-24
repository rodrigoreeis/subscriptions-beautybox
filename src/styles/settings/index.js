import { createGlobalStyle } from 'styled-components';
import GlobalColors from './colors';
import GlobalSize from './size';
import GlobalGap from './gap';
import GlobalFonts from './fonts';

const GlobalSettings = createGlobalStyle`
    ${GlobalColors}
    ${GlobalSize}
    ${GlobalGap}
    ${GlobalFonts}
`;

export default GlobalSettings;
