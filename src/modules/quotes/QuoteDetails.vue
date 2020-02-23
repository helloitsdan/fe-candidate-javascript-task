<template>
  <section class="container">
    <h2>Quote {{ quoteId }}</h2>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "QuoteDetails",
  props: ["quoteId"]
});
</script>
