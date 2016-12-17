import React from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory, match} from 'react-router'
import routes from '../shared/routes'

ReactDOM.render(
  <Router routes={routes} history={browserHistory} />,
  document.querySelector('#root')
)