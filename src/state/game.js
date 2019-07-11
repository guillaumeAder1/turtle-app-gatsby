const initialState = {
  direction: 0,
};

const ROTATE = 'ROTATE';
export const rotate = () => ({ type: ROTATE });

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ROTATE:
      let dir = state.direction + 90;
      if (dir === 360) {
        dir = 0;
      }
      return { ...state, direction: dir };
    default:
      return state;
  }
};
