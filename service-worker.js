if(!self.define){let e,i={};const r=(r,l)=>(r=new URL(r+".js",l).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(l,s)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let c={};const o=e=>r(e,a),f={module:{uri:a},exports:c,require:o};i[a]=Promise.all(l.map((e=>f[e]||o(e)))).then((e=>(s(...e),c)))}}define(["./workbox-460519b3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"iframeFile/g_git.html",revision:"0b83896d6be049319dfa8bec95390f62"},{url:"iframeFile/g_github.html",revision:"5c81389f1a84e8c312b3f53010614a63"},{url:"iframeFile/o_english.html",revision:"6df4ba742a2646f22568ababf112a487"},{url:"iframeFile/o_homebrew.html",revision:"4d3e8547e22633a43d9030407c8f69ce"},{url:"iframeFile/o_iterm2.html",revision:"fa8da31c8dc45394e62558156affdabf"},{url:"iframeFile/o_markdown.html",revision:"ca1c41f1735e63811e5997ed6f318430"},{url:"iframeFile/o_unitconversion.html",revision:"8bb56accd2750ca904d6906b29cfbfc6"},{url:"iframeFile/o_video.html",revision:"7c58d173698d4c83243bf9cee75438eb"},{url:"iframeFile/o_vipn.html",revision:"49c6a4b815c8c8e8a7b9353780375adc"},{url:"iframeFile/o_vscode.html",revision:"ab61ace47d3e31ac9bd02cdb71c75bfa"},{url:"iframeFile/pro_ajax.html",revision:"77721441d43260aaa6db6fce712ee03d"},{url:"iframeFile/pro_chatgpt.html",revision:"bb1b77f69f02bae4e94924690c299ec1"},{url:"iframeFile/pro_css.html",revision:"58966c82ae82716575c85e65b7cca5a3"},{url:"iframeFile/pro_css3.html",revision:"17fdddf0497ae784071d7eca0b332c31"},{url:"iframeFile/pro_frame.html",revision:"c7c26c9d69d517656b3eeb722b45d2b4"},{url:"iframeFile/pro_h5.html",revision:"208f9a40573b26cdddfa912e93cf01d5"},{url:"iframeFile/pro_html.html",revision:"0b98b5a2d31e696b540941e88f86e147"},{url:"iframeFile/pro_lessandsass.html",revision:"7f571212ec0fc98bf698811ac493ca9e"},{url:"iframeFile/pro_regexp.html",revision:"f75868d87710bd664f4b13c4bac6f5f3"},{url:"iframeFile/pro_responsive.html",revision:"110240bf01c4b6ed11f209cb732e58f7"},{url:"iframeFile/pro_standard.html",revision:"607e1e38e4e34144eee39e4b8ed2eba4"},{url:"iframeFile/pro_svg.html",revision:"475865e0abeced7ea83a5bec2383e144"},{url:"iframeFile/t_text.html",revision:"51ed87b2ef0355de1065cf8f10a17cd0"},{url:"index.html",revision:"2367ed99fdc496e3dfcae1e9343102df"},{url:"memory.html",revision:"9f5bda41e9d70d76f0716006cb3c0eb2"},{url:"static/css/iframeJs.98885fb8.css",revision:null},{url:"static/css/main.174850b5.css",revision:null},{url:"static/css/memory.2b6969a9.css",revision:null},{url:"static/js/489.0788b82d.js",revision:null},{url:"static/js/iframeJs.f167e449.js",revision:null},{url:"static/js/main.8672671b.js",revision:null},{url:"static/js/memory.0e70068c.js",revision:null},{url:"static/js/runtime~iframeJs.38887298.js",revision:null},{url:"static/js/runtime~main.aa7a1bb4.js",revision:null},{url:"static/js/runtime~memory.446f86c9.js",revision:null},{url:"static/media/avatar.1fd419103f4706656117.png",revision:null},{url:"static/media/bg.5f3f0c223628084b140b.png",revision:null}],{})}));
//# sourceMappingURL=service-worker.js.map
