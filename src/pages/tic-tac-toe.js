import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Game from '../components/ticTacToe/game';

const IndexPage = () => (
  <Layout>
    <SEO title="Game" keywords={[`gatsby`, `tic tac toe`, `game`]} />
    <h1>Tic Tac Toe Game</h1>
    <div>
      <Game />
    </div>
  </Layout>
);

export default IndexPage;
