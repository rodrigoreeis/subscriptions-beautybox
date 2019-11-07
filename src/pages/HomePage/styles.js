import styled from 'styled-components';
import ContainerWrapper from '../../layout/Container/styles';

const BulletsContainer = styled.section`
  display: flex;
  margin: var(--gap-great) 0;
  & ${ContainerWrapper} {
    align-items: center;
  }
`;

export default BulletsContainer;
