<template>
  <div class="card">
    <h3 class="is-marginless">{{ name | formatName }}</h3>

    <p>{{ email }}</p>

    <p>
      <strong>Registered on</strong>
      {{ registered | moment("dddd, MMMM Do YYYY") }}
    </p>

    <p v-if="!isActive">
      This customer is
      <strong>inactive.</strong>
    </p>

    <p class="is-marginless">
      <router-link
        :to="{ name: 'CustomerDetails', params: { customerId: uuid } }"
      >
        View details
      </router-link>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CustomerCard",
  props: {
    uuid: String,
    isActive: Boolean,
    name: Object,
    email: String,
    registered: String
  }
});
</script>
