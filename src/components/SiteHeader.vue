<template>
  <div>
    <header class="site-header">
      <div class="container">
        <div class="header-items">
          <a href="/" class="header-items__logo">
            <span class="sr-only">Bought By Many</span>
          </a>
        </div>
      </div>
    </header>
  </div>
</template>

<script>

export default {
  name: 'SiteHeader',
}
</script>

<style lang="scss" scoped>
.site-header {
  @include shadow;

  background-color: $white;
  box-sizing: border-box;
  left: 0;
  height: 80px;
  padding-bottom: 15px;
  padding-top: 15px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: $zindex-header;

  @include breakpoint(sm-up) {
    height: 90px;
    padding-bottom: 20px;
    padding-top: 20px;
  }

  .header-items {
    align-items: center;
    display: flex;
    justify-content: space-between;

    &__logo {
      background-image: url('~../assets/svg/bbm-logo.svg');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center center;
      display: inline-block;
      height: 50px;
      width: 216px;

      @media screen and (min-width: 550px) {
        width: 290px;
      }
    }
  }
}
</style>
