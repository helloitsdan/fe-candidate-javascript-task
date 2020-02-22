import createErrorFromResponse from "../createErrorFromResponse";
import HTTPError from "../../errors/HTTPError";

describe("createErrorFromResponse", () => {
  it("creates an HTTPError from the provided response", () => {
    const fakeResponse = {
      status: 500,
      statusText: "Internal Server Error"
    } as Response;

    const expectedError = new HTTPError(
      fakeResponse.status,
      fakeResponse.statusText
    );

    expect(createErrorFromResponse(fakeResponse)).toEqual(expectedError);
  });
});
