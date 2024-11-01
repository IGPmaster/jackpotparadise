import { g as games, m as msgTranslate, p as promotionsPosts, r as regLink, a as playLink } from "../server.mjs";
import { ref, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderClass } from "vue/server-renderer";
import { u as useHead } from "./index-DHNh-XFk.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
const _sfc_main = {
  __name: "all-games",
  __ssrInlineRender: true,
  setup(__props) {
    let selectedProvider = ref("all");
    let selectedSubProvider = ref("all");
    let selectedGameType = ref("all");
    let providers = computed(() => {
      if (selectedSubProvider.value === "all") {
        let gameProviders = games.value.map((game) => game.provider);
        return [...new Set(gameProviders)];
      } else {
        let gameProviders = games.value.filter((game) => game.subProvider === selectedSubProvider.value).map((game) => game.provider);
        return [...new Set(gameProviders)];
      }
    });
    let subProviders = computed(() => {
      if (selectedProvider.value === "all") {
        let gameSubProviders = games.value.map((game) => game.subProvider);
        return [...new Set(gameSubProviders)];
      } else {
        let gameSubProviders = games.value.filter((game) => game.provider === selectedProvider.value).map((game) => game.subProvider);
        return [...new Set(gameSubProviders)];
      }
    });
    let gameTypes = computed(() => {
      if (selectedProvider.value === "all" && selectedSubProvider.value === "all") {
        let gameGameTypes = games.value.map((game) => game.gameType);
        return [...new Set(gameGameTypes)];
      } else {
        let filteredGames2 = games.value.filter(
          (game) => (game.provider === selectedProvider.value || selectedProvider.value === "all") && (game.subProvider === selectedSubProvider.value || selectedSubProvider.value === "all")
        );
        let gameGameTypes = filteredGames2.map((game) => game.gameType);
        return [...new Set(gameGameTypes)];
      }
    });
    let filteredGames = computed(() => {
      return games.value.filter((game) => {
        if (selectedProvider.value !== "all" && game.provider !== selectedProvider.value || selectedSubProvider.value !== "all" && game.subProvider !== selectedSubProvider.value || selectedGameType.value !== "all" && game.gameType !== selectedGameType.value) {
          return false;
        }
        return true;
      });
    });
    let sortedGames = computed(() => {
      return [...filteredGames.value].sort((a, b) => a.gameName.localeCompare(b.gameName));
    });
    useHead({
      title: "All Games - Hippozino",
      meta: [
        { hid: "description", name: "description", content: "Explore all the best games available at Hippozino!" },
        { name: "keywords", content: "allgames, games, casino, Hippozino" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-even lg:py-10" }, _attrs))}><div class="row bgr_red lg:mb-4 pt-20"><div class="container grid grid-cols-1 lg:grid-cols-8 lg:gap-10 items-center mx-auto p-4"><div class="col-span-full lg:col-span-6"><p class="gamesSectionHead text-center lg:text-left text-2xl py-4 px-4">${ssrInterpolate(unref(msgTranslate).all_games)}</p><!--[-->`);
      ssrRenderList("promotionsPosts" in _ctx ? _ctx.promotionsPosts : unref(promotionsPosts), (promo) => {
        _push(`<div><div class="info_content py-5 px-4">${ssrInterpolate(promo.acf.slot_games_info)}</div></div>`);
      });
      _push(`<!--]--></div><div class="lg:block lg:col-span-2 p-4"><div class="flex justify-between items-center"><a${ssrRenderAttr("href", unref(regLink))} class="bg-[#831d1e] w-full rounded-md py-3 flex text-white uppercase cursor-pointer"><span class="text-center w-full">${ssrInterpolate(unref(msgTranslate).sign_up)}</span><i class="material-icons items-center pr-2 font-extralight">arrow_forward</i></a></div></div></div></div><div class="row bgr_red lg:mb-4 py-5"><div class="container mx-auto grid grid-cols-1 gap-0 lg:grid-cols-3 lg:gap-4 px-4"><div class="relative w-full py-4 lg:py-0"><select class="uppercase block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"><option value="all"${ssrIncludeBooleanAttr(Array.isArray(unref(selectedProvider)) ? ssrLooseContain(unref(selectedProvider), "all") : ssrLooseEqual(unref(selectedProvider), "all")) ? " selected" : ""}>All providers</option><!--[-->`);
      ssrRenderList(unref(providers), (provider) => {
        _push(`<option${ssrRenderAttr("value", provider)}>${ssrInterpolate(provider)}</option>`);
      });
      _push(`<!--]--></select><i class="material-icons absolute top-1/2 right-3 transform -translate-y-1/2">arrow_drop_down</i></div><div class="relative w-full py-4 lg:py-0"><select class="block uppercase appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"><option value="all"${ssrIncludeBooleanAttr(Array.isArray(unref(selectedSubProvider)) ? ssrLooseContain(unref(selectedSubProvider), "all") : ssrLooseEqual(unref(selectedSubProvider), "all")) ? " selected" : ""}>All subProviders</option><!--[-->`);
      ssrRenderList(unref(subProviders), (subProvider) => {
        _push(`<option${ssrRenderAttr("value", subProvider)}>${ssrInterpolate(subProvider)}</option>`);
      });
      _push(`<!--]--></select><i class="material-icons absolute top-1/2 right-3 transform -translate-y-1/2">arrow_drop_down</i></div><div class="relative w-full py-4 lg:py-0"><select class="block uppercase appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"><option value="all"${ssrIncludeBooleanAttr(Array.isArray(unref(selectedGameType)) ? ssrLooseContain(unref(selectedGameType), "all") : ssrLooseEqual(unref(selectedGameType), "all")) ? " selected" : ""}>All game types</option><!--[-->`);
      ssrRenderList(unref(gameTypes), (gameType) => {
        _push(`<option${ssrRenderAttr("value", gameType)}>${ssrInterpolate(gameType)}</option>`);
      });
      _push(`<!--]--></select><i class="material-icons absolute top-1/2 right-3 transform -translate-y-1/2">arrow_drop_down</i></div></div></div><div class="px-4 sm:px-6 lg:px-0 py-10"><div class="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"><!--[-->`);
      ssrRenderList(unref(sortedGames), (game) => {
        _push(`<div class="${ssrRenderClass("item-" + game.excludedCountries)}"><div class=""><div class="show show-first first-content-border"><a${ssrRenderAttr("href", unref(playLink) + game.serverGameId)} target="_blank"><img class=""${ssrRenderAttr("src", game.image)} loading="lazy"${ssrRenderAttr("alt", "Image of " + game.gameName + " online slot. " + game.description)}${ssrRenderAttr("title", game.gameName + " - " + game.id)}></a><div class="mask"><a${ssrRenderAttr("href", unref(playLink) + game.serverGameId)} target="_blank"><div class="gameDescr">`);
        if (game && game.description && game.description.length > 0) {
          _push(`<div class="px-2">${ssrInterpolate(game.description)} From <strong>${ssrInterpolate(game.subProvider)}</strong></div>`);
        } else {
          _push(`<i class="large material-icons">play_arrow</i>`);
        }
        _push(`</div></a></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/all-games.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=all-games-DFIRb_ZS.js.map
