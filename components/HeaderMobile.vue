<template>
  <header class="header-mobile">
    <div class="header-mobile__inner">
      <BurgerMenu />
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderMobile',
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.header-mobile {
  &__inner {
    margin-bottom: 40px;
    padding: 10px;
  }
}
</style>
