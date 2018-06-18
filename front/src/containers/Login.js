import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LoginStyle } from '../styles/login';
import * as AuthActions from '../store/modules/Auth';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  };

  componentDidMount() {
    const { AuthActions } = this.props;
    AuthActions.login();
  }

  render () {
    return (
      <LoginStyle>
        <div className="card">
          <h2>SIGN IN</h2>
          <div className="card-content">
            <div className="row">
              <div className="input-field">
                <input type="text" id="id" className="validate"/>
                <label for="id">USER ID</label>
              </div>
              <div className="input-field">
                <input type="password" id="re_pw" className="validate"/>
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
}

const mapStateToProps = state => {
  return {
    isLogined: state.Auth.isLogined
  }
}

const mapDispatchToProps = dispatch => {
  return {
    AuthActions: bindActionCreators(AuthActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);