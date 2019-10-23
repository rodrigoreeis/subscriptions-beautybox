import styled, { css } from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  ${props =>
    props.primary &&
    css`
      background-color: var(--color-pink);
      color: #fff;
      display: inline-flex;
      &:hover {
        background-color: var(--color-pink-hovered);
      }
    `}
`;

export default Button;
