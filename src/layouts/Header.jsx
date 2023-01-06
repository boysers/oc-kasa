import { Link, NavLink } from 'react-router-dom';
import logoKasa from '../assets/images/logo/logo_kasa.svg';

function Header() {
  const className = 'Header-navbar__link';
  const activeClassName = `${className} Link--active`;

  const isActive = ({ isActive }) => (isActive ? activeClassName : className);

  return (
    <header className="Header">
      <Link to="/">
        <img src={logoKasa} alt="logo kasa" className="Header__logo" />
      </Link>

      <nav className="Header-navbar">
        <NavLink to="/" className={isActive}>
          Accueil
        </NavLink>
        <NavLink to="about" className={isActive}>
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
