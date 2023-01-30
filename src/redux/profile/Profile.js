import { RESERVED_ROCKETS } from '../constants/ActionTypes';

const initialState = [];

const getReservedRockets = (payload) => ({
  type: RESERVED_ROCKETS,
  payload,
});

const getAllReservedRockets = () => async (dispatch) => {
  const resp = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await resp.json();
  const reserverRockets = data.filter((rocket) => rocket.reserved);
  dispatch(getReservedRockets(reserverRockets));
};

const reservedRocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESERVED_ROCKETS:
      return { ...state, reservedRockets: action.payload };
    default:
      return state;
  }
};

export { getAllReservedRockets };

export default reservedRocketsReducer;
