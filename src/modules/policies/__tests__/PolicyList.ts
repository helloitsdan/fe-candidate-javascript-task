import Vue from "vue";
import { shallowMount } from "@vue/test-utils";

import PolicyList from "../PolicyList.vue";
import PolicySummary from "@/components/PolicySummary.vue";
import policyRequest from "@/services/policies";

jest.mock("@/services/policies");

describe("PolicyList", () => {
  const policyRequestMock = policyRequest as jest.Mock;

  const policiesList = [
    {
      uuid: "1234",
      start_date: "2016-07-13T02:57:55.235Z",
      status: "ACTIVE",
      insured_entities: [
        { species: "CAT" },
        { species: "CAT" },
        { species: "DOG" }
      ]
    },
    {
      uuid: "5678",
      start_date: "2016-07-19T08:57:55.235Z",
      status: "INACTIVE",
      insured_entities: [{ species: "DOG" }]
    }
  ];

  it("renders", async () => {
    policyRequestMock.mockReturnValue(Promise.resolve(policiesList));
    const wrapper = shallowMount(PolicyList, {
      stubs: ["router-link"]
    });

    await Vue.nextTick();

    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders a PolicyCard for every customer", async () => {
    policyRequestMock.mockReturnValue(Promise.resolve(policiesList));
    const wrapper = shallowMount(PolicyList, {
      stubs: ["router-link"]
    });

    await Vue.nextTick();

    expect(wrapper.findAll(PolicySummary).length).toEqual(policiesList.length);
  });

  it("renders a loading message when the request is still pending", () => {
    const wrapper = shallowMount(PolicyList, {
      stubs: ["router-link"]
    });

    expect(wrapper.find(".loading").exists()).toBe(true);
  });

  it("renders an error message when the request fails", async () => {
    policyRequestMock.mockReturnValue(Promise.reject(":("));
    const wrapper = shallowMount(PolicyList, {
      stubs: ["router-link"]
    });

    await Vue.nextTick();

    expect(wrapper.find(".error").exists()).toBe(true);
  });
});
