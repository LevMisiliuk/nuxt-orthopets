<template>
  <div>
    <div class="conference-documents-mobile wrapper-mobile">
        <div class="conference-documents-mobile__wrapper">
            <h3>Conference</h3>
            <a
                :href="docPath"
                :download="docName"
                class="conference-documents-mobile__link"
            >
                <img
                    src="../assets/images/pdf-icon.svg"
                    alt="pdf"
                    class="conference-documents-mobile__img"
                />
                <p class="conference-documents-mobile__text">
                    {{ $t('conference') }}
                </p>
            </a>
            <iframe  width="100%"
                height="300" src="https://www.youtube.com/embed/4f9U33ONBN4?si=b2ca0vY9EkUIA6zT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/NjnPTEySV6g?si=ZFNHV1iI1NLChCd3"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
            </iframe>
        </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';
import conferenceEn from '~~/assets/documents/Conference_November_2023.pdf';
import conferenceUa from '~~/assets/documents/Конференція_Листопад_2023.pdf';

export default {
    setup() {
        const { locale } = useI18n();
        const docPath = computed(() => {
            return locale.value === 'en' ? conferenceEn : conferenceUa;
        });
        const docName = computed(() => {
            return locale.value === 'en' ? 'Conference_November_2023.pdf' : 'Конференція_Листопад_2023.pdf'
        });

        return {
            docPath,
            docName,
        }
    },
}
</script>

<style lang="scss" scoped>
.conference-documents-mobile {
    height: 100%;

    &__wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    &__link {
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100px;
    }

    &__img {
        height: 40px;
        width: 40px;
    }

    &__text {
        text-align: center;
    }
}
</style>