import React from 'react';
import { Link } from 'react-router-dom';
import { JoinStyle } from '../styles/join';

const Join = (props) => {
  return (
    <JoinStyle>
      <div className="card">
        <h2>SIGN UP</h2>
        <div className="card-content">
          <div class="row">
            <div className="input-field">
              <input type="text" id="id" class="validate"/>
              <label for="id">USER ID</label>
            </div>
            <div className="input-field">
              <input type="text" id="email" class="validate"/>
              <label for="email">E-MAIL</label>
            </div>
            <div className="input-field">
              <input type="password" id="pw" class="validate"/>
              <label for="pw">PASSWORD</label>
            </div>
            <div className="input-field">
              <input type="password" id="re_pw" class="validate"/>
              <label for="re_pw">CONFIRM PASSWORD</label>
            </div>
            <div className="card-action">
              <a className="waves-effect waves-light btn">SIGN UP</a>
            </div>
          </div>
        </div>
        <div className="card_add">
          You POTALK Member?<Link to="/login">Sing in account.</Link>
        </div>
      </div>
    </JoinStyle>
  );
}

export default Join;