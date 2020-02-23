import { shallowMount } from "@vue/test-utils";

import PolicyProduct from "../PolicyProduct.vue";

describe("PolicyProduct", () => {
  const fakeEntity = {
    type: "BASIC",
    price: {
      monthly: 100.0,
      annual: 1200.0,
    }
  };

  it("renders", () => {
    const wrapper = shallowMount(PolicyProduct, {
      propsData: fakeEntity
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
