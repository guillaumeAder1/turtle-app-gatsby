import React, {useState} from 'react'

const Control = props => {
  const [count, setCount] = useState(3)

  const move = () => {
    props.callback('move')
  }
  const rotate = () => {
    props.callback('rotate')
  }
  const showHide = () => {
    setCount(count - 1)
    if (count > 0) {
      const allMask = document.querySelectorAll('.cell .mask')
      allMask.forEach( e => e.classList.add('display') )
      setTimeout(() => {
        allMask.forEach( e => e.classList.remove('display') )
      }, 1000)
    }
  }
  
  return (
    <div>
      <button onClick={() => move()}>Move</button>
      <button onClick={() => rotate()}>Rotate</button>      
      <button onClick={() => showHide() }>show/hide {count}</button>
    </div>
  )
}
export default Control