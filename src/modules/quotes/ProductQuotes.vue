<template>
  <div class="text-center">
    <h2>Quoted Products</h2>

    <div v-if="!products">
      There are no associated products.
    </div>

    <div v-if="products" class="columns is-multiline">
      <div
        v-for="product in products"
        v-bind:key="product.type"
        class="column is-one-third"
      >
        <div class="card background--white">
          <product-summary v-bind="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProductSummary from "@/components/ProductSummary.vue";

export default Vue.extend({
  name: "ProductQuotes",
  components: {
    ProductSummary
  },
  props: {
    products: Array
  }
});
</script>
