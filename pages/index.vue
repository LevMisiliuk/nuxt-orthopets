<template>
  <div>
    <MqResponsive :target="['xs', 'sm', 'md']">
      <HeaderMobile />
      <MapMobile />
      <Footer />
    </MqResponsive>
    <MqResponsive :target="['lg', 'xl', 'xxl']">
      <Header />
      <Sidebar />
      <Map />
      <Footer />
    </MqResponsive>
  </div>
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

<style lang="scss" scoped></style>