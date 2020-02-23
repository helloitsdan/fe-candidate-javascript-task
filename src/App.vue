<template>
  <div id="app">
    <site-header />

    <main class="content">
      <router-view></router-view>
    </main>

    <site-footer />
  </div>
</template>

<script>
import Vue from "vue";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default Vue.extend({
  name: "app",
  components: {
    SiteHeader,
    SiteFooter
  }
});
</script>

<style lang="scss">
.content {
  margin-top: 80px;

  @include breakpoint(sm-up) {
    margin-top: 90px;
  }
}
</style>
