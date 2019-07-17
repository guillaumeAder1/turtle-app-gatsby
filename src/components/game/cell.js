import React, { Component } from 'react';
import Turtle from './turtle';
import Mine from './mine';
class Cell extends Component {
  constructor(props) {
    super(props);
  }
  clickCell() {
    console.log(this.props);
  }

  getComp(type) {
    if (type === 'turtle') {
      const comp =  <Turtle />;
      return {
        comp,
        class: 'turtle'
      }      
    } else if (type === 'mine') {
      const comp =  <Mine />
      return {
        comp,
        class: 'mine'
      }
    } else if (type === 'visited') {
      const comp = (<div></div>)
      return {
        comp,
        class: 'visited'
      }
    } else {
      const comp = (<div></div>)
      return {
        comp,
        class: 'empty'
      }
    }
  }

  render() {
    const el = this.getComp(this.props.type);
    return (
      <div onClick={() => this.clickCell()} className={`cell ${el.class}`}>
        {el.comp}
      </div>
    );
  }
}

export default Cell;
