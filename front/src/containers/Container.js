import React from 'react';
import TalkList from './TalkList';
import UserList from './UserList';
import { ContainerStyle } from '../styles/container';

const Container = (props) => {
  const { children } = props;
  return (
    <ContainerStyle>
      <TalkList/>
      { children }
      <UserList/>
    </ContainerStyle>
  );
}

export default Container;