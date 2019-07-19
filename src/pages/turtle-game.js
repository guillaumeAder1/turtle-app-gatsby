import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Grid from '../components/turtleGame/grid';
import { randomRange } from '../components/turtleGame/utils'
const min = 5
const max = 10
const gridWidth = randomRange(min, max)
const gridHeight = randomRange(min, max)
const minesMin = (min * min) / 2
const minesMax = (max * max) * 0.75
const nbrMine = randomRange(2, minesMax/2)
const mines = new Array(nbrMine).fill(null).map( e => {
  return  { 
    x: randomRange(2, max), 
    y:randomRange(2, max) } 
})
console.log(mines)

const sizeGrid = { w: gridWidth, h: gridHeight }
const IndexPage = () => (
  <Layout>
    <SEO title="Game" keywords={[`gatsby`, `game`, `react`]} />
    <h1>Deminor Game</h1>
    <p>Find the exit and take care to the mines...</p>
    <Grid className={`grid-component`} size={sizeGrid} turtle={{ x: 1, y: 1 }} mines={mines} />
  </Layout>
);

export default IndexPage;
