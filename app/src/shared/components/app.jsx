import React, {Component} from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        I'm an app container      
        {this.props.children}
      </div>
    )
  }
}