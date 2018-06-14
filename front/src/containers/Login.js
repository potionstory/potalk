import React from 'react';
import { Link } from 'react-router-dom';
import { LoginStyle } from '../styles/login';

const Login = (props) => {
  return (
    <LoginStyle>
      <div className="card">
        <h2>SIGN IN</h2>
        <div className="card-content">
          <div class="row">
            <div className="input-field">
              <input type="text" id="id" class="validate"/>
              <label for="id">USER ID</label>
            </div>
            <div className="input-field">
              <input type="password" id="re_pw" class="validate"/>
              <label for="re_pw">PASSWORD</label>
            </div>
            <div className="card-action">
              <a className="waves-effect waves-light btn">SIGN IN</a>
            </div>
          </div>
        </div>
        <div className="card_add">
          New to POTALK?<Link to="/join">Create an account.</Link>
        </div>
      </div>
    </LoginStyle>
  );
}

export default Login;