import { useSelector } from 'react-redux';
import Rocket from './rocket';
import Mission from './mission';
import Indicator from './indicator';
import Styles from '../styles/profile.module.css';

const Profile = () => {
  let rockets = useSelector((state) => state.rockets.list);
  let missions = useSelector((state) => state.missions.list);
  rockets = rockets.filter((item) => item.reserved === true);
  missions = missions.filter((item) => item.member === true);
  return (
    <section className={Styles.section}>
      <div className={Styles.block}>
        <h2 className={Styles.title}>My Rockets</h2>
        {rockets.length === 0 ? (
          <div className={Styles.empty}>
            <Indicator message="No Rockets Reserved" />
          </div>
        ) : (
          <ul className={Styles.list}>
            {rockets.map((item) => <Rocket key={item.id} rocket={item} profile />)}
          </ul>
        )}
      </div>
      <div className={Styles.block}>
        <h2 className={Styles.title}>My Missions</h2>
        {missions.length === 0 ? (
          <div className={Styles.empty}>
            <Indicator message="No Missions Joined" />
          </div>
        ) : (
          <ul className={Styles.list}>
            {missions.map((item) => <Mission key={item.id} mission={item} profile />)}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Profile;
