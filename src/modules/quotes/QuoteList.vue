<template>
  <div>
    <h2 class="title-margin">Quotes</h2>

    <div v-if="loading" class="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      Sorry! We couldn't load this customer's quotes right now.
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
import compareDateStrings from '@/utils/compareDateStrings';

/* This should be a computed property, but ts3.4 has an open issue where they break type inferrence */
const sortQuoteList = (quotes: [{ start_date: string }]) => {
  if (!quotes) {
    return [];
  }

  return quotes.sort((quoteA, quoteB) =>
    compareDateStrings(quoteA.start_date, quoteB.start_date)
  );
};

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
        this.quotes = sortQuoteList(await getQuotes(customerId)) as [];
      } catch (e) {
        this.error = e;
      }

      this.loading = false;
    }
  }
});
</script>
