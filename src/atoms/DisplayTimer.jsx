import React from 'react'
import PropTypes from 'prop-types';

const DisplayTimer = ({seconds}) => {
  return (
    <div>
      second: {seconds}
    </div>
  )
}

DisplayTimer.propTypes = {
  seconds: PropTypes.number
}

export default DisplayTimer