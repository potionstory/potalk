import React, { Component } from 'react';
import Layout from '../containers/Layout';
import Container from '../containers/Container';
import Join from '../containers/Join';

class JoinPage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <Join/>
        </Container>
      </Layout>
    );
  }
}

export default JoinPage;