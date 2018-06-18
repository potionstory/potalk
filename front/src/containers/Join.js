import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { JoinStyle } from '../styles/join';
import * as AuthActions from '../store/modules/Auth';

class Join extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: null,
      email: null,
      pw: null,
      re_pw: null
    };
  }

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  handleJoin = async () => {
    const { AuthActions } = this.props;
    const data = {
      id: this.state.id,
      email: this.state.email,
      password: this.state.pw
    };

    await AuthActions.join(data);
  }

  render () {
    return (
      <JoinStyle>
        <div className="card">
          <h2>SIGN UP</h2>
          <div className="card-content">
            <div className="row">
              <div className="input-field">
                <input type="text" id="id" name="id" className="validate" onChange={this.handleChange}/>
                <label for="id">USER ID</label>
              </div>
              <div className="input-field">
                <input type="text" id="email" name="email" className="validate" onChange={this.handleChange}/>
                <label for="email">E-MAIL</label>
              </div>
              <div className="input-field">
                <input type="password" id="pw" name="pw" className="validate" onChange={this.handleChange}/>
                <label for="pw">PASSWORD</label>
              </div>
              <div className="input-field">
                <input type="password" id="re_pw" name="re_pw" className="validate" onChange={this.handleChange}/>
                <label for="re_pw">CONFIRM PASSWORD</label>
              </div>
              <div className="card-action">
                <a className="waves-effect waves-light btn" onClick={this.handleJoin}>SIGN UP</a>
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
}

const mapStateToProps = state => {
  return {
    isLogind: state.Auth.isLogind
  }
}

const mapDispatchToProps = dispatch => {
  console.log(AuthActions);
  return {
    AuthActions: bindActionCreators(AuthActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Join);