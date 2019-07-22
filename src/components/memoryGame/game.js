import React, { Component, Fragment } from 'react'
import { symbol } from 'prop-types';


class Game extends Component {
  constructor(props) {
    super(props)
    this.symbols = {
      'X': { '1': true, '6': true },
      'Y': { '2': true, '5': true },
      'W': { '3': true, '8': true },
      'Z': { '4': true, '7': true }
    }
    this.numbers = {
      1: 'X',
      2: 'Y',
      3: 'W',
      4: 'Z',
      5: 'Y',
      6: 'X',
      7: 'Z',
      8: 'W' 
    }
    this.state = {
      gridLength: new Array(Object.keys(this.symbols).length * 2).fill(null).map((e,i) => i+1),
      temp: {},
      found: {},
      counter: 0,
      visible: false
    }
  }
  select(e){
    // if(this.state.)
  }

  getValue(key) {
    return this.numbers[key]
  }

  render () {
    return (
      <Fragment>
        {this.state.gridLength.map((e,i) => <div key={i} onClick={() => this.select(e)} className='cell'>{this.getValue(e)}</div>)}
      </Fragment>
    )
  }
}

export default Game