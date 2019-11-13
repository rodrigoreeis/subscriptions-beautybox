import React from 'react';
import { TitlePage, SubTitle } from './styles';

const MainTitle = ({ content, subTitle, ...props }) => (
  <>
    {content && <TitlePage {...props}>{content}</TitlePage>}
    {subTitle && <SubTitle {...props}>{subTitle}</SubTitle>}
  </>
);

export default MainTitle;
