class HTTPError extends Error {
  constructor(status: number, statusText: string) {
    const message = `${status} - ${statusText}`;
    super(message);

    Object.setPrototypeOf(this, HTTPError.prototype);
  }
}

export default HTTPError;
