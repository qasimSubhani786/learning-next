if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const o=e=>a(e,c),h={module:{uri:c},exports:t,require:o};s[c]=Promise.all(n.map((e=>h[e]||o(e)))).then((e=>(i(...e),t)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/9Jhh6poi4mocShQHnCJEG/_buildManifest.js",revision:"81cf69ea92737dd798578708b86f26fc"},{url:"/_next/static/9Jhh6poi4mocShQHnCJEG/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/2952-2c95a55886727d26.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/3663-2d94a93ffbd61215.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/5250-99aaf42312fd2635.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/5468-3f7a542465eb7f80.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/7217-781439ca09c2c904.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/8209-9a3596570dffb80f.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/app/(auth)/(with-auth-layout)/forgot-password/page-9df907f2aa796e8d.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/app/(auth)/(with-auth-layout)/layout-cdde66e5b5ebc480.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/app/(auth)/(with-auth-layout)/loading-3e3c2ea7639f6a51.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/app/(auth)/(with-auth-layout)/login/page-60ef51713d3273c8.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/app/(auth)/(with-auth-layout)/signup/page-0cd7ab7add4914e4.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/app/about/page-43f5a46046a54211.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/app/complex-dashboard/@login/page-2ede0ff548da60e5.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/app/complex-dashboard/@notification/archieved/page-a07d14c043f8a72a.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/app/complex-dashboard/@notification/page-a408d31043c3911d.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/app/complex-dashboard/@revenue/default-f205f5f6107622d8.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/app/complex-dashboard/@revenue/page-b9a198468887208b.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/app/complex-dashboard/@user/default-4c4ecdcdf9bb7252.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/app/complex-dashboard/@user/page-4d6c538afdd17e58.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/app/complex-dashboard/default-95736f58147dc945.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/app/complex-dashboard/layout-e6c29fd7d7d28106.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/app/complex-dashboard/page-2515294a0df87595.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/app/docs/%5B%5B...slug%5D%5D/page-cc30ba9ac846eff1.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/app/error-d910e0b3aafe917e.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/app/f1/(.)f2/page-8add615db689b0ff.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/app/f1/f2/page-5a44a94888d9b598.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/app/f1/f3/page-a0aeb0b04e3ad41a.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/app/f1/f4/(..)f3/page-9e27f943671d37a4.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/app/f1/f4/page-971618e215168b7a.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/app/f1/page-37656a87e19790f6.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/app/layout-8d0f1e27829a80cb.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/app/master/page-686d27147fa68c8a.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/app/not-found-37e2796d5ea7cf16.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/app/order-product/page-1dc63429ad5b78c6.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/app/page-9512346248a0b54e.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/app/products/%5B...slug%5D/page-d64feaea7413e919.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/app/products/%5BproductId%5D/layout-8080a11887032cae.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/app/products/%5BproductId%5D/page-d1db01036620a625.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/app/products/%5BproductId%5D/reviews/%5BreviewId%5D/page-3e663a1ba375b018.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/app/products/page-7bdba03612cbd699.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/app/users/loading-08b255efa62eadc1.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/app/users/new/page-8ec79c7667e490fb.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/app/users/page-5d160f0364630142.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/dbf0f38d-29d53d3f738e368f.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/fd9d1056-df04ff341f11c816.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/framework-20adfd98f723306f.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/main-0bdb75873638b7e9.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/main-app-478f3b605f048745.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/pages/_app-794d85baa83ca682.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/pages/_error-5fb63848e0136a02.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-f72b127729f96861.js",revision:"9Jhh6poi4mocShQHnCJEG"},{url:"/_next/static/css/b4fc6cdb2ea5b363.css",revision:"b4fc6cdb2ea5b363"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/icon-192x192.png",revision:"3daf4450703998f2a34030f40134a937"},{url:"/icon-256x256.png",revision:"e5547ebadb373885022e98a51e32d80f"},{url:"/icon-384x384.png",revision:"1f132145cb79768f199da039381ea862"},{url:"/icon-512x512.png",revision:"e4df8bc12e9f49dde455d01831aee413"},{url:"/manifest.json",revision:"e3a7031dfce1f37a8ca5ee70be45af95"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
