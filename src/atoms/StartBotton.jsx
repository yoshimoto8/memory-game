import React from 'react'
import PropTypes from 'prop-types';

const StartBotton = (props) => {
  return (
      <button onClick={() => {props.handleShuffle(props.id); props.startTimer();}}>
        スタート
      </button>
  )
}

StartBotton.propTypes = {
  handleShuffle: PropTypes.func
}


export default StartBotton
