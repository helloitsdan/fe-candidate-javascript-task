<template>
  <div>
    <h2 class="title-margin">Policies</h2>

    <div v-if="loading" class="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      Sorry! We couldn't load this customer's policies right now.
    </div>

    <div v-if="policies" class="columns is-multiline">
      <div
        v-for="policy in policies"
        v-bind:key="policy.uuid"
        class="column is-one-third"
      >
        <div class="card background--white">
          <policy-summary v-bind="policy" />

          <p class="is-marginless">
            <router-link
              :to="{
                name: 'PolicyDetails',
                params: { policyId: policy.uuid }
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

import getPolicies from "@/services/policies";
import PolicySummary from "@/components/PolicySummary.vue";
import compareDateStrings from "@/utils/compareDateStrings";

/* This should be a computed property, but ts3.4 has an open issue where they break type inferrence */
const sortPolicyList = (policies: [{ start_date: string }]) => {
  if (!policies) {
    return [];
  }

  return policies.sort((policyA, policyB) =>
    compareDateStrings(policyA.start_date, policyB.start_date)
  );
};

export default Vue.extend({
  name: "PolicyList",
  props: ["customerId"],
  components: {
    PolicySummary
  },
  data() {
    return {
      loading: false,
      error: null,
      policies: []
    };
  },
  created() {
    this.fetchPolicyList();
  },
  methods: {
    async fetchPolicyList() {
      const { customerId } = this.$props;

      if (this.loading) {
        return;
      }

      this.loading = true;

      try {
        this.policies = sortPolicyList(await getPolicies(customerId)) as [];
      } catch (e) {
        this.error = e;
      }

      this.loading = false;
    }
  }
});
</script>
