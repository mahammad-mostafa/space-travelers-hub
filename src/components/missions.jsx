import { useDispatch, useSelector } from 'react-redux';
import '../styles/missions.css';
import { useEffect } from 'react';
import { fetchMissions } from '../slices/missionSlice';
import Mission from './mission';

const Missions = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.missions.list);

  useEffect(() => {
    if (list.length > 0) {
      return;
    }
    dispatch(fetchMissions());
  }, [dispatch, list]);
  // ctr: container
  return (
    <div id="missions-ctr">
      <div className="row">
        <div className="col col-title">
          <h3>Mission</h3>
        </div>
        <div className="col-large col-title">
          <h3>Description</h3>
        </div>
        <div className="col col-title">
          <h3>Status</h3>
        </div>
        <div className="col col-title" />
      </div>
      {list.map((mission) => (
        <Mission mission={mission} key={mission.id} />
      ))}
    </div>
  );
};

export default Missions;
