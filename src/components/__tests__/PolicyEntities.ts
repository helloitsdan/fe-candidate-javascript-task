import { shallowMount } from "@vue/test-utils";

import PolicyEntities from "../PolicyEntities.vue";

describe("PolicyEntities", () => {
  const fakePolicy = {
    entities: [],
    products: [],
  };

  it("renders", () => {
    const wrapper = shallowMount(PolicyEntities, {
      propsData: fakePolicy
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
