import React from 'react';
import TalkList from './TalkList';
import UserList from './UserList';
import { LayoutStyle } from '../styles/layout';

const Layout = (props) => {
  const { children } = props;
  return (
    <LayoutStyle>
      <TalkList/>
      { children }
      <UserList/>
    </LayoutStyle>
  );
}

export default Layout;