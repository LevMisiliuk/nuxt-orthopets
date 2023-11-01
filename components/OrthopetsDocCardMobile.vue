<template>
  <div>
    <div class="orthopet-page wrapper-mobile">
      <div class="orthopet-page__inner">
        <div class="orthopet-page__image-block">
          <img class="orthopet-page__image" :src="image" alt="" />
        </div>
        <div class="orthopet-page__info-block">
          <div class="orthopet-page__info-block-name header-mobile">
            {{ name }}
          </div>
          <div class="orthopet-page__ex-and-spec">
            <div class="orthopet-page__info-block-specialization">
              {{ specialization }}
            </div>
            <div class="orthopet-page__info-block-experience">
              {{ experience }}
            </div>
          </div>
          <div class="orthopet-page__info-block-extra-info">
            {{ operations }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    specialization: {
      type: String,
      default: null,
    },
    operations: {
      type: String,
      default: null,
    },
    experience: {
      type: String,
      default: null,
    },
  },
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.orthopet-page {

  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  &__image {
    width: 100%;
    max-height: 700px;
    object-fit: cover;
  }
  &__info-block {
    flex: 0.7;
  }

  &__ex-and-spec {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    color: #df3a06;
  }

  &__info-block-specialization {
    margin-bottom: 8px;
  }

  &__info-block-extra-info {
    margin-top: 32px;
    font-size: 18px;
  }
}
</style>
