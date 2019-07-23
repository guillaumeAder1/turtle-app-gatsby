import React, { Component, Fragment } from 'react';
import { symbol } from 'prop-types';

class Game extends Component {
  constructor(props) {
    super(props);   
    this.numbers = {
      1: 'X',
      2: 'Y',
      3: 'W',
      4: 'Z',
      5: 'Y',
      6: 'X',
      7: 'Z',
      8: 'W',
    };
    this.state = {
      gridLength: new Array(Object.keys(this.numbers).length)
        .fill(null)
        .map((e, i) => i + 1),
      temp: {},
      found: [],
      counter: 0,
      visible: true,
    };
  }
  select(e) {
    const key = this.getValue(e);
    const len = Object.keys(this.state.temp).length
    // first click
    if (!this.state.temp[key] && len === 0) {
      this.state.temp[key] = [e];
      this.setState({
        temp: { ...this.state.temp },
        counter: this.state.counter + 1,
      });
    } else {
      let found
      if (this.state.temp[key] && this.state.temp[key].indexOf(e) === -1 ) {
        found = key
        for(let i in this.numbers) {
          if(this.numbers[i] === key) {
            delete this.numbers[i]
          }
        }
        console.log(this.numbers)
      } else {
        found = []
      }

      this.setState({
        temp: {},
        counter: 0,
        found: this.state.found.concat(found)
      }, () => {
        console.log(this.state.found, this.state.temp)
      })
      
    }
  }
  getValue(key) {
    return this.numbers[key];
  }
  isDisplay(val) {
    const key = this.getValue(val)
    const isSelected = !!(this.state.temp[key] && this.state.temp[key].indexOf(val) > -1)
    return this.state.visible || isSelected ? this.numbers[val] : ''
  }
  isVisible(){
    return ''
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        visible: false
      })
    }, 2000)
  }

  render() {
    return (
      <Fragment>
        {this.state.counter > 0 && (
          <div>looking for: {Object.keys(this.state.temp)[0]}</div>
        )}
        {this.state.found.length > 0 && ( <div>Symbol found: {this.state.found.join(', ')}</div> )}
        {this.state.gridLength.map((e, i) => (
          <div key={i} onClick={() => this.select(e)} className={"cell " + this.isVisible(e)}>
            {this.isDisplay(e)}
          </div>
        ))}
      </Fragment>
    );
  }
}

export default Game;
