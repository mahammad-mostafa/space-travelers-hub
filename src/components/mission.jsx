import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { toggle } from '../slices/missions/missionSlice';

const Mission = ({ mission }) => {
  const dispatch = useDispatch();

  return (
    <div className="row">
      <div className="col mission-name">
        <h3>{mission.name}</h3>
      </div>
      <div className="col-large mission-desc">
        <p>{mission.description}</p>
      </div>
      <div className="col mission-member">
        <p>{mission.member ? 'Active Member' : 'NOT A MEMBER'}</p>
      </div>
      <div className="col mission-join">
        <button type="button" onClick={() => dispatch(toggle(mission.id))}>{mission.member ? 'Leave' : 'Join'}</button>
      </div>
    </div>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape().isRequired,
};
export default Mission;
