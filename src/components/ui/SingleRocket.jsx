import React from 'react';
import { rocket } from '../../assets/files';

const SingleRocket = () => (
  <li className="rocket">
    <img src={rocket} alt="" />
    <div className="single-rocket-container">
      <span className="rocket-name">
        Rocket
      </span>
      <div className="rocket-detail">
        <span className="reserved">Reserved</span>
        &nbsp;
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Dolor voluptatibus odio deleniti nam, temporibus reiciendis
        sed cumque repellat reprehenderit tenetur.
      </div>
      <button type="button" className="reserve-rocket">Reserve Rocket</button>
    </div>
  </li>
);

export default SingleRocket;
