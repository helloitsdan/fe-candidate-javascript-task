import { shallowMount } from "@vue/test-utils";

import PolicyInformation from "../PolicyInformation.vue";

describe("PolicyInformation", () => {
  const fakePolicy = {
    uuid: "1234",
    status: "ACTIVE",
    start_date: "2019-07-13T02:57:55.235Z",
    end_date: "2022-01-10T12:32:11.195Z"
  };

  it("renders", () => {
    const wrapper = shallowMount(PolicyInformation, {
      propsData: fakePolicy
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
