import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Grid from '../components/turtleGame/grid';

const sizeGrid = { w: 10, h: 5 }
const mines = [{ x: 2, y: 3 }, { x: 3, y: 3 }];
const IndexPage = () => (
  <Layout>
    <SEO title="Game" keywords={[`gatsby`, `game`, `react`]} />
    <h1>Deminor Game</h1>
    <p>Find the exit and take care to the mines...</p>
    <Grid className={`grid-component`} size={sizeGrid} turtle={{ x: 1, y: 1 }} mines={mines} />
  </Layout>
);

export default IndexPage;
