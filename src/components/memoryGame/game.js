import React, { Component, Fragment } from 'react';
import { randomRange, createRandomNumber } from '../turtleGame/utils';
class Game extends Component {
  constructor(props) {
    super(props);
    this.numbers = createRandomNumber();
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
  select(val) {
    const key = this.getValue(val);
    if (!this.state.temp[key]) {
      this.state.temp[key] = [val];
      this.setState(
        {
          temp: { ...this.state.temp },
          counter: this.state.counter + 1,
        },
        () => {
          if (this.state.counter === 2) {
            setTimeout(() => {
              this.setState({
                temp: {},
                counter: 0,
              });
            }, 1000);
          }
        },
      );
    } else if (this.state.temp[key][0] !== val) {
      this.state.temp[key].push(val);
      this.setState(
        {
          temp: { ...this.state.temp },
          counter: this.state.counter + 1,
        },
        () => {
          setTimeout(() => {
            let match = [];
            if (Object.keys(this.state.temp[key]).length === 2) {
              match = [key];
              for (let i in this.numbers) {
                if (this.numbers[i] === key) {
                  delete this.numbers[i];
                }
              }
            }
            this.setState({
              temp: {},
              counter: 0,
              found: this.state.found.concat(match),
            });
          }, 1000);
        },
      );
    }
  }
  getValue(key) {
    return this.numbers[key];
  }
  isDisplay(val) {
    const key = this.getValue(val);
    const isSelected = !!(
      this.state.temp[key] && this.state.temp[key].indexOf(val) > -1
    );
    return this.state.visible || isSelected ? this.numbers[val] : '';
  }
  /**
   *
   * @param {val} e
   * add css class if element is not found
   */
  isVisible(e) {
    if (!this.getValue(e)) {
      return 'hide';
    }
    return '';
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        visible: false,
      });
    }, 4000);
  }

  render() {
    return (
      <Fragment>
        {this.state.counter > 0 && (
          <div>looking for: {Object.keys(this.state.temp)[0]}</div>
        )}
        {this.state.found.length > 0 && (
          <div>Symbol found: {this.state.found.join(', ')}</div>
        )}
        {this.state.gridLength.map((e, i) => (
          <div
            key={i}
            onClick={() => this.select(e)}
            className={'cell ' + this.isVisible(e)}
          >
            {this.isDisplay(e)}
          </div>
        ))}
      </Fragment>
    );
  }
}

export default Game;
