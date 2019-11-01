import styled from 'styled-components';
import Button from '../../components/MainButton/styles';

export const Form = styled.form`
  display: inline-flex;
  width: 100%;
  margin-top: var(--gap-medium);
  & ${Button} {
    position: fixed;
    bottom: 0;
    width: 100%;
    left: 0;
    border-radius: 0;
    padding: var(--gap-medium);
    z-index: 1;
  }
`;

export const Legend = styled.legend`
  font-size: var(--font-normal);
  font-weight: 500;
  margin-bottom: var(--gap-great);
`;
