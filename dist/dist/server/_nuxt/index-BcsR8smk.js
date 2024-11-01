import { _ as _export_sfc, m as msgTranslate, k as pp_promotions, r as regLink, o as fetchApiPromotions } from "../server.mjs";
import { unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { u as useFetch } from "./fetch-BYVLwUhn.js";
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
import "ohash";
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
        _push(`<div class="p-5 grid grid-cols-1 lg:grid-cols-2 my-10 bg-gray-300 shadow-black shadow-lg rounded-lg items-center" data-v-b94e836f><img class="rounded-lg w-full"${ssrRenderAttr("src", promo.bigImageUrl)} loading="lazy"${ssrRenderAttr("alt", "Promotion banner: " + promo.name + ". " + promo.title + ". " + promo.subTitle)}${ssrRenderAttr("title", promo.name + ". " + promo.title)} data-v-b94e836f><div class="info px-10 grid grid-cols-* justify-between" data-v-b94e836f><h2 class="py-4" data-v-b94e836f>${ssrInterpolate(promo.title)}</h2><h5 class="py-4" data-v-b94e836f>${ssrInterpolate(promo.subTitle)}</h5><a${ssrRenderAttr("href", "regLink" in _ctx ? _ctx.regLink : unref(regLink))} class="w-full md:w-3/6 text-center py-4 mt-2 px-8 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800 uppercase" data-v-b94e836f>${ssrInterpolate(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).see_more)}</a>`);
        if (promo.disclaimer !== null) {
          _push(`<div data-v-b94e836f><span class="text-sm/[12px] py-5 text-slate-800/75" data-v-b94e836f>${promo.disclaimer ?? ""}</span><span class="text-sm/[12px] py-5 text-slate-800/75" data-v-b94e836f><a${ssrRenderAttr("href", "https://hippozino.casino-pp.net/promotions?code=" + promo.code)} class="no_underline" target="_blank" rel="noopener noreferrer" data-v-b94e836f> Full Terms Apply </a></span></div>`);
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
export {
  index as default
};
//# sourceMappingURL=index-BcsR8smk.js.map
