import React from 'react'

class Square extends React.Component {
  render() {
    const { id, img, value, flipped, matched, handleOpenCard } = this.props.data[0]
    const openCard = matched ? "card-back" : flipped ? "card-back" : "card-front";
    return (
      <div className="card">
        <div className={openCard} onClick={() => this.props.handleOpenCard(id)}>
          {value}
        </div>
      </div>
    )
  }
}

export default Square