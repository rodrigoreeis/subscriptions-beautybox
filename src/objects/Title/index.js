import styled from 'styled-components';

const Title = styled.h2`
  color: var(--color-black);
  font-size: var(--font-great);
  font-weight: 500;
  margin: var(--gap-big) 0;
  @media screen and (max-width: 768px) {
    padding: 0 var(--gap-great);
  }
`;

export default Title;
