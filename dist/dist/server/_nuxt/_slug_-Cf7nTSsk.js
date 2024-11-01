import { _ as __nuxt_component_0 } from "./nuxt-link-qlLozGtb.js";
import { ref, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { l as loadTranslations, m as msgTranslate, P as PP_API_URL, W as WHITELABEL_ID, e as lang } from "../server.mjs";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "radix3";
import "defu";
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const slug = route.params.slug;
    async function fetchContent(slug2) {
      try {
        const response = await fetch(
          `${PP_API_URL}InfoContent?whitelabelId=${WHITELABEL_ID}&country=${lang.value}&code=${slug2}`
          //`http://content.progressplay.net/api23/api/InfoContent?whitelabelId=&country=en&Code=${slug}`
        );
        const data = await response.json();
        return data[0].Html;
      } catch (error) {
        console.error(error);
      }
    }
    const htmlContent = ref("");
    (async () => {
      htmlContent.value = await fetchContent(slug);
      await loadTranslations();
    })();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class=""><div class="container mx-auto bg-white pt-32"><div class="px-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/compliance",
        class: "flex justify-center gap-4 p-2 border rounded border-primary text-gray-800 text-center w-1/2 md:w-1/5 cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="material-icons"${_scopeId}>arrow_back</i> ${ssrInterpolate(unref(msgTranslate).legal)}`);
          } else {
            return [
              createVNode("i", { class: "material-icons" }, "arrow_back"),
              createTextVNode(" " + toDisplayString(unref(msgTranslate).legal), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class=""><div>${htmlContent.value ?? ""}</div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/compliance/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-Cf7nTSsk.js.map
