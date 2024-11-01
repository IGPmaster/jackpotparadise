import { _ as _export_sfc, o as fetchApiPromotions, m as msgTranslate, k as pp_promotions, r as regLink } from './server.mjs';
import { unref, useSSRContext } from 'file:///Users/irek/sites/hippozino/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'file:///Users/irek/sites/hippozino/node_modules/vue/server-renderer/index.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useFetch(() => fetchApiPromotions(), "$7fjYOP9Cps");
    useHead({
      title: "Promotions - Hippozino",
      meta: [
        { hid: "description", name: "description", content: "Explore all the best promotions available at Hippozino!" },
        { name: "keywords", content: "promotions, games, casino, Hippozino" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-b94e836f><div class="container mx-auto pt-20" data-v-b94e836f><h1 class="text-center" data-v-b94e836f>${ssrInterpolate(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).promotions)}</h1></div><div class="container mx-auto" data-v-b94e836f><!--[-->`);
      ssrRenderList("pp_promotions" in _ctx ? _ctx.pp_promotions : unref(pp_promotions), (promo) => {
        var _a;
        _push(`<div class="p-5 grid grid-cols-1 lg:grid-cols-2 my-10 bg-gray-300 shadow-black shadow-lg rounded-lg items-center" data-v-b94e836f><img class="rounded-lg w-full"${ssrRenderAttr("src", promo.bigImageUrl)} loading="lazy"${ssrRenderAttr("alt", "Promotion banner: " + promo.name + ". " + promo.title + ". " + promo.subTitle)}${ssrRenderAttr("title", promo.name + ". " + promo.title)} data-v-b94e836f><div class="info px-10 grid grid-cols-* justify-between" data-v-b94e836f><h2 class="py-4" data-v-b94e836f>${ssrInterpolate(promo.title)}</h2><h5 class="py-4" data-v-b94e836f>${ssrInterpolate(promo.subTitle)}</h5><a${ssrRenderAttr("href", "regLink" in _ctx ? _ctx.regLink : unref(regLink))} class="w-full md:w-3/6 text-center py-4 mt-2 px-8 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800 uppercase" data-v-b94e836f>${ssrInterpolate(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).see_more)}</a>`);
        if (promo.disclaimer !== null) {
          _push(`<div data-v-b94e836f><span class="text-sm/[12px] py-5 text-slate-800/75" data-v-b94e836f>${(_a = promo.disclaimer) != null ? _a : ""}</span><span class="text-sm/[12px] py-5 text-slate-800/75" data-v-b94e836f><a${ssrRenderAttr("href", "https://hippozino.casino-pp.net/promotions?code=" + promo.code)} class="no_underline" target="_blank" rel="noopener noreferrer" data-v-b94e836f> Full Terms Apply </a></span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/promotions/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b94e836f"]]);

export { index as default };
//# sourceMappingURL=index-BcsR8smk.mjs.map
