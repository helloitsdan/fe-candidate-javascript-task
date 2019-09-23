<template>
  <footer class="site-footer">
    <div class="container">
      <p class="site-footer__text text-center font--micro">
        <span class="address">
          Bought By Many Ltd is a company registered in England and Wales with
          number 7886430. Address: 1-10 Summers Street, London EC1R 5BD.
        </span>
        Bought By Many Ltd is authorised and regulated by the Financial Conduct
        Authority - Register number 652623.
        <br />
        This register can be checked for details of our permissions, history and
        contact details.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter',
}
</script>

<style lang="scss" scoped>
.site-footer {
  background-color: $grey-light;
  font-weight: $font-weight--semibold;
  padding-bottom: $pad-v--xl;
  padding-top: $pad-v--xl;

  &__text {
    .address {
      @include breakpoint(sm-up) {
        display: block;
      }
    }
  }
}
</style>
