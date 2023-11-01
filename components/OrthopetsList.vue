<template>
  <div>
    <div class="orthopets-list wrapper">
      <OrthopetsCard
        class="orthopets-card"
        v-for="item in arrayOptions"
        :key="item.id"
        :name="item.name"
        :experience="item.experience"
        :specialization="item.specialization"
        :image="item.image"
        :operations="item.operations"
        :clinic-name="item.clinicName"
        :phone-number="item.phoneNumber"
        @click.prevent="openItem(item)"
      />
    </div>
  </div>
</template>

<script>
import { arrayOptionsUA, arrayOptionsEN } from '~~/assets/doctors-info/oprtopets-list'
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const router = useRouter()
    const { locale } = useI18n();

    const arrayOptions = computed(() => {
      return locale.value === 'en' ? arrayOptionsEN : arrayOptionsUA
    });

    function openItem(item) {
      router.push({
        path: `orthopets-list/${item.id}`,
        params: { item: item.id }
      })
    }
    return {
      arrayOptions,
      openItem,
    }
  },
}
</script>

<style lang="scss" scoped>
.orthopets-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
}
</style>
