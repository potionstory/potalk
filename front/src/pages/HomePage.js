import React, { Component, Fragment } from 'react';
import Header from '../containers/Header';
import Container from '../containers/Container';
import Main from '../containers/Main';

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <Container>
          <Main/>
        </Container>
      </Fragment>
    );
  }
}

export default HomePage;