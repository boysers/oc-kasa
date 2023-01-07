import { useRouteError as useReactRouterRouteError } from 'react-router-dom';
import { IRouteError } from '../types';

function useRouteError() {
  return useReactRouterRouteError() as IRouteError;
}

export default useRouteError;
