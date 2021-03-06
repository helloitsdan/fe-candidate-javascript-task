<template>
  <div class="background--barely">
    <section class="container padded-block">
      <h1 class="title-margin">Customers</h1>

      <div v-if="loading" class="loading">
        Loading...
      </div>

      <div v-if="error" class="error">
        Sorry! We couldn't load the list of customers right now.
      </div>

      <div v-if="customers" class="columns is-multiline">
        <div
          v-for="customer in customers"
          v-bind:key="customer.uuid"
          class="column is-half"
        >
          <customer-card class="background--white" v-bind="customer" />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import getCustomers from "@/services/customers";
import CustomerCard from "./CustomerCard.vue";

import compareDateStrings from "@/utils/compareDateStrings";

/* This should be a computed property, but ts3.4 has an open issue where they break type inferrence */
const sortCustomerList = (customers: [{ registered: string }]) => {
  if (!customers) {
    return [];
  }

  return customers.sort((customerA, customerB) =>
    compareDateStrings(customerA.registered, customerB.registered)
  );
};

export default Vue.extend({
  name: "CustomerList",
  components: {
    CustomerCard
  },
  data() {
    return {
      loading: false,
      error: null,
      customers: []
    };
  },
  created() {
    this.fetchCustomerList();
  },
  methods: {
    async fetchCustomerList() {
      if (this.loading) {
        return;
      }

      this.loading = true;

      try {
        this.customers = sortCustomerList(await getCustomers()) as [];
      } catch (e) {
        this.error = e;
      }

      this.loading = false;
    }
  }
});
</script>
