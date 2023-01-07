import { Link, NavLink } from 'react-router-dom';
import logoKasa from '../assets/images/logo/logo_kasa.svg';

type FuncClassName = (props: {
  isActive: boolean;
  isPending: boolean;
}) => string | undefined;

function Header() {
  const className = 'Header-navbar__link';
  const activeClassName = `${className} Link--active`;

  const isActive: FuncClassName = ({ isActive }) =>
    isActive ? activeClassName : className;

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
