import React from 'react';
import { InitialStyle } from '../styles/initial';

const Initial = (props) => {
  return (
    <InitialStyle>
      <span className="logo"><i className="material-icons">chat</i></span>
      <span className="btns">
        <a className="waves-effect waves-light btn">SIGN IN</a>
        &nbsp;&nbsp;or&nbsp;&nbsp;
        <a className="waves-effect waves-light btn">SIGN UP</a>
      </span>
    </InitialStyle>
  );
}

export default Initial;