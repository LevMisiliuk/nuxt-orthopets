<template>
  <header class="header">
    <NuxtLink to="/" class="header__left">
      <img class="header__logo" src="../assets/images/logo-orthopets.png" alt="Orthopets" />
    </NuxtLink>
    <div class="header__right">
      <h3 class="header__title">
        Ортопедичне-нейрохірургічне ветеринарне співтовариство України
        "Ortopets"
      </h3>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  z-index: 2;
  border-bottom: 1px solid #e5e5e5;

  &__left {
    flex: 0.3;
    display: flex;
    align-items: center;
    padding: 11.5px 24px;
  }

  &__logo {
    cursor: pointer;

    :hover {
      opacity: 0.8;
    }
  }

  &__right {
    font-size: 16px;
    line-height: 22px;

    text-align: right;

    color: #df3a06;
    padding: 20px 24px;
  }

  &__burger {
    align-items: center;
    width: auto;
    height: auto;
    display: none;
    margin-right: 10px;
  }

  &__burger-btn {
    width: 25px;
    height: 25px;
    position: relative;
    cursor: pointer;

    span {
      content: '';
      position: absolute;
      top: 12px;
      width: 25px;
      background-color: #000;
      height: 2px;
    }

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 25px;
      background-color: #000;
      height: 2px;
    }
    &:before {
      content: '';
      position: absolute;
      top: 0;
      width: 25px;
      background-color: #000;
      height: 2px;
    }
  }

  &__title {
    font-size: 16px;

    text-align: right;

    color: #df3a06;
  }
}
</style>
