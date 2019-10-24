import styled from 'styled-components';

const Icon = styled.span`
  width: var(--gap-great);
  height: var(--gap-smallest);
  position: relative;
  cursor: pointer;
  padding: var(--gap-medium);
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

export default Icon;
