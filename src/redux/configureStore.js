import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionReducer from './mission/mission';
import rocketsReducer, { Rockets } from './rockets/rocket';

const store = configureStore({
  reducer: {
    missionReducer,
    rocketsReducer,
  },
}, applyMiddleware(thunk, logger));
store.dispatch(Rockets());
export default store;
