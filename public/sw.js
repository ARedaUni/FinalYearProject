if(!self.define){let e,s={};const t=(t,n)=>(t=new URL(t+".js",n).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let a={};const r=e=>t(e,i),p={module:{uri:i},exports:a,require:r};s[i]=Promise.all(n.map((e=>p[e]||r(e)))).then((e=>(c(...e),a)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"1f8b0cd9e7dbb996dc5f7a876e699dbb"},{url:"/_next/static/HjLQOySBhY-6Q55HpSYzV/_buildManifest.js",revision:"d8963c6657102db1f2fa51dc81a43a6f"},{url:"/_next/static/HjLQOySBhY-6Q55HpSYzV/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/06ed8259-44d624bc8576dbbe.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/212.9724dd470a65cfb4.js",revision:"9724dd470a65cfb4"},{url:"/_next/static/chunks/250-0fbc3f4a626b458e.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/280-cc699276431094f1.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/340-62b7b7a693ffdb77.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/50-c38c468414f47eed.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/69-38e2c589c5281f92.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/694-1e772471e6b0cced.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/703-32b39981e4e73906.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/787-023e198ff9d92d8c.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/795d4814-26c2e185b3b4b017.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/829.1f5c0a9cc491820b.js",revision:"1f5c0a9cc491820b"},{url:"/_next/static/chunks/app/_not-found-917d0202e7657946.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/app/aboutus/page-dde4819e66c077e7.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/app/editarticles/%5Bid%5D/page-558759390f1d7f0d.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/app/editarticles/page-32a861de8e8dd6d4.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/app/factchecks/domestic/%5Bid%5D/page-25518c789a47e53e.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/app/factchecks/domestic/page-6bcd6209740baf1c.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/app/factchecks/foreign/%5Bid%5D/page-db52ad5b856fd5c2.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/app/factchecks/foreign/page-7ffa7432e34c958e.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/app/factchecks/page-fc4f2c567f52f88a.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/app/factchecks/searchpageresults/%5Bid%5D/page-7592332aa8e391fc.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/app/factchecks/searchpageresults/page-d82e55acbcae09af.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/app/layout-5b7a425480667a33.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/app/login/error-1aa31f0b0f689281.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/app/login/page-81546c21e0f072a4.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/app/page-fe5d7524ca13a2a7.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/app/protected/admin/page-7c7fb9af95d52803.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/app/protected/page-90640c8c5a7f2a2b.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/app/protected/settings/page-64fcf9bff60e9203.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/app/protected/viewmisinformation/page-b87ee92eccbd08e4.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/app/signup/adduserdetails/page-a183f4ad34761e95.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/app/signup/confirmUser/page-11b3836f322cd453.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/app/signup/error-f3f71b106d731954.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/app/signup/page-7882b2700585c71d.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/app/signup/success/page-b0c3d13fb5856a2f.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/app/submitclaim/error-0c64560729e04b9b.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/app/submitclaim/page-067bcf542bad1399.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/cebd11e7-e034e714f4fb065d.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/fd9d1056-69ad97800fe24a37.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/framework-b370f160bb96059c.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/main-app-641ac5612d56b40d.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/main-b3eafbdcd42e3592.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/pages/_app-d21e88acd55d90f1.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/pages/_error-d6107f1aac0c574c.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-7ee54fb6c07c892e.js",revision:"HjLQOySBhY-6Q55HpSYzV"},{url:"/_next/static/css/39a01d8f20adee10.css",revision:"39a01d8f20adee10"},{url:"/_next/static/css/8eb161f79fa9cd6e.css",revision:"8eb161f79fa9cd6e"},{url:"/_next/static/css/d6cd675ebcf82107.css",revision:"d6cd675ebcf82107"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));