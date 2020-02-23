<template>
  <div>
    <h3>{{ type }} product</h3>

    <p class="is-marginless">
      <strong>{{ price.monthly | formatCurrency }}</strong>
      monthly /
      <strong>{{ price.annual | formatCurrency }}</strong>
      annualy
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ProductSummary",
  props: {
    type: String,
    price: Object
  }
});
</script>
