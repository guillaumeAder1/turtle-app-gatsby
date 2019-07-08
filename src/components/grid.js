import React from 'react'
import Cell from './cell'
import Control from './controls'
class Grid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      turtle: '1_1',
      mines: {
        '2_1': 1,
        '3_1': 1
      }
    }
  }
  componentDidMount () {
    console.log(this.props)
  }
  transformPos (x,y) {
    return `${x}_${y}`
  }
  getType(x, y) {
    const posStr = this.transformPos(x,y)
    if(posStr === this.state.turtle) {
      return 'turtle'
    } else if (this.state.mines[posStr]) {
      return 'mine'
    } else {
      return 'cell'
    }
  }
  updateTurtle (evt) {
    console.log(evt)
    if(evt === 'move') {
      this.setState({ turtle: '1_3' })
    }
  }

  render () {
    const col = new Array(5).fill(null);
    const row = new Array(3).fill(null);
    return (
      <React.Fragment>
        <div className="grid">
          { 
            row.map((e,i) => {
              return <div key={i} className="row-container">
                { 
                  col.map((el, ind) => {
                    const type = this.getType(i+1, ind+1)
                    return <Cell type={type} key={ind} x={i+1} y={ind+1}/>
                  })
                }
              </div>
            }) 
          }
        </div>
        <Control callback={(e) => this.updateTurtle(e)} />
      </React.Fragment>

    
    )
  }
}
export default Grid