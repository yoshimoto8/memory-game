import React from 'react'

const StartBotton = (props) => {
  return (
      <button onClick={() => props.handleShuffle(props.id)}>
        スタート
      </button>
  )
}

export default StartBotton
