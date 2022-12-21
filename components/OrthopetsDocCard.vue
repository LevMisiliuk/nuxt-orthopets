<template>
  <div>
    <div class="orthopet-page wrapper">
      <div class="orthopet-page__inner">
        <div class="orthopet-page__image-block">
          <img class="orthopet-page__image" :src="image" alt="" />
        </div>
        <div class="orthopet-page__info-block">
          <div class="orthopet-page__info-block-name">
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
    justify-content: space-between;
  }
  &__image-block {
    flex: 0.3;
    margin-right: 16px;
  }
  &__image {
    max-width: 500px;
    max-height: 600px;
    object-fit: cover;
  }
  &__info-block {
    flex: 0.7;
  }
  &__info-block-name {
    font-weight: 900;
    font-size: 32px;
    line-height: 46px;
    color: #000000;
  }

  &__ex-and-spec {
    display: flex;
    font-weight: bold;
    color: #df3a06;
  }

  &__info-block-specialization {
    margin-right: 32px;
  }

  &__info-block-extra-info {
    margin-top: 32px;
    font-size: 20px;
  }
}
</style>
