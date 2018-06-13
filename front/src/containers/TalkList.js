import React, { Component } from 'react';
import { TalkListStyle } from '../styles/talklist';

class TalkList extends Component {
  render() {
    return (
      <TalkListStyle>
        <div className="search">
          <input type="text" className="validate" placeholder="SEARCH TALK"/>
          <a className="waves-effect waves-light btn"><i className="material-icons">search</i></a>
        </div>
        <div className="collection">
          <a href="#!" className="collection-item"><span className="badge">5</span>TALK 01</a>
          <a href="#!" className="collection-item"><span className="badge">10</span>TALK 02</a>
          <a href="#!" className="collection-item"><span className="badge">20</span>TALK 03</a>
        </div>
      </TalkListStyle>
    );
  }
}

export default TalkList;