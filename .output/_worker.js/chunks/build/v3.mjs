import{x as e,v as n}from"./server.mjs";import{V as t,W as r}from"../routes/renderer.mjs";function useHead(o,s={}){const u=function(t){var o;const s=t||e();return(null==(o=null==s?void 0:s.ssrContext)?void 0:o.head)||(null==s?void 0:s.runWithContext((()=>{if(n.hasInjectionContext())return n.inject(r)})))}(s.nuxt);if(u)return t(o,{head:u,...s})}export{useHead as u};
//# sourceMappingURL=v3.mjs.map
