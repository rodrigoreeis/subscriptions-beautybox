import styled from 'styled-components';
import { rem } from 'polished';
import Logo from '../../components/LogoBeauty/styles';
import { Title } from '../../components/MainAccordion/styles';

export const Footer = styled.footer`
  background-color: var(--color-purple);
  @media (min-width: 1024px) {
    padding: var(--gap-great) calc((100% - 1136px) / 2);
  }
`;

export const WrapperLogo = styled.div`
  border-bottom: ${rem('1px')} solid rgba(255, 255, 255, 0.24);
  padding: var(--gap-great);
  width: 100%;
  & ${Logo} {
    cursor: pointer;
    width: ${rem('125px')};
  }
`;

export const Content = styled.div`
  padding: var(--gap-great);
  border-bottom: ${rem('1px')} solid var(--color-gray-lighter-1);
  & ${Title} {
    color: var(--color-white);
    font-size: ${rem('18px')};
    text-align: left;
    text-transform: uppercase;
    font-weight: 500;
    &::before,
    &::after {
      width: var(--gap-normal);
      height: ${rem('1px')};
      background-color: var(--color-white);
    }
  }
`;

export const Infos = styled.div`
  padding: var(--gap-big) var(--gap-great);
  border-bottom: ${rem('1px')} solid var(--color-gray-lighter-1);
`;

export const Small = styled.p`
  color: var(--color-white);
  font-weight: 500;
  line-height: ${rem('13px')};
  font-size: var(--font-small);
`;

export const Phone = styled.p`
  color: var(--color-white);
  font-weight: 500;
  font-size: var(--font-medium);
  margin-bottom: var(--gap-great);
  margin-top: var(--gap-small);
`;
