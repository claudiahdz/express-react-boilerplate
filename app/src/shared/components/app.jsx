import React, {Component} from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        HOT RELOADING BABY      
        {this.props.children}
      </div>
    )
  }
}