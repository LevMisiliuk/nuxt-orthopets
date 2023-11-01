<template>
  <div>
    <div class="orthopets-list wrapper">
      <OrthopetsLearningCard
        class="orthopets-card"
        v-for="item in arrayOptions"
        :key="item.id"
        v-bind="item"
        @click.prevent="openItem(item)"
      />
    </div>
  </div>
</template>

<script>
import { learningListUA, learningListEN } from '~~/assets/doctors-info/learning-list'
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const router = useRouter()
    const { locale } = useI18n();

    const arrayOptions = computed(() => {
      return locale.value === 'en' ? learningListEN : learningListUA
    });

    function openItem(item) {
      router.push({
        path: `orthopets-catalog/${item.id}`,
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
