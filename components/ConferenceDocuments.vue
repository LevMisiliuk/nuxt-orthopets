<template>
  <div>
    <div class="conference-documents wrapper">
        <a
            :href="docPath"
            :download="docName"
            class="conference-documents__link"
        >
            <img
                src="../assets/images/pdf-icon.svg"
                alt="pdf"
                class="conference-documents__img"
            />
            <p class="conference-documents__text">
                {{ $t('conference') }}
            </p>
        </a>
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
    setup() {
        const { locale } = useI18n();
        const docPath = computed(() => {
            return locale.value === 'en' ? '/assets/documents/Conference_November 2023.pdf' : '/assets/documents/Конференція_Листопад2023.pdf'
        });
        const docName = computed(() => {
            return locale.value === 'en' ? 'Conference_November 2023.pdf' : 'Конференція_Листопад2023.pdf'
        });

        return {
            docPath,
            docName,
        }
    },
}
</script>

<style lang="scss" scoped>
.conference-documents {
    height: 80vh;

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