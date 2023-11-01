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
    <Footer />
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
    <Footer />
  </MqResponsive>
</template>

<script>
import { arrayOptionsUA, arrayOptionsEN } from '~~/assets/doctors-info/oprtopets-list'
import { MqResponsive } from "vue3-mq"
import { useI18n } from 'vue-i18n';

export default {
  components: {
    MqResponsive
  },
  setup () {
    const router = useRouter()
    const currentDoc = ref(null)
    const { locale } = useI18n();

    const arrayOptions = computed(() => {
      return locale.value === 'en' ? arrayOptionsEN : arrayOptionsUA
    });

    function filterData () {
      arrayOptions.value.filter(item => {
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