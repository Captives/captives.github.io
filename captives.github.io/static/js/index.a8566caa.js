(function(e){function t(t){for(var n,o,l=t[0],s=t[1],i=t[2],c=0,v=[];c<l.length;c++)o=l[c],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&v.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);p&&p(t);while(v.length)v.shift()();return u.push.apply(u,i||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,o=1;o<r.length;o++){var l=r[o];0!==a[l]&&(n=!1)}n&&(u.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={index:0},a={index:0},u=[];function l(e){return s.p+"static/js/"+({about:"about"}[e]||e)+"."+{about:"6ddd618d"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={about:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="static/css/"+({about:"about"}[e]||e)+"."+{about:"b88c4105"}[e]+".css",a=s.p+n,u=document.getElementsByTagName("link"),l=0;l<u.length;l++){var i=u[l],c=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(c===n||c===a))return t()}var v=document.getElementsByTagName("style");for(l=0;l<v.length;l++){i=v[l],c=i.getAttribute("data-href");if(c===n||c===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete o[e],p.parentNode.removeChild(p),r(u)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=u);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=l(e);var v=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(p);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;v.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",v.name="ChunkLoadError",v.type=n,v.request=o,r[1](v)}a[e]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var v=0;v<i.length;v++)t(i[v]);var p=c;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("4d71")},"4d71":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("HOME")]),e._v(" | "),r("router-link",{attrs:{to:"/about"}},[e._v("ABOUT")]),e._v(" | "),r("a",{attrs:{href:"/live.html"}},[e._v("LIVE")]),e._v(" | "),r("a",{attrs:{href:"/webrtc.html"}},[e._v("WEB RTC")]),e._v(" | "),r("a",{attrs:{href:"/charts.html"}},[e._v("图表")])],1),r("router-view")],1)},a=[],u=(r("7608"),r("2877")),l={},s=Object(u["a"])(l,o,a,!1,null,null,null),i=s.exports,c=(r("d3b7"),r("8c4f")),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("b9ec")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},p=[],f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},h=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),r("br"),e._v(" check out the "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],d={name:"HelloWorld",props:{msg:String}},m=d,g=(r("91d0"),Object(u["a"])(m,f,h,!1,null,"c805245c",null)),_=g.exports,b={name:"home",components:{HelloWorld:_}},j=b,y=Object(u["a"])(j,v,p,!1,null,null,null),k=y.exports;n["default"].use(c["a"]);var w=[{path:"/",name:"home",component:k},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"63f7"))}},{path:"/live",redirect:"/live.html"}],E=new c["a"]({base:"",routes:w}),O=E;n["default"].config.productionTip=!1,new n["default"]({router:O,render:function(e){return e(i)}}).$mount("#app")},"64c0":function(e,t,r){},7608:function(e,t,r){"use strict";var n=r("b85d"),o=r.n(n);o.a},"91d0":function(e,t,r){"use strict";var n=r("64c0"),o=r.n(n);o.a},b85d:function(e,t,r){},b9ec:function(e,t,r){e.exports=r.p+"static/img/logo.82b9c7a5.png"}});