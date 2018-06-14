import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { UserListStyle } from '../styles/userlist';

class UserList extends Component {
  render() {
    return (
      <UserListStyle>
        <div className="sign">
          <Link to="/login" className="waves-effect waves-light btn">SIGN IN</Link>
          &nbsp;&nbsp;or&nbsp;&nbsp;
          <Link to="/join" className="waves-effect waves-light btn">SIGN UP</Link>
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