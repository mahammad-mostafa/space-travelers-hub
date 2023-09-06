import { useSelector } from 'react-redux';
import Rocket from './rocket';
import Indicator from './indicator';
import Styles from '../styles/profile.module.css';

const Profile = () => {
  let rockets = useSelector((state) => state.rockets.list);
  rockets = rockets.filter((item) => item.reserved === true);
  return (
    <section className={Styles.section}>
      <div className={Styles.block}>
        <h2 className={Styles.title}>My Rockets</h2>
        {rockets.length === 0 ? (
          <div className={Styles.empty}>
            <Indicator error="No Rockets Reserved" />
          </div>
        ) : (
          <ul className={Styles.list}>
            {rockets.map((item) => <Rocket key={item.id} rocket={item} profile />)}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Profile;
