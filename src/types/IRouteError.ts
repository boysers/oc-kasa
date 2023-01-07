type Data = { status: number; sorry: string };

type IRouteError = {
  data: Data;
  internal: boolean;
  status: number;
  statusText: string;
};

export default IRouteError;
