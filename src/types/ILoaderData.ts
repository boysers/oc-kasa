import { IAccommodation } from './IAccommodation';

type HomeAccommodations = Pick<IAccommodation, 'cover' | 'id' | 'title'>;

export type ILoaderDataHomeAccomodations = {
  accommodations: HomeAccommodations[];
};

export type ILoaderDataAccommodation = { accommodation: IAccommodation };
