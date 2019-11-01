import styled from 'styled-components';
import { rem } from 'polished';
import { Title, Button } from '../../components/MainAccordion/styles';

export const Questions = styled.section`
  display: flex;
  margin-bottom: var(--gap-great);
  & ${Button} {
    padding: var(--gap-great) 0;
  }
  & ${Title} {
    font-size: ${rem('18px')};
    text-transform: uppercase;
    font-weight: 500;
    width: 100%;
    text-align: left;
  }
`;

export const Text = styled.p``;
