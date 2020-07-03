import React from 'react';
import '../App.css'
import Square from '../components/Square'

class Board extends React.Component {
  renderSquare(i){
    return (<Square i={i}/>)
  }
  render () {
    return (
      <div className="Board">
        <h3>Next Player: X</h3>
       <div className="container">
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
        {this.renderSquare(9)}         
       </div>
      </div>
    );
  }
}

export default Board;
