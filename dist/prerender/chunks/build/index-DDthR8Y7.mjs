import { ref, unref, useSSRContext } from 'file:///Users/irek/sites/hippozino/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'file:///Users/irek/sites/hippozino/node_modules/vue/server-renderer/index.mjs';
import { l as loadTranslations, h as globalContent, m as msgTranslate, P as PP_API_URL, W as WHITELABEL_ID, e as lang } from './server.mjs';
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
      var _a;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="bg-white py-10"><div class="container mx-auto px-0"><div class="g-btn-wrapper mt-10 md:mt-20 flex flex-wrap justify-center"><!--[-->`);
      ssrRenderList(unref(globalContent), (value, key) => {
        _push(`<button class="h-10 px-4 md:px-8 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800 uppercase text-xs md:text-base">${ssrInterpolate(unref(msgTranslate)[value] ? unref(msgTranslate)[value] : value)}</button>`);
      });
      _push(`<!--]--></div><div class="px-4"><div>${(_a = htmlContent.value) != null ? _a : ""}</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/compliance/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DDthR8Y7.mjs.map
