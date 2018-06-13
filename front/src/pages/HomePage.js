import React, { Component, Fragment } from 'react';
import Layout from '../containers/Layout';
import Container from '../containers/Container';
import Main from '../containers/Main';

class HomePage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <Main/>
        </Container>
      </Layout>
    );
  }
}

export default HomePage;