import styled from 'styled-components';
import { rem } from 'polished';
import { Title, Button } from '../../components/Accordion/styles';

const Section = styled.section`
  display: flex;
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

export default Section;
