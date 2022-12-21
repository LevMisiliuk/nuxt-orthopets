<template>
  <MqResponsive :target="['xs', 'sm', 'md']">
    <HeaderMobile />
    <OrthopetsListMobile />
  </MqResponsive>
  <MqResponsive :target="['lg', 'xl', 'xxl']">
    <Header />
    <Sidebar />
    <OrthopetsList />
  </MqResponsive>
</template>

<script>
import { MqResponsive } from "vue3-mq"

export default {
  components: {
    MqResponsive
  },
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>