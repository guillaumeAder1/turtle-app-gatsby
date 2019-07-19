import React from 'react';
import { connect } from 'react-redux';
import Img from '../../images/turtle.png';

const Turtle = props => {
  const css = {
    transform: `rotate(${props.direction}deg)`,
  };
  return <img style={css} src={Img} />;
};

export default connect(state => ({ direction: state.turtleGame.direction }))(Turtle);
