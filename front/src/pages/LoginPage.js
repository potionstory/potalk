import React, { Component } from 'react';
import Layout from '../containers/Layout';
import Container from '../containers/Container';
import Login from '../containers/Login';

class LoginPage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <Login/>
        </Container>
      </Layout>
    );
  }
}

export default LoginPage;