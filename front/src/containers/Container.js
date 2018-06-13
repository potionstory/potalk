import React from 'react';
import Title from '../containers/Title';
import { ContainerStyle } from '../styles/container';

const Container = (props) => {
  const { children } = props;
  return (
    <ContainerStyle>
      <Title/>
      { children }
    </ContainerStyle>
  );
}

export default Container;