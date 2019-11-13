import React from 'react';
import Link from './styles';

const LinkPink = ({ href, children }) => (
  <Link to={href}>{children}</Link>
);
export default LinkPink;
