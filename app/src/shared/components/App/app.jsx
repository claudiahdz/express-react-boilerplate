import React, {Component} from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        YAAAS YASS QUEEN
        Very hacky ...
        {this.props.children}
      </div>
    )
  }
}