import Vue from "vue";
import { shallowMount } from "@vue/test-utils";

import CustomerDetails from "../CustomerDetails.vue";
import customerRequest from "@/services/customers";

jest.mock("@/services/customers");

describe("CustomerDetails", () => {
  const customerRequestMock = customerRequest as jest.Mock;

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

  it("renders", async () => {
    customerRequestMock.mockReturnValue(Promise.resolve(fakeCustomer));

    const wrapper = shallowMount(CustomerDetails, {
      stubs: ["router-link", "router-view"]
    });

    await Vue.nextTick();

    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders a loading message when the request is still pending", () => {
    const wrapper = shallowMount(CustomerDetails, {
      stubs: ["router-link", "router-view"]
    });
    expect(wrapper.find(".loading").exists()).toBe(true);
  });

  it("renders an error message when the request fails", async () => {
    customerRequestMock.mockReturnValue(Promise.reject(":("));
    const wrapper = shallowMount(CustomerDetails, {
      stubs: ["router-link", "router-view"]
    });

    await Vue.nextTick();

    expect(wrapper.find(".error").exists()).toBe(true);
  });
});
