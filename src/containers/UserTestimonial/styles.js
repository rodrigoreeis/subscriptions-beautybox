import styled from 'styled-components';
import { flexCentered } from '../../styles/tools';

export const Container = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  padding-bottom: var(--gap-medium);
`;

export const Wrapper = styled.div`
  min-width: 55%;
  ${flexCentered}
  flex-direction: column;
`;

export const Text = styled.p`
  text-align: center;
  max-width: 70%;
  margin: var(--gap-normal) 0;
  font-size: var(--font-small);
`;
export const Name = styled.p`
  font-weight: 500;
`;

export const UserName = styled.p`
  margin-top: var(--gap-normal);
`;
