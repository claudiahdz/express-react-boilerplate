import React from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'

import AppContainer from './components/App/app'
import Home from './components/Home/home'
import Dummy from './components/Dummy/dummy'

export default (
  <Route path="/" component={AppContainer}>
  	<Route path="home" component={Home} />
    <Route path="dummy" component={Dummy} />
  </Route>
)