import styled from 'styled-components';
import { rem } from 'polished';

const Input = styled.input`
  width: 100%;
  border-bottom: ${rem('1px')} solid var(--color-gray);
  padding: ${rem('9.5px')} 0;
  font-size: var(--font-small);
  &:hover {
    border-color: var(--color-turquoise);
  }
`;

export default Input;
