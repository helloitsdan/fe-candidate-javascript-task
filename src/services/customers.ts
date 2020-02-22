import apiRequest from "./client";
import getEndpointWithId from "./utils/getEndpointWithId";

const CUSTOMERS_ENDPOINT = "customers";

const customersRequest = (id?: string, options?: RequestInit) =>
  apiRequest(getEndpointWithId(CUSTOMERS_ENDPOINT, id), options);

export default customersRequest;
