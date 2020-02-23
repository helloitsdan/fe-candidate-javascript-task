import Vue from "vue";
import { shallowMount } from "@vue/test-utils";

import ProductQuotes from "../ProductQuotes.vue";
import ProductSummary from "@/components/ProductSummary.vue";

describe("ProductQuotes", () => {
  const fakeProducts = {
    products: [
      {
        type: "BASIC",
        price: {
          monthly: 100.0,
          annual: 1200.0
        }
      },
      {
        type: "SUPERIOR",
        price: {
          monthly: 200.0,
          annual: 2400.0
        }
      }
    ]
  };

  it("renders", async () => {
    const wrapper = shallowMount(ProductQuotes, {
      propsData: fakeProducts
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders a ProductSummary for every customer", async () => {
    const wrapper = shallowMount(ProductQuotes, {
      propsData: fakeProducts
    });

    expect(wrapper.findAll(ProductSummary).length).toEqual(
      fakeProducts.products.length
    );
  });
});
