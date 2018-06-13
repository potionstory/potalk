import React, { Component } from 'react';
import { UserListStyle } from '../styles/userlist';

class UserList extends Component {
  render() {
    return (
      <UserListStyle>
        <div className="sign">
          <a className="waves-effect waves-light btn">SIGN IN</a>
          &nbsp;&nbsp;or&nbsp;&nbsp;
          <a className="waves-effect waves-light btn">SIGN UP</a>
        </div>
        <ul className="collection">
          <li className="collection-item avatar"><i className="material-icons circle">chat</i>USER 01</li>
          <li className="collection-item avatar"><i className="material-icons circle">chat</i>USER 02</li>
          <li className="collection-item avatar"><i className="material-icons circle">chat</i>USER 03</li>
        </ul>
      </UserListStyle>
    );
  }
}

export default UserList;