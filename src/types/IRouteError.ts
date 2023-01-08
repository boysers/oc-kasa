export interface IJsonThrowError {
  status: number;
  sorry: string;
}

export type IRouteError = {
  data: IJsonThrowError;
  internal: boolean;
  status: number;
  statusText: string;
};
