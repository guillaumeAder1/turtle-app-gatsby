import React from 'react';
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore } from 'redux';
import rootReducer from '.';
import { composeWithDevTools } from 'redux-devtools-extension';
const store = reduxCreateStore(rootReducer, composeWithDevTools());
// const createStore = () => reduxCreateStore(rootReducer);
export default ({ element }) => <Provider store={store}>{element}</Provider>;
