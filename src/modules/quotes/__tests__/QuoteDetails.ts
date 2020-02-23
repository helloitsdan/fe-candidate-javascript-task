import Vue from "vue";
import { shallowMount } from "@vue/test-utils";

import QuoteDetails from "../QuoteDetails.vue";
import quotesRequest from "@/services/quotes";

jest.mock("@/services/quotes");

describe("QuoteDetails", () => {
  const quotesRequestMock = quotesRequest as jest.Mock;

  const fakeQuote = {
    uuid: "1234",
    status: "ACTIVE",
    start_date: "2016-07-13T02:57:55.235Z",
    insured_entities: [
      { species: "CAT" },
      { species: "CAT" },
      { species: "DOG" }
    ],
  };

  it("renders", async () => {
    quotesRequestMock.mockReturnValue(Promise.resolve(fakeQuote));

    const wrapper = shallowMount(QuoteDetails, {
      stubs: ["router-link"]
    });

    await Vue.nextTick();

    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders a loading message when the request is still pending", () => {
    const wrapper = shallowMount(QuoteDetails, {
      stubs: ["router-link"]
    });
    expect(wrapper.find(".loading").exists()).toBe(true);
  });

  it("renders an error message when the request fails", async () => {
    quotesRequestMock.mockReturnValue(Promise.reject(":("));
    const wrapper = shallowMount(QuoteDetails, {
      stubs: ["router-link"]
    });

    await Vue.nextTick();

    expect(wrapper.find(".error").exists()).toBe(true);
  });
});
