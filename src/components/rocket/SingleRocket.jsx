import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { cancelRocket, reserveRocket } from '../../redux/rockets/rocket';

const SingleRocket = ({ rocket }) => {
  const dispatch = useDispatch();
  const handleReservation = () => {
    if (rocket.reserved) {
      dispatch(cancelRocket(rocket.id));
    } else {
      dispatch(reserveRocket(rocket.id));
    }
  };
  return (
    <li key={rocket.id} className="rocket">
      <img src={rocket.image} alt={rocket.name} />
      <div className="single-rocket-container">
        <span className="rocket-name">
          {rocket.name}
        </span>
        <div className="rocket-detail">
          {rocket.reserved ? (
            <span className={rocket.reserved ? 'reserved' : ''}>
              Reserved
            </span>
          ) : (
            ''
          )}
          &nbsp;
          {rocket.description}
        </div>
        <button
          type="button"
          onClick={handleReservation}
          className={rocket.reserved ? 'cancel-reservation' : 'reserve-rocket'}
        >
          {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </li>
  );
};

SingleRocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};
export default SingleRocket;
