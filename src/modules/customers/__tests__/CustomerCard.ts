import { shallowMount } from "@vue/test-utils";

import CustomerCard from "../CustomerCard.vue";

describe("CustomerCard", () => {
  const fakeCustomer = {
    uuid: "1234",
    isActive: true,
    name: {
      first: "Test",
      last: "Customer"
    },
    email: "test.user@pretend.biz",
    registered: "2016-07-13T02:57:55.235Z"
  };

  it("renders", () => {
    const wrapper = shallowMount(CustomerCard, {
      propsData: fakeCustomer,
      stubs: ["router-link"]
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
