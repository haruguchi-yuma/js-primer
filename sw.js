// workbox init setting
importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js"
);
workbox.core.setCacheNameDetails({ prefix: "js-primer-v1" });
workbox.googleAnalytics.initialize();
// reload asap
workbox.skipWaiting();
workbox.clientsClaim();
// precache
workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "636ab4c68f308cbc4539fecb2e9e9329"
  },
  {
    "url": "appendix/links/index.html",
    "revision": "d00a0bf896626d26f6df59fa1cb84b6c"
  },
  {
    "url": "basic/array/index.html",
    "revision": "caf9e64aa39a7469a03c263e13515976"
  },
  {
    "url": "basic/async/img/async-single-thread-tasks.png",
    "revision": "9fb884ff15abc45dfe46c52e70a1f5c6"
  },
  {
    "url": "basic/async/img/block--async-single-thread-tasks.png",
    "revision": "258c557335c93435dbe369c8b4eb148a"
  },
  {
    "url": "basic/async/img/promise-chain.png",
    "revision": "e4cec834ad9a6a99d63d91001dcaa650"
  },
  {
    "url": "basic/async/img/single-thread-tasks.png",
    "revision": "44331a644afe9a76e9ffff8c8dcb4844"
  },
  {
    "url": "basic/async/img/then-rejected-promise.png",
    "revision": "210afd18eefa172748da7be410597a2f"
  },
  {
    "url": "basic/async/index.html",
    "revision": "5460394553978f459b833e481376aad6"
  },
  {
    "url": "basic/class/index.html",
    "revision": "f068febc8a31aecdb75a8f753eee3865"
  },
  {
    "url": "basic/comments/index.html",
    "revision": "f90a7d7c0c4451e221af8942d1e99669"
  },
  {
    "url": "basic/condition/index.html",
    "revision": "9a770174d8756493650f5c6a84b1afef"
  },
  {
    "url": "basic/data-type/index.html",
    "revision": "df4b8ec83d89012c1b7310806710238d"
  },
  {
    "url": "basic/date/index.html",
    "revision": "c6eeb2948e1f85fb80a1bf6119251152"
  },
  {
    "url": "basic/ecmascript/index.html",
    "revision": "e76fa2c4cdd6736159d79fd4481f0b40"
  },
  {
    "url": "basic/error-try-catch/img/console.error.png",
    "revision": "d4739aedc8ca6045393bb676760474e1"
  },
  {
    "url": "basic/error-try-catch/img/error.png",
    "revision": "adb2c821a705e6ef2e554922ed1d0ac8"
  },
  {
    "url": "basic/error-try-catch/index.html",
    "revision": "20e7d6441cb657f8f5f420934fe07127"
  },
  {
    "url": "basic/error-try-catch/src/console/index.html",
    "revision": "f1d5ff6a6b82e975f74ac1e3d877f723"
  },
  {
    "url": "basic/error-try-catch/src/error.html",
    "revision": "359cbe7900932fac79eb321c76e104b4"
  },
  {
    "url": "basic/function-declaration/index.html",
    "revision": "208d151524293869f2dc6587bea4d553"
  },
  {
    "url": "basic/function-scope/index.html",
    "revision": "4c69012831f75de1001629fb06dd8dee"
  },
  {
    "url": "basic/function-this/index.html",
    "revision": "8639a06f46e12e7b0b636b9dcc5a560c"
  },
  {
    "url": "basic/implicit-coercion/img/JavaScript-Equality-Table.png",
    "revision": "2858951a885713a1786e9ce3ee1908a5"
  },
  {
    "url": "basic/implicit-coercion/index.html",
    "revision": "3891c68275a36d96541e3fc8ee037113"
  },
  {
    "url": "basic/index.html",
    "revision": "3e8e3767d16a0482cbc75508da570a88"
  },
  {
    "url": "basic/introduction/img/javascript-ecmascript.png",
    "revision": "d1dd8f9b6e0e41d518e0c4114849b275"
  },
  {
    "url": "basic/introduction/index.html",
    "revision": "7707b83026d502a10acb5f0db973d0b9"
  },
  {
    "url": "basic/json/index.html",
    "revision": "bc1bdaf00a0454fb3308de18d63f35b6"
  },
  {
    "url": "basic/loop/index.html",
    "revision": "0e3d7162951abdc7626200ca29a157b6"
  },
  {
    "url": "basic/loop/public/index.html",
    "revision": "226c5a5e385446f7b048d1b990a8f603"
  },
  {
    "url": "basic/map-and-set/index.html",
    "revision": "a7fc0ca4081b157066b535b6bcfaa28a"
  },
  {
    "url": "basic/math/index.html",
    "revision": "7311e525d61dab8d89b9c506f18429bc"
  },
  {
    "url": "basic/module/index.html",
    "revision": "c4f6120f2d20c4df2a43ea7584749950"
  },
  {
    "url": "basic/object/index.html",
    "revision": "6356da4ef837d61710a141f181ac4c60"
  },
  {
    "url": "basic/operator/img/0000_0000_0000_0000_0000_0000_0000_0001.png",
    "revision": "6b390264395ab291937db0329f5a8eec"
  },
  {
    "url": "basic/operator/img/1111_1111_1111_1111_1111_1111_1111_1111.png",
    "revision": "8610b114ac684d837756124da4e0f9fd"
  },
  {
    "url": "basic/operator/index.html",
    "revision": "de6aff55ad65e88d2122203a329d9118"
  },
  {
    "url": "basic/other-parts/index.html",
    "revision": "76b778b13f942d33e5bd6adea99bd8fd"
  },
  {
    "url": "basic/prototype-object/img/object-prototype.png",
    "revision": "07ba5046df791f17c71d281c2859ab8a"
  },
  {
    "url": "basic/prototype-object/index.html",
    "revision": "d111285b393449f9af592b54c5e1029b"
  },
  {
    "url": "basic/read-eval-print/img/syntax-error.png",
    "revision": "d9e59e92e4da54e931d757a2eb36ce49"
  },
  {
    "url": "basic/read-eval-print/img/web-console.png",
    "revision": "222968a41f4a7d9556e7973e4370e951"
  },
  {
    "url": "basic/read-eval-print/index.html",
    "revision": "e0d2c4bff394417f51dc3f350d0727f0"
  },
  {
    "url": "basic/read-eval-print/src/empty/index.html",
    "revision": "5a2a8b11dda21e4b54164d24dd751dc4"
  },
  {
    "url": "basic/read-eval-print/src/example/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/invalid/syntax-error-typo/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/invalid/syntax-error/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/runtime-error/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/statement-expression/index.html",
    "revision": "f4adf42e6926f8ccc19a9b0c456d1090"
  },
  {
    "url": "basic/string-unicode/img/codeunit-codepoint-table.png",
    "revision": "13a2b195b242923f47d13f9d96f990b5"
  },
  {
    "url": "basic/string-unicode/img/emoji-codeunit-codepoint-table.png",
    "revision": "38e8c437c28e8999e3f91b57c799cec8"
  },
  {
    "url": "basic/string-unicode/img/extenal-code-and-internal-code.png",
    "revision": "eb6d5284b77b72a8faa2bafa0c18ba14"
  },
  {
    "url": "basic/string-unicode/index.html",
    "revision": "05f4180c7797ba0f94089f981ad32e3a"
  },
  {
    "url": "basic/string/index.html",
    "revision": "f6cb464cfe1dfeebcf6cba9c83dd932a"
  },
  {
    "url": "basic/variables/index.html",
    "revision": "2130e79c163173061d099f40119b2f31"
  },
  {
    "url": "basic/wrapper-object/index.html",
    "revision": "77443840e04ffb2c2dc8c78760a7c41d"
  },
  {
    "url": "cheatsheet/index.html",
    "revision": "f63711ce68ffe6a3b4ce373d5121775d"
  },
  {
    "url": "cheetsheet/index.html",
    "revision": "c6c30c5f139f5c4b78ec9d79ad31ef41"
  },
  {
    "url": "gitbook/@honkit/honkit-plugin-highlight/ebook.css",
    "revision": "3d93295839caaf68d26b9621f28d3496"
  },
  {
    "url": "gitbook/@honkit/honkit-plugin-highlight/website.css",
    "revision": "892263a29b30cef7bb2cd8d8d4f1077c"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.eot",
    "revision": "25a32416abee198dd821b0b17a198a8f"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.svg",
    "revision": "d7c639084f684d66a1bc66855d193ed8"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.ttf",
    "revision": "1dc35d25e61d819a9c357074014867ab"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.woff",
    "revision": "c8ddf1e5e5bf3682bc7bebf30f394148"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.woff2",
    "revision": "e6cf7c6ec7c2d6f670ae9d762604cb0b"
  },
  {
    "url": "gitbook/fonts/fontawesome/FontAwesome.otf",
    "revision": "5dc41d8fe329a22fa1ee9225571c843e"
  },
  {
    "url": "gitbook/gitbook-plugin-anchors/plugin.css",
    "revision": "45deda85e7ceaacadb6a51c17248ad1c"
  },
  {
    "url": "gitbook/gitbook-plugin-fontsettings/fontsettings.js",
    "revision": "fab8f6412ce18bb367635b1bcae503ca"
  },
  {
    "url": "gitbook/gitbook-plugin-fontsettings/website.css",
    "revision": "056a6db3eef3553a78f3b7e02356b2e7"
  },
  {
    "url": "gitbook/gitbook-plugin-ga/plugin.js",
    "revision": "8b0d0bfffa07cfd2675fffb1b7b6e6f4"
  },
  {
    "url": "gitbook/gitbook-plugin-github-issue-feedback/plugin.js",
    "revision": "8e12063d49ae924cd3480aac1d58f7e9"
  },
  {
    "url": "gitbook/gitbook-plugin-js-console/console-ui.js",
    "revision": "e67751e79ef4d4871dfb02c0a16fa1b4"
  },
  {
    "url": "gitbook/gitbook-plugin-page-toc-button/plugin.css",
    "revision": "4e7efddf5df2ea927a186116ba2aee2b"
  },
  {
    "url": "gitbook/gitbook-plugin-page-toc-button/plugin.js",
    "revision": "834dad580dcb5926f3b090502550f60d"
  },
  {
    "url": "gitbook/gitbook.js",
    "revision": "7ff979f8751490c334033120090a7fdc"
  },
  {
    "url": "gitbook/honkit-plugin-sandpack/honkit-plugin-sandpack.js",
    "revision": "aa3c93647f123948292eeea1e3b7e577"
  },
  {
    "url": "gitbook/icons/amazon-icon.png",
    "revision": "c6f689c33b509e5718c2fd1e784b28d1"
  },
  {
    "url": "gitbook/icons/favicon.ico",
    "revision": "4724b6e29e34167169d6d9e14b8c853f"
  },
  {
    "url": "gitbook/icons/icon-128x128.png",
    "revision": "eb8a1189f94bf89f92c5e3e6b0b49964"
  },
  {
    "url": "gitbook/icons/icon-144x144.png",
    "revision": "931315b259e37675797d3f48f80fa744"
  },
  {
    "url": "gitbook/icons/icon-152x152.png",
    "revision": "496c3f17c9e129b65dbf0b9a615a414b"
  },
  {
    "url": "gitbook/icons/icon-192x192.png",
    "revision": "edf553155f2da0d9bfbf5d7491ab341b"
  },
  {
    "url": "gitbook/icons/icon-384x384.png",
    "revision": "1119408dc608cc71f41b03e295183d81"
  },
  {
    "url": "gitbook/icons/icon-512x512.png",
    "revision": "fd7a37b059ccac4d7256226883672bce"
  },
  {
    "url": "gitbook/icons/icon-72x72.png",
    "revision": "7e86e9ee5b06f968f7739f2dfdcd03b3"
  },
  {
    "url": "gitbook/icons/icon-96x96.png",
    "revision": "2f00a83804b18c401b2afd0977113c0a"
  },
  {
    "url": "gitbook/images/apple-touch-icon-precomposed-152.png",
    "revision": "496c3f17c9e129b65dbf0b9a615a414b"
  },
  {
    "url": "gitbook/images/favicon.ico",
    "revision": "4724b6e29e34167169d6d9e14b8c853f"
  },
  {
    "url": "gitbook/style.css",
    "revision": "6d72a59f07e54cc60663a3c397cba063"
  },
  {
    "url": "gitbook/theme.js",
    "revision": "6af95515c7c4ede24ce249780a2cffa8"
  },
  {
    "url": "index.html",
    "revision": "aa86c2eb5ca3acb73531cb33b5a76bfb"
  },
  {
    "url": "intro/authors/index.html",
    "revision": "824793347c412ed5ca9f65f43d5f4883"
  },
  {
    "url": "intro/feedback/index.html",
    "revision": "1c4ee957749eff55e133d8cf077f9e08"
  },
  {
    "url": "intro/index.html",
    "revision": "99231220f49396dd365ea0dfc4dc825f"
  },
  {
    "url": "intro/preparation/index.html",
    "revision": "6fc8cfe2a85a4e72c78649b604bcca39"
  },
  {
    "url": "landing/css/style.css",
    "revision": "30232f49621b4afedbd4e2d1f0db2d3d"
  },
  {
    "url": "landing/img/js-primer.png",
    "revision": "8822a90ec70b645fb5055c20169e1df8"
  },
  {
    "url": "landing/img/repo-actions-watch.png",
    "revision": "6a830497c7f617a570db7246e0701495"
  },
  {
    "url": "landing/index.html",
    "revision": "d07910b0a047423b21aade637cb7e75d"
  },
  {
    "url": "outro/index.html",
    "revision": "d70ebc9e23b4ec79a2912892f28e45f8"
  },
  {
    "url": "use-case/ajaxapp/display/example/index.html",
    "revision": "d3966c68b57ff30ca7c7bd0960797fca"
  },
  {
    "url": "use-case/ajaxapp/display/img/fig-1.png",
    "revision": "58744761afe2ebe70c39ff2b4c61b5aa"
  },
  {
    "url": "use-case/ajaxapp/display/index.html",
    "revision": "551a0fc3170bcb2e8ae31974420aec37"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/example/index.html",
    "revision": "1763cb9bc16b6d860badb9583fef1f33"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/img/fig-1.png",
    "revision": "c668039b6a80d3a7510d20385f101241"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/index.html",
    "revision": "51f0d30c96494e9b95536a7393e30115"
  },
  {
    "url": "use-case/ajaxapp/http/example/index.html",
    "revision": "20ac665f8c423183077d0c9d96046394"
  },
  {
    "url": "use-case/ajaxapp/http/img/fig-1.png",
    "revision": "13663ef2f4142627e67847647642e6d9"
  },
  {
    "url": "use-case/ajaxapp/http/img/fig-2.png",
    "revision": "c87b78972104eb082f3d939ec4bc243c"
  },
  {
    "url": "use-case/ajaxapp/http/index.html",
    "revision": "18c521f980f49149e2f5581f228eb00c"
  },
  {
    "url": "use-case/ajaxapp/index.html",
    "revision": "ca6a27fb5547e7c6fe8d661eae5ae378"
  },
  {
    "url": "use-case/ajaxapp/promise/example/index.html",
    "revision": "8fabf08afa50f533922ee33519b1f5f8"
  },
  {
    "url": "use-case/ajaxapp/promise/img/fig-1.png",
    "revision": "7efcd647fa24ac88363650c7ab4275d0"
  },
  {
    "url": "use-case/ajaxapp/promise/index.html",
    "revision": "8af91884a9279040c7d6778d0024842d"
  },
  {
    "url": "use-case/ajaxapp/src/index.html",
    "revision": "8fabf08afa50f533922ee33519b1f5f8"
  },
  {
    "url": "use-case/ajaxapp/xhr/index.html",
    "revision": "651fa8730a67aa297192718fa96949dd"
  },
  {
    "url": "use-case/index.html",
    "revision": "7177aec1850fd9e452189b6c8c5f76be"
  },
  {
    "url": "use-case/nodecli/argument-parse/index.html",
    "revision": "0211b330c569564efe1b6dac49484a2d"
  },
  {
    "url": "use-case/nodecli/helloworld/index.html",
    "revision": "8db321c8be537bcd39115640a99e678c"
  },
  {
    "url": "use-case/nodecli/index.html",
    "revision": "baa386f34acee1453c2a4f6700963f6c"
  },
  {
    "url": "use-case/nodecli/md-to-html/index.html",
    "revision": "cb7e3ed49e3ef9192d18226cff407fec"
  },
  {
    "url": "use-case/nodecli/read-file/index.html",
    "revision": "7f53ea1fd32de79dcaacae20ef9847a3"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/index.html",
    "revision": "20151d6651b3c2c3f1d4ffb782929a58"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/src/test/fixtures/expected-gfm.html",
    "revision": "bab3ba2ded7964789458b79dea29b6b7"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/src/test/fixtures/expected.html",
    "revision": "3fd11b8807a99394e85b39b332b5fa8b"
  },
  {
    "url": "use-case/setup-local-env/img/index.png",
    "revision": "4d271148cb7c5fb1c549467b1bff5a27"
  },
  {
    "url": "use-case/setup-local-env/index.html",
    "revision": "5280180b3cd2478113b94796822f94e4"
  },
  {
    "url": "use-case/setup-local-env/src/index.html",
    "revision": "cc9229dc8c7ec9ed2001348c1deac7fb"
  },
  {
    "url": "use-case/todoapp/app-structure/img/todo-html.png",
    "revision": "14eae7c1436054c7fe83d337ecac7d88"
  },
  {
    "url": "use-case/todoapp/app-structure/index.html",
    "revision": "7273c0061ed6119accbf0d387862e611"
  },
  {
    "url": "use-case/todoapp/app-structure/todo-html/index.html",
    "revision": "38180327a5c28512e55afb67b8b2b64b"
  },
  {
    "url": "use-case/todoapp/entrypoint/first-entry/index.html",
    "revision": "3f18bd00b8e93877290057512e8eaf32"
  },
  {
    "url": "use-case/todoapp/entrypoint/img/first-entry.png",
    "revision": "be5eabf9913f6285ec7f4e3d1283553c"
  },
  {
    "url": "use-case/todoapp/entrypoint/index.html",
    "revision": "655f1ec0375b0d6e3977aef109eb9dd1"
  },
  {
    "url": "use-case/todoapp/entrypoint/module-entry/index.html",
    "revision": "3f18bd00b8e93877290057512e8eaf32"
  },
  {
    "url": "use-case/todoapp/entrypoint/module-scope/index.html",
    "revision": "32cab3b2ed950ab156f898fc679177c2"
  },
  {
    "url": "use-case/todoapp/event-model/event-emitter/index.html",
    "revision": "afa24f6d77a10024dec52934ca94e96a"
  },
  {
    "url": "use-case/todoapp/event-model/index.html",
    "revision": "7b2f0b3460d8dfa3aa60f39d391fb49d"
  },
  {
    "url": "use-case/todoapp/final/create-view/index.html",
    "revision": "afa24f6d77a10024dec52934ca94e96a"
  },
  {
    "url": "use-case/todoapp/final/final/index.html",
    "revision": "511ed06efb3f56bc2075f939912ddab2"
  },
  {
    "url": "use-case/todoapp/final/index.html",
    "revision": "c40dbab080882398b6d0de228af5a878"
  },
  {
    "url": "use-case/todoapp/final/more/index.html",
    "revision": "511ed06efb3f56bc2075f939912ddab2"
  },
  {
    "url": "use-case/todoapp/form-event/add-todo-item/index.html",
    "revision": "afa24f6d77a10024dec52934ca94e96a"
  },
  {
    "url": "use-case/todoapp/form-event/img/add-todo-item.png",
    "revision": "9a3d7acd2267a108699033d0c2f9dc95"
  },
  {
    "url": "use-case/todoapp/form-event/img/prevent-event.png",
    "revision": "7b94710d7d89d0541cb9a6ac98026a0a"
  },
  {
    "url": "use-case/todoapp/form-event/index.html",
    "revision": "bc1b12d82ba45fdde63c059dc61d68ba"
  },
  {
    "url": "use-case/todoapp/form-event/prevent-event/index.html",
    "revision": "afa24f6d77a10024dec52934ca94e96a"
  },
  {
    "url": "use-case/todoapp/index.html",
    "revision": "346b6947c0bca53c3337779178b1d15d"
  },
  {
    "url": "use-case/todoapp/update-delete/add-checkbox/index.html",
    "revision": "afa24f6d77a10024dec52934ca94e96a"
  },
  {
    "url": "use-case/todoapp/update-delete/delete-feature/index.html",
    "revision": "afa24f6d77a10024dec52934ca94e96a"
  },
  {
    "url": "use-case/todoapp/update-delete/img/input-checkbox.png",
    "revision": "716159606c130aa3813f6e1644960159"
  },
  {
    "url": "use-case/todoapp/update-delete/index.html",
    "revision": "8e880cabcc98b128bd098875f2b98923"
  },
  {
    "url": "use-case/todoapp/update-delete/input-checkbox/index.html",
    "revision": "c2402ea91d6e2872bd260a2629b275ae"
  },
  {
    "url": "use-case/todoapp/update-delete/update-feature/index.html",
    "revision": "afa24f6d77a10024dec52934ca94e96a"
  }
]);
