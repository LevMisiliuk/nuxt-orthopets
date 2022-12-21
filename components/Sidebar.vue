<template>
  <div>
    <aside class="sidebar">
      <NuxtLink class="sidebar__link" to="/">
        <div class="sidebar__link-content">
          <img src="../assets/images/home-icon.svg" alt="Home" />
          <span>Мапа</span>
        </div>
      </NuxtLink>
      <NuxtLink class="sidebar__link" to="/orthopets-list">
        <div class="sidebar__link-content">
          <img src="../assets/images/team-icon.svg" alt="Team" />
          <span>Список ортопедів</span>
        </div>
      </NuxtLink>
    </aside>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  background-color: #fff;
  flex: 0.5;
  border-right: 1px solid #e5e5e5;

  width: 190px;
  margin-top: 88px;

  &__link {
    color: #000;
    text-decoration: none;

    &-content {
      img {
        margin-right: 8px;
      }

      span {
        font-size: 14px;
      }
      display: flex;
      white-space: nowrap;
      padding: 12px 24px;
    }
  }
}
</style>
