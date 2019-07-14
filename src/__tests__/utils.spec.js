import * as _ from '../components/game/utils';

let _turtle;
beforeEach(() => {
  _turtle = { x: 1, y: 1 };
});

describe('test game Utils.js', () => {
  describe('outOfBound function', () => {
    test('outOfBound should be false', () => {
      const grid = { w: 5, h: 5 };
      const turtle = { x: 5, y: 1 };
      expect(_.outOfBound(turtle, grid)).toEqual(false);
    });
    test('outOfBound should be false', () => {
      const grid = { w: 5, h: 5 };
      const turtle = { x: 1, y: 1 };
      expect(_.outOfBound(turtle, grid)).toEqual(false);
    });
    test('outOfBound should be true', () => {
      const grid = { w: 5, h: 5 };
      const turtle = { x: 0, y: 0 };
      expect(_.outOfBound(turtle, grid)).toEqual(true);
    });
    test('outOfBound should be true', () => {
      const grid = { w: 5, h: 5 };
      const turtle = { x: 6, y: 1 };
      expect(_.outOfBound(turtle, grid)).toEqual(true);
    });
  });
  describe('calculatePos', () => {
    test('dir is 0, y should be -1', () => {
      expect(_.calculatePos(_turtle, 0).y).toEqual(0);
      expect(_.calculatePos(_turtle, 0).x).toEqual(1);
    });
    test('dir is 90, x should be +1', () => {
      expect(_.calculatePos(_turtle, 90).y).toEqual(1);
      expect(_.calculatePos(_turtle, 90).x).toEqual(2);
    });
    test('dir is 180, y should be +1', () => {
      expect(_.calculatePos(_turtle, 180).y).toEqual(2);
      expect(_.calculatePos(_turtle, 180).x).toEqual(1);
    });
    test('dir is 270, x should be -1', () => {
      expect(_.calculatePos(_turtle, 270).y).toEqual(1);
      expect(_.calculatePos(_turtle, 270).x).toEqual(0);
    });
  });
});
