import Vue from "vue";
import { shallowMount } from "@vue/test-utils";

import PolicyDetails from "../PolicyDetails.vue";
import policiesRequest from "@/services/policies";

jest.mock("@/services/policies");

describe("PolicyDetails", () => {
  const policiesRequestMock = policiesRequest as jest.Mock;

  const fakePolicy = {
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
    policiesRequestMock.mockReturnValue(Promise.resolve(fakePolicy));

    const wrapper = shallowMount(PolicyDetails, {
      stubs: ["router-link"]
    });

    await Vue.nextTick();

    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders a loading message when the request is still pending", () => {
    const wrapper = shallowMount(PolicyDetails, {
      stubs: ["router-link"]
    });
    expect(wrapper.find(".loading").exists()).toBe(true);
  });

  it("renders an error message when the request fails", async () => {
    policiesRequestMock.mockReturnValue(Promise.reject(":("));
    const wrapper = shallowMount(PolicyDetails, {
      stubs: ["router-link"]
    });

    await Vue.nextTick();

    expect(wrapper.find(".error").exists()).toBe(true);
  });
});
