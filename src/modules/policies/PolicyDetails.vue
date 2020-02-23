<template>
  <div>
    <div class="background--grey-green">
      <div v-if="!policy" class="container padded-block">
        <div v-if="loading" class="loading">Loading...</div>

        <div v-if="error" class="error">
          Sorry! We couldn't load this policy's details right now.
        </div>
      </div>

      <section v-if="policy" class="container padded-block">
        <nav>
          <p>
            <router-link :to="{ name: 'CustomerDetails' }">
              Back to policy list
            </router-link>
          </p>
        </nav>

        <h2>
          Policy for {{ policy.insured_entities | summariseInsuredEntities }}
        </h2>

        <policy-information v-bind="policy" />
      </section>
    </div>

    <div class="background--barely">
      <section v-if="policy" class="container padded-block">
        <policy-entities v-bind="policy" />
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PolicyInformation from "@/components/PolicyInformation.vue";
import PolicyEntities from "@/components/PolicyEntities.vue";

import getPolicies from "@/services/policies";

export default Vue.extend({
  name: "PolicyDetails",
  props: ["policyId"],
  components: {
    PolicyInformation,
    PolicyEntities
  },
  data() {
    return {
      loading: false,
      error: null,
      policy: null
    };
  },
  created() {
    this.fetchPolicyDetails();
  },
  methods: {
    async fetchPolicyDetails() {
      const { policyId } = this.$props;

      if (this.loading) {
        return;
      }

      this.loading = true;

      try {
        this.policy = await getPolicies(policyId);
      } catch (e) {
        this.error = e;
      }

      this.loading = false;
    }
  }
});
</script>
