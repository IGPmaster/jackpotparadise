import { _ as __nuxt_component_0 } from "./nuxt-link-qlLozGtb.js";
import { _ as _export_sfc, w as fetchFooterIcons, e as lang, x as fetchFooterText, m as msgTranslate, y as footerIcons, z as footerText, A as loginLink, r as regLink } from "../server.mjs";
import { withCtx, unref, createTextVNode, toDisplayString, useSSRContext, ref, mergeProps, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { u as useFetch } from "./fetch-BYVLwUhn.js";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ohash";
const _imports_1 = "" + __buildAssetsURL("hz-logo-h3.DGvARksu.svg");
const _sfc_main$2 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    useFetch(async () => {
      await fetchFooterIcons(lang.value);
      await fetchFooterText(lang.value);
    }, "$oeF46sJglj");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-3d45fc7d><footer class="bg-tertiary_dark py-10" data-v-3d45fc7d><div class="row" data-v-3d45fc7d><div class="container mx-auto" data-v-3d45fc7d><ul class="flex flex-wrap justify-center pb-16 gap-8" data-v-3d45fc7d><li data-v-3d45fc7d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "uppercase font-light text-sm text-zinc-200 py-2 px-4 bg-stone-800 rounded hover:bg-[#323131] transition ease-in-out"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).home)}`);
          } else {
            return [
              createTextVNode(toDisplayString(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).home), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-3d45fc7d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/promotions",
        class: "uppercase font-light text-sm text-zinc-200 py-2 px-4 bg-stone-800 rounded hover:bg-[#323131] transition ease-in-out"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).promotions)}`);
          } else {
            return [
              createTextVNode(toDisplayString(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).promotions), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-3d45fc7d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/compliance",
        class: "uppercase font-light text-sm text-zinc-200 py-2 px-4 bg-stone-800 rounded hover:bg-[#323131] transition ease-in-out"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).legal)}`);
          } else {
            return [
              createTextVNode(toDisplayString(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).legal), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-3d45fc7d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/all-games",
        class: "uppercase font-light text-sm text-zinc-200 py-2 px-4 bg-stone-800 rounded hover:bg-[#323131] transition ease-in-out"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).all_games)}`);
          } else {
            return [
              createTextVNode(toDisplayString(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).all_games), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-3d45fc7d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/casino-games",
        class: "uppercase font-light text-sm text-zinc-200 py-2 px-4 bg-stone-800 rounded hover:bg-[#323131] transition ease-in-out"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).casino_games)}`);
          } else {
            return [
              createTextVNode(toDisplayString(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).casino_games), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-3d45fc7d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/jackpot-games",
        class: "uppercase font-light text-sm text-zinc-200 py-2 px-4 bg-stone-800 rounded hover:bg-[#323131] transition ease-in-out"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).jackpot_games)}`);
          } else {
            return [
              createTextVNode(toDisplayString(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).jackpot_games), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-3d45fc7d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/live-games",
        class: "uppercase font-light text-sm text-zinc-200 py-2 px-4 bg-stone-800 rounded hover:bg-[#323131] transition ease-in-out"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).live_games)}`);
          } else {
            return [
              createTextVNode(toDisplayString(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).live_games), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-3d45fc7d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/popular-games",
        class: "uppercase font-light text-sm text-zinc-200 py-2 px-4 bg-stone-800 rounded hover:bg-[#323131] transition ease-in-out"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).popular_games)}`);
          } else {
            return [
              createTextVNode(toDisplayString(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).popular_games), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-3d45fc7d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/scratchcards",
        class: "uppercase font-light text-sm text-zinc-200 py-2 px-4 bg-stone-800 rounded hover:bg-[#323131] transition ease-in-out"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).scratchcards_games)}`);
          } else {
            return [
              createTextVNode(toDisplayString(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).scratchcards_games), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-3d45fc7d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/slot-games",
        class: "uppercase font-light text-sm text-zinc-200 py-2 px-4 bg-stone-800 rounded hover:bg-[#323131] transition ease-in-out"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).slot_games)}`);
          } else {
            return [
              createTextVNode(toDisplayString(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).slot_games), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div><div class="row" data-v-3d45fc7d><div class="container mx-auto footerContainer" data-v-3d45fc7d><ul class="container mx-auto flex list-none flex-wrap text-lg justify-center gap-6 py-8 text-gray-800" data-v-3d45fc7d><li data-v-3d45fc7d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/compliance/aboutus",
        class: "compliance-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).aboutus)}`);
          } else {
            return [
              createTextVNode(toDisplayString(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).aboutus), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-3d45fc7d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/compliance/withdrawals",
        class: "compliance-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).withdrawals)}`);
          } else {
            return [
              createTextVNode(toDisplayString(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).withdrawals), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-3d45fc7d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/compliance/deposits",
        class: "compliance-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).deposits)}`);
          } else {
            return [
              createTextVNode(toDisplayString(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).deposits), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-3d45fc7d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/compliance/contact",
        class: "compliance-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).contact)}`);
          } else {
            return [
              createTextVNode(toDisplayString(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).contact), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-3d45fc7d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/compliance/privacy",
        class: "compliance-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).privacy)}`);
          } else {
            return [
              createTextVNode(toDisplayString(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).privacy), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-3d45fc7d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/compliance/responsible",
        class: "compliance-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).responsible)}`);
          } else {
            return [
              createTextVNode(toDisplayString(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).responsible), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-3d45fc7d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/compliance/faq",
        class: "compliance-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).faq)}`);
          } else {
            return [
              createTextVNode(toDisplayString(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).faq), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-3d45fc7d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/compliance/payouts",
        class: "compliance-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).payouts)}`);
          } else {
            return [
              createTextVNode(toDisplayString(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).payouts), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-3d45fc7d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/compliance/terms",
        class: "compliance-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).terms)}`);
          } else {
            return [
              createTextVNode(toDisplayString(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).terms), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul><!--[-->`);
      ssrRenderList("footerIcons" in _ctx ? _ctx.footerIcons : unref(footerIcons), (icon) => {
        _push(`<div data-v-3d45fc7d><div data-v-3d45fc7d>${icon.Html ?? ""}</div></div>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList("footerText" in _ctx ? _ctx.footerText : unref(footerText), (text) => {
        _push(`<div class="py-5" data-v-3d45fc7d><p data-v-3d45fc7d>${text.Html ?? ""}</p></div>`);
      });
      _push(`<!--]--><div class="flex items-center justify-center" data-v-3d45fc7d><img${ssrRenderAttr("src", _imports_1)} loading="lazy" alt="Hippozino Casino footer Logo" class="footer_logo p-5 shadow-md rounded-lg" height="" width="" data-v-3d45fc7d></div></div></div><div class="w-full fixed bottom-0 lg:hidden" data-v-3d45fc7d><div class="grid grid-cols-2" data-v-3d45fc7d><div class="w-full bg-[#91D342] flex justify-center py-3" data-v-3d45fc7d><a${ssrRenderAttr("href", "loginLink" in _ctx ? _ctx.loginLink : unref(loginLink))} class="flex items-center gap-4 text-[#313131] font-semibold" data-v-3d45fc7d>${ssrInterpolate(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).login)} <i class="material-icons" data-v-3d45fc7d>arrow_forward</i></a></div><div class="w-full bg-[#3598FB] flex justify-center" data-v-3d45fc7d><a${ssrRenderAttr("href", "regLink" in _ctx ? _ctx.regLink : unref(regLink))} class="flex items-center gap-4 text-[#313131] font-semibold" data-v-3d45fc7d>${ssrInterpolate(("msgTranslate" in _ctx ? _ctx.msgTranslate : unref(msgTranslate)).sign_up)} <i class="material-icons" data-v-3d45fc7d>security</i></a></div></div></div></footer></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-3d45fc7d"]]);
const _sfc_main$1 = {
  __name: "CookieConsent",
  __ssrInlineRender: true,
  setup(__props) {
    const accepted = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      if (!accepted.value) {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-afe6dd5c><div class="cookie-consent" data-v-afe6dd5c><p class="py-10 text-black" data-v-afe6dd5c>${ssrInterpolate(unref(msgTranslate).cookieConsent)}</p><button class="bg-login-gradient text-black py-1.5 shadow-lg tracking-wider px-6 font-semibold uppercase rounded" data-v-afe6dd5c>${ssrInterpolate(unref(msgTranslate).accept)}</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CookieConsent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-afe6dd5c"]]);
const _imports_0 = "data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.9%204H4.1C3.49249%204%203%204.44772%203%205C3%205.55228%203.49249%206%204.1%206H12.9C13.5075%206%2014%205.55228%2014%205C14%204.44772%2013.5075%204%2012.9%204Z'%20fill='%23F5F5F5'/%3e%3cpath%20d='M18%2010H4C3.44771%2010%203%2010.4477%203%2011C3%2011.5523%203.44771%2012%204%2012H18C18.5523%2012%2019%2011.5523%2019%2011C19%2010.4477%2018.5523%2010%2018%2010Z'%20fill='%23F5F5F5'/%3e%3cpath%20d='M15.9231%2016H4.07692C3.48215%2016%203%2016.4477%203%2017C3%2017.5523%203.48215%2018%204.07692%2018H15.9231C16.5178%2018%2017%2017.5523%2017%2017C17%2016.4477%2016.5178%2016%2015.9231%2016Z'%20fill='%23F5F5F5'/%3e%3crect%20x='0.15'%20y='0.15'%20width='21.7'%20height='21.7'%20rx='0.85'%20stroke='%23F5F5F5'%20stroke-width='0.3'/%3e%3c/svg%3e";
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Footer = __nuxt_component_1;
      const _component_CookieConsent = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><nav class="top-menu bg-primary_bg fixed z-10 py-4 shadow-lg items-center w-full"><div class="w-full md:px-0"><div class="container md:mx-auto grid grid-cols-3 items-center"><div class="left"><div class="menu-btn items-center" id="menu-btn"><img${ssrRenderAttr("src", _imports_0)} alt="Mobile Menu Button" class="w-12 h-12 pl-4 items-center"><div class="menu bg-gray-700 text-white rounded text-left w-36 drop-shadow-[0_15px_15px_rgba(0,0,0,0.50)] transition duration-300 ease-in-out transform scale-0 origin-top" id="menu">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "menu-item hover:bg-slate-800 px-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(msgTranslate).home)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(msgTranslate).home), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/promotions",
        class: "menu-item hover:bg-slate-800 px-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(msgTranslate).promotions)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(msgTranslate).promotions), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/compliance",
        class: "menu-item hover:bg-slate-800 px-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(msgTranslate).legal)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(msgTranslate).legal), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/all-games",
        class: "menu-item hover:bg-slate-800 px-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(msgTranslate).all_games)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(msgTranslate).all_games), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/popular-games",
        class: "menu-item hover:bg-slate-800 px-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(msgTranslate).popular_games)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(msgTranslate).popular_games), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/slot-games",
        class: "menu-item hover:bg-slate-800 px-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(msgTranslate).slot_games)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(msgTranslate).slot_games), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/casino-games",
        class: "menu-item hover:bg-slate-800 px-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(msgTranslate).casino_games)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(msgTranslate).casino_games), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/jackpot-games",
        class: "menu-item hover:bg-slate-800 px-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(msgTranslate).jackpot_games)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(msgTranslate).jackpot_games), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/compliance/contact",
        class: "menu-item hover:bg-slate-800 px-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(msgTranslate).contact)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(msgTranslate).contact), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a${ssrRenderAttr("href", unref(regLink))} class="menu-item hover:bg-slate-800 px-5">${ssrInterpolate(unref(msgTranslate).login)}</a></div></div></div><div class="">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex justify-center",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="Hippozino Casino header Logo" class="" width="200" height=""${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_1,
                alt: "Hippozino Casino header Logo",
                class: "",
                width: "200",
                height: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="right"><ul class="grid-cols-2 gap-6 hidden lg:flex justify-end"><li class="items-center"><a${ssrRenderAttr("href", unref(loginLink))} class="bg-login-gradient text-black py-1.5 shadow-lg tracking-wider px-6 font-semibold uppercase rounded">${ssrInterpolate(unref(msgTranslate).login)}</a></li><li class="items-center"><a${ssrRenderAttr("href", unref(regLink))} class="bg-signup-gradient text-black py-1.5 shadow-lg tracking-wider px-6 font-semibold uppercase rounded">${ssrInterpolate(unref(msgTranslate).sign_up)}</a></li></ul><div class="flex lg:hidden right items-center pr-4 justify-end"><a${ssrRenderAttr("href", unref(loginLink))} class="cas-btn px-4">Login</a></div></div></div></div></nav>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(ssrRenderComponent(_component_CookieConsent, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-BtkN606x.js.map
