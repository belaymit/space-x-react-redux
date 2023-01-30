import {
  CANCEL_ROCKET,
  FETCH_ROCKETS, RESERVE_ROCKET, ROCKETS_FAILURE, ROCKETS_SUCCESS,
} from '../constants/ActionTypes';

const initialState = [];

const getRockets = () => ({ type: FETCH_ROCKETS });

const getSuccessRockets = (payload) => ({
  type: ROCKETS_SUCCESS,
  payload,
});

const getFailedRockets = (payload) => ({
  type: ROCKETS_FAILURE,
  payload,
});

const reserveRocket = (payload) => ({
  type: RESERVE_ROCKET,
  payload,
});

const cancelRocket = (payload) => ({
  type: CANCEL_ROCKET,
  payload,
});

const Rockets = () => async (dispatch) => {
  dispatch(getRockets());
  try {
    const resp = await fetch('https://api.spacexdata.com/v3/rockets');
    const data = await resp.json();
    const rockets = [];
    data.forEach((rocket) => {
      rockets.push({
        id: rocket.rocket_id,
        name: rocket.rocket_name,
        description: rocket.description,
        image: rocket.flickr_images[0],
        reserved: false,
      });
    });
    dispatch(getSuccessRockets(rockets));
  } catch (error) {
    dispatch(getFailedRockets(error.message));
  }
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return { ...state, loading: true };
    case ROCKETS_SUCCESS:
      return { ...state, loading: false, rockets: action.payload };
    case ROCKETS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case RESERVE_ROCKET:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id === action.payload) {
            return { ...rocket, reserved: true };
          }
          return rocket;
        }),
      };
    case CANCEL_ROCKET:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id === action.payload) {
            return { ...rocket, reserved: false };
          }
          return rocket;
        }),
      };
    default:
      return state;
  }
};

export { Rockets, reserveRocket, cancelRocket };

export default rocketsReducer;
