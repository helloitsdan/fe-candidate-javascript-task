<template>
  <div>
    <div v-if="!customer" class="container padded-block">
      <div v-if="loading" class="loading">Loading...</div>

      <div v-if="error" class="error">
        Sorry! We couldn't load this customer's details right now.
      </div>
    </div>

    <div v-if="customer">
      <header class="container padded-block">
        <nav>
          <p>
            <router-link to="/">Back to customer list</router-link>
          </p>
        </nav>

        <div class="columns">
          <div class="column is-two-thirds">
            <h1 class="is-marginless">{{ customer.name | formatName }}</h1>
            <p>{{ customer.email }}</p>

            <h3>Contact information</h3>
            <p>{{ customer.phone }}</p>
            <p>{{ customer.address }}</p>
          </div>

          <div class="column is-one-third">
            <p>
              <strong>Registered on</strong>
              {{ customer.registered | moment("dddd, MMMM Do YYYY") }}
            </p>

            <p v-if="!customer.isActive">
              This customer is
              <strong>inactive.</strong>
            </p>
          </div>
        </div>
      </header>

      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import getCustomers from "@/services/customers";

export default Vue.extend({
  name: "CustomerDetails",
  props: ["customerId"],
  data() {
    return {
      loading: false,
      error: null,
      customer: null
    };
  },
  created() {
    this.fetchCustomerDetails();
  },
  methods: {
    async fetchCustomerDetails() {
      const { customerId } = this.$props;

      if (this.loading) {
        return;
      }

      this.loading = true;

      try {
        this.customer = await getCustomers(customerId);
      } catch (e) {
        this.error = e;
      }

      this.loading = false;
    }
  }
});
</script>
