import React from 'react'
import PropTypes from 'prop-types';

const Valuate = ({history}) => {
  if (history >= 1) {
    return (
      <div>
        神！！！
      </div>
    )
  } else if(history > 16) {
    return (
      <div>
        凡人
      </div>
    )
  } else {
    return (
      <div>
        まだ評価してません
      </div>
    )
  }
}

Valuate.propTypes = {
  history: PropTypes.number
}

export default Valuate