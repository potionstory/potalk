import React from 'react';
import { LoginStyle } from '../styles/login';

const Login = (props) => {
  return (
    <LoginStyle>
      <h2>Login</h2>
      <div class="row">
        <div className="input-field">
          <input type="text" id="id" class="validate"/>
          <label for="id">USER ID</label>
        </div>
        <div className="input-field">
        <input type="password" id="password" class="validate"/>
        <label for="password">PASSWORD</label>
      </div>
      </div>
    </LoginStyle>
  );
}

export default Login;