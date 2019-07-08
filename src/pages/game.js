import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Grid from '../components/game/grid';

const IndexPage = () => (
  <Layout>
    <SEO title="Game" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Grid />
  </Layout>
);

export default IndexPage;
