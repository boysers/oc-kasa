import { Link } from 'react-router-dom';
import { useRouteError } from '../hooks';

function ErrorBoundary() {
  const {
    data: { status, sorry },
  } = useRouteError();

  return (
    <div className="ErrorBoundary">
      <div>
        <h2 className="ErrorBoundary__title">{status ?? 404}</h2>
        <p className="ErrorBoundary__message">{sorry ?? "Oups! La page que vous demandez n'existe pas."}</p>
      </div>
      <Link to="/" className="ErrorBoundary__link Link--active">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default ErrorBoundary;
