import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggle } from '../slices/rockets/rocketSlice';
import Styles from '../styles/rocket.module.css';

const Rocket = ({ rocket, profile }) => {
  const dispatch = useDispatch();
  if (profile) {
    return (
      <li className={Styles.item}>
        <h3 className={Styles.title}>{rocket.name}</h3>
        <button className={Styles.refuse} type="button" onClick={() => dispatch(toggle(rocket.id))}>Cancel Reservation</button>
        <a className={Styles.link} target="_blank" rel="noreferrer" href={rocket.link}>Read More</a>
      </li>
    );
  }
  return (
    <article className={Styles.article}>
      <img className={Styles.image} src={rocket.image} alt={rocket.name} />
      <div className={Styles.details}>
        <h2 className={Styles.title}>{rocket.name}</h2>
        {rocket.reserved && <span className={Styles.badge}>Reserved</span>}
        <p className={Styles.description}>{rocket.description}</p>
        <button className={rocket.reserved ? Styles.refuse : Styles.approve} type="button" onClick={() => dispatch(toggle(rocket.id))}>
          {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </article>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  profile: PropTypes.bool,
};

Rocket.defaultProps = { profile: false };

export default Rocket;
