import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Game from '../components/memoryGame/game';

const IndexPage = () => (
  <Layout>
    <SEO title="Game" keywords={[`gatsby`, `Memeory`, `game`]} />
    <h1>Memory</h1>
    <div className="memory-game">
      <Game />
    </div>
  </Layout>
);

export default IndexPage;
