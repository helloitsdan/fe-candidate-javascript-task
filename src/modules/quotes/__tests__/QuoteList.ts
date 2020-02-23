import Vue from "vue";
import { shallowMount } from "@vue/test-utils";

import QuoteList from "../QuoteList.vue";
import PolicySummary from "@/components/PolicySummary.vue";
import quoteRequest from "@/services/quotes";

jest.mock("@/services/quotes");

describe("QuoteList", () => {
  const quoteRequestMock = quoteRequest as jest.Mock;

  const quotesList = [
    {
      uuid: "1234",
      status: "ACTIVE",
      start_date: "2016-07-13T02:57:55.235Z",
      insured_entities: [
        { species: "CAT" },
        { species: "CAT" },
        { species: "DOG" }
      ]
    },
    {
      uuid: "5678",
      status: "INACTVE",
      start_date: "2016-07-19T08:57:55.235Z",
      insured_entities: [{ species: "DOG" }]
    }
  ];

  it("renders", async () => {
    quoteRequestMock.mockReturnValue(Promise.resolve(quotesList));
    const wrapper = shallowMount(QuoteList, {
      stubs: ['router-link'],
    });

    await Vue.nextTick();

    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders a QuoteCard for every customer", async () => {
    quoteRequestMock.mockReturnValue(Promise.resolve(quotesList));
    const wrapper = shallowMount(QuoteList, {
      stubs: ['router-link'],
    });

    await Vue.nextTick();

    expect(wrapper.findAll(PolicySummary).length).toEqual(quotesList.length);
  });

  it("renders a loading message when the request is still pending", () => {
    const wrapper = shallowMount(QuoteList, {
      stubs: ['router-link'],
    });

    expect(wrapper.find(".loading").exists()).toBe(true);
  });

  it("renders an error message when the request fails", async () => {
    quoteRequestMock.mockReturnValue(Promise.reject(":("));
    const wrapper = shallowMount(QuoteList, {
      stubs: ['router-link'],
    });

    await Vue.nextTick();

    expect(wrapper.find(".error").exists()).toBe(true);
  });
});
