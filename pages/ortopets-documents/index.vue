<template>
    <MqResponsive :target="['xs', 'sm', 'md']">
        <HeaderMobile />
        <ConferenceDocumentsMobile />
        <Footer />
    </MqResponsive>
    <MqResponsive :target="['lg', 'xl', 'xxl']">
        <Header />
        <Sidebar />
        <ConferenceDocuments />
        <Footer />
    </MqResponsive>
</template>

<script>
import { MqResponsive } from "vue3-mq"
import ConferenceDocuments from '../../components/ConferenceDocuments.vue';

export default {
  components: {
    MqResponsive,
    ConferenceDocuments
},
}
</script>

<style lang="scss" scoped></style>