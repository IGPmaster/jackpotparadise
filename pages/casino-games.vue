<template>
	<div class="section-even lg:py-10">
		<div class="row bg-primary_bg lg:mb-4 pt-20">
			<div class="container grid grid-cols-1 lg:grid-cols-8 lg:gap-10 items-center mx-auto p-4">
				<div class="col-span-full lg:col-span-6">
					<p class="gamesSectionHead text-center lg:text-left text-3xl text-primary py-4 px-4">{{
						msgTranslate.casino_games }}</p>
					<div v-for="promo in promotionsPosts" :key="promo.id">
						<div class="info_content text-primary font-extralight py-5 px-4">{{ promo.acf.casino_games_info }}
						</div>
					</div>
				</div>
				<div class="lg:block lg:col-span-2 p-4">
					<div class="flex justify-between items-center">
						<a :href="regLink"
							class="bg-secondary_bg w-full rounded-md py-3 flex text-secondary hover:text-primary hover:bg-tertiary_dark uppercase cursor-pointer transition ease-in-out duration-500 hover:scale-110">
							<span class="text-center w-full">{{ msgTranslate.sign_up }}</span>
							<i class="material-icons items-center pr-2 font-extralight">arrow_forward</i>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="px-4 sm:px-6 lg:px-0 py-10">
			<div class="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
				<div v-for="game in casinoGames" :key="game.id" :class="'item ' + game.id">
					<div class="">
						<div class="show show-first first-content-border">
							<a :href="regLink" target="_blank">
								<img style="min-width: 100%;"
									class="responsive-img item-qqq" :src="game.image" loading="lazy"
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
// import { ref, onMounted } from 'vue';
import { useHead } from '#imports';
import { fetchGames, casinoGames, msgTranslate, regLink, loginLink } from '~/composables/globalData';

const { fetch, error, $fetchState } = useFetch(async () => {
	await fetchGames();
	await fetchPromotions();
	await loadTranslations(loadLang());
});
// Set page-specific meta tags
useHead({
	title: 'Casino Games - Hippozino',
	meta: [
		{ hid: 'description', name: 'description', content: 'Explore the best casino games available at Hippozino!' },
		{ name: 'keywords', content: 'casino, games, casino, Hippozino' }
	]
});
</script>

<style scoped>

</style>