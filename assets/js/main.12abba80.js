(function(e){function t(t){for(var a,r,u=t[0],i=t[1],l=t[2],s=0,f=[];s<u.length;s++)r=u[s],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);p&&p(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var u=n[r];0!==o[u]&&(a=!1)}a&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={main:0},o={main:0},c=[];function u(e){return i.p+"assets/js/"+({about:"about"}[e]||e)+"."+{about:"1ef969e0"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="assets/css/"+({about:"about"}[e]||e)+"."+{about:"1a187a8d"}[e]+".css",o=i.p+a,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var l=c[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===a||s===o))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],s=l.getAttribute("data-href");if(s===a||s===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],p.parentNode.removeChild(p),n(c)},p.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(p)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=c);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}o[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var p=s;c.push([4,"chunk-vendors"]),n()})({3815:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v("| "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},o=[],c=(n("8cac"),n("2877")),u={},i=Object(c["a"])(u,r,o,!1,null,null,null),l=i.exports,s=(n("d3b7"),n("8c4f")),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("VueSync",{model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),a("img",{attrs:{alt:"Vue logo",src:n("f3dc")}}),a("VuePropertyDecorator",{attrs:{msg:e.title}})],1)},p=[],b=n("d4ec"),v=n("262e"),d=n("2caf"),h=n("9ab4"),j=n("60a3"),O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.msg))]),n("VueRef",{ref:"hello"}),n("button",{on:{click:e.onclick}},[e._v("[Ref]点击一下")]),n("h3",[e._v("--- "+e._s(e.offspring)+"---")]),n("p",[e._v("1、 "+e._s(e.userData)+" "),n("VuePropSync",{attrs:{children:e.offspring},on:{"update:children":function(t){e.offspring=t}},model:{value:e.userData,callback:function(t){e.userData=t},expression:"userData"}})],1),n("p",[e._v("2、 "+e._s(e.userData)+" "),n("VueModel",{model:{value:e.userData,callback:function(t){e.userData=t},expression:"userData"}})],1),n("p",[e._v("3、 "+e._s(e.userData)+" "),n("VueModelBase",{model:{value:e.userData,callback:function(t){e.userData=t},expression:"userData"}})],1),n("p",[e._v("4、 "+e._s(e.userList)+" "),n("VuePropSyncArray",{model:{value:e.userList,callback:function(t){e.userList=t},expression:"userList"}})],1)],1)},m=[],y=n("bee2"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.time))])])},_=[],k=(n("0d03"),function(e){Object(v["a"])(n,e);var t=Object(d["a"])(n);function n(){var e;return Object(b["a"])(this,n),e=t.apply(this,arguments),e.time="",e}return Object(y["a"])(n,[{key:"created",value:function(){this.time=(new Date).toLocaleString()}},{key:"show",value:function(e){alert(this.time+"点我干嘛"+e)}}]),n}(j["f"]));k=Object(h["a"])([Object(j["a"])({name:"VueRef"})],k);var w=k,D=w,S=Object(c["a"])(D,g,_,!1,null,null,null),V=S.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" "+e._s(e.value)+" "),n("button",{on:{click:e.onclick}},[e._v("更改下")])])},P=[],E=function(e){Object(v["a"])(n,e);var t=Object(d["a"])(n);function n(){return Object(b["a"])(this,n),t.apply(this,arguments)}return Object(y["a"])(n,[{key:"onclick",value:function(){this.$emit("change",{age:100,name:"张三"})}}]),n}(j["f"]);Object(h["a"])([Object(j["b"])("change",{type:Object,default:function(){}})],E.prototype,"value",void 0),E=Object(h["a"])([Object(j["a"])({name:"VueModel"})],E);var T=E,A=T,L=Object(c["a"])(A,x,P,!1,null,null,null),$=L.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" "+e._s(e.value)+" "),n("button",{on:{click:e.onclick}},[e._v("更改下")])])},C=[],B=function(e){Object(v["a"])(n,e);var t=Object(d["a"])(n);function n(){return Object(b["a"])(this,n),t.apply(this,arguments)}return Object(y["a"])(n,[{key:"onclick",value:function(){this.value={age:100,name:"张三"}}}]),n}(j["f"]);Object(h["a"])([Object(j["b"])("input",{type:Object,default:function(){}})],B.prototype,"value",void 0),B=Object(h["a"])([Object(j["a"])({name:"VueModel"})],B);var N=B,H=N,R=Object(c["a"])(H,M,C,!1,null,null,null),q=R.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" "+e._s(e.user)+" "),n("button",{on:{click:e.onclick}},[e._v("更改下")]),n("h2",[e._v(e._s(e.offspring))]),n("button",{on:{click:e.addclick}},[e._v("增加数据")])])},J=[],U=(n("6eba"),n("b0c0"),function(e){Object(v["a"])(n,e);var t=Object(d["a"])(n);function n(){return Object(b["a"])(this,n),t.apply(this,arguments)}return Object(y["a"])(n,[{key:"onclick",value:function(){this.user.age=100,this.user.name="张三",console.log("-0-----",this.user)}},{key:"addclick",value:function(){this.offspring[Date.now()]=(new Date).toLocaleDateString(),this.$emit("update:children",this.offspring)}}]),n}(j["f"]));Object(h["a"])([Object(j["d"])("value",{type:Object,default:function(){}})],U.prototype,"user",void 0),Object(h["a"])([Object(j["d"])("children",{type:Object,default:function(){}})],U.prototype,"offspring",void 0),U=Object(h["a"])([Object(j["a"])({name:"VuePropSync"})],U);var F=U,I=F,K=Object(c["a"])(I,z,J,!1,null,null,null),G=K.exports,Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" "+e._s(e.user)+" "),n("button",{on:{click:e.onclick}},[e._v("更改下")])])},W=[],X=function(e){Object(v["a"])(n,e);var t=Object(d["a"])(n);function n(){return Object(b["a"])(this,n),t.apply(this,arguments)}return Object(y["a"])(n,[{key:"onclick",value:function(){this.user.push({age:100,name:"张三"})}}]),n}(j["f"]);Object(h["a"])([Object(j["d"])("value",{type:Array,default:function(){return[]}})],X.prototype,"user",void 0),X=Object(h["a"])([Object(j["a"])({name:"VuePropSyncArray"})],X);var Y=X,Z=Y,ee=Object(c["a"])(Z,Q,W,!1,null,null,null),te=ee.exports,ne=function(e){Object(v["a"])(n,e);var t=Object(d["a"])(n);function n(){var e;return Object(b["a"])(this,n),e=t.apply(this,arguments),e.offspring={},e.userData={age:23,name:"李四-----",desc:"z是"},e.userList=[{age:23,name:"李四-----",desc:"z是"}],e}return Object(y["a"])(n,[{key:"onclick",value:function(){this.hello.show("2"),console.log(this.button)}},{key:"mounted",value:function(){window.userData={},this.userData=window["userData"]}}]),n}(j["f"]);Object(h["a"])([Object(j["c"])({type:String,default:"title"})],ne.prototype,"msg",void 0),Object(h["a"])([Object(j["e"])()],ne.prototype,"hello",void 0),Object(h["a"])([Object(j["e"])("aButton")],ne.prototype,"button",void 0),ne=Object(h["a"])([Object(j["a"])({name:"VuePropertyDecorator",components:{VueRef:V,VuePropSync:G,VuePropSyncArray:te,VueModel:$,VueModelBase:q}})],ne);var ae=ne,re=ae,oe=(n("4889"),Object(c["a"])(re,O,m,!1,null,"3d911ed8",null)),ce=oe.exports,ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.docTitle))]),n("button",{on:{click:e.onclick}},[e._v("更改标题")])])},ie=[],le=function(e){Object(v["a"])(n,e);var t=Object(d["a"])(n);function n(){return Object(b["a"])(this,n),t.apply(this,arguments)}return Object(y["a"])(n,[{key:"onclick",value:function(){this.docTitle="讲述VueSync!"+(new Date).toUTCString(),console.log(this.docTitle)}}]),n}(j["f"]);Object(h["a"])([Object(j["d"])("value",{type:String,default:"标题"})],le.prototype,"docTitle",void 0),le=Object(h["a"])([Object(j["a"])({name:"VueSync"})],le);var se=le,fe=se,pe=Object(c["a"])(fe,ue,ie,!1,null,null,null),be=pe.exports,ve=function(e){Object(v["a"])(n,e);var t=Object(d["a"])(n);function n(){var e;return Object(b["a"])(this,n),e=t.apply(this,arguments),e.title="Vue.js",e.list=[],e}return n}(j["f"]);ve=Object(h["a"])([Object(j["a"])({name:"Home",components:{VuePropertyDecorator:ce,VueSync:be}})],ve);var de=ve,he=de,je=Object(c["a"])(he,f,p,!1,null,null,null),Oe=je.exports;a["default"].use(s["a"]);var me=[{path:"/",name:"Home",component:Oe},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"3c47"))}}],ye=new s["a"]({routes:me}),ge=ye,_e=n("2f62");a["default"].use(_e["a"]);var ke=new _e["a"].Store({state:{},mutations:{},actions:{},modules:{}});a["default"].config.productionTip=!1,new a["default"]({router:ge,store:ke,render:function(e){return e(l)}}).$mount("#app")},4:function(e,t,n){e.exports=n("3815")},4889:function(e,t,n){"use strict";var a=n("6a50"),r=n.n(a);r.a},"6a50":function(e,t,n){},"8cac":function(e,t,n){"use strict";var a=n("ee9f"),r=n.n(a);r.a},ee9f:function(e,t,n){},f3dc:function(e,t,n){e.exports=n.p+"assets/img/logo.82b9c7a5.png"}});