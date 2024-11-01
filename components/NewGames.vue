<template>
    <div class="py-10 md:py-20 bg-primary_bg">
        <!-- Removed redundant bg-primary_bg -->
        <div class="lg:mb-4">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-8 lg:gap-8 items-center">
                    <div class="col-span-full lg:col-span-6">
                        <!-- Fixed text-bold to font-bold -->
                        <p class="gamesSectionHead text-primary text-center lg:text-left p-4 text-3xl font-bold">
                            {{ msgTranslate.new_games }}
                        </p>
                        <div v-for="promo in promotionsPosts" :key="promo.id">
                            <!-- Removed unnecessary nested div -->
                            <p class="info_content text-[#bacfdc] font-light text-lg py-5 px-4">
                                {{ promo.acf.new_games_info }}
                            </p>
                        </div>
                    </div>
                    <div class="lg:col-span-2 p-4">
                        <div class="flex justify-between items-center">
                            <NuxtLink to="all-games"
                                class="w-full rounded-md py-3 flex items-center justify-center bg-secondary_bg text-secondary uppercase cursor-pointer transition-all ease-in-out duration-500 hover:text-primary hover:bg-tertiary_dark hover:scale-110">
                                <span class="text-center">{{ msgTranslate.see_more }}</span>
                                <i class="material-icons pl-2 font-extralight">arrow_forward</i>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Loading state with accessibility -->
        <div v-if="loading" class="loading-placeholder" role="status" aria-live="polite">
            <svg class="spinner animate-spin w-12 h-12" viewBox="0 0 50 50">
                <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="3"></circle>
            </svg>
            <span class="sr-only">Loading...</span>
        </div>

        <!-- Image grid section -->
        <div v-else class="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
                <div v-for="game in newGames.slice(-16).reverse()" :key="game.id" :class="'item-' + game.id"
                    class="shadow-lg rounded-md">
                    <div class="show show-first relative">
                        <a :href="regLink" target="_blank">
                            <img class="rounded-md w-full" :src="game.image" @error="game.image = 'newGameImg.jpg'"
                                loading="lazy" :alt="'Image of ' + game.gameName + ' online slot. ' + game.description"
                                :title="game.gameName + ' - ' + game.id" width="200" height="132" />
                        </a>
                        <div
                            class="mask absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <a :href="regLink" target="_blank">
                                <div class="gameDescr p-4 text-white text-center">
                                    <div v-if="game?.description">
                                        {{ game.description }} from {{ game.provider }}
                                    </div>
                                    <i v-else class="material-icons text-4xl scale-150">play_arrow</i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- CTA Section -->
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
            <div class="flex flex-col sm:flex-row items-center justify-between bg-tertiary_dark p-5 sm:p-10 rounded-sm">
                <div class="text-primary font-bold text-base md:text-2xl xl:text-4xl mb-4 sm:mb-0">
                    {{ msgTranslate.claim }}
                </div>
                <a :href="regLink"
                    class="inline-block py-2 px-4 md:px-10 font-semibold rounded text-sm bg-secondary_bg text-secondary hover:opacity-90 transition-opacity duration-300 text-md md:text-xl xl:text-3xl">
                    {{ msgTranslate.sign_up }}
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, defineEmits } from 'vue';
const loading = ref(true);
import { newGames, msgTranslate, regLink, loginLink } from '~/composables/globalData';

const emit = defineEmits(['loaded']);

onMounted(async () => {
    try {
        await fetchGames();
    } catch (error) {
        console.error('Error fetching promotions:', error);
    } finally {
        loading.value = false;
        emit('loaded');
    }
});
</script>