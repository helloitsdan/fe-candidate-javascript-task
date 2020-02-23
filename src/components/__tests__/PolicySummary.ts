import { shallowMount } from "@vue/test-utils";

import PolicySummary from "../PolicySummary.vue";

describe("PolicySummary", () => {
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

  it("renders", () => {
    const wrapper = shallowMount(PolicySummary, {
      propsData: fakePolicy,
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
