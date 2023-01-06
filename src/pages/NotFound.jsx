import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="NotFound">
      <div>
        <h2 className="NotFound__title">404</h2>
        <p className="NotFound__message">
          Oups! La page que vous demandez n'existe pas.
        </p>
      </div>
      <Link to="/" className="NotFound__link Link--active">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default NotFound;
