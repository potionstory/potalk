import React, { Component, Fragment } from 'react';
import Initial from '../components/Initial';
import TalkBox from './TalkBox';
import { MainStyle } from '../styles/main';

class Main extends Component {

  constructor(prosp) {
    super(prosp);

    this.state = {
      isLogined: true
    };
  }

  render() {
    return (
      <Fragment>
        <MainStyle>
          { this.state.isLogined ? <TalkBox/> : <Initial/> }
        </MainStyle>
      </Fragment>
    )
  };
}

export default Main;