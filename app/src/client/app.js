import React from 'react'
import { Router, browserHistory } from 'react-router'
import routes from '../shared/routes'

const App = (props) => (
  <Router key={Math.random()} routes={routes} history={browserHistory} />
)

export default App