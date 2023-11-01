<template>
  <div class="orthopets-card-mobile__item">
    <img class="orthopets-card-mobile__doctor-image" :src="image" alt="Doctor" />
    <div class="orthopets-card-mobile__doctor-data">
      <div class="orthopets-card-mobile__doctor-data-inner">
        <p class="orthopets-card-mobile__doctor-data-item">{{ name }}</p>
        <p class="orthopets-card-mobile__doctor-data-item">{{ experience }}</p>
        <p class="orthopets-card-mobile__doctor-data-item">{{ clinicName }}</p>
        <p class="orthopets-card-mobile__doctor-data-item_orange">{{ phoneNumber }}</p>
        <div class="orthopets-card-mobile__doctor-socials">
          <img
            class="orthopets-card-mobile__doctor-socials-image"
            src="../assets/images/viber.svg"
            alt="Viber"
          />
          <img
            class="orthopets-card-mobile__doctor-socials-image"
            src="../assets/images/instagram.svg"
            alt="Instagram"
          />
        </div>
      </div>
      <button type="button" class="orthopets-card-mobile__button">{{ $t('card.button') }}</button>
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
.orthopets-card-mobile {
  &__items {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
  &__item {
    display: flex;
    justify-content: space-between;
    width: 100%;
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

    padding-left: 8px;
  }
  &__button {
    font-size: 14px;
    font-weight: 500;
    padding: 6px 18px;
    background-color: #df3a06;
    border: none;
    color: #fff;
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
      font-size: 12px;
      color: #df3a06;
      margin-top: 8px;
      margin-bottom: 4px;
    }

    &:last-child {
      margin-bottom: 16px;
    }
  }

  &__doctor-socials-image {
    margin-left: 8px;
    margin-bottom: 8px;

    &:first-child {
      margin-left: 0;
    }
  }
}
</style>
