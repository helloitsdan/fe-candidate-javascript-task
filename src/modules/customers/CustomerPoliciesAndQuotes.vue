<template>
  <div class="background--barely">
    <section class="container padded-block">
      <policy-list />
    </section>
    <section class="container padded-block">
      <quote-list />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import QuoteList from "@/modules/quotes";
import PolicyList from "@/modules/policies";

export default Vue.extend({
  name: "CustomerPoliciesAndQuotes",
  components: {
    QuoteList,
    PolicyList
  }
});
</script>
