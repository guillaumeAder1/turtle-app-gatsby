import React from 'react';
import Cell from './cell';
import Control from './controls';
import PropTypes from 'prop-types';
import { rotate as rotateTurtle } from '../../state/game';
import { connect } from 'react-redux';

const toMap = arr => {
  const map = {};
  for (var i in arr) {
    const str = `${arr[i].x}_${arr[i].y}`;
    map[str] = 1;
  }
  return map;
};
const calculatePos = (turtle, dir) => {
  const { x, y } = turtle;
  let newPos;
  if (dir === 0) {
    newPos = { x, y: y - 1 };
  } else if (dir === 90) {
    newPos = { x: x + 1, y };
  } else if (dir === 180) {
    newPos = { x, y: y + 1 };
  } else if (dir === 270) {
    newPos = { x: x - 1, y };
  }
  return newPos;
};
const outOfBound = ({ x, y }, { h, w }) => {
  const wValid = x > 0 && x <= w;
  const hValid = y > 0 && y <= h;
  return (wValid && hValid) || false;
};
class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turtle: this.props.turtle,
      mines: this.props.mines,
      minesMap: toMap(this.props.mines),
      direction: this.props._direction,
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
      this.setState({
        turtle: calculatePos(this.state.turtle, this.props._direction),
      });
    } else {
      console.log(this);
      this.props._rotate();
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
Grid.propTypes = {
  size: PropTypes.object.isRequired,
  turtle: PropTypes.object.isRequired,
  mines: PropTypes.array.isRequired,
};
export default connect(
  state => ({ _direction: state.game.direction }),
  dispatch => ({ _rotate: () => dispatch(rotateTurtle()) }),
)(Grid);
