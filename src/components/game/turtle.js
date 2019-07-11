import React from 'react';
import { connect } from 'react-redux';
import Img from '../../images/turtle.png';

const Turtle = props => {
  console.log(props.direction);
  const css = {
    transform: `rotate(${props.direction}deg)`,
  };
  return <img style={css} src={Img} />;
};

export default connect(state => ({ direction: state.game.direction }))(Turtle);
