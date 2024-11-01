import { _ as __nuxt_component_0 } from './nuxt-link-qlLozGtb.mjs';
import { ref, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'file:///Users/irek/sites/hippozino/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'file:///Users/irek/sites/hippozino/node_modules/vue/server-renderer/index.mjs';
import { useRoute } from 'file:///Users/irek/sites/hippozino/node_modules/vue-router/dist/vue-router.node.mjs';
import { l as loadTranslations, m as msgTranslate, P as PP_API_URL, W as WHITELABEL_ID, e as lang } from './server.mjs';
import 'file:///Users/irek/sites/hippozino/node_modules/ufo/dist/index.mjs';
import 'file:///Users/irek/sites/hippozino/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/irek/sites/hippozino/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/irek/sites/hippozino/node_modules/h3/dist/index.mjs';
import 'file:///Users/irek/sites/hippozino/node_modules/devalue/index.js';
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
      var _a;
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
      _push(`<div class=""><div>${(_a = htmlContent.value) != null ? _a : ""}</div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/compliance/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-Cf7nTSsk.mjs.map
