import apiRequest from "../index";
import HTTPError from "../errors/HTTPError";
import { BASE_API_URL } from "../client";

describe("apiRequest", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("dispatches requests to the API", async () => {
    fetchMock.mockResponses([JSON.stringify({}), { status: 200 }]);

    const expectedUrl = `${BASE_API_URL}/customers`;

    await apiRequest("customers");
    expect(fetchMock).toHaveBeenCalledWith(expectedUrl, expect.any(Object));
  });

  it("parses response and returns its JSON body", async () => {
    const expectedBody = {
      cats: {
        good: true
      }
    };

    fetchMock.mockResponses([JSON.stringify(expectedBody), { status: 200 }]);

    const response = await apiRequest("customers");
    expect(response).toEqual(expectedBody);
  });

  it("throws an error when the request fails", async () => {
    fetchMock.mockResponses([
      JSON.stringify({ error: "Server broken :(" }),
      { status: 500 }
    ]);

    return await expect(apiRequest("customers")).rejects.toThrow(HTTPError);
  });
});
