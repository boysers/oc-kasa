import { Link } from 'react-router-dom';
import { useRouteError } from '../hooks';

function ErrorBoundary() {
  const {
    data: { status, sorry },
  } = useRouteError();

  return (
    <div className="NotFound">
      <div>
        <h2 className="NotFound__title">{status}</h2>
        <p className="NotFound__message">{sorry}</p>
      </div>
      <Link to="/" className="NotFound__link Link--active">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default ErrorBoundary;
