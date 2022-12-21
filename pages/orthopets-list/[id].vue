<template>
  <MqResponsive :target="['xs', 'sm', 'md']">
    <HeaderMobile />
    <OrthopetsDocCardMobile
      :image="currentDoc.image"
      :name="currentDoc.name"
      :specialization="currentDoc.specialization"
      :experience="currentDoc.experience"
      :operations="currentDoc.operations"
    />
  </MqResponsive>
  <MqResponsive :target="['lg', 'xl', 'xxl']">
    <Header />
    <Sidebar />
    <OrthopetsDocCard
      :image="currentDoc.image"
      :name="currentDoc.name"
      :specialization="currentDoc.specialization"
      :experience="currentDoc.experience"
      :operations="currentDoc.operations"
    />
  </MqResponsive>
</template>

<script>
import { markerOptions } from '~~/assets/geo-info/geo-info'
import { MqResponsive } from "vue3-mq"

export default {
  components: {
    MqResponsive
  },
  setup () {
    const router = useRouter()
    const currentDoc = ref(null)

    function filterData () {
      markerOptions.filter(item => {
        if (item.id === Number(router.currentRoute.value.params.id))  currentDoc.value = item
      })
    }
    filterData()
    return {
      currentDoc
    }
  }
}
</script>

<style lang="scss" scoped>

</style>