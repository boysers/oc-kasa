import { Link } from 'react-router-dom';
import logoKasaDark from '../assets/images/logo/logo_kasa_dark.svg';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="Footer">
      <Link to="/" className="Footer__logo">
        <img src={logoKasaDark} alt="logo kasa" />
      </Link>

      <p className="Footer__copyright">
        © {currentYear} Kasa. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
