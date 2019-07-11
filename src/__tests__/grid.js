import React from 'react';
import renderer from 'react-test-renderer';

import Grid from '../components/game/grid';
const mines = [{ x: 2, y: 3 }, { x: 3, y: 3 }];
const size = { w: 12, h: 10 };
const turtle = { x: 1, y: 1 };
describe('Grid', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = renderer.create(
      <Grid size={size} turtle={turtle} mines={mines} />,
    );
  });
  it('renders correctly', () => {
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('transformPos should exists', () => {
    expect(wrapper).not.toBe(null);

    expect(wrapper.transformPos).not.toBe(null);
  });
  it('should return val', () => {
    // expect(wrapper.instance().transformPos({ x: 1, y: 1 })).not.toBe('1_1');
  });
});
