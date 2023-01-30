import React from 'react';
import SingleRocket from '../../components/ui/SingleRocket';
import '../../styles/rockets.scss';

const Rockets = () => (
  <section className="rocket-container container">
    <u className="rocket">
      <SingleRocket />
    </u>
  </section>
);

export default Rockets;
