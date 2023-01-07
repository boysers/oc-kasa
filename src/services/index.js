import logements from '../assets/json/logements.json';

export function getLogementsForHomePage() {
  return logements.map(({ id, title, cover }) => ({ id, title, cover }));
}

export function getLogement(id) {
  return logements.find((logement) => logement.id === id);
}
