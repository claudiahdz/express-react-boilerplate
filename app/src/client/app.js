import React, {Component} from 'react'
import { Router, browserHistory } from 'react-router'
import routes from '../shared/routes'

export default class App extends Component {
  render() {
      if (!this.routeConfig) this.routeConfig = routes
      return <Router routes={this.routeConfig}  history={browserHistory} />
  }
}