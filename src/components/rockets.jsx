import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetcher } from '../slices/rockets/rocketSlice';
import Rocket from './rocket';
import Indicator from './indicator';
import Styles from '../styles/rockets.module.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.rockets.list);
  const error = useSelector((state) => state.rockets.error);
  const loading = useSelector((state) => state.rockets.loading);
  useEffect(() => {
    if (list.length === 0) {
      const promise = dispatch(fetcher());
      return () => promise.abort();
    }
    return undefined;
  }, [dispatch, list]);
  if (loading) {
    return <Indicator loading="true" />;
  }
  return (
    <section className={Styles.section}>
      {error === undefined && list.length > 0
        ? list.map((item) => <Rocket key={item.id} rocket={item} />)
        : <Indicator message={error} length={list.length} />}
    </section>
  );
};

export default Rockets;
