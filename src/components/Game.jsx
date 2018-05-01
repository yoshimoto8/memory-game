import React from 'react'
import update from 'immutability-helper';
import Borad from '../molecules/Borad'
import Dashboard from '../molecules/Dashboard'

class Game extends React.Component {
  constructor() {
    super()
    this.state = {
      id: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
      history: 0,
      data: [
        {id: 1, value: 1, img: "", flipped: false, matched: false},
        {id: 2, value: 1, img: "", flipped: false, matched: false},
        {id: 3, value: 2, img: "", flipped: false, matched: false},
        {id: 4, value: 2, img: "", flipped: false, matched: false},
        {id: 5, value: 3, img: "", flipped: false, matched: false},
        {id: 6, value: 3, img: "", flipped: false, matched: false},
        {id: 7, value: 4, img: "", flipped: false, matched: false},
        {id: 8, value: 4, img: "", flipped: false, matched: false},
        {id: 9, value: 5, img: "", flipped: false, matched: false},
        {id: 10, value: 5, img: "", flipped: false, matched: false},
        {id: 11, value: 6, img: "", flipped: false, matched: false},
        {id: 12, value: 6, img: "", flipped: false, matched: false},
        {id: 13, value: 7, img: "", flipped: false, matched: false},
        {id: 14, value: 7, img: "", flipped: false, matched: false},
        {id: 15, value: 8, img: "", flipped: false, matched: false},
        {id: 16, value: 8, img: "", flipped: false, matched: false}
      ],
      valuateHistory: [],
    }
  }

 handleOpenCard = (id) => {
   const index = id -1
   const selectData = this.state.data.filter((data) => { return data.id === id })
   const newData = update(this.state.data, {[index]: {flipped: {$set: true}}})
   const newValuateHistoryId = update(this.state.valuateHistory, {$push: [selectData[0].id]})
   this.setState({data: newData, valuateHistory: newValuateHistoryId})
  //  selectData[0].flipped = true
  //  const newData = this.state.data
  //  const newHistoryData = this.state.valuateHistory
  //  this.setSatate({})
  // const results= this.state.data.filter(data => data.flipped === true) 
  // results.length === 2 ? this.judgeCard(results) : null
 }

 judgeCard = (data) => {
    const newHistory = this.state.history + 1
    this.setState({history: newHistory})
    if(data[0].value === data[1].value) {
      data.map(d => d.matched = true)
      const newData = this.state.data
      this.setState({data: newData})
      this.resetValuateHistory()
    } else {
      this.reset(data)
      this.resetValuateHistory()
    }
 }

 resetValuateHistory = () => {
   this.setState({valuateHistory: []})
 }

 reset = (data) => {
   console.log('呼ばれたよ')
   debugger
  
  data.map(d => d.flipped = false)
  const newData = this.state.data
  this.setState({data: newData})
 }


  handleShuffle = (array) => {
    const length = array.length;
    for(let i = length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    }
    this.setState({ id: array })
  }

  render() {
    const { id, history, data, valuateHistory } = this.state
    this.state.valuateHistory.length === 2 ? this.judgeCard(valuateHistory) : null;
    console.log(this.state)
    return(
      <div className="game">
        <Borad 
          squares={id} 
          data={data} 
          handleOpenCard={(id) => this.handleOpenCard(id)}
        />
        <Dashboard history={history} id={id} handleShuffle={ (id) => this.handleShuffle(id) }/>
      </div>
    )
  }
}

export default Game