import styled from 'styled-components';
import { rem } from 'polished';
import Label from '../../objects/Label';
import Input from '../../objects/Input';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: var(--gap-medium) 0;
  & ${Label} {
    font-size: var(--font-normal);
    margin-left: var(--gap-big);
    width: 100%;
    height: ${rem('35px')};
    line-height: ${rem('35px')};
    cursor: pointer;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      width: ${rem('30px')};
      height: ${rem('30px')};
      border: ${rem('1px')} solid var(--color-black);
      left: -52px;
    }
    &::after {
      content: '';
      left: -48.7px;
      position: absolute;
      width: ${rem('25px')};
      height: ${rem('25px')};
      top: 3.5px;
    }
  }
  & ${Input} {
    opacity: 0;
    visibility: hidden;
    &:checked + label {
      &::after {
        background-color: var(--color-pink);
      }
    }
  }
`;

export default Wrapper;
