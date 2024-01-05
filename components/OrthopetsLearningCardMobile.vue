<template>
  <div class="orthopets-learning-card-mobile__item">
    <img class="orthopets-learning-card-mobile__doctor-image" :src="image" alt="Doctor" />
    <div class="orthopets-learning-card-mobile__doctor-data">
      <div class="orthopets-learning-card-mobile__doctor-data-inner">
        <p class="orthopets-learning-card-mobile__doctor-name">{{ name }}</p>
        <p class="orthopets-learning-card-mobile__doctor-data-item">{{ transformDesc }}</p>
      </div>
      <button type="button" class="orthopets-learning-card-mobile__button">{{ $t('card.button') }}</button>
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
    },
    description: {
      type: String,
      default: null
    }
  },
  setup(props) {
    const transformDesc = ref(props.description);

    if (transformDesc.value.length > 80) {
      transformDesc.value = transformDesc.value.slice(0, 80) + "...";
    }

    return {
      transformDesc,
    }
  },
}
</script>

<style lang="scss" scoped>
.orthopets-learning-card-mobile {
  &__items {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
  &__item {
    background: #fbfbfb;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    cursor: pointer;
    display: grid;
    gap: 5px;
    grid-template-columns: 200px 1fr;
    padding: 12px;
    transition: all 0.2s ease;

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
    margin-right: 8px;
    max-height: 250px;
    object-fit: cover;
    width: 200px;
  }

  &__doctor-name {
    font-size: 18px;
    margin-bottom: 8px;
    color: #df3a06;
    font-weight: 700;
    white-space: pre-wrap;
  }

  &__doctor-data-item {
    color: #000;
    font-size: 16px;
    font-weight: 400;
    height: 105px;
    margin-bottom: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
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
