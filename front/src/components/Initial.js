import React from 'react';
import { Link } from 'react-router-dom';
import { InitialStyle } from '../styles/initial';

const Initial = (props) => {
  return (
    <InitialStyle>
      <span className="logo"><i className="material-icons">chat</i></span>
      <span className="btns">
        <Link to="/login" className="waves-effect waves-light btn">SIGN IN</Link>
        &nbsp;&nbsp;or&nbsp;&nbsp;
        <Link to="/join" className="waves-effect waves-light btn">SIGN UP</Link>
      </span>
    </InitialStyle>
  );
}

export default Initial;