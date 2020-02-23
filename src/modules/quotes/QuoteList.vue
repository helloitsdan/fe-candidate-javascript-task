<template>
  <div>
    <h2 class="title-margin">Quotes</h2>

    <div v-if="loading" class="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      Sorry! We couldn't load this customer's policies right now.
    </div>

    <div v-if="quotes" class="columns is-multiline">
      <div
        v-for="quote in quotes"
        v-bind:key="quote.uuid"
        class="column is-one-third"
      >
        <div class="card background--white">
          <policy-summary v-bind="quote" />

          <p class="is-marginless">
            <router-link
              :to="{
                name: 'QuoteDetails',
                params: { quoteId: quote.uuid }
              }"
            >
              View details
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import getQuotes from "@/services/quotes";
import PolicySummary from "@/components/PolicySummary.vue";

export default Vue.extend({
  name: "QuoteList",
  props: ["customerId"],
  components: {
    PolicySummary
  },
  data() {
    return {
      loading: false,
      error: null,
      quotes: []
    };
  },
  created() {
    this.fetchQuoteList();
  },
  methods: {
    async fetchQuoteList() {
      const { customerId } = this.$props;

      if (this.loading) {
        return;
      }

      this.loading = true;

      try {
        this.quotes = await getQuotes(customerId);
      } catch (e) {
        this.error = e;
      }

      this.loading = false;
    }
  }
});
</script>
