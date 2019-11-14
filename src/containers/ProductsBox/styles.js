import styled from 'styled-components';
import { rem } from 'polished';

const Container = styled.section`
  display: flex;
  width: 100%;
  margin-top: var(--gap-great);
  overflow-x: scroll;
  overflow-y: hidden;
  width: 100%;
  flex-flow: column wrap;
  height: ${rem('515px')};
  margin-left: var(--gap-great);
`;

export default Container;
