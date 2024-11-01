<template>
	<div class="py-10 md:py-20 bg-primary_bg">
		<div class="lg:mb-4">
			<div class="container mx-auto px-4 sm:px-6 lg:px-8">
				<div class="grid grid-cols-1 lg:grid-cols-8 lg:gap-8 items-center">
					<div class="col-span-full lg:col-span-6">
						<p class="gamesSectionHead text-primary text-center lg:text-left p-4 text-3xl font-bold">
							{{ msgTranslate.jackpot_games }}
						</p>
						<div v-for="promo in promotionsPosts" :key="promo.id">
							<p class="info_content text-[#bacfdc] font-light text-lg py-5 px-4">
								{{ promo.acf.jackpot_games_info }}
							</p>
						</div>
					</div>
					<div class="lg:col-span-2 p-4">
						<div class="flex justify-between items-center">
							<NuxtLink to="casino-games"
								class="w-full rounded-md py-3 flex items-center justify-center bg-secondary_bg text-secondary uppercase cursor-pointer">
								<span class="text-center">{{ msgTranslate.see_more }}</span>
								<i class="material-icons pl-2">arrow_forward</i>
							</NuxtLink>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Loading state -->
		<div v-if="loading" class="loading-placeholder">
			<svg class="spinner" viewBox="0 0 50 50">
				<circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="3"></circle>
			</svg>
		</div>

		<!-- Image grid section -->
		<div v-else class="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
			<div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
				<div v-for="game in jackpotGames.slice(-16).reverse()" :key="game.id" :class="'item-' + game.id"
					class="shadow-lg rounded-md">
					<div class="show show-first relative">
						<a :href="regLink" target="_blank">
							<img class="rounded-md w-full" :src="game.image" @error="game.image = 'newGameImg.jpg'"
								loading="lazy" :alt="'Image of ' + game.gameName + ' online slot. ' + game.description"
								:title="game.gameName + ' - ' + game.id" width="376" height="250" />
						</a>
						<div class="mask">
							<a :href="regLink" target="_blank">
								<div class="gameDescr">
									<div v-if="game?.description">
										{{ game.description }}
									</div>
									<i v-else class="material-icons">play_arrow</i>
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
					class="inline-block py-2 px-4 md:px-10 font-semibold rounded text-sm bg-secondary_bg text-secondary text-md md:text-xl xl:text-3xl">
					{{ msgTranslate.sign_up }}
				</a>
			</div>
		</div>
	</div>
</template>
<script setup>

import { ref, onMounted, defineEmits } from 'vue';
const loading = ref(true);

import { jackpotGames, msgTranslate, regLink, loginLink } from '~/composables/globalData';

const emit = defineEmits(['loaded']);

onMounted(async () => {
	try {
		await fetchGames();
		loading.value = false;
	} catch (error) {
		console.error('Error fetching promotions:', error);
	}
	loading.value = false;
	emit('loaded');
});

</script>

<style scoped>

</style>