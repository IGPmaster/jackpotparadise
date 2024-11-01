import { ref, unref, useSSRContext, mergeProps, withCtx, createVNode, toDisplayString } from "vue";
import { ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc, p as promotionsPosts, r as regLink, m as msgTranslate, n as newGames, i as popularGames, s as slotGames, c as casinoGames, j as jackpotGames, k as pp_promotions, o as fetchApiPromotions } from "../server.mjs";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-qlLozGtb.js";
import { u as useFetch } from "./fetch-BYVLwUhn.js";
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
import "ohash";
const _sfc_main$6 = {
  __name: "MainBanner",
  __ssrInlineRender: true,
  emits: ["loaded"],
  setup(__props, { emit: __emit }) {
    const loading = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (loading.value) {
        _push(`<div class="loading-placeholder" data-v-d154f661><svg class="spinner" viewBox="0 0 50 50" data-v-d154f661><circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="3" data-v-d154f661></circle></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="headWrap" data-v-d154f661><!--[-->`);
      ssrRenderList(unref(promotionsPosts), (promo) => {
        _push(`<div data-v-d154f661><div class="w-full" data-v-d154f661>`);
        if (promo.acf && promo.yoast_head_json) {
          _push(`<a${ssrRenderAttr("href", unref(regLink))} style="${ssrRenderStyle({ "margin-bottom": "-5px" })}" data-v-d154f661><picture data-v-d154f661><source media="(min-width: 992px)"${ssrRenderAttr("srcset", promo.acf.image_full)}${ssrRenderAttr("alt", promo.yoast_head_json.description)}${ssrRenderAttr("title", promo.yoast_head_json.og_title)} data-v-d154f661><img${ssrRenderAttr("src", promo.acf.image_small)} class="w-full"${ssrRenderAttr("alt", promo.yoast_head_json.description)}${ssrRenderAttr("title", promo.yoast_head_json.og_title)} style="${ssrRenderStyle({ "min-width": "100vw", "padding-top": "6rem" })}" width="1920" height="400" data-v-d154f661></picture></a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="container mx-auto text-center sig_terms lg:py-5 lg:w-3/4" data-v-d154f661><div class="px-5" data-v-d154f661>${promo.acf.sig_terms ?? ""}</div></div><main class="container mx-auto text-center py-4" data-v-d154f661><h1 class="site_heading text-lg md:text-2xl lg:text-4xl font-bold" data-v-d154f661>Hippozino - Your Casino Anywhere!</h1></main><div class="container mx-auto" data-v-d154f661><div class="flex justify-center lg:pb-5 py-3" data-v-d154f661><img class="lg:w-2/5 w-7/8 place-items-center"${ssrRenderAttr("src", promo.acf.trust_icons)} alt="100% Licensed and fast payouts" data-v-d154f661></div></div></div>`);
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainBanner.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-d154f661"]]);
const _sfc_main$5 = {
  __name: "NewGames",
  __ssrInlineRender: true,
  emits: ["loaded"],
  setup(__props, { emit: __emit }) {
    const loading = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-10 md:py-20 bgr_red" }, _attrs))} data-v-15029c28><div class="bgr_red lg:mb-4" data-v-15029c28><div class="container grid grid-cols-1 lg:grid-cols-8 lg:gap-8 items-center mx-auto" data-v-15029c28><div class="col-span-full lg:col-span-6" data-v-15029c28><p class="gamesSectionHead text-center lg:text-left p-4 text-3xl text-bold" data-v-15029c28>${ssrInterpolate(unref(msgTranslate).new_games)}</p><!--[-->`);
      ssrRenderList("promotionsPosts" in _ctx ? _ctx.promotionsPosts : unref(promotionsPosts), (promo) => {
        _push(`<div data-v-15029c28><div class="info_content text-bold text-white text-lg py-5 px-4" data-v-15029c28>${ssrInterpolate(promo.acf.new_games_info)}</div></div>`);
      });
      _push(`<!--]--></div><div class="lg:block lg:col-span-2 p-4" data-v-15029c28><div class="flex justify-between items-center" data-v-15029c28>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "all-games",
        class: "bg-[#831d1e] w-full rounded-md py-3 flex text-white uppercase cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-center w-full" data-v-15029c28${_scopeId}>${ssrInterpolate(unref(msgTranslate).see_more)}</span><i class="material-icons items-center pr-2 font-extralight" data-v-15029c28${_scopeId}>arrow_forward</i>`);
          } else {
            return [
              createVNode("span", { class: "text-center w-full" }, toDisplayString(unref(msgTranslate).see_more), 1),
              createVNode("i", { class: "material-icons items-center pr-2 font-extralight" }, "arrow_forward")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
      if (loading.value) {
        _push(`<div class="loading-placeholder" data-v-15029c28><svg class="spinner" viewBox="0 0 50 50" data-v-15029c28><circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="3" data-v-15029c28></circle></svg></div>`);
      } else {
        _push(`<div class="px-4 sm:px-6 md:px-0 py-10" data-v-15029c28><div class="container mx-auto grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 gap-4" data-v-15029c28><!--[-->`);
        ssrRenderList(unref(newGames).slice(-16).reverse(), (game) => {
          _push(`<div class="${ssrRenderClass("item-" + game.id + " shadow-black")}" data-v-15029c28><div class="show show-first relative" data-v-15029c28><a${ssrRenderAttr("href", unref(regLink))} target="_blank" data-v-15029c28><img class="rounded-md w-full h-full inset-0"${ssrRenderAttr("src", game.image)} loading="lazy"${ssrRenderAttr("alt", "Image of " + game.gameName + " online slot. " + game.description)}${ssrRenderAttr("title", game.gameName + " - " + game.id)} width="200" height="132" data-v-15029c28></a><div class="mask" data-v-15029c28><a${ssrRenderAttr("href", unref(regLink))} target="_blank" data-v-15029c28><div class="gameDescr" data-v-15029c28>`);
          if (game && game.description && game.description.length > 0) {
            _push(`<div data-v-15029c28>${ssrInterpolate(game.description)} from ${ssrInterpolate(game.provider)}</div>`);
          } else {
            _push(`<i class="large material-icons" data-v-15029c28>play_arrow</i>`);
          }
          _push(`</div></a></div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      }
      _push(`<div class="container mx-auto flex items-center justify-between bgr_blue py-10 rounded-sm" data-v-15029c28><div class="flex px-5 md:px-12 lg:px-32" data-v-15029c28><div class="cta_text text-white font-bold text-base md:text-2xl xl:text-4xl" data-v-15029c28>${ssrInterpolate(unref(msgTranslate).claim)}</div></div><div class="flex px-5 md:px-12 lg:px-32" data-v-15029c28><a${ssrRenderAttr("href", unref(regLink))} class="inline-block py-2 px-4 md:px-10 font-semibold rounded text-sm cta_button text-white text-md md:text-xl xl:text-3xl" data-v-15029c28>${ssrInterpolate(unref(msgTranslate).sign_up)}</a></div></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NewGames.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-15029c28"]]);
const _sfc_main$4 = {
  __name: "PopularGames",
  __ssrInlineRender: true,
  emits: ["loaded"],
  setup(__props, { emit: __emit }) {
    const loading = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-10 md:py-20 bgr_red" }, _attrs))}><div class="bgr_red lg:mb-4"><div class="container grid grid-cols-1 lg:grid-cols-8 lg:gap-8 items-center mx-auto"><div class="col-span-full lg:col-span-6"><p class="gamesSectionHead text-center lg:text-left p-4 text-3xl text-bold">${ssrInterpolate(unref(msgTranslate).popular_games)}</p><!--[-->`);
      ssrRenderList("promotionsPosts" in _ctx ? _ctx.promotionsPosts : unref(promotionsPosts), (promo) => {
        _push(`<div><div class="info_content text-bold text-white text-lg py-5 px-4">${ssrInterpolate(promo.acf.popular_games_info)}</div></div>`);
      });
      _push(`<!--]--></div><div class="lg:block lg:col-span-2 p-4"><div class="flex justify-between items-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "popular-games",
        class: "bg-[#831d1e] w-full rounded-md py-3 flex text-white uppercase cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-center w-full"${_scopeId}>${ssrInterpolate(unref(msgTranslate).see_more)}</span><i class="material-icons items-center pr-2 font-extralight"${_scopeId}>arrow_forward</i>`);
          } else {
            return [
              createVNode("span", { class: "text-center w-full" }, toDisplayString(unref(msgTranslate).see_more), 1),
              createVNode("i", { class: "material-icons items-center pr-2 font-extralight" }, "arrow_forward")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
      if (loading.value) {
        _push(`<div class="loading-placeholder"><svg class="spinner" viewBox="0 0 50 50"><circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="3"></circle></svg></div>`);
      } else {
        _push(`<div class="px-4 sm:px-6 md:px-0 py-10"><div class="container mx-auto grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 gap-4"><!--[-->`);
        ssrRenderList(unref(popularGames).slice(-16).reverse(), (game) => {
          _push(`<div class="${ssrRenderClass("item " + game.id + " shadow-black")}"><div class="show show-first relative"><a${ssrRenderAttr("href", unref(regLink))} target="_blank"><img class="rounded-md w-full h-full inset-0"${ssrRenderAttr("src", game.image)} loading="lazy"${ssrRenderAttr("alt", "Image of " + game.gameName + " online slot. " + game.description)}${ssrRenderAttr("title", game.gameName + " - " + game.id)} width="376" height="250"></a><div class="mask"><a${ssrRenderAttr("href", unref(regLink))} target="_blank"><div class="gameDescr">`);
          if (game && game.description && game.description.length > 0) {
            _push(`<div>${ssrInterpolate(game.description)}</div>`);
          } else {
            _push(`<i class="large material-icons">play_arrow</i>`);
          }
          _push(`</div></a></div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      }
      _push(`<div class="container mx-auto flex items-center justify-between bgr_blue py-10 rounded-sm"><div class="flex px-5 md:px-12 lg:px-32"><div class="cta_text text-white font-bold text-base md:text-2xl xl:text-4xl">${ssrInterpolate(unref(msgTranslate).claim)}</div></div><div class="flex px-5 md:px-12 lg:px-32"><a${ssrRenderAttr("href", unref(regLink))} class="inline-block py-2 px-4 md:px-10 font-semibold rounded cta_button text-white text-md md:text-xl xl:text-3xl">${ssrInterpolate(unref(msgTranslate).sign_up)}</a></div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PopularGames.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "SlotGames",
  __ssrInlineRender: true,
  emits: ["loaded"],
  setup(__props, { emit: __emit }) {
    const loading = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-10 md:py-20 bgr_red" }, _attrs))}><div class="bgr_red lg:mb-4"><div class="container grid grid-cols-1 lg:grid-cols-8 lg:gap-8 items-center mx-auto"><div class="col-span-full lg:col-span-6"><p class="gamesSectionHead text-center lg:text-left p-4 text-3xl text-bold">${ssrInterpolate(unref(msgTranslate).slot_games)}</p><!--[-->`);
      ssrRenderList("promotionsPosts" in _ctx ? _ctx.promotionsPosts : unref(promotionsPosts), (promo) => {
        _push(`<div><div class="info_content text-bold text-white text-lg py-5 px-4">${ssrInterpolate(promo.acf.slot_games_info)}</div></div>`);
      });
      _push(`<!--]--></div><div class="lg:block lg:col-span-2 p-4"><div class="flex justify-between items-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "slot-games",
        class: "bg-[#831d1e] w-full rounded-md py-3 flex text-white uppercase cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-center w-full"${_scopeId}>${ssrInterpolate(unref(msgTranslate).see_more)}</span><i class="material-icons items-center pr-2 font-extralight"${_scopeId}>arrow_forward</i>`);
          } else {
            return [
              createVNode("span", { class: "text-center w-full" }, toDisplayString(unref(msgTranslate).see_more), 1),
              createVNode("i", { class: "material-icons items-center pr-2 font-extralight" }, "arrow_forward")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
      if (loading.value) {
        _push(`<div class="loading-placeholder"><svg class="spinner" viewBox="0 0 50 50"><circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="3"></circle></svg></div>`);
      } else {
        _push(`<div class="px-4 sm:px-6 md:px-0 py-10"><div class="container mx-auto grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 gap-4"><!--[-->`);
        ssrRenderList(unref(slotGames).slice(-16).reverse(), (game) => {
          _push(`<div class="${ssrRenderClass("item " + game.id + " shadow-black")}"><div class="show show-first relative"><a${ssrRenderAttr("href", unref(regLink))} target="_blank"><img class="rounded-md w-full h-full inset-0"${ssrRenderAttr("src", game.image)} loading="lazy"${ssrRenderAttr("alt", "Image of " + game.gameName + " online slot. " + game.description)}${ssrRenderAttr("title", game.gameName + " - " + game.id)} width="376" height="250"></a><div class="mask"><a${ssrRenderAttr("href", unref(regLink))} target="_blank"><div class="gameDescr">`);
          if (game && game.description && game.description.length > 0) {
            _push(`<div>${ssrInterpolate(game.description)}</div>`);
          } else {
            _push(`<i class="large material-icons">play_arrow</i>`);
          }
          _push(`</div></a></div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      }
      _push(`<div class="container mx-auto flex items-center justify-between bgr_blue py-10 rounded-sm"><div class="flex px-5 md:px-12 lg:px-32"><div class="cta_text text-white font-bold text-base md:text-2xl xl:text-4xl">${ssrInterpolate(unref(msgTranslate).claim)}</div></div><div class="flex px-5 md:px-12 lg:px-32"><a${ssrRenderAttr("href", unref(regLink))} class="inline-block py-2 px-4 md:px-10 font-semibold rounded btn-large cta_button text-white text-md md:text-xl xl:text-3xl">${ssrInterpolate(unref(msgTranslate).sign_up)}</a></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SlotGames.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "CasinoGames",
  __ssrInlineRender: true,
  emits: ["loaded"],
  setup(__props, { emit: __emit }) {
    const loading = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-10 md:py-20 bgr_red" }, _attrs))}><div class="bgr_red lg:mb-4"><div class="container grid grid-cols-1 lg:grid-cols-8 lg:gap-8 items-center mx-auto"><div class="col-span-full lg:col-span-6"><p class="gamesSectionHead text-center lg:text-left p-4 text-3xl text-bold">${ssrInterpolate(unref(msgTranslate).casino_games)}</p><!--[-->`);
      ssrRenderList("promotionsPosts" in _ctx ? _ctx.promotionsPosts : unref(promotionsPosts), (promo) => {
        _push(`<div><div class="info_content text-bold text-white text-lg py-5 px-4">${ssrInterpolate(promo.acf.casino_games_info)}</div></div>`);
      });
      _push(`<!--]--></div><div class="lg:block lg:col-span-2 p-4"><div class="flex justify-between items-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "casino-games",
        class: "bg-[#831d1e] w-full rounded-md py-3 flex text-white uppercase cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-center w-full"${_scopeId}>${ssrInterpolate(unref(msgTranslate).see_more)}</span><i class="material-icons items-center pr-2 font-extralight"${_scopeId}>arrow_forward</i>`);
          } else {
            return [
              createVNode("span", { class: "text-center w-full" }, toDisplayString(unref(msgTranslate).see_more), 1),
              createVNode("i", { class: "material-icons items-center pr-2 font-extralight" }, "arrow_forward")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
      if (loading.value) {
        _push(`<div class="loading-placeholder"><svg class="spinner" viewBox="0 0 50 50"><circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="3"></circle></svg></div>`);
      } else {
        _push(`<div class="px-4 sm:px-6 md:px-0 py-10"><div class="container mx-auto grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 gap-4"><!--[-->`);
        ssrRenderList(unref(casinoGames).slice(-16).reverse(), (game) => {
          _push(`<div class="${ssrRenderClass("item " + game.id + " shadow-black")}"><div class="show show-first relative"><a${ssrRenderAttr("href", unref(regLink))} target="_blank"><img class="rounded-md w-full h-full inset-0"${ssrRenderAttr("src", game.image)} loading="lazy"${ssrRenderAttr("alt", "Image of " + game.gameName + " online slot. " + game.description)}${ssrRenderAttr("title", game.gameName + " - " + game.id)} width="376" height="250"></a><div class="mask"><a${ssrRenderAttr("href", unref(regLink))} target="_blank"><div class="gameDescr">`);
          if (game && game.description && game.description.length > 0) {
            _push(`<div>${ssrInterpolate(game.description)}</div>`);
          } else {
            _push(`<i class="large material-icons">play_arrow</i>`);
          }
          _push(`</div></a></div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      }
      _push(`<div class="container mx-auto flex items-center justify-between bgr_blue py-10 rounded-sm"><div class="flex px-5 md:px-12 lg:px-32"><div class="cta_text text-white font-bold text-base md:text-2xl xl:text-4xl">${ssrInterpolate(unref(msgTranslate).claim)}</div></div><div class="flex px-5 md:px-12 lg:px-32"><a${ssrRenderAttr("href", unref(regLink))} class="inline-block py-2 px-4 md:px-10 font-semibold rounded btn-large cta_button text-white text-md md:text-xl xl:text-3xl">${ssrInterpolate(unref(msgTranslate).sign_up)}</a></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CasinoGames.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "JackpotGames",
  __ssrInlineRender: true,
  emits: ["loaded"],
  setup(__props, { emit: __emit }) {
    const loading = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-10 md:py-20 bgr_red" }, _attrs))}><div class="bgr_red lg:mb-4"><div class="container grid grid-cols-1 lg:grid-cols-8 lg:gap-8 items-center mx-auto"><div class="col-span-full lg:col-span-6"><p class="gamesSectionHead text-center lg:text-left p-4 text-3xl text-bold">${ssrInterpolate(unref(msgTranslate).jackpot_games)}</p><!--[-->`);
      ssrRenderList("promotionsPosts" in _ctx ? _ctx.promotionsPosts : unref(promotionsPosts), (promo) => {
        _push(`<div><div class="info_content text-bold text-white text-lg py-5 px-4">${ssrInterpolate(promo.acf.jackpot_games_info)}</div></div>`);
      });
      _push(`<!--]--></div><div class="lg:block lg:col-span-2 p-4"><div class="flex justify-between items-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "jackpot-games",
        class: "bg-[#831d1e] w-full rounded-md py-3 flex text-white uppercase cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-center w-full"${_scopeId}>${ssrInterpolate(unref(msgTranslate).see_more)}</span><i class="material-icons items-center pr-2 font-extralight"${_scopeId}>arrow_forward</i>`);
          } else {
            return [
              createVNode("span", { class: "text-center w-full" }, toDisplayString(unref(msgTranslate).see_more), 1),
              createVNode("i", { class: "material-icons items-center pr-2 font-extralight" }, "arrow_forward")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
      if (loading.value) {
        _push(`<div class="loading-placeholder"><svg class="spinner" viewBox="0 0 50 50"><circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="3"></circle></svg></div>`);
      } else {
        _push(`<div class="px-4 sm:px-6 md:px-0 py-10"><div class="container mx-auto grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 gap-4"><!--[-->`);
        ssrRenderList(unref(jackpotGames).slice(-16).reverse(), (game) => {
          _push(`<div class="${ssrRenderClass("item " + game.id + " shadow-black")}"><div class="show show-first relative"><a${ssrRenderAttr("href", unref(regLink))} target="_blank"><img class="rounded-md w-full h-full inset-0"${ssrRenderAttr("src", game.image)} loading="lazy"${ssrRenderAttr("alt", "Image of " + game.gameName + " online slot. " + game.description)}${ssrRenderAttr("title", game.gameName + " - " + game.id)} width="376" height="250"></a><div class="mask"><a${ssrRenderAttr("href", unref(regLink))} target="_blank"><div class="gameDescr">`);
          if (game && game.description && game.description.length > 0) {
            _push(`<div>${ssrInterpolate(game.description)}</div>`);
          } else {
            _push(`<i class="large material-icons">play_arrow</i>`);
          }
          _push(`</div></a></div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      }
      _push(`<div class="container mx-auto flex items-center justify-between bgr_blue py-10 rounded-sm"><div class="flex px-5 md:px-12 lg:px-32"><div class="cta_text text-white font-bold text-base md:text-2xl xl:text-4xl">${ssrInterpolate(unref(msgTranslate).claim)}</div></div><div class="flex px-5 md:px-12 lg:px-32"><a${ssrRenderAttr("href", unref(regLink))} class="inline-block py-2 px-4 md:px-10 font-semibold rounded btn-large cta_button text-white text-md md:text-xl xl:text-3xl">${ssrInterpolate(unref(msgTranslate).sign_up)}</a></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/JackpotGames.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  emits: ["loaded"],
  setup(__props, { emit: __emit }) {
    ref(true);
    useFetch(async () => {
      await fetchApiPromotions();
    }, "$PslAyef5YX");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainBanner = __nuxt_component_0;
      const _component_NewGames = __nuxt_component_1;
      const _component_PopularGames = _sfc_main$4;
      const _component_SlotGames = _sfc_main$3;
      const _component_CasinoGames = _sfc_main$2;
      const _component_JackpotGames = _sfc_main$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_MainBanner, null, null, _parent));
      _push(ssrRenderComponent(_component_NewGames, null, null, _parent));
      _push(`<div class="section px-5" data-v-73ac6080><!--[-->`);
      ssrRenderList(unref(promotionsPosts), (rest) => {
        _push(`<div class="container py-10 mx-auto info_content" data-v-73ac6080><div class="leading-relaxed" data-v-73ac6080>${rest.acf.promo_over ?? ""}</div></div>`);
      });
      _push(`<!--]--><div class="container mx-auto py-5" data-v-73ac6080><div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8" data-v-73ac6080><!--[-->`);
      ssrRenderList("pp_promotions" in _ctx ? _ctx.pp_promotions : unref(pp_promotions), (promo) => {
        _push(`<div data-v-73ac6080><div class="card overflow-hidden rounded-lg leading-relaxed" data-v-73ac6080><div class="card-image" data-v-73ac6080><a${ssrRenderAttr("href", unref(regLink))} data-v-73ac6080><img class="activator w-full h-auto"${ssrRenderAttr("src", promo.bigImageUrl)} loading="lazy"${ssrRenderAttr("alt", "Image of " + promo.title + " promotion.")}${ssrRenderAttr("title", promo.title + ", " + promo.subTitle)} data-v-73ac6080></a></div></div></div>`);
      });
      _push(`<!--]--></div></div><div class="py-10" data-v-73ac6080><!--[-->`);
      ssrRenderList(unref(promotionsPosts), (rest) => {
        _push(`<div class="container mx-auto py-2 info_content hide_this" data-v-73ac6080><div data-v-73ac6080>${rest.acf.promo_under ?? ""}</div></div>`);
      });
      _push(`<!--]--></div></div>`);
      _push(ssrRenderComponent(_component_PopularGames, null, null, _parent));
      _push(ssrRenderComponent(_component_SlotGames, null, null, _parent));
      _push(ssrRenderComponent(_component_CasinoGames, null, null, _parent));
      _push(ssrRenderComponent(_component_JackpotGames, null, null, _parent));
      _push(`<div class="container mx-auto py-10" data-v-73ac6080><div class="px-4" data-v-73ac6080><div class="text-sm" data-v-73ac6080><!--[-->`);
      ssrRenderList(unref(promotionsPosts), (promotion) => {
        _push(`<div data-v-73ac6080><div data-v-73ac6080>${promotion.content.rendered ?? ""}</div></div>`);
      });
      _push(`<!--]--></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-73ac6080"]]);
export {
  index as default
};
//# sourceMappingURL=index-CBARX__K.js.map
