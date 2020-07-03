import React from 'react';
import '../App.css'

class Square extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: null
    }
  }
  render () {
    return (
      <div className="square text-center" onClick={() => this.setState({value: 'X'})}>{this.state.value}</div>
    );
  }
}

export default Square;
