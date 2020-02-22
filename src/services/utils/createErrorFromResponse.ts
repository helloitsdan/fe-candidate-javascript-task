import HTTPError from "../errors/HTTPError";

const createErrorFromResponse = (response: Response) => {
  const { status, statusText } = response;
  return new HTTPError(status, statusText);
};

export default createErrorFromResponse;
