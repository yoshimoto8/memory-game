import React from 'react'
import Valuate from '../atoms/Valuate'
import ThoughtTimes from '../atoms/ThoughtTimes'
import StartBotton from '../atoms/StartBotton'

class Dashboard extends React.Component {
  render() {
    const { history, id, handleShuffle } = this.props
    return (
      <div>
        <Valuate history={history} />
        <ThoughtTimes history={history} />
        <StartBotton id={id} handleShuffle={handleShuffle}/>
      </div>
    )
  }
}

export default Dashboard