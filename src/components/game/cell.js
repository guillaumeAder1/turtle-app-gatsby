import React, { Component } from 'react';
import Turtle from './turtle';
// import Img from '../../images/turtle.png'
class Cell extends Component {
  constructor(props) {
    super(props);
  }
  clickCell() {
    console.log(this.props);
  }

  getImg(type) {
    if (type === 'turtle') {
      return <Turtle />;
    } else if (type === 'mine') {
      return 'X';
    } else if (type === 'visited') {
      return '0'
    } else {
      return '';
    }
  }

  render() {
    const img = this.getImg(this.props.type);
    return (
      <div onClick={() => this.clickCell()} className="cell">
        {img}
      </div>
    );
  }
}

export default Cell;
