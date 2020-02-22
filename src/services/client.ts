import createErrorFromResponse from "./utils/createErrorFromResponse";

const BASE_API_URL = "http://localhost:3000";

const apiRequest = async (
  endpoint: string,
  { headers, ...options }: RequestInit = {}
) => {
  const response = await fetch(`${BASE_API_URL}/${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...headers
    },
    ...options
  });

  if (!response.ok) {
    throw createErrorFromResponse(response);
  }

  return response;
};

export { BASE_API_URL };
export default apiRequest;
