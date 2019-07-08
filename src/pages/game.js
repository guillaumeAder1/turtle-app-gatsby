import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Grid from '../components/game/grid';
const mines = [{ x: 2, y: 3 }, { x: 3, y: 3 }];
const IndexPage = () => (
  <Layout>
    <SEO title="Game" keywords={[`gatsby`, `game`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Grid size={{ w: 6, h: 5 }} turtle={{ x: 1, y: 1 }} mines={mines} />
  </Layout>
);

export default IndexPage;
