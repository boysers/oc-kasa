import logements from '../assets/json/logements.json';

export function getLogementsForHomePage() {
  return logements.map(({ id, title, cover }) => ({ id, title, cover }));
}
