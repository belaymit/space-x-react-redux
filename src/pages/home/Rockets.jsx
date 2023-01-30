import React from 'react';
import { useSelector } from 'react-redux';
import SingleRocket from '../../components/rocket/SingleRocket';

import '../../styles/rockets.scss';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer.rockets);
  return (
    <section className="rocket-container container">
      <ul>
        {rockets?.map((rocket) => (
          <SingleRocket key={rocket.id} rocket={rocket} />
        ))}
      </ul>
    </section>
  );
};

export default Rockets;
