(self.webpackChunk_MyLifeMemory=self.webpackChunk_MyLifeMemory||[]).push([[119],{9363:function(A){A.exports="function"==typeof Bun&&Bun&&"string"==typeof Bun.version},2104:function(A,e,t){var D=t(4374),P=Function.prototype,r=P.apply,n=P.call;A.exports="object"==typeof Reflect&&Reflect.apply||(D?n.bind(r):function(){return n.apply(r,arguments)})},7152:function(A,e,t){"use strict";var D,P=t(7854),r=t(2104),n=t(614),o=t(9363),s=t(8113),i=t(206),w=t(8053),f=P.Function,g=/MSIE .\./.test(s)||o&&((D=P.Bun.version.split(".")).length<3||0==D[0]&&(D[1]<3||3==D[1]&&0==D[2]));A.exports=function(A,e){var t=e?2:1;return g?function(D,P){var o=w(arguments.length,1)>t,s=n(D)?D:f(D),g=o?i(arguments,t):[],c=o?function(){r(s,this,g)}:s;return e?A(c,P):A(c)}:A}},8053:function(A){var e=TypeError;A.exports=function(A,t){if(A<t)throw e("Not enough arguments");return A}},3843:function(A,e,t){var D=t(2109),P=t(1702),r=Date,n=P(r.prototype.getTime);D({target:"Date",stat:!0},{now:function(){return n(new r)}})},3710:function(A,e,t){var D=t(1702),P=t(8052),r=Date.prototype,n="Invalid Date",o="toString",s=D(r[o]),i=D(r.getTime);String(new Date(NaN))!=n&&P(r,o,(function(){var A=i(this);return A==A?s(this):n}))},6815:function(A,e,t){var D=t(2109),P=t(7854),r=t(7152)(P.setInterval,!0);D({global:!0,bind:!0,forced:P.setInterval!==r},{setInterval:r})},8417:function(A,e,t){var D=t(2109),P=t(7854),r=t(7152)(P.setTimeout,!0);D({global:!0,bind:!0,forced:P.setTimeout!==r},{setTimeout:r})},2564:function(A,e,t){t(6815),t(8417)},4525:function(){!function(A,e){var t=e.documentElement,D=A.devicePixelRatio||1;function P(){var A=t.clientWidth/20;t.style.fontSize=A+"px"}if(function A(){e.body?e.body.style.fontSize=12*D+"px":e.addEventListener("DOMContentLoaded",A)}(),P(),A.addEventListener("resize",P),A.addEventListener("pageshow",(function(A){A.persisted&&P()})),D>=2){var r=e.createElement("body"),n=e.createElement("div");n.style.border=".5px solid transparent",r.appendChild(n),t.appendChild(r),1===n.offsetHeight&&t.classList.add("hairlines"),t.removeChild(r)}}(window,document)},3277:function(A,e,t){"use strict";t(2564),t(3843),t(3710),t(4525);document.querySelector("#icon-link").href=t(5860);for(var D=document.querySelectorAll("button[class='preButton']"),P=0;P<D.length;P++)D[P].addEventListener("click",(function(){var A=this,e=this.nextElementSibling.querySelector("code");navigator.clipboard.writeText(e.textContent),this.style.color="#ffe200";var t=setTimeout((function(){A.removeAttribute("style")}),4e3),D=setTimeout((function(){clearTimeout(t),clearTimeout(D)}),8e3)}));var r,n,o,s=document.getElementById("goTop");s.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),window.addEventListener("scroll",(r=function(){var A=document.documentElement.scrollTop;s.style.opacity=A>500?1:0},n=300,o=0,function(){var A=Date.now();A-o>n&&(r.apply(void 0,arguments),o=A)}))},5860:function(A){"use strict";A.exports="data:image/vnd.microsoft.icon;base64,AAABAAEAICAAAAEAIACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAABMLAAATCwAAAAAAAAAAAAD3qgD/96cA//akAP/2oQD/9Z4A//WbAP/0mAD/9JQA//ORAP/zjgD/8osA//KHAP/xhAD/8IEA//B+AP/vegD/73cA/+50AP/ucQD/7W4A/+1sAP/saQD/7GcA/+tkAP/rYgD/6mAA/+pfAP/qXgH/6l4B/+peAf/qXgH/6l4B//esAP/3qQD/96cA//akAP/2oQD/9Z0A//WaAP/0lwD/9JQA//ORAP/zjQD/8ooA//GHAP/xgwD/8IAA//B9AP/vegD/73cA/+50AP/tcQD/7W4A/+xrAP/saQD/7GYA/+tkAP/rYgD/6mAA/+peAf/qXgH/6l4B/+peAf/qXgH/+K4A//esAP/3qQD/96YA//ajAP/2oAD/9Z0A//WaAP/0lgD/9JMA//OQAP/yjQD/8okA//GGAP/xgwD/8IAA//B8AP/veQD/7nYA/+5zAP/tcAD/7W0A/+xrAP/saAD/62YA/+tkAP/rYgD/6mAA/+peAf/qXgH/6l4B/+peAf/4sQD/+K4A//erAP/3qAD/9qUA//aiAP/2nwD/9ZwA//WZAP/0lgD/85MA//OPAP/yjAD/8okA//GGAP/xggD////////////veQD/7nYA/+5zAP/tcAD/7W0A/+xqAP/saAD/62UA/+tjAP/rYQD/6l8A/+peAf/qXgH/6l4B//izAP/4sAD/+K0A//erAP/3qAD/9qUA//aiAP/1nwD/9ZwA//SZAP/0lQD/85IA//OPAP/yiwD/8ogA/////////////////+97AP/veAD/7nUA/+5yAP/tbwD/7W0A/+xqAP/sZwD/62UA/+tjAP/qYQD/6l8A/+peAf/qXgH/+bUA//iyAP/4sAD/960A//eqAP/3pwD/9qQA//ahAP/1ngD/9ZsA//SYAP/0lQD/85EA//OOAP/yiwD/////////////////8H4A/+97AP/veAD/7nUA/+5yAP/tbwD/7WwA/+xpAP/sZwD/62UA/+tiAP/qYAD/6l8A/+peAf/5tgD/+LQA//iyAP/4rwD/96wA//eqAP/3pwD/9qQA//ahAP/1ngD/9ZsA//SXAP/0lAD/85EA//OOAP/////////////////wgAD/8H0A/+96AP/vdwD/7nQA/+5xAP/tbgD/7GwA/+xpAP/sZgD/62QA/+tiAP/qYAD/6l4A//m4AP/5tgD/+LQA//ixAP/4rwD/96wA//epAP/3pgD/9qMA//agAP/1nQD/9ZoA//SXAP/0lAD/85AA//////////////////GDAP/wgAD/8H0A/+96AP/vdgD/7nMA/+1xAP/tbgD/7GsA/+xoAP/rZgD/62QA/+tiAP/qYAD/+boA//m4AP/5tgD/+LMA//ixAP/4rgD/96sA//epAP/2pgD/9qMA//agAP/1nQD/9ZkA//SWAP/zkwD/////////////////8YYA//GDAP/////////////////////////////////tbQD/7GsA/+xoAP/rZgD/62MA/+thAP/5uwD/+bkA//m3AP/5tQD/+LMA//iwAP/4rgD/96sA//eoAP/2pQD/9qIA//WfAP/1nAD/9JkA//SWAP//////////////////////////////////////////////////////////////////////7GoA/+xoAP/rZQD/62MA//q9AP/5uwD/+bkA//m3AP/5tQD/+LIA//iwAP/4rQD/96oA///////////////////////1mwD/9JgA///////////////////////////////////////////////////////////////////////tbAD/7GoA/+xnAP/rZQD/+r4A//q8AP/5uwD/+bkA//m3AP////////////ivAP/3rQD/////////////////////////////////////////////////844A//KLAP/yhwD/8YQA////////////73oA/+93AP/udAD/7nEA/+1uAP/tbAD/7GkA/+xnAP/6vwD/+r4A//q8AP/5ugD/+bgA////////////+LEA//////////////////enAP/////////////////////////////////zkQD/840A//KKAP/////////////////wfQD/73oA/+93AP/udAD/7XEA/+1uAP/sawD/7GkA//rAAf/6vwD/+r4A//m8AP/5ugD////////////4swD/////////////////96kA//emAP/////////////////////////////////////////////////////////////////////////////////ucwD/7XAA/+1tAP/sawD/+sAB//rAAf/6vwD/+r0A//m8AP/5ugD////////////4swD////////////3qwD/96gA////////////////////////////9JYA/////////////////////////////////////////////////+52AP/ucwD/7XAA/+1tAP/6wAH/+sAB//rAAP/6vgD/+r0A//m7AP////////////m1AP////////////itAP/////////////////////////////////0mQD/9JUA//OSAP/////////////////xhQD/8YIA//B+AP/vewD/73gA/+51AP/ucgD/7W8A//rAAf/6wAH/+sAB//rAAP/6vgD/+r0A//////////////////////////////////etAP//////96cA//////////////////WbAP/0mAD/9JUA///////////////////////xhAD/8IEA//B+AP/vewD/73gA/+51AP/ucgD/+sAB//rAAf/6wAH/+sAB//q/AP/6vgD/////////////////+bYA////////////+K8A//esAP/3qgD/////////////////////////////////////////////////////////////////8IAA//B9AP/vegD/73cA/+50AP/6wAH/+sAB//rAAf/6wAH/+sAB//q/AP/6vgD////////////5uAD/+bYA////////////+K8A//esAP/////////////////////////////////////////////////zjQD///////GGAP/xgwD/8IAA//B9AP/vegD/73YA//rAAf/6wAH/+sAB//rAAf/6wAH/+sAB//q/AP/////////////////5uAD/+bYA///////4sQD/+K4A//////////////////ajAP/2oAD/9Z0A//////////////////OQAP/yjAD/8okA//GGAP/xgwD/8H8A//B8AP/veQD/+sAB//rAAf/6wAH/+sAB//rAAf/6wAH/+sAB//////////////////m5AP/5twD/+bUA//izAP/4sAD/+K4A////////////////////////////////////////////////////////////8ogA//GFAP/xggD/8H8A/+98AP/6wAH/+sAB//rAAf/6wAH///////////////////////////////////////m5AP/5twD/+bUA//iyAP/4sAD/////////////////////////////////////////////////////////////////8ogA//GFAP/wgQD/8H4A//rAAf/6wAH/+sAB//rAAf/6wAH/+sAB////////////////////////////////////////////+bQA//iyAP////////////eqAP/3pwD/9qQA//ahAP/1ngD/9ZsA//SYAP/0lAD/85EA//OOAP/yiwD/8ocA//GEAP/wgQD/+sAB//rAAf/6wAH/+sAB//rAAf/6wAH/+sAB//rAAf//////////////////////////////////////////////////////96wA//epAP/3pwD/9qQA//ahAP/1nQD/9ZoA//SXAP/0lAD/85EA//ONAP/yigD/8YcA//GDAP/6wAH/+sAB//rAAf/6wAH/+sAB//rAAf/6wAH/+sAB//rAAf/////////////////5vAD/+boA//m4AP/5tgD////////////4rgD/96wA//epAP////////////agAP/1nQD/9ZoA//SWAP/0kwD/85AA//KNAP/yiQD/8YYA//rAAf/6wAH/+sAB//rAAf/6wAH/+sAB//rAAf/6wAH/+sAB//////////////////q9AP//////+boA//m4AP////////////ixAP/4rgD/96sA//////////////////afAP/1nAD/9ZkA//SWAP/zkwD/848A//KMAP/yiQD/+sAB//rAAf/6wAH/+sAB//rAAf/6wAH/+sAB//rAAf/6wAH/+sAB///////6wAD/+r4A////////////////////////////+LMA//iwAP//////////////////////9qIA//WfAP/1nAD/9JkA//SVAP/zkgD/848A//KLAP/6wAH/+sAB//rAAf/6wAH/+sAB//rAAf/6wAH/+sAB//rAAf/6wAH/+sAB//rAAf/6wAD/+r4A//q9AP//////////////////////+LIA//iwAP/3rQD/96oA//enAP/2pAD/9qEA//WeAP/1mwD/9JgA//SVAP/zkQD/844A//rAAf/6wAH/+sAB//rAAf/6wAH/+sAB//rAAf/6wAH/+sAB//rAAf/6wAH/+sAB//rAAf/6vwD/+r4A//q8AP/5uwD/////////////////+LIA//ivAP/3rAD/96oA//enAP/2pAD/9qEA//WeAP/1mwD/9JcA//SUAP/zkQD/+sAB//rAAf/6wAH/+sAB//rAAf/6wAH/+sAB//rAAf/6wAH/+sAB//rAAf/6wAH/+sAB//rAAf/6vwD/+r4A//q8AP/5ugD/+bgA//m2AP/4tAD/+LEA//ivAP/3rAD/96kA//emAP/2owD/9qAA//WdAP/1mgD/9JcA//SUAP/6wAH/+sAB//rAAf/6wAH/+sAB//rAAf/6wAH/+sAB//rAAf/6wAH/+sAB//rAAf/6wAH/+sAB//rAAf/6vwD/+r0A//m8AP/5ugD/+bgA//m2AP/4swD/+LEA//iuAP/3qwD/96kA//amAP/2owD/9qAA//WdAP/1mQD/9JYA//rAAf/6wAH/+sAB//rAAf/6wAH/+sAB//rAAf/6wAH/+sAB//rAAf/6wAH/+sAB//rAAf/6wAH/+sAB//rAAf/6vwD/+r0A//m7AP/5uQD/+bcA//m1AP/4swD/+LAA//iuAP/3qwD/96gA//alAP/2ogD/9Z8A//WcAP/0mQD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="}},function(A){A.O(0,[489],(function(){return e=3277,A(A.s=e);var e}));A.O()}]);
//# sourceMappingURL=iframeJs.f167e449.js.map