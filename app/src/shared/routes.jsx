import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'

import AppContainer from './components/app'
import Home from './components/home'
import Dummy from './components/dummy'

export default (
  <Router path="/" history={browserHistory} component={AppContainer}>
  	<Route path="/home" component={Home} />
    <Route path="/dummy" component={Dummy} />
  </Router>
)