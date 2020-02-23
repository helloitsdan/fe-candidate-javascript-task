<template>
  <div class="text-center">
    <h2>{{ type }} product</h2>

    <div class="columns">
      <div class="column">
        <span class="h1 display-block">{{ price.monthly | formatCurrency }}</span>
        monthly
      </div>
      <div class="column">
        <span class="h1 display-block">{{ price.annual | formatCurrency }}</span>
        annually
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PolicyProduct",
  props: {
    type: String,
    price: Object
  }
});
</script>
