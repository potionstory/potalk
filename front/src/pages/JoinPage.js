import React, { Component, Fragment } from 'react';
import Header from '../containers/Header';
import Container from '../containers/Container';
import Join from '../containers/Join';

class JoinPage extends Component {

  render() {
    return (
      <Fragment>
        <Header/>
        <Container>
          <Join/>
        </Container>
      </Fragment>
    );
  }
}

export default JoinPage;