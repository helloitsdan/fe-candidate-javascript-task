<template>
  <div class="columns">
    <div class="column is-one-third">
      <h4>Started on</h4>
      {{ start_date | moment("dddd, MMMM Do YYYY") }}
    </div>
    <div class="column is-one-third">
      <h4>Ends on</h4>
      {{ end_date | moment("dddd, MMMM Do YYYY") }}
    </div>
    <div class="column is-one-third">
      <h4>Status</h4>
      {{ status }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PolicyInformation",
  props: {
    uuid: String,
    status: String,
    start_date: String,
    end_date: String
  }
});
</script>
