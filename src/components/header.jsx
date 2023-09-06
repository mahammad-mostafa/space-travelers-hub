import { NavLink } from 'react-router-dom';
import Logo from '../images/logo.png';
import Styles from '../styles/header.module.css';

const Header = () => {
  const links = ['Rockets', 'Missions', 'Profile'];
  return (
    <header className={Styles.header}>
      <div className={Styles.container}>
        <div className={Styles.logo}>
          <img className={Styles.image} src={Logo} alt="Space Travelers Hub" />
          <h1 className={Styles.title}>Space Travelers Hub</h1>
        </div>
        <nav>
          <ul className={Styles.links}>
            {links.map((link) => (
              <li key={link}>
                <NavLink to={link === 'Rockets' ? '/' : link.toLowerCase()} className={({ isActive }) => (isActive ? Styles.active : Styles.link)}>
                  {link === 'Profile' ? `My ${link}` : link}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
