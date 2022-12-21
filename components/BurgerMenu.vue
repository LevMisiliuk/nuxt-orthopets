<template>
  <div class="burger-menu">
    <nav>
      <div class="burger-menu__wrap">
        <NuxtLink to="/">
          <img src="../assets/images/logo-orthopets.png" alt="Orthopets" />
        </NuxtLink>
        <button
          @click="toggleMenu"
          class="burger-menu__menu"
          :class="{ active: isActive }"
        >
          <svg viewBox="0 0 64 48">
            <path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"></path>
            <path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"></path>
            <path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37"></path>
          </svg>
        </button>
      </div>
    </nav>
    <div
      class="burger-menu__dropdown"
      :class="{ 'burger-menu__dropdown-after': isActive }"
    >
      <div class="burger-menu__dropdown-content">
        <div class="burger-menu__dropdown-content-items">
          <NuxtLink class="burger-menu__dropdown-content-item" to="/">
            Мапа
          </NuxtLink>
          <NuxtLink
            class="burger-menu__dropdown-content-item"
            to="/orthopets-list"
          >
            Список ортопедів
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const isActive = ref(false)

    function toggleMenu() {
      isActive.value = !isActive.value
      document.body.classList.toggle('active') //removing scroll when we have burger menu active
    }

    return {
      isActive,
      toggleMenu,
    }
  },
}
</script>

<style lang="scss">
.burger-menu {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;

  &__wrap {
    position: fixed;
    z-index: 1000;
    width: 100%;
    margin-top: 0;
    padding: 10px;
  }

  &__dropdown {
    height: 0px;
    background-color: #fff;
    transition: height 0.4s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    &-content {
      height: 30%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      &-items {
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-top: 90px;
      }

      &-item {
        font-size: 16px;
        font-weight: 550;
        margin-bottom: 32px;
      }
    }
  }

  &__dropdown-after {
    position: fixed;
    height: calc(110vh);
    width: 100%;
    transition: height 0.2s ease;
    display: flex;
    align-items: flex-start;
  }

  &__wrap {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  }

  &__menu {
    --color: #000;
    width: 36px;
    height: 36px;
    padding: 0;
    margin: 12px 18px 0 0;
    outline: none;
    position: relative;
    right: 0;
    border: none;
    background: none;
    cursor: pointer;
    -webkit-appearence: none;
    -webkit-tap-highlight-color: transparent;
    svg {
      width: 64px;
      height: 48px;
      top: -6px;
      left: -14px;
      stroke: var(--color);
      stroke-width: 4px;
      stroke-linecap: round;
      stroke-linejoin: round;
      fill: none;
      display: block;
      position: absolute;
      path {
        transition: stroke-dasharray var(--duration, 0.85s) var(--easing, ease)
            var(--delay, 0s),
          stroke-dashoffset var(--duration, 0.85s) var(--easing, ease)
            var(--delay, 0s);
        stroke-dasharray: var(--array-1, 26px) var(--array-2, 100px);
        stroke-dashoffset: var(--offset, 126px);
        transform: translateZ(0);
        &:nth-child(2) {
          --duration: 0.7s;
          --easing: ease-in;
          --offset: 100px;
          --array-2: 74px;
        }
        &:nth-child(3) {
          --offset: 133px;
          --array-2: 107px;
        }
      }
    }
    &.active {
      svg {
        path {
          --offset: 57px;
          &:nth-child(1),
          &:nth-child(3) {
            --delay: 0.15s;
            --easing: cubic-bezier(0.2, 0.4, 0.2, 1.1);
          }
          &:nth-child(2) {
            --duration: 0.4s;
            --offset: 2px;
            --array-1: 1px;
          }
          &:nth-child(3) {
            --offset: 58px;
          }
        }
      }
    }
  }
}
</style>
