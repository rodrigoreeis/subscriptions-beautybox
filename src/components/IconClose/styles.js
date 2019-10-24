import styled from 'styled-components';

export const ButtonClose = styled.button`
  width: var(--gap-great);
  cursor: pointer;
  display: flex;
  position: relative;
  padding: var(--gap-medium);
`;

export const Icon = styled.span`
  &::before,
  &::after {
    content: '';
    width: var(--gap-great);
    height: var(--gap-smallest);
    position: absolute;
    background-color: var(--color-black);
    left: 50%;
    margin-left: -10px;
  }
  &:before {
    transform: rotate(40deg);
  }
  &:after {
    transform: rotate(-40deg);
  }
`;
