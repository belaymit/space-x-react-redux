import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../styles/profile-section.scss';
import { cancelMission } from '../../redux/mission/mission';
import { cancelRocket } from '../../redux/rockets/rocket';

const MyProfile = () => {
  const reservedRockets = useSelector((state) => state.rocketsReducer.rockets);
  const reservedMissions = useSelector((state) => state.missionReducer.missions);
  const dispatch = useDispatch();

  const handleReservation = (id, type) => {
    if (type === 'mission') {
      dispatch(cancelMission(id));
    } else {
      dispatch(cancelRocket(id));
    }
  };

  return (
    <section className="container profile-section">
      <div>
        <h1 className="profile-mission">My Missions</h1>
        <ul className="reserved-mission">
          {reservedMissions?.filter((mission) => mission.status === true).map((mission) => (
            <li key={mission.mission_id} className="reserved-item">
              {mission.mission_name}
              <button
                type="button"
                onClick={() => handleReservation(mission.mission_id, 'mission')}
                className="leave-mission"
              >
                {mission.status ? 'Leave Mission' : ''}
              </button>
            </li>
          ))}
          {
            reservedMissions?.filter((mission) => mission.status === true).length === 0
            && <li className="reserved-item">No Missions Joined</li>
          }
        </ul>
      </div>
      <div>
        <h1 className="profile-title">My Rockets</h1>
        <ul className="reserved-rocket">
          {reservedRockets?.filter((rocket) => rocket.reserved === true).map((rocket) => (
            <li key={rocket.id} className="reserved-item">
              {rocket.name}
              <button
                type="button"
                onClick={() => handleReservation(rocket.id, 'rocket')}
                className="leave-mission"
              >
                {rocket.reserved ? 'Cancel Reservation' : ''}
              </button>
            </li>
          ))}
          {
            reservedRockets?.filter((rocket) => rocket.reserved === true).length === 0
            && <li className="reserved-item">No reserved rockets</li>
          }
        </ul>
      </div>
    </section>
  );
};

export default MyProfile;
