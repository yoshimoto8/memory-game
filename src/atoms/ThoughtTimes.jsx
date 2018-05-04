import React from 'react'
import PropTypes from 'prop-types';

const ThoughtTimes = ({history}) => {
  return (
    <div>
      {history}
    </div>
  )
}

ThoughtTimes.propTypes = {
  history: PropTypes.number
}



export default ThoughtTimes