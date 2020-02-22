const getEndpointWithId = (endpoint: string, id?: string) =>
  id ? `${endpoint}/${id}` : endpoint;

export default getEndpointWithId;
