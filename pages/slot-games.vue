<template>
	<div class="py-10 md:py-20 bg-primary_bg">
		<div class="bg-primary_bg lg:mb-4">
			<div class="container grid grid-cols-1 lg:grid-cols-8 lg:gap-8 items-center mx-auto">
				<div class="col-span-full lg:col-span-6">
					<p class="gamesSectionHead text-primary text-center lg:text-left p-4 text-3xl text-bold">{{
						msgTranslate.slot_games }}</p>
					<div v-for="promo in promotionsPosts" :key="promo.id">
						<div class="info_content text-primary font-extralight text-lg py-5 px-4">{{
							promo.acf.slot_games_info }}
						</div>
					</div>
				</div>
				<div class="lg:block lg:col-span-2 p-4">
					<div class="flex justify-between items-center">
						<NuxtLink to="all-games"
							class="bg-secondary_bg w-full rounded-md py-3 flex text-secondary hover:text-primary hover:bg-tertiary_dark uppercase cursor-pointer transition ease-in-out duration-500 hover:scale-110">
							<span class="text-center w-full">{{ msgTranslate.see_more }}</span>
							<i class="material-icons items-center pr-2 font-extralight">arrow_forward</i>
						</NuxtLink>
					</div>
				</div>

			</div>
		</div>
		<div class="px-4 sm:px-6 lg:px-0 py-10">
			<div class="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
				<div v-for="game in slotGames" :key="game.id" :class="'item ' + game.id">
					<div class="">
						<div class="show show-first first-content-border">
							<a :href="regLink" target="_blank">
								<img style="min-width: 100%;" class="responsive-img item-qqq" :src="game.image" loading="lazy"
									@error="game.image = 'newGameImg.jpg'"
									:alt="'Image of ' + game.gameName + ' online slot. ' + game.description"
									:title="game.gameName + ' - ' + game.id" />
							</a>
							<div class='mask'>
								<a :href="regLink" target="_blank">
									<div class="gameDescr">
										<div v-if="game && game.description && game.description.length > 0"
											v-text="game.description"></div>
										<i v-else class="large material-icons">play_arrow</i>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useHead } from '#imports';
import { fetchGames, promotionsPosts, slotGames, msgTranslate, regLink, loginLink } from '~/composables/globalData';

// Fetch games and other data
const { fetch, error, $fetchState } = useFetch(async () => {
	await fetchGames();
	await fetchPromotions();
	await loadTranslations(loadLang());
});

// Set page-specific meta tags
useHead({
	title: 'Slot Games - Hippozino',
	meta: [
		{ hid: 'description', name: 'description', content: 'Explore the best slot games available at Hippozino!' },
		{ name: 'keywords', content: 'slots, games, casino, Hippozino' }
	]
});
</script>

<style scoped>
/* Scoped CSS styles go here */
</style>
