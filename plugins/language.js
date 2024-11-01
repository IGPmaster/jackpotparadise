// plugins/language.js

import { loadLang, lang } from '~/composables/globalData.js';

export default defineNuxtPlugin(async (nuxtApp) => {
  await loadLang();

  nuxtApp.provide('lang', lang);
});
