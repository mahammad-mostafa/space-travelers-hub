import { NavLink } from 'react-router-dom';
import Logo from '../images/logo.png';

const Header = () => {
  const links = ['Rockets', 'Missions', 'Profile'];
  return (
    <header>
      <div>
        <img src={Logo} alt="Space Travelers Hub" />
        <h1>Space Travelers Hub</h1>
      </div>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <NavLink to={link === 'Rockets' ? '/' : link.toLowerCase()} className={({ isActive }) => (isActive ? 'active' : null)}>
                {link === 'Profile' ? `My ${link}` : link}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
