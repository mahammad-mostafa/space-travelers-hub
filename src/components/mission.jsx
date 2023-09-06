import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { toggle } from '../slices/missions/missionSlice';
import Styles from '../styles/mission.module.css';

const Mission = ({ mission, profile }) => {
  const dispatch = useDispatch();
  if (profile) {
    return (
      <li className={Styles.item}>
        <h3 className={Styles.title}>{mission.name}</h3>
        <button className={Styles.refuse} type="button" onClick={() => dispatch(toggle(mission.id))}>Leave</button>
        <a className={Styles.link} target="_blank" rel="noreferrer" href={mission.link}>Read More</a>
      </li>
    );
  }
  return (
    <div className={Styles.row}>
      <div className={Styles.cells}>
        <h4 className={Styles.labels}>{mission.name}</h4>
      </div>
      <div className={Styles.cells}>
        <p className={Styles.description}>{mission.description}</p>
      </div>
      <div className={Styles.cells}>
        <span className={mission.member ? Styles.active : Styles.badge}>{mission.member ? 'Active Member' : 'NOT A MEMBER'}</span>
      </div>
      <div className={Styles.cells}>
        <button className={mission.member ? Styles.refuse : Styles.approve} type="button" onClick={() => dispatch(toggle(mission.id))}>
          {mission.member ? 'Leave' : 'Join'}
        </button>
      </div>
    </div>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape().isRequired,
  profile: PropTypes.bool,
};

Mission.defaultProps = { profile: false };

export default Mission;
