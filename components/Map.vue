<template>
  <div class="map wrapper">
    <h2 class="header">
      {{ $t('map.header') }}
    </h2>
    <h3 class="map__subtitle">
      {{ $t('map.subtitle') }}
    </h3>
    <GoogleMap
      :api-key="mapKey"
      :center="center"
      :zoom="6"
      style="width: 100%; height: 475px"
    >
      <Marker v-for="item in markerOptions" :key="item.id" :options="item">
        <InfoWindow class="info-window">
          <div class="info-window__container">
            <img
              class="info-window__doctor-image"
              alt="Doctor"
              :src="item.image"
            />
            <div class="info-window__doctor-data">
              <p class="info-window__doctor-data-name">{{ item.name }}</p>
              <p class="info-window__doctor-data-experience">
                {{ item.experience }}
              </p>
              <p class="info-window__doctor-data-clinic">
                {{ item.clinicName }}
              </p>
              <a
                :href="item.link"
                class="info-window__doctor-data-link"
              >
                {{ item.link }}
              </a>
              <p class="info-window__doctor-data-item_orange">
                {{ item.phoneNumber }}
              </p>
              <div class="info-window__doctor-socials">
                <img
                  class="info-window__doctor-socials-image"
                  alt="Instagram icon"
                  src="../assets/images/instagram.svg"
                />
                <img
                  class="info-window__doctor-socials-image"
                  alt="Viber icon"
                  src="../assets/images/viber.svg"
                />
              </div>
            </div>
          </div>
        </InfoWindow>
      </Marker>
    </GoogleMap>
  </div>
</template>

<script>
import { markerOptionsUA, markerOptionsEN } from '~~/assets/doctors-info/geo-info';
import { defineComponent } from 'vue';
import { GoogleMap, Marker, InfoWindow } from 'vue3-google-map';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  components: { GoogleMap, Marker, InfoWindow },
  setup() {
    const { locale } = useI18n();
    const config = useRuntimeConfig()
    const mapKey = ref(config.public.map)
    const center = {
      lat: 48.464718,
      lng: 35.046185
    };
    const markerOptions = computed(() => {
      return locale.value === 'en' ? markerOptionsEN : markerOptionsUA
    });

    return {
      center,
      markerOptions,
      mapKey
    };
  }
});
</script>
<style lang="scss" scoped>
.map {
  height: 80vh;
  display: flex;
  flex-direction: column;

  &__title {
    font-size: 28px;
    line-height: 46px;

    margin-bottom: 16px;

    color: #000000;
  }

  &__subtitle {
    font-size: 20px;
    line-height: 36px;

    margin-bottom: 24px;

    color: #000000;
  }
}

.main-map {
  display: flex;
  width: 100%;
}
.info-window {
  &__container {
    display: flex;
    padding: 0px;
  }

  &__doctor-data {
    display: flex;
    flex-direction: column;

    padding-left: 8px;
  }

  &__doctor-image {
    max-width: 100%;
    height: 148px;
    object-fit: cover;
  }

  &__doctor-data-name {
    font-size: 16px;
    margin-bottom: 8px;
    color: #000;
    font-weight: bold;
  }
  &__doctor-data-experience {
    font-size: 14px;
    margin-bottom: 8px;
    color: #000;
    font-weight: 400;
  }
  &__doctor-data-clinic {
    font-size: 14px;
    margin-bottom: 8px;
    color: #000;
    font-weight: 400;

    margin-bottom: 16px;
  }

  &__doctor-data-link {
    color: #000;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 16px;
    margin-bottom: 8px;
    text-decoration: underline;
  }

  &__doctor-data-item {
    font-size: 14px;
    margin-bottom: 8px;
    color: #000;
    font-weight: 400;

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
