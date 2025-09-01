<template>
    <div>
        <div class="">
            <div class="container mx-auto bg-white pt-32">
            <div class="px-4">
                <NuxtLink to="/compliance" class="flex justify-center gap-4 p-2 border rounded border-primary text-gray-800 text-center w-1/2 md:w-1/5 cursor-pointer">
                    <i class="material-icons">arrow_back</i>
                    {{ msgTranslate?.legal || 'Legal' }}
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
import { msgTranslate, loadLang, globalContent, loadTranslations, fetchCachedContent, PP_API_URL, WHITELABEL_ID, lang } from '~/composables/globalData';

const route = useRoute();
const slug = route.params.slug;

async function fetchContent(slug) {
    try {
        // Use the unified cached content function with CloudFlare Worker proxy
        return await fetchCachedContent(slug, lang.value);
    } catch (error) {
        console.error('Error fetching compliance content:', error);
        return '';
    }
}

const htmlContent = ref('');

// Use proper async data loading
await useAsyncData('compliance-content', async () => {
    await loadLang(); // Ensure lang is loaded first
    htmlContent.value = await fetchContent(slug);
    return htmlContent.value;
});

const handleClick = async (key) => {
    const code = globalContent[key] || key; // Simplified code lookup
    htmlContent.value = await fetchContent(code);
};

// Add async data loading
await useAsyncData('translations', async () => {
  try {
    await loadLang();
  } catch (error) {
    console.error('Error loading translations:', error);
  }
});
</script>

<style scoped></style>
