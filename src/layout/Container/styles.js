import styled from 'styled-components';
import { rem } from 'polished';

const ContainerWrapper = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  max-width: ${rem('1136px')};
  flex-direction: column;
  @media screen and (max-width: 768px) {
    padding: 0 ${rem('8px')};
  }
`;

export default ContainerWrapper;
