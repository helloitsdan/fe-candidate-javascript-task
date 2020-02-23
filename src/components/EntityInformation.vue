<template>
  <div>
    <h4>
      <strong>{{ name }}</strong
      >, a {{ breed.toLowerCase() }} {{ species.toLowerCase() }}
    </h4>
    <p class="is-marginless">
      Born on {{ date_of_birth | moment("dddd, MMMM Do YYYY") }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "EntityInformation",
  props: {
    name: String,
    species: String,
    breed: String,
    date_of_birth: String
  }
});
</script>
