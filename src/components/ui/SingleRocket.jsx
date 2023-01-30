import React from 'react';
import PropTypes from 'prop-types';

const SingleRocket = ({ rocket }) => (
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
      <button type="button" className="reserve-rocket">Reserve Rocket</button>
    </div>
  </li>
);

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
