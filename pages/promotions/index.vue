<template>
    <div>
        <div class="container mx-auto pt-20">
            <h1 class="text-center">{{ msgTranslate.promotions }}</h1>
        </div>
        <div class="container mx-auto">
            <div class="p-5 grid grid-cols-1 lg:grid-cols-2 my-10 bg-gray-300 shadow-black shadow-lg rounded-lg items-center"
                v-for="promo in pp_promotions" :key="promo.code">
                <img class="rounded-lg w-full"
                    :src="promo.bigImageUrl"
                    loading="lazy"
                    :alt="'Promotion banner: ' + promo.name + '. ' + promo.title + '. ' + promo.subTitle"
                    :title="promo.name + '. ' + promo.title">
                <div class="info px-10 grid grid-cols-* justify-between">
                    <h2 class="py-4">{{ promo.title }}</h2>
                    <h5 class="py-4">{{ promo.subTitle }}</h5>
                    <a :href="regLink"
                        class="w-full md:w-3/6 text-center py-4 mt-2 px-8 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800 uppercase">
                        {{ msgTranslate.see_more }}
                    </a>
                <div v-if="promo.disclaimer !== null">
                        <span v-html="promo.disclaimer" class="text-sm/[12px] py-5 text-slate-800/75"></span>
                        <span class="text-sm/[12px] py-5 text-slate-800/75">
                            <a :href="'https://hippozino.casino-pp.net/promotions?code=' + promo.code" 
                                class="no_underline"
                                target="_blank" 
                                rel="noopener noreferrer">
                                Full Terms Apply
                            </a>
                        </span>
                    </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useHead } from '#imports';
// import { pp_promotions, msgTranslate, regLink, loginLink } from '~/composables/globalData';
const myPromotionsPosts = useFetch(() => fetchApiPromotions());
// Set page-specific meta tags
useHead({
    title: 'Promotions - Hippozino',
    meta: [
        { hid: 'description', name: 'description', content: 'Explore all the best promotions available at Hippozino!' },
        { name: 'keywords', content: 'promotions, games, casino, Hippozino' }
    ]
});
</script>

<style scoped>
.article {
    color: black !important;
}

h2,
h3,
h4,
h5,
h6,
p,
.promotionPage {
    color: darkslategray !important;
}</style>