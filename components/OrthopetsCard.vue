<template>
  <div class="orthopets-list__item">
    <img class="orthopets-list__doctor-image" :src="image" alt="Doctor" />
    <div class="orthopets-list__doctor-data">
      <div class="orthopets-list__doctor-data-inner">
        <p class="orthopets-list__doctor-data-item">{{ name }}</p>
        <p class="orthopets-list__doctor-data-item">{{ experience }}</p>
        <p class="orthopets-list__doctor-data-item">{{ clinicName }}</p>
        <p class="orthopets-list__doctor-data-item_orange">{{ phoneNumber }}</p>
        <div class="orthopets-list__doctor-socials">
          <img
            class="orthopets-list__doctor-socials-image"
            src="../assets/images/viber.svg"
            alt="Viber"
          />
          <img
            class="orthopets-list__doctor-socials-image"
            src="../assets/images/instagram.svg"
            alt="Instagram"
          />
        </div>
      </div>
      <button type="button" class="orthopets-list__button">{{ $t('card.button') }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrthopetsCard',
  props: {
    name: {
      type: String,
      default: null,
    },
    image: {
      type: String,
      default: null,
    },
    experience: {
      type: String,
      default: null,
    },
    operations: {
      type: String,
      default: null,
    },
    specialization: {
      type: String,
      default: null,
    },
    clinicName: {
      type: String,
      default: null
    },
    phoneNumber: {
      type: String,
      default: null
    }
  },
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.orthopets-list {
  &__items {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
  &__item {
    display: flex;
    justify-content: space-between;
    height: 240px;
    width: 480px;
    background: #fbfbfb;
    padding: 12px;
    transition: all 0.2s ease;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;

    &:hover {
      transform: translateY(-3px);
    }
  }
  &__doctor-data {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 242px;

    padding-left: 8px;
  }
  &__button {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    padding: 8px 44px;
    background-color: #df3a06;
    border: none;
    color: #fff;

    &:hover {
      background-color: #f84b16;
    }
  }

  &__doctor-image {
    width: 230px;
    margin-right: 8px;

    object-fit: cover;
  }

  &__doctor-data-item {
    font-size: 14px;
    margin-bottom: 8px;
    color: #000;
    font-weight: 400;
    white-space: pre-wrap;

    &_orange {
      font-weight: bold;
      color: #df3a06;
      margin-top: 12px;
      margin-bottom: 8px;
    }

    &:last-child {
      margin-bottom: 16px;
    }
  }

  &__doctor-socials-image {
    margin-left: 8px;

    &:first-child {
      margin-left: 0;
    }
  }
}
</style>
