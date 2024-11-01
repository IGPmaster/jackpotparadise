<template>
    <div>
        <div class="">
            <div class="container mx-auto bg-white pt-32">
            <div class="px-4">
                <NuxtLink to="/compliance" class="flex justify-center gap-4 p-2 border rounded border-primary text-gray-800 text-center w-1/2 md:w-1/5 cursor-pointer">
                    <i class="material-icons">arrow_back</i>
                    {{ msgTranslate.legal }}
                      </NuxtLink>
                <div class="">
                    <div v-html="htmlContent"></div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { msgTranslate, globalContent, loadTranslations } from '~/composables/globalData';

const route = useRoute();
const slug = route.params.slug;

async function fetchContent(slug) {
    try {
        const response = await fetch(
            `${PP_API_URL}GetInfoContentByCode?whitelabelId=${WHITELABEL_ID}&country=${lang.value}&code=${slug}`
            //`http://content.progressplay.net/api23/api/InfoContent?whitelabelId=&country=en&Code=${slug}`
        );
        const data = await response.json();
        return data[0].Html; // Return the Html content instead of updating the ref
    } catch (error) {
        console.error(error);
    }
}

const htmlContent = ref('');

(async () => {
    htmlContent.value = await fetchContent(slug); // Set the htmlContent.value here
    await loadTranslations();
})();

const handleClick = async (key) => {
    const code = updateCode(key, globalContent.value); // Use globalContent.value here
    htmlContent.value = await fetchContent(code);
};
</script>

<style scoped></style>
