import { shallowMount } from "@vue/test-utils";

import ProductSummary from "../ProductSummary.vue";

describe("ProductSummary", () => {
  const fakeProduct = {
    type: "BASIC",
    price: {
      monthly: 100.0,
      annual: 1200.0
    }
  };

  it("renders", () => {
    const wrapper = shallowMount(ProductSummary, {
      propsData: fakeProduct
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
