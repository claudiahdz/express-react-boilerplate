import React from 'react'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'Is it working ?'};
  }
  render() {
    return (
      <div>
        {this.state.test}
      </div>
    )
  }
}