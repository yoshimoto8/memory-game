import React from 'react'
import Square from '../atoms/Square'

class Borad extends React.Component {
  renderSquare(i) {
    return (
      <Square
        data={this.props.data.filter(data => data.id === this.props.squares[i])}
        handleOpenCard={this.props.handleOpenCard}
       />
    )
  }

  render() {
    return (
      <div className="board-row">
        {[...Array(16).keys()].map((i) => {
          return(
            <div>
              {this.renderSquare(i)}
            </div>
          )
        })}
      </div>
    )
  }
}

export default Borad