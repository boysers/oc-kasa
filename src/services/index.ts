import { LoaderFunctionArgs, json } from 'react-router-dom';
import listAccommodation from '../assets/json/accommodations.json';
import {
  ILoaderDataAccommodation,
  ILoaderDataHomeAccomodations,
  IJsonThrowError,
} from '../types';

function jsonThrowError(data: IJsonThrowError) {
  return json<IJsonThrowError>(data);
}

export function getListLogement(): ILoaderDataHomeAccomodations {
  const accommodations = listAccommodation.map(({ id, title, cover }) => ({
    id,
    title,
    cover,
  }));

  return { accommodations };
}

export function getLogement({
  params,
}: LoaderFunctionArgs): ILoaderDataAccommodation | never {
  const accommodation = listAccommodation.find(
    (accommodation) => accommodation.id === params.id
  );

  if (!accommodation)
    throw jsonThrowError({
      status: 404,
      sorry: "Oups! Le logement que vous demandez n'existe pas",
    });

  return { accommodation };
}

export function getNotFound() {
  throw jsonThrowError({
    status: 404,
    sorry: "Oups! La page que vous demandez n'existe pas.",
  });
}
