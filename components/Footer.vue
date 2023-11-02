<template>
  <footer class="footer">
    <div class="footer__phone">
      +38 (097) 555-74-39
    </div>
    <div class="footer__mail">
      <img src="../assets/images/logo-orthopets-white.svg" alt="Orthopets" />
    </div>
    <div class="footer__developed">
      Developed by Ekaterina Domochka
    </div>
  </footer>
</template>

<script>
export default {
};
</script>
<style lang="scss" scoped>
.footer {
  align-items: center;
  background-color: #df3a06;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: relative;
  max-width: 100%;

  &__phone {
    font-size: 20px;
    margin-bottom: 20px;
  }

  &__mail {
    margin-bottom: 20px;
  }

  &__developed {
    font-size: 14px;
  }
}

</style>