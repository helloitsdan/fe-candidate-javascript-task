import { shallowMount } from "@vue/test-utils";

import CustomerPoliciesAndQuotes from "../CustomerPoliciesAndQuotes.vue";

describe("CustomerPoliciesAndQuotes", () => {
  it("renders", () => {
    const wrapper = shallowMount(CustomerPoliciesAndQuotes);
    expect(wrapper.element).toMatchSnapshot();
  });
});
