<template>
  <div class="select-language">
    <button
      :class="`select-language__btn ${
        $i18n.locale === 'en' ? 'select-language__btn_selected' : ''
      }`"
      @click="changeLanguage('en')"
    >
      EN 🇬🇧
    </button>
    <button
			:class="`select-language__btn ${
        $i18n.locale === 'ua' ? 'select-language__btn_selected' : ''
      }`"
			@click="changeLanguage('ua')"
		>
      UA 🇺🇦
    </button>
  </div>
</template>
<script>
export default {
  name: 'LanguageSelect',
  methods: {
    changeLanguage(locale) {
      this.$i18n.locale = locale
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/_colors.scss';
.select-language {
  &__btn {
		cursor: pointer;
    color: black;
    flex-direction: row;
    white-space: nowrap;
    width: 70px;
    border-radius: 4px;
    padding: 5px 15px;
    margin-right: 10px;
    background-color: transparent;
    border: 1px solid $primary-color;

		transition: .3s all ease-in-out;

		&_selected {
			color: white;
			background-color: $primary-color;
			border: none;
		}
  }
}
</style>
