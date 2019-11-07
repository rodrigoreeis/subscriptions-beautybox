import styled from 'styled-components';
import Button from '../../components/MainButton/styles';

const Container = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: flex;
  ${Button} {
    width: 100%;
    border-radius: 0;
    padding: var(--gap-medium);
    transition: all 100ms linear;
    &.-removed {
      transform: translateY(100%);
    }
  }
`;

export default Container;
