<template>
  <div>
    <div class="orthopets-list wrapper">
      <OrthopetsCard
        class="orthopets-card"
        v-for="item in markerOptions"
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
import { markerOptions } from '~~/assets/geo-info/geo-info'

export default {
  setup() {
    const router = useRouter()

    function openItem(item) {
      router.push({
        path: `orthopets-list/${item.id}`,
        params: { item: item.id }
      })
    }
    return {
      markerOptions,
      openItem,
    }
  },
}
</script>

<style lang="scss" scoped>
.orthopets-list {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
