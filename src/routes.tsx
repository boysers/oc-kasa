import { RouteObject } from 'react-router-dom';
import { ErrorBoundary, LayoutRoot } from './layouts';
import { About, Home, Accommodation } from './pages';
import { getLogement, getListLogement, getNotFound } from './services';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <LayoutRoot />,
    children: [
      {
        index: true,
        loader: getListLogement,
        element: <Home />,
      },
      {
        path: 'accommodations/:id',
        loader: getLogement,
        errorElement: <ErrorBoundary />,
        element: <Accommodation />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: '*',
        loader: getNotFound,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
];

export default routes;
