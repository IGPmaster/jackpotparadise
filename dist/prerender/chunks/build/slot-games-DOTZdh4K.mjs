import { mergeProps, unref, useSSRContext } from 'file:///Users/irek/sites/hippozino/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass } from 'file:///Users/irek/sites/hippozino/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, f as fetchGames, b as fetchPromotions, l as loadTranslations, d as loadLang, m as msgTranslate, p as promotionsPosts, r as regLink, s as slotGames$1 } from './server.mjs';
import { u as useFetch } from './fetch-BYVLwUhn.mjs';
import { u as useHead } from './index-DHNh-XFk.mjs';
import 'file:///Users/irek/sites/hippozino/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/irek/sites/hippozino/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/irek/sites/hippozino/node_modules/h3/dist/index.mjs';
import 'file:///Users/irek/sites/hippozino/node_modules/devalue/index.js';
import 'file:///Users/irek/sites/hippozino/node_modules/ufo/dist/index.mjs';
import 'file:///Users/irek/sites/hippozino/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/irek/sites/hippozino/node_modules/destr/dist/index.mjs';
import 'file:///Users/irek/sites/hippozino/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/irek/sites/hippozino/node_modules/hookable/dist/index.mjs';
import 'file:///Users/irek/sites/hippozino/node_modules/klona/dist/index.mjs';
import 'file:///Users/irek/sites/hippozino/node_modules/scule/dist/index.mjs';
import 'file:///Users/irek/sites/hippozino/node_modules/defu/dist/defu.mjs';
import 'file:///Users/irek/sites/hippozino/node_modules/ohash/dist/index.mjs';
import 'file:///Users/irek/sites/hippozino/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/irek/sites/hippozino/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/irek/sites/hippozino/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/irek/sites/hippozino/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/irek/sites/hippozino/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/irek/sites/hippozino/node_modules/pathe/dist/index.mjs';
import 'file:///Users/irek/sites/hippozino/node_modules/unhead/dist/index.mjs';
import 'file:///Users/irek/sites/hippozino/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/irek/sites/hippozino/node_modules/unctx/dist/index.mjs';
import 'file:///Users/irek/sites/hippozino/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = {
  __name: "slot-games",
  __ssrInlineRender: true,
  setup(__props) {
    useFetch(async () => {
      await fetchGames();
      await fetchPromotions();
      await loadTranslations(loadLang());
    }, "$ySU4CgkCOF");
    useHead({
      title: "Slot Games - Hippozino",
      meta: [
        { hid: "description", name: "description", content: "Explore the best slot games available at Hippozino!" },
        { name: "keywords", content: "slots, games, casino, Hippozino" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-even lg:py-10" }, _attrs))} data-v-dfd9bf90><div class="row bgr_red lg:mb-4 pt-20" data-v-dfd9bf90><div class="container grid grid-cols-1 lg:grid-cols-8 lg:gap-10 items-center mx-auto p-4" data-v-dfd9bf90><div class="col-span-full lg:col-span-6" data-v-dfd9bf90><p class="gamesSectionHead text-center lg:text-left text-2xl py-4 px-4" data-v-dfd9bf90>${ssrInterpolate(unref(msgTranslate).slot_games)}</p><!--[-->`);
      ssrRenderList(unref(promotionsPosts), (promo) => {
        _push(`<div data-v-dfd9bf90><div class="info_content py-5 px-4" data-v-dfd9bf90>${ssrInterpolate(promo.acf.slot_games_info)}</div></div>`);
      });
      _push(`<!--]--></div><div class="lg:block lg:col-span-2 p-4" data-v-dfd9bf90><div class="flex justify-between items-center" data-v-dfd9bf90><a${ssrRenderAttr("href", unref(regLink))} class="bg-[#831d1e] w-full rounded-md py-3 flex text-white uppercase cursor-pointer" data-v-dfd9bf90><span class="text-center w-full" data-v-dfd9bf90>${ssrInterpolate(unref(msgTranslate).sign_up)}</span><i class="material-icons items-center pr-2 font-extralight" data-v-dfd9bf90>arrow_forward</i></a></div></div></div></div><div class="px-4 sm:px-6 lg:px-0 py-10" data-v-dfd9bf90><div class="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4" data-v-dfd9bf90><!--[-->`);
      ssrRenderList(unref(slotGames$1), (game) => {
        _push(`<div class="${ssrRenderClass("item " + game.id)}" data-v-dfd9bf90><div class="" data-v-dfd9bf90><div class="show show-first first-content-border" data-v-dfd9bf90><a${ssrRenderAttr("href", unref(regLink))} target="_blank" data-v-dfd9bf90><img class="responsive-img item-qqq"${ssrRenderAttr("src", game.image)} loading="lazy"${ssrRenderAttr("alt", "Image of " + game.gameName + " online slot. " + game.description)}${ssrRenderAttr("title", game.gameName + " - " + game.id)} data-v-dfd9bf90></a><div class="mask" data-v-dfd9bf90><a${ssrRenderAttr("href", unref(regLink))} target="_blank" data-v-dfd9bf90><div class="gameDescr" data-v-dfd9bf90>`);
        if (game && game.description && game.description.length > 0) {
          _push(`<div data-v-dfd9bf90>${ssrInterpolate(game.description)}</div>`);
        } else {
          _push(`<i class="large material-icons" data-v-dfd9bf90>play_arrow</i>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/slot-games.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const slotGames = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dfd9bf90"]]);

export { slotGames as default };
//# sourceMappingURL=slot-games-DOTZdh4K.mjs.map
