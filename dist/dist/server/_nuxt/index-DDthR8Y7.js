import { ref, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { l as loadTranslations, h as globalContent, m as msgTranslate, P as PP_API_URL, W as WHITELABEL_ID, e as lang } from "../server.mjs";
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    async function fetchContent(code) {
      try {
        const response = await fetch(
          `${PP_API_URL}InfoContent?whitelabelId=${WHITELABEL_ID}&country=${lang.value}&code=${code}`
        );
        const data = await response.json();
        return data[0].Html;
      } catch (error) {
        console.error(error);
      }
    }
    const htmlContent = ref("");
    (async () => {
      htmlContent.value = await fetchContent("aboutus");
      await loadTranslations();
    })();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="bg-white py-10"><div class="container mx-auto px-0"><div class="g-btn-wrapper mt-10 md:mt-20 flex flex-wrap justify-center"><!--[-->`);
      ssrRenderList(unref(globalContent), (value, key) => {
        _push(`<button class="h-10 px-4 md:px-8 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800 uppercase text-xs md:text-base">${ssrInterpolate(unref(msgTranslate)[value] ? unref(msgTranslate)[value] : value)}</button>`);
      });
      _push(`<!--]--></div><div class="px-4"><div>${htmlContent.value ?? ""}</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/compliance/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DDthR8Y7.js.map
