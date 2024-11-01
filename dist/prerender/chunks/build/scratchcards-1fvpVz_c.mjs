import { f as fetchGames, b as fetchPromotions, l as loadTranslations, d as loadLang, m as msgTranslate, p as promotionsPosts, r as regLink, t as scratchGames } from './server.mjs';
import { mergeProps, unref, useSSRContext } from 'file:///Users/irek/sites/hippozino/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass } from 'file:///Users/irek/sites/hippozino/node_modules/vue/server-renderer/index.mjs';
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
  __name: "scratchcards",
  __ssrInlineRender: true,
  setup(__props) {
    useFetch(async () => {
      await fetchGames();
      await fetchPromotions();
      await loadTranslations(loadLang());
    }, "$YY5jwl4uiR");
    useHead({
      title: "Scratchcards - Hippozino",
      meta: [
        { hid: "description", name: "description", content: "Explore the best scratchcards games available at Hippozino!" },
        { name: "keywords", content: "scratchcards, games, casino, Hippozino" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-even lg:py-10" }, _attrs))}><div class="row bgr_red lg:mb-4 pt-20"><div class="container grid grid-cols-1 lg:grid-cols-8 lg:gap-10 items-center mx-auto p-4"><div class="col-span-full lg:col-span-6"><p class="gamesSectionHead text-center lg:text-left text-2xl py-4 px-4">${ssrInterpolate(unref(msgTranslate).scratchcards_games)}</p><!--[-->`);
      ssrRenderList("promotionsPosts" in _ctx ? _ctx.promotionsPosts : unref(promotionsPosts), (promo) => {
        _push(`<div><div class="info_content py-5 px-4">${ssrInterpolate(promo.acf.scratch_games_info)}</div></div>`);
      });
      _push(`<!--]--></div><div class="lg:block lg:col-span-2 p-4"><div class="flex justify-between items-center"><a${ssrRenderAttr("href", unref(regLink))} class="bg-[#831d1e] w-full rounded-md py-3 flex text-white uppercase cursor-pointer"><span class="text-center w-full">${ssrInterpolate(unref(msgTranslate).sign_up)}</span><i class="material-icons items-center pr-2 font-extralight">arrow_forward</i></a></div></div></div></div><div class="px-4 sm:px-6 lg:px-0 py-10"><div class="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"><!--[-->`);
      ssrRenderList(unref(scratchGames), (game) => {
        _push(`<div class="${ssrRenderClass("item " + game.id)}"><div class=""><div class="show show-first first-content-border"><a${ssrRenderAttr("href", unref(regLink))} target="_blank"><img class="responsive-img item-qqq"${ssrRenderAttr("src", game.image)} loading="lazy"${ssrRenderAttr("alt", "Image of " + game.gameName + " online slot. " + game.description)}${ssrRenderAttr("title", game.gameName + " - " + game.id)}></a><div class="mask"><a${ssrRenderAttr("href", unref(regLink))} target="_blank"><div class="gameDescr">`);
        if (game && game.description && game.description.length > 0) {
          _push(`<div>${ssrInterpolate(game.description)}</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/scratchcards.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=scratchcards-1fvpVz_c.mjs.map
