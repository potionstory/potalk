import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TitleStyle } from '../styles/title';

class Title extends Component {
  render() {
    return (
      <TitleStyle>
        <h1><Link to="/">PO&nbsp;<i className="material-icons">chat</i>&nbsp;TALK</Link></h1>
      </TitleStyle>
    );
  }
}

export default Title;