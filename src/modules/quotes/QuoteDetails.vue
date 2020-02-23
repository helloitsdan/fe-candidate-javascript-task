<template>
  <div>
    <div class="background--grey-green">
      <div v-if="!quote" class="container padded-block">
        <div v-if="loading" class="loading">Loading...</div>

        <div v-if="error" class="error">
          Sorry! We couldn't load this quote's details right now.
        </div>
      </div>

      <section v-if="quote" class="container padded-block">
        <nav>
          <p>
            <router-link :to="{ name: 'CustomerDetails' }">
              Back to quote list
            </router-link>
          </p>
        </nav>

        <h2>
          Quote for {{ quote.insured_entities | summariseInsuredEntities }}
        </h2>

        <policy-information v-bind="quote" />
      </section>
    </div>

    <div v-if="quote" class="background--clay-dark">
      <section class="container padded-block">
        <product-quotes v-bind="quote" />
      </section>
    </div>

    <div v-if="quote" class="background--barely">
      <section class="container padded-block">
        <policy-entities v-bind="quote" />
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProductQuotes from "./ProductQuotes.vue";
import PolicyInformation from "@/components/PolicyInformation.vue";
import PolicyEntities from "@/components/PolicyEntities.vue";

import getQuotes from "@/services/quotes";

export default Vue.extend({
  name: "QuoteDetails",
  props: ["quoteId"],
  components: {
    ProductQuotes,
    PolicyInformation,
    PolicyEntities
  },
  data() {
    return {
      loading: false,
      error: null,
      quote: null
    };
  },
  created() {
    this.fetchQuoteDetails();
  },
  methods: {
    async fetchQuoteDetails() {
      const { quoteId } = this.$props;

      if (this.loading) {
        return;
      }

      this.loading = true;

      try {
        this.quote = await getQuotes(quoteId);
        console.log(this.quote);
      } catch (e) {
        this.error = e;
      }

      this.loading = false;
    }
  }
});
</script>
