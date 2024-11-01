<template>
    <div>
        <div class="bg-white py-10">
            <div class="container mx-auto px-0">
                <div class="g-btn-wrapper mt-10 md:mt-20 flex flex-wrap justify-center">
                    <button v-for="(value, key) in globalContent" :key="key" @click="handleClick(key)"
                        class="h-10 px-4 md:px-8 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800 uppercase text-xs md:text-base">
                        {{ msgTranslate[value] ? msgTranslate[value] : value }}
                    </button>
                </div>

                <div class="px-4">
                    <div v-html="htmlContent"></div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>

function updateCode(key, globalContent) {
    const code = globalContent[key];
    return code; // Return the code value
}

async function fetchContent(code) {
    try {
        const response = await fetch(
            `${PP_API_URL}GetInfoContentByCode?whitelabelId=${WHITELABEL_ID}&country=${lang.value}&code=${code}`
        );
        const data = await response.json();
        return data[0].Html; // Return the Html content instead of updating the ref
    } catch (error) {
        console.error(error);
    }
}

import { ref } from 'vue';
import { msgTranslate, globalContent } from '~/composables/globalData';

const htmlContent = ref('');

(async () => {
    htmlContent.value = await fetchContent('aboutus'); // Set the htmlContent.value here
    await loadTranslations();
})();

const handleClick = async (key) => {
    const code = updateCode(key, globalContent.value); // Use globalContent.value here
    htmlContent.value = await fetchContent(code);
};
</script>

<style scoped></style>
