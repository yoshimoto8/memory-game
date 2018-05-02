import React from 'react'
import Valuate from '../atoms/Valuate'
import ThoughtTimes from '../atoms/ThoughtTimes'
import StartBotton from '../atoms/StartBotton'
import DisplayTimer from '../atoms/DisplayTimer'

class Dashboard extends React.Component {
  render() {
    const { history, id, handleShuffle, startTimer, seconds } = this.props
    return (
      <div>
        <Valuate history={history} />
        <ThoughtTimes history={history} />
        <DisplayTimer seconds={seconds} />
        <StartBotton 
          id={id} 
          handleShuffle={handleShuffle}
          startTimer={startTimer}
        />
      </div>
    )
  }
}

export default Dashboard