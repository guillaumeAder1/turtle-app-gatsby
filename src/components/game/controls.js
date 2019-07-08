import React from 'react'
const Control = props => {
  const move = () => {
    props.callback('move')
  }
  const rotate = () => {
    props.callback('rotate')
  }
  return (
    <div>
      <button onClick={() => move()}>Move</button>
      <button onClick={() => rotate()}>Rotate</button>
    </div>
  )
}
export default Control