import React, { Component, Fragment} from 'react';
import Header from '../containers/Header';
import Container from '../containers/Container';
import Login from '../containers/Login';

class LoginPage extends Component {

  render() {
    return (
      <Fragment>
        <Header/>
        <Container>
          <Login/>
        </Container>
      </Fragment>
    );
  }
}

export default LoginPage;