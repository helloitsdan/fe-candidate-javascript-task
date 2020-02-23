<template>
  <div>
    <h2>Pets</h2>

    <div v-if="!insured_entities">
      There are no associated pets.
    </div>

    <div v-if="insured_entities" class="columns is-multiline">
      <div
        v-for="entity in insured_entities"
        v-bind:key="entity.uuid"
        class="column is-one-third"
      >
        <div class="card background--white">
          <entity-information v-bind="entity" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import EntityInformation from "./EntityInformation.vue";

export default Vue.extend({
  name: "PolicyEntities",
  components: {
    EntityInformation,
  },
  props: {
    insured_entities: Array,
  }
});
</script>
