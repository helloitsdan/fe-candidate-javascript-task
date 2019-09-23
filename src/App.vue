<template>
  <div id="app">
    <site-header />

    <main class="content">
      <!-- Add your code here -->
    </main>

    <site-footer />
  </div>
</template>

<script>

import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export default {
  name: 'app',
  components: {
    SiteHeader,
    SiteFooter,
  }
}
</script>

<style lang="scss">

.content {
  margin-top: 80px;

  @include breakpoint(sm-up) {
    margin-top: 90px;
  }
}
</style>
