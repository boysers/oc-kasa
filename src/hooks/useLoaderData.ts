import { useLoaderData as useReactRouterLoaderData } from 'react-router-dom';

function useLoaderData<D = unknown>() {
  return useReactRouterLoaderData() as D;
}

export default useLoaderData;
