import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  render() {
    // let currentVar = current number is ${this.props.value}`;
    return (
      <button 
        className="square"
        onClick={()=>this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}
/*
Square component have two props is value and onClick();
*/
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice(); //create copy of array
    squares[i] = 'X';
    this.setState({squares: squares});
    console.log(this.state.squares);
  }

  /* The handleClick function create new const variable, is the copy of the state square 
  -> chua hieu this.setState({squares: squares})  
  */

  renderSquare(i) {
    return (
        <Square 
          value={this.state.squares[i]}
          onClick={() => this.handleClick(i) }
        />
      );
    /* this function return the square class with value is i variable */
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
