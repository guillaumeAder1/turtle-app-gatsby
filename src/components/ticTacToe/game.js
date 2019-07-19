import React from 'react'

class Game extends React.Component {
  constructor() {
    super()
    this.state = {
      player: 'X',      
      x: [],
      o: [],
      winner: ''      
    }
    this.wining = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    
  }
  selectCell(index) {    
    if(this.isCellSelected(index)) return
    if(this.state.player === 'X') {
      this.setState({
        player: 'O',
        x: [...this.state.x, index],
        winner: this.hasWon([...this.state.x, index]) ? 'X' : ''
      })
    } else {
      this.setState({
        o: [...this.state.o, index],
        player: 'X',
        winner: this.hasWon([...this.state.o, index]) ? 'O' : ''
      })
    }
  }
  isCellSelected(index) {
    const players = [this.state.x, this.state.o]
    for(var i in players){
      if (players[i].indexOf(index) > -1) { return true }
    }
    return false
  }
  getSymbol (index) {
    if (this.state.x.indexOf(index) > -1) {
      return 'X'
    } else if (this.state.o.indexOf(index) > -1) {
      return 'O'
    } 
    return ''
  } 
  hasWon(list) {
    for(var i in this.wining) {
      let matches = []
      for (var j in this.wining[i]) {
        let cur = this.wining[i][j]
        let row = this.wining[i]
        let player = list
<<<<<<< HEAD
        if(list.indexOf(cur) > -1) {
=======
        if(list[0].indexOf(cur) > -1) {
>>>>>>> 907966cc8a00bd3565a66f40b085cd30807abfb6
          matches.push(1)
        }
      }
      if (matches.length === 3) {
        return true
      }
    }
    return false
  }
  render() {
    console.log(this.state.x, this.state.o)
    const cells = new Array(9).fill(null)
    return (
      <div className="container">
        <div>next player: {this.state.player}</div>
        {this.state.winner && <div>WINNER: {this.state.winner}</div>}
        {
          cells.map((e,i) => {
            return (<div className='cells' key={i} onClick={() => this.selectCell(i)}>{this.getSymbol(i)}</div>)
          })
        }
      </div>
    )
  }
}

export default Game