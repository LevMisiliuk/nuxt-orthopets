<template>
  <div class="map-mobile wrapper-mobile">
    <h2 class="header-mobile">
      Карта сертифікованих ортопедів та нейрохірургів України
    </h2>
    <h3 class="map-mobile__subtitle">
      Швидкий та зручний пошук спеціаліста з потрібної місцевості
    </h3>
    <GoogleMap
      api-key="AIzaSyA-172s8-cEZIqJ44qxzfkFRe4aYcf2jbE"
      :center="center"
      :zoom="6"
      style="width: 100%; height: 447px"
    >
      <Marker v-for="item in markerOptions" :key="item.id" :options="item">
        <InfoWindow class="info-window">
          <div class="info-window__container">
            <img class="info-window__doctor-image" alt="Doctor" :src="item.image" />
            <div class="info-window__doctor-data">
              <p class="info-window__doctor-data-name">{{item.name}}</p>
              <p
              class="info-window__doctor-data-experience">{{item.experience}}</p>
              <p
              class="info-window__doctor-data-clinic">{{item.clinicName}}</p>
              <p
              class="info-window__doctor-data-item_orange">{{item.phoneNumber}}</p>
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
import { markerOptions } from '~~/assets/geo-info/geo-info'
import { defineComponent } from 'vue'
import { GoogleMap, Marker, InfoWindow } from 'vue3-google-map'

export default defineComponent({
  components: { GoogleMap, Marker, InfoWindow },
  setup() {
    const center = {
      lat: 48.464718,
      lng: 35.046185,
    }

    return {
      center,
      markerOptions,
    }
  },
})
</script>
<style lang="scss" scoped>
.map-mobile {
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
    line-height: 30px;
    margin-bottom: 16px;
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
		max-width: 40%;
		max-height: 128px;
		object-fit: cover;
	}

	&__doctor-data-name {
		font-size: 14px;
		margin-bottom: 4px;
		color: #000;
		font-weight: bold;
	}
	&__doctor-data-experience {
		font-size: 12px;
		margin-bottom: 4px;
		color: #000;
		font-weight: 400;
	}
	&__doctor-data-clinic {
		font-size: 12px;
		margin-bottom: 4px;
		color: #000;
		font-weight: 400;

		margin-bottom: 16px;
	}

	&__doctor-data-item {
		font-size: 12px;
		margin-bottom: 4px;
		color: #000;
		font-weight: 400;

		&_orange {
			font-weight: bold;
			color: #DF3A06;
			margin-top: 10px;
			margin-bottom: 6px;
		}

		&:last-child {
			margin-bottom: 10px;
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
