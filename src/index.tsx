import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/main.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter(routes);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
