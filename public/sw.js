if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,t,a)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const i={uri:location.origin+s.slice(1)};return Promise.all(t.map((s=>{switch(s){case"exports":return n;case"module":return i;default:return e(s)}}))).then((e=>{const s=a(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-21b21c9a"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/S2MkYL7YvsjpCoBe8pyBu/_buildManifest.js",revision:"S2MkYL7YvsjpCoBe8pyBu"},{url:"/_next/static/S2MkYL7YvsjpCoBe8pyBu/_ssgManifest.js",revision:"S2MkYL7YvsjpCoBe8pyBu"},{url:"/_next/static/chunks/278-f9cc06aa0f857e26f09d.js",revision:"S2MkYL7YvsjpCoBe8pyBu"},{url:"/_next/static/chunks/28-b9fd406313864274538b.js",revision:"S2MkYL7YvsjpCoBe8pyBu"},{url:"/_next/static/chunks/587-c2ea8338b148c73f518e.js",revision:"S2MkYL7YvsjpCoBe8pyBu"},{url:"/_next/static/chunks/794-38143c45ef4bdbd4f9c5.js",revision:"S2MkYL7YvsjpCoBe8pyBu"},{url:"/_next/static/chunks/891-a8375726f75898414c3c.js",revision:"S2MkYL7YvsjpCoBe8pyBu"},{url:"/_next/static/chunks/937-c2bbc91e4503091f21cc.js",revision:"S2MkYL7YvsjpCoBe8pyBu"},{url:"/_next/static/chunks/938-6cc16a41e4174073cff3.js",revision:"S2MkYL7YvsjpCoBe8pyBu"},{url:"/_next/static/chunks/961-a1c1024fd9c47ecff4ff.js",revision:"S2MkYL7YvsjpCoBe8pyBu"},{url:"/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"S2MkYL7YvsjpCoBe8pyBu"},{url:"/_next/static/chunks/main-6856519a320f329565a7.js",revision:"S2MkYL7YvsjpCoBe8pyBu"},{url:"/_next/static/chunks/pages/_app-0239c72a49c667926fc9.js",revision:"S2MkYL7YvsjpCoBe8pyBu"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"S2MkYL7YvsjpCoBe8pyBu"},{url:"/_next/static/chunks/pages/about-7a2fc78a3ad3a27244b2.js",revision:"S2MkYL7YvsjpCoBe8pyBu"},{url:"/_next/static/chunks/pages/contact-9c05465bb4e351ce707a.js",revision:"S2MkYL7YvsjpCoBe8pyBu"},{url:"/_next/static/chunks/pages/galleries-eac4a971845d7568e8da.js",revision:"S2MkYL7YvsjpCoBe8pyBu"},{url:"/_next/static/chunks/pages/index-789bf76e001678bf0bc7.js",revision:"S2MkYL7YvsjpCoBe8pyBu"},{url:"/_next/static/chunks/pages/meet-the-team-0f48ec41953b32baaa0b.js",revision:"S2MkYL7YvsjpCoBe8pyBu"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"S2MkYL7YvsjpCoBe8pyBu"},{url:"/_next/static/chunks/webpack-0cb069610457c13661fc.js",revision:"S2MkYL7YvsjpCoBe8pyBu"},{url:"/_next/static/css/b11a16a6f9caf92a0e01.css",revision:"S2MkYL7YvsjpCoBe8pyBu"},{url:"/manifest.json",revision:"8557578f43e9dc4f630dda85b3935a62"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));