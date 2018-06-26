import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LoginStyle } from '../styles/login';
import * as AuthActions from '../store/modules/Auth';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: null,
      pw: null
    };
  };

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  handleLogin = async () => {
    const { AuthActions } = this.props;
    const data = {
      id: this.state.id,
      pw: this.state.pw
    };
    
    try {
      await AuthActions.login(data);
      let toastContent = '<span style="color: #333; font-weight:bold">POTALK LOGIN SUCCESS</span>';
      window.Materialize.toast(toastContent, 2000);
    } catch(e) {
      let errorMessage = [
        'USERNAME NOT EXISTS',
        'PASSWORD INCORRECT'
      ];
      let toastContent = '<span style="color: #333; font-weight:bold">' + errorMessage[this.props.code] + '</span>';
      window.Materialize.toast(toastContent, 2000);
    }
  }

  render () {
    return (
      <LoginStyle>
        <div className="card">
          <h2>SIGN IN</h2>
          <div className="card-content">
            <div className="row">
              <div className="input-field">
                <input type="text" id="id" name="id" className="validate" onChange={this.handleChange}/>
                <label for="id">USER ID</label>
              </div>
              <div className="input-field">
                <input type="password" id="pw" name="pw" className="validate" onChange={this.handleChange}/>
                <label for="pw">PASSWORD</label>
              </div>
              <div className="card-action">
                <a className="waves-effect waves-light btn" onClick={this.handleLogin}>SIGN IN</a>
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
    isLogined: state.Auth.isLogined,
    id: state.Auth.id,
    code: state.Auth.code
  }
}

const mapDispatchToProps = dispatch => {
  return {
    AuthActions: bindActionCreators(AuthActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);