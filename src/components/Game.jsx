import React from 'react'
import update from 'immutability-helper';
import Modal from 'react-modal'
import Borad from '../molecules/Borad'
import Dashboard from '../molecules/Dashboard'
import CongratsModal from '../molecules/CongratsModal'


class Game extends React.Component {
  constructor() {
    super()
    this.state = {
      id: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
      history: 0,
      valuateHistory: [],
      seconds: 0,
      correctAnswer: 0,
      modalIsOpen: false,
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
    }
  }

  openModal = () => {this.setState({modalIsOpen: true})}

  closeModal = () => {this.setState({modalIsOpen: false})}

  handleOpenCard = (id) => {
    const index = id -1
    const selectData = this.state.data.filter((data) => { return data.id === id })
    const newData = update(this.state.data, {[index]: {flipped: {$set: true}}})
    const newValuateHistoryId = update(this.state.valuateHistory, {$push: [{id: selectData[0].id, value: selectData[0].value}]})
    this.setState({data: newData, valuateHistory: newValuateHistoryId})
  }

  judgeCard = (data) => {
      this.countHistory()
      const [firstValue, secondValue] = [data[0].value, data[1].value]
      const [firstId, secondId] = [data[0].id-1, data[1].id-1]
      if (firstValue === secondValue) {
        this.setMatched(firstId, secondId)
        this.countCorrectAnswer()
        this.resetValuateHistory()
      } else {
        this.reset(firstId, secondId)
        this.resetValuateHistory()
      }
  }

  setMatched = (firstId, secondId) => {
    const newData = update(this.state.data, {[firstId]: {matched: {$set: true}},
      [secondId]: {matched: {$set: true}}})
    setTimeout(() => (this.setState({data: newData})), 500) 
  }

  countCorrectAnswer = () => {
    const newCorrectAnswer = this.state.correctAnswer + 1
    this.setState({correctAnswer: newCorrectAnswer})
  }

  countHistory = () => {
    const newHistory = this.state.history + 1
    this.setState({history: newHistory})
  }

  resetValuateHistory = () => {
   this.setState({valuateHistory: []})
  }

  reset = (firstId, secondId) => {
    const newData = update(this.state.data, {[firstId]: {flipped: {$set: false}},
                                            [secondId]: {flipped: {$set: false}}})
    setTimeout(() => (this.setState({data: newData})), 1000)
  }

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  startTimer = () => {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  stopTimer = () => {
    clearInterval(this.interval);
    this.setState({modalIsOpen: true, correctAnswer: 0})
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
    const { id, history, data, valuateHistory, seconds } = this.state
    this.state.valuateHistory.length === 2 ? this.judgeCard(valuateHistory) : null;
    this.state.correctAnswer === 8 ? this.stopTimer() : null;
    return(
      <div className="game">
        <Borad 
          squares={id} 
          data={data} 
          handleOpenCard={(id) => this.handleOpenCard(id)}
        />
        <Dashboard
          history={history}
          id={id} 
          handleShuffle={ (id) => this.handleShuffle(id) }
          seconds={seconds}
          startTimer={ () => this.startTimer() }
        />
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <CongratsModal />
        </Modal>
      </div>
    )
  }
}

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default Game