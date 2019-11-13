import styled from 'styled-components';
import Button from '../../components/MainButton/styles';

const ContainerButton = styled.div`
  width: 100%;
  display: block;
  margin: 0 var(--gap-great);
  padding: var(--gap-medium) 0;
  ${Button} {
    padding: var(--gap-medium);
    width: 100%;
  }
`;

export default ContainerButton;
