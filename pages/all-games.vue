<template>
	<div class="section-even lg:py-10">
		<div class="row bg-primary_bg lg:mb-4 pt-20">
			<div class="container grid grid-cols-1 lg:grid-cols-8 lg:gap-10 items-center mx-auto p-4">
				<div class="col-span-full lg:col-span-6">
					<p class="gamesSectionHead text-center lg:text-left text-3xl text-primary py-4 px-4">{{ msgTranslate.all_games }}</p>
					<div v-for="promo in promotionsPosts" :key="promo.id">
						<div class="info_content text-primary font-extralight py-5 px-4">{{ promo.acf.slot_games_info }}</div>
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
		<div class="row lg:mb-4 py-5">
			<div class="container mx-auto grid grid-cols-1 gap-0 lg:grid-cols-3 lg:gap-4 px-4">
				<!-- Wrapper div for Provider Dropdown and Icon -->
				<div class="relative w-full py-4 lg:py-0">
					<select v-model="selectedProvider" @change="filterGames" class="uppercase block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
						<option value="all">All providers</option>
						<option v-for="provider in providers" :value="provider" :key="provider">
						{{ provider }}
						</option>
					</select>
					<!-- Icon -->
					<i class="material-icons absolute top-1/2 right-3 transform -translate-y-1/2">arrow_drop_down</i>
				</div>

				<!-- SubProvider Dropdown -->
				<div class="relative w-full py-4 lg:py-0">
					<select v-model="selectedSubProvider" @change="filterGames" class="block uppercase appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
						<option value="all">All subProviders</option>
						<option v-for="subProvider in subProviders" :value="subProvider" :key="subProvider">
						{{ subProvider }}
						</option>
					</select>
					<!-- Icon -->
					<i class="material-icons absolute top-1/2 right-3 transform -translate-y-1/2">arrow_drop_down</i>
				</div>

				<!-- GameType Dropdown -->
				<div class="relative w-full py-4 lg:py-0">
					<select v-model="selectedGameType" @change="filterGames" class="block uppercase appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
						<option value="all">All game types</option>
						<option v-for="gameType in gameTypes" :value="gameType" :key="gameType">
						{{ gameType }}
						</option>
					</select>
					<!-- Icon -->
					<i class="material-icons absolute top-1/2 right-3 transform -translate-y-1/2">arrow_drop_down</i>
				</div>
			</div>
		</div>
		<div class="px-4 sm:px-6 lg:px-0 py-10">
			<div class="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
				<div v-for="game in sortedGames" :key="game.id" :class="'item-' + game.excludedCountries">
					<div class="">
						<div class="show show-first first-content-border">
							<a :href="playLink + game.serverGameId" target="_blank">
								<img style="min-width: 100%;"
									class="" 
									:src="game.image"
									loading="lazy"
									@error="game.image = 'newGameImg.jpg'"
									:alt="'Image of ' + game.gameName + ' online slot. ' + game.description"
									:title="game.gameName + ' - ' + game.id" />
							</a>
							<div class='mask'>
								<a :href="playLink + game.serverGameId" target="_blank">
									<div class="gameDescr">
										<div class="px-2" v-if="game && game.description && game.description.length > 0">{{ game.description }} From <strong>{{ game.subProvider }}</strong></div>
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
import { ref, computed, onMounted } from 'vue';
import { useHead } from '#imports';
import { games, msgTranslate, regLink, loginLink, playLink } from '~/composables/globalData';

let selectedProvider = ref('all');
let selectedSubProvider = ref('all');
let selectedGameType = ref('all');

let providers = computed(() => {
	if (selectedSubProvider.value === 'all') {
		let gameProviders = games.value.map(game => game.provider);
		return [...new Set(gameProviders)];
	} else {
		let gameProviders = games.value.filter(game => game.subProvider === selectedSubProvider.value)
			.map(game => game.provider);
		return [...new Set(gameProviders)];
	}
});

let subProviders = computed(() => {
	if (selectedProvider.value === 'all') {
		let gameSubProviders = games.value.map(game => game.subProvider);
		return [...new Set(gameSubProviders)];
	} else {
		let gameSubProviders = games.value.filter(game => game.provider === selectedProvider.value)
			.map(game => game.subProvider);
		return [...new Set(gameSubProviders)];
	}
});

let gameTypes = computed(() => {
	if (selectedProvider.value === 'all' && selectedSubProvider.value === 'all') {
		let gameGameTypes = games.value.map(game => game.gameType);
		return [...new Set(gameGameTypes)];
	} else {
		let filteredGames = games.value.filter(game =>
			(game.provider === selectedProvider.value || selectedProvider.value === 'all') &&
			(game.subProvider === selectedSubProvider.value || selectedSubProvider.value === 'all')
		);
		let gameGameTypes = filteredGames.map(game => game.gameType);
		return [...new Set(gameGameTypes)];
	}
});

let filteredGames = computed(() => {
	return games.value.filter(game => {
		if ((selectedProvider.value !== 'all' && game.provider !== selectedProvider.value) ||
			(selectedSubProvider.value !== 'all' && game.subProvider !== selectedSubProvider.value) ||
			(selectedGameType.value !== 'all' && game.gameType !== selectedGameType.value)) {
			return false;
		}
		return true;
	});
});

let sortedGames = computed(() => {
	return [...filteredGames.value].sort((a, b) => a.gameName.localeCompare(b.gameName));
});

onMounted(async () => {
	await fetchGames();
});

const filterGames = () => {
	// filteredGames will reactively update based on the selectedProvider, selectedSubProvider and selectedGameType
}
// Set page-specific meta tags
useHead({
	title: 'All Games - Hippozino',
	meta: [
		{ hid: 'description', name: 'description', content: 'Explore all the best games available at Hippozino!' },
		{ name: 'keywords', content: 'allgames, games, casino, Hippozino' }
	]
});
</script>

<style scoped>

</style>