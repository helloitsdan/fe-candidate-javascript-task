<template>
  <section class="container">
    <h2>Policy {{ policyId }}</h2>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PolicyDetails",
  props: ["policyId"]
});
</script>
