import React from 'react';
import renderer from 'react-test-renderer';

import Grid from '../components/game/grid';
const mines = [{ x: 2, y: 3 }, { x: 3, y: 3 }];
const size = { w: 12, h: 10 };
const turtle = { x: 1, y: 1 };
describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Grid size={size} turtle={turtle} mines={mines} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
