import React, { Component, Fragment } from 'react';
import Initial from '../components/Initial';
import TalkBox from './TalkBox';
import { MainStyle } from '../styles/main';

class Main extends Component {

  render() {
    return (
      <Fragment>
        <MainStyle>
          <Initial/>
          <TalkBox/>
        </MainStyle>
      </Fragment>
    )
  };
}

export default Main;