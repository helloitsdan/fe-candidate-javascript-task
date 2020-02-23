import Vue from "vue";
import { shallowMount } from "@vue/test-utils";

import CustomerList from "../CustomerList.vue";
import CustomerCard from "../CustomerCard.vue";
import customerRequest from "@/services/customers";

jest.mock("@/services/customers");

describe("CustomerList", () => {
  const customerRequestMock = customerRequest as jest.Mock;

  const customerList = [
    {
      uuid: "1234",
      isActive: true,
      name: {
        first: "Test",
        last: "Customer"
      },
      email: "test.user@pretend.biz",
      registered: "2016-07-13T02:57:55.235Z"
    },
    {
      uuid: "5678",
      isActive: false,
      name: {
        first: "Second",
        last: "Customer"
      },
      email: "second.user@pretend.biz",
      registered: "2016-09-13T02:57:55.235Z"
    }
  ];

  it("renders", async () => {
    customerRequestMock.mockReturnValue(Promise.resolve(customerList));
    const wrapper = shallowMount(CustomerList);

    await Vue.nextTick();

    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders a CustomerCard for every customer", async () => {
    customerRequestMock.mockReturnValue(Promise.resolve(customerList));
    const wrapper = shallowMount(CustomerList);

    await Vue.nextTick();

    expect(wrapper.findAll(CustomerCard).length).toEqual(customerList.length);
  });

  it("renders a loading message when the request is still pending", () => {
    const wrapper = shallowMount(CustomerList);
    expect(wrapper.find(".loading").exists()).toBe(true);
  });

  it("renders an error message when the request fails", async () => {
    customerRequestMock.mockReturnValue(Promise.reject(":("));
    const wrapper = shallowMount(CustomerList);

    await Vue.nextTick();

    expect(wrapper.find(".error").exists()).toBe(true);
  });
});
