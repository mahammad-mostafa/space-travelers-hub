import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMissions } from '../slices/missions/missionSlice';
import Mission from './mission';
import Indicator from './indicator';
import Styles from '../styles/mission.module.css';

const Missions = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.missions.list);
  const loading = useSelector((state) => state.missions.loading);

  useEffect(() => {
    if (list.length > 0) {
      return undefined;
    }
    const promise = dispatch(fetchMissions());
    return () => promise.abort();
  }, [dispatch, list]);

  if (loading) {
    return <Indicator loading="true" />;
  }
  return (
    <section className={Styles.table} data-testid="missions-list">
      <div className={Styles.row}>
        <div className={Styles.cells}><h3 className={Styles.labels}>Mission</h3></div>
        <div className={Styles.cells}><h3 className={Styles.labels}>Description</h3></div>
        <div className={Styles.cells}><h3 className={Styles.labels}>Status</h3></div>
        <div className={Styles.cells}><h3 className={Styles.labels}>Action</h3></div>
      </div>
      {list.map((mission) => (
        <Mission mission={mission} key={mission.id} />
      ))}
    </section>
  );
};

export default Missions;
