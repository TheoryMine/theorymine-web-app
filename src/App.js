import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import history from "./common/history"
import Home from "./pages/home/Home"
class App extends Component {
  static displayName = 'App';

  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render () {

    return (
      <Provider store={this.props.store}>
        <Router history={history}>
          <Switch>
            <Route exact name='Home Page' path='/' component={Home}/>
            <Redirect to='/'/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;

