export default defineNuxtPlugin(async () => {
  if (typeof globalThis.window !== 'undefined') {
    (async function () {
      const hreflangTags = [];
      const currentURL = new URL(window.location.href);

      const response = await fetch(
        'https://igp-supported-countries.tech1960.workers.dev/'
      );
      const hreflangs = await response.json();

      Object.keys(hreflangs).forEach((lang) => {
        hreflangs[lang].forEach((country) => {
          const alternateURL = new URL(currentURL);
          alternateURL.searchParams.set('lang', `${country}`);
          hreflangTags.push(
            `<link rel="alternate" hreflang="${lang}-${country}" href="${alternateURL.href}" />`
          );
        });
      });

      const hreflangTagsStr = hreflangTags.join('\n');

      const canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = window.location.href;

      const head = document.head;
      head.appendChild(canonicalLink);
      head.insertAdjacentHTML('beforeend', hreflangTagsStr);
    })();
  }
});
