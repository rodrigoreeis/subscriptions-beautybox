import styled from 'styled-components';

export const TitlePage = styled.h2`
  font-size: var(--font-big);
  font-family: 'Bison', sans-serif;
  font-weight: 500;
  color: ${({ Purple }) =>
    Purple ? `var(--color-purple)` : `var(--color-black)`};
`;

export const SubTitle = styled.h4`
  font-size: var(--font-normal);
  text-transform: uppercase;
  font-weight: 500;
  color: var(--color-turquoise);
  margin-top: var(--gap-normal);
`;
