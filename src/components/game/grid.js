import React from 'react';
import Cell from './cell';
import Control from './controls';

const toMap = arr => {
  const map = {};
  for (var i in arr) {
    const str = `${arr[i].x}_${arr[i].y}`;
    map[str] = 1;
  }
  return map;
};
class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turtle: this.props.turtle,
      mines: this.props.mines,
      minesMap: toMap(this.props.mines),
    };
  }
  componentDidMount() {
    console.log(this.props);
  }
  transformPos({ x, y }) {
    return `${x}_${y}`;
  }
  getType(x, y) {
    const posStr = this.transformPos({ x, y });
    if (posStr === this.transformPos(this.state.turtle)) {
      return 'turtle';
    } else if (this.state.minesMap[posStr]) {
      return 'mine';
    } else {
      return 'cell';
    }
  }
  updateTurtle(evt) {
    console.log(evt);
    if (evt === 'move') {
      const { x, y } = this.state.turtle;
      this.setState({ turtle: { x: x + 1, y } });
    }
  }

  render() {
    const { h, w } = this.props.size;
    const col = new Array(h).fill(null);
    const row = new Array(w).fill(null);
    return (
      <React.Fragment>
        <div className="grid">
          {row.map((e, i) => {
            return (
              <div key={i} className="row-container">
                {col.map((el, ind) => {
                  const type = this.getType(ind + 1, i + 1);
                  return <Cell type={type} key={ind} x={ind + 1} y={i + 1} />;
                })}
              </div>
            );
          })}
        </div>
        <Control callback={e => this.updateTurtle(e)} />
      </React.Fragment>
    );
  }
}
export default Grid;
