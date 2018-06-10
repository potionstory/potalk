import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyle } from '../styles/header';

class Header extends Component {
  render() {
    return (
      <HeaderStyle>
        <div className="left">
          <input type="text" className="validate" placeholder="SEARCH TALK"/>
          <a className="waves-effect waves-light btn"><i className="material-icons">search</i></a>
        </div>
        <h1><Link to="/">PO&nbsp;<i className="material-icons">chat</i>&nbsp;TALK</Link></h1>
        <div className="right">
          <a className="waves-effect waves-light btn">SIGN IN</a>
          &nbsp;&nbsp;or&nbsp;&nbsp;
          <a className="waves-effect waves-light btn">SIGN UP</a>
        </div>
      </HeaderStyle>
    );
  }
}

export default Header;