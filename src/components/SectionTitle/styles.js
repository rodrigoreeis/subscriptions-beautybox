import styled from 'styled-components';
import StyledLink from '../LinkPink/styles';

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 var(--gap-great);
  padding: var(--gap-great) 0;
  & ${StyledLink} {
    padding-bottom: var(--gap-small);
  }
`;

export default Container;
