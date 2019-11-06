import styled from 'styled-components';
import { rem } from 'polished';
import { flexColumn } from '../../styles/tools';
import { Button } from '../../components/MainAccordion/styles';

export const Container = styled.section`
  display: flex;
  width: 100%;
  margin-top: var(--gap-great);
  overflow-x: scroll;
  overflow-y: hidden;
  height: ${rem('480px')};
  width: 100%;
  flex-flow: column wrap;
  align-content: flex-start;
  margin-left: var(--gap-great);
  @media (max-width: 320px) {
    height: ${rem('425px')};
  }
  ${Button} {
    padding: var(--gap-great);
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  ${flexColumn}
  width: 75%;
  margin-right: var(--gap-great);
  margin-bottom: var(--gap-medium);
`;
