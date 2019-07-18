import React, {Fragment} from 'react';
import Cell from './cell';
import Control from './controls';
import PropTypes from 'prop-types';
import { rotate as rotateTurtle } from '../../state/game';
import { connect } from 'react-redux';
import { toMap, outOfBound, calculatePos, collision } from './utils';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turtle: this.props.turtle,
      mines: this.props.mines,
      minesMap: toMap(this.props.mines),
      direction: this.props._direction,
      cellVisited: [],
      col: new Array(this.props.size.h).fill(null),
      row: new Array(this.props.size.w).fill(null),
      commands: []
    };
  }
  transformPos({ x, y }) {
    return `${x}_${y}`;
  }
  getType(x, y) {
    const posStr = this.transformPos({ x, y });
    const turtlePos = this.transformPos(this.state.turtle);
    if(posStr === turtlePos && this.state.minesMap[posStr]) {
      return 'collision'
    } else if (this.state.minesMap[posStr]) {
      return 'mine';
    }  else if (posStr === turtlePos) {
      return 'turtle';
    } else if (this.state.cellVisited.indexOf(posStr) > -1) {
      return 'visited'
    } else {
      return 'cell';
    }
  }
  componentDidUpdate() {  }
  updateTurtle(evt) {
    if (evt === 'move') {
      this.setState({
        turtle: calculatePos(this.state.turtle, this.props._direction),
        cellVisited: [...this.state.cellVisited, this.transformPos(this.state.turtle) ]
      });
    } else {
      this.props._rotate();
    }
    this.setState({
      commands: [...this.state.commands, evt.charAt(0)]
    })
  }
  

  render() {
    const isOut = outOfBound(this.state.turtle, this.props.size);
    const hitMine = collision(this.transformPos(this.state.turtle), this.state.minesMap)
    return (
      <Fragment>
        {isOut && <div>OUTSIDE</div>}
        {hitMine && <div>COLLISION</div>}
        
        <div className="grid">
          {this.state.col.map((e, i) => {
            return (
              <div key={i} className="row-container">
                {this.state.row.map((el, ind) => {
                  const type = this.getType(ind + 1, i + 1);
                  return <Cell type={type} key={ind} x={ind + 1} y={i + 1} />;
                })}
              </div>
            );
          })}
        </div>
        <Control callback={e => this.updateTurtle(e)} />
        {this.state.commands.length > 0 && 
          <Fragment>
            <h3>Commands ran</h3>
            <code>{this.state.commands.map(e => `'${e}'`).join(', ')}</code>
          </Fragment>         
        }
      </Fragment>
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
