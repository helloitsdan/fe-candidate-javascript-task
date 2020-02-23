<template>
  <div>
    <h3 class="is-marginless">{{ insured_entities | summariseInsuredEntities }}</h3>
    <p v-if="status === 'ACTIVE'"><strong>Active</strong></p>

    <p>Started on {{ start_date | moment("dddd, MMMM Do YYYY") }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PolicySummary",
  props: {
    uuid: String,
    status: String,
    insured_entities: Array,
    start_date: String
  }
});
</script>
