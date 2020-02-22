import apiRequest from "./client";
import getEndpointWithId from "./utils/getEndpointWithId";

const POLICIES_ENDPOINT = "policies";

const policiesRequest = (id?: string, options?: RequestInit) =>
  apiRequest(getEndpointWithId(POLICIES_ENDPOINT, id), options);

export default policiesRequest;
