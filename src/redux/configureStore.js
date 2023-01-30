import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionReducer from './mission/mission';
import reservedRocketsReducer, { getAllReservedRockets } from './profile/Profile';
import rocketsReducer, { Rockets } from './rockets/rocket';

const store = configureStore({
  reducer: {
    missionReducer,
    rocketsReducer,
    reservedRocketsReducer,
  },
}, applyMiddleware(thunk, logger));
store.dispatch(Rockets());
store.dispatch(getAllReservedRockets());

export default store;
