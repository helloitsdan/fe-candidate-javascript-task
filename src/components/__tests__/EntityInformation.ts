import { shallowMount } from "@vue/test-utils";

import EntityInformation from "../EntityInformation.vue";

describe("EntityInformation", () => {
  const fakeEntity = {
    name: "Noriko",
    species: "CAT",
    breed: "MIXED",
    date_of_birth: "2019-07-13T02:57:55.235Z",
  };

  it("renders", () => {
    const wrapper = shallowMount(EntityInformation, {
      propsData: fakeEntity
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
