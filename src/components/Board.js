import React from 'react';
import '../App.css'
import Square from '../components/Square'

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }
  renderSquare(i){
    return (<Square
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
       />)
  }
  render () {
    debugger
    const {squares, xIsNext} = this.state
    const next = xIsNext ? "X" : "O"
    return (
      <div className="Board">
        <h3>Next Player: {next}</h3>
       <div className="container">
         {this.renderSquare(0)}
         {this.renderSquare(1)}
         {this.renderSquare(2)}
         {this.renderSquare(3)}
         {this.renderSquare(4)}
         {this.renderSquare(5)}
         {this.renderSquare(6)}
         {this.renderSquare(7)}
         {this.renderSquare(8)}
       </div>
      </div>
    );
  }
}

export default Board;
