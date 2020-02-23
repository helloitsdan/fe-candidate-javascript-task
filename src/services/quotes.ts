import apiRequest from "./client";
import getEndpointWithId from "./utils/getEndpointWithId";

const QUOTES_ENDPOINT = "quotes";

const quotesRequest = (id?: string, options?: RequestInit) =>
  apiRequest(getEndpointWithId(QUOTES_ENDPOINT, id), options);

export default quotesRequest;
