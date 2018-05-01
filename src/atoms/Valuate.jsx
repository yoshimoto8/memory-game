import React from 'react'

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

export default Valuate