import React, { Component } from 'react'
class Cell extends Component {
  constructor(props) {
    super(props)
  }
  clickCell () {
    console.log(this.props)
  }

  getImg (type) {
    if ( type === 'turtle') {
      return 'Q'
    } else if (type === 'mine') {
      return 'X'
    } else {
      return ''
    }
  }

  render () {
    const img =  this.getImg(this.props.type)
    return (<div onClick={() => this.clickCell()} className="cell">{img}</div>)
  }
}

export default Cell