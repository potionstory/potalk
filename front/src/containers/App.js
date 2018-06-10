import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import JoinPage from '../pages/JoinPage';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Route path="/home" component={ HomePage } />
            <Route path="/login" component={ LoginPage } />
            <Route path="/join" component={ JoinPage } />
            <Redirect to="/home" />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;