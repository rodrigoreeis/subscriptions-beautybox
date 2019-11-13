import styled from 'styled-components';
import { rem } from 'polished';
import { flexColumn, center } from '../../styles/tools';
import Button from '../../components/MainButton/styles';
import Input from '../../components/InputField/styles';

export const Card = styled.div`
  background-color: var(--color-white);
  ${center}
  ${flexColumn};
  border-radius: var(--gap-small);
  box-shadow: var(--gap-smallest) var(--gap-smallest)
    var(--gap-smallest) #f1f1f1;
  width: 95%;
  margin-bottom: var(--gap-big);
  padding: var(--gap-great);
  box-sizing: border-box;
  &:first-of-type {
    margin-top: var(--gap-great);
  }
  & ${Button} {
    padding: var(--gap-great);
    width: 100%;
  }
  & ${Input} {
    margin-bottom: var(--gap-medium);
  }
`;

export const Title = styled.h2`
  font-size: var(--font-normal);
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: var(--gap-medium);
`;

export const Text = styled.p`
  font-size: ${rem('14px')};
  margin-bottom: var(--gap-great);
`;
