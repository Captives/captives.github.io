(function(e){function t(t){for(var a,r,u=t[0],i=t[1],l=t[2],s=0,f=[];s<u.length;s++)r=u[s],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&f.push(c[r][0]),c[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);p&&p(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var u=n[r];0!==c[u]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={main:0},c={main:0},o=[];function u(e){return i.p+"assets/js/"+({about:"about"}[e]||e)+"."+{"chunk-5497c013":"0b736c7b",about:"5ceedfa2"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="assets/css/"+({about:"about"}[e]||e)+"."+{"chunk-5497c013":"31d6cfe0",about:"d8148140"}[e]+".css",c=i.p+a,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var l=o[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===a||s===c))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],s=l.getAttribute("data-href");if(s===a||s===c)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],p.parentNode.removeChild(p),n(o)},p.href=c;var b=document.getElementsByTagName("head")[0];b.appendChild(p)})).then((function(){r[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=o);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(p);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}c[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var p=s;o.push([4,"chunk-vendors"]),n()})({3815:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v("| "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},c=[],o=(n("b0c0"),n("d4ec")),u=n("bee2"),i=n("262e"),l=n("2caf"),s=n("9ab4"),f=n("60a3"),p=function(e){Object(i["a"])(n,e);var t=Object(l["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return Object(u["a"])(n,[{key:"created",value:function(){var e=this;this.$router.afterEach((function(){document.title=e.$route.name}))}}]),n}(f["f"]);p=Object(s["a"])([Object(f["a"])({name:"App"})],p);var b=p,v=b,d=(n("8cac"),n("2877")),h=Object(d["a"])(v,r,c,!1,null,null,null),j=h.exports,O=(n("d3b7"),n("8c4f")),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("VueSync",{model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),a("img",{attrs:{alt:"Vue logo",src:n("f3dc")}}),a("VuePropertyDecorator",{attrs:{msg:e.title}})],1)},y=[],g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.msg))]),n("VueRef",{ref:"hello"}),n("button",{on:{click:e.onclick}},[e._v("[Ref]点击一下")]),n("h3",[e._v("--- "+e._s(e.offspring)+"---")]),n("p",[e._v("1、 "+e._s(e.userData)+" "),n("VuePropSync",{attrs:{children:e.offspring},on:{"update:children":function(t){e.offspring=t}},model:{value:e.userData,callback:function(t){e.userData=t},expression:"userData"}})],1),n("p",[e._v("2、 "+e._s(e.userData)+" "),n("VueModel",{model:{value:e.userData,callback:function(t){e.userData=t},expression:"userData"}})],1),n("p",[e._v("3、 "+e._s(e.userData)+" "),n("VueModelBase",{model:{value:e.userData,callback:function(t){e.userData=t},expression:"userData"}})],1),n("p",[e._v("4、 "+e._s(e.userList)+" "),n("VuePropSyncArray",{model:{value:e.userList,callback:function(t){e.userList=t},expression:"userList"}})],1)],1)},_=[],k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.time))])])},w=[],D=(n("0d03"),function(e){Object(i["a"])(n,e);var t=Object(l["a"])(n);function n(){var e;return Object(o["a"])(this,n),e=t.apply(this,arguments),e.time="",e}return Object(u["a"])(n,[{key:"created",value:function(){this.time=(new Date).toLocaleString()}},{key:"show",value:function(e){alert(this.time+"点我干嘛"+e)}}]),n}(f["f"]));D=Object(s["a"])([Object(f["a"])({name:"VueRef"})],D);var S=D,V=S,x=Object(d["a"])(V,k,w,!1,null,null,null),P=x.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" "+e._s(e.value)+" "),n("button",{on:{click:e.onclick}},[e._v("更改下")])])},$=[],A=function(e){Object(i["a"])(n,e);var t=Object(l["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return Object(u["a"])(n,[{key:"onclick",value:function(){this.$emit("change",{age:100,name:"张三"})}}]),n}(f["f"]);Object(s["a"])([Object(f["b"])("change",{type:Object,default:function(){}})],A.prototype,"value",void 0),A=Object(s["a"])([Object(f["a"])({name:"VueModel"})],A);var T=A,L=T,M=Object(d["a"])(L,E,$,!1,null,null,null),C=M.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" "+e._s(e.value)+" "),n("button",{on:{click:e.onclick}},[e._v("更改下")])])},N=[],H=function(e){Object(i["a"])(n,e);var t=Object(l["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return Object(u["a"])(n,[{key:"onclick",value:function(){this.value={age:100,name:"张三"}}}]),n}(f["f"]);Object(s["a"])([Object(f["b"])("input",{type:Object,default:function(){}})],H.prototype,"value",void 0),H=Object(s["a"])([Object(f["a"])({name:"VueModel"})],H);var R=H,q=R,z=Object(d["a"])(q,B,N,!1,null,null,null),J=z.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" "+e._s(e.user)+" "),n("button",{on:{click:e.onclick}},[e._v("更改下")]),n("h2",[e._v(e._s(e.offspring))]),n("button",{on:{click:e.addclick}},[e._v("增加数据")])])},F=[],I=(n("6eba"),function(e){Object(i["a"])(n,e);var t=Object(l["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return Object(u["a"])(n,[{key:"onclick",value:function(){this.user.age=100,this.user.name="张三",console.log("-0-----",this.user)}},{key:"addclick",value:function(){this.offspring[Date.now()]=(new Date).toLocaleDateString(),this.$emit("update:children",this.offspring)}}]),n}(f["f"]));Object(s["a"])([Object(f["d"])("value",{type:Object,default:function(){}})],I.prototype,"user",void 0),Object(s["a"])([Object(f["d"])("children",{type:Object,default:function(){}})],I.prototype,"offspring",void 0),I=Object(s["a"])([Object(f["a"])({name:"VuePropSync"})],I);var K=I,G=K,Q=Object(d["a"])(G,U,F,!1,null,null,null),W=Q.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" "+e._s(e.user)+" "),n("button",{on:{click:e.onclick}},[e._v("更改下")])])},Y=[],Z=function(e){Object(i["a"])(n,e);var t=Object(l["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return Object(u["a"])(n,[{key:"onclick",value:function(){this.user.push({age:100,name:"张三"})}}]),n}(f["f"]);Object(s["a"])([Object(f["d"])("value",{type:Array,default:function(){return[]}})],Z.prototype,"user",void 0),Z=Object(s["a"])([Object(f["a"])({name:"VuePropSyncArray"})],Z);var ee=Z,te=ee,ne=Object(d["a"])(te,X,Y,!1,null,null,null),ae=ne.exports,re=function(e){Object(i["a"])(n,e);var t=Object(l["a"])(n);function n(){var e;return Object(o["a"])(this,n),e=t.apply(this,arguments),e.offspring={},e.userData={age:23,name:"李四-----",desc:"z是"},e.userList=[{age:23,name:"李四-----",desc:"z是"}],e}return Object(u["a"])(n,[{key:"onclick",value:function(){this.hello.show("2"),console.log(this.button)}},{key:"mounted",value:function(){window.userData={},this.userData=window["userData"]}}]),n}(f["f"]);Object(s["a"])([Object(f["c"])({type:String,default:"title"})],re.prototype,"msg",void 0),Object(s["a"])([Object(f["e"])()],re.prototype,"hello",void 0),Object(s["a"])([Object(f["e"])("aButton")],re.prototype,"button",void 0),re=Object(s["a"])([Object(f["a"])({name:"VuePropertyDecorator",components:{VueRef:P,VuePropSync:W,VuePropSyncArray:ae,VueModel:C,VueModelBase:J}})],re);var ce=re,oe=ce,ue=(n("4889"),Object(d["a"])(oe,g,_,!1,null,"3d911ed8",null)),ie=ue.exports,le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.docTitle))]),n("button",{on:{click:e.onclick}},[e._v("更改标题")])])},se=[],fe=function(e){Object(i["a"])(n,e);var t=Object(l["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return Object(u["a"])(n,[{key:"onclick",value:function(){this.docTitle="讲述VueSync!"+(new Date).toUTCString(),console.log(this.docTitle)}}]),n}(f["f"]);Object(s["a"])([Object(f["d"])("value",{type:String,default:"标题"})],fe.prototype,"docTitle",void 0),fe=Object(s["a"])([Object(f["a"])({name:"VueSync"})],fe);var pe=fe,be=pe,ve=Object(d["a"])(be,le,se,!1,null,null,null),de=ve.exports,he=function(e){Object(i["a"])(n,e);var t=Object(l["a"])(n);function n(){var e;return Object(o["a"])(this,n),e=t.apply(this,arguments),e.title="Vue.js",e.list=[],e}return n}(f["f"]);he=Object(s["a"])([Object(f["a"])({name:"Home",components:{VuePropertyDecorator:ie,VueSync:de}})],he);var je=he,Oe=je,me=Object(d["a"])(Oe,m,y,!1,null,null,null),ye=me.exports;a["default"].use(O["a"]);var ge=[{path:"/",name:"Home",component:ye},{path:"/about",name:"About",component:function(){return Promise.all([n.e("chunk-5497c013"),n.e("about")]).then(n.bind(null,"3c47"))}}],_e=new O["a"]({routes:ge}),ke=_e,we=n("2f62");a["default"].use(we["a"]);var De=new we["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Se=n("5c96"),Ve=n.n(Se);n("0fae");a["default"].use(Ve.a),a["default"].config.productionTip=!1,new a["default"]({router:ke,store:De,render:function(e){return e(j)}}).$mount("#app")},4:function(e,t,n){e.exports=n("3815")},4889:function(e,t,n){"use strict";var a=n("6a50"),r=n.n(a);r.a},"6a50":function(e,t,n){},"8cac":function(e,t,n){"use strict";var a=n("ee9f"),r=n.n(a);r.a},ee9f:function(e,t,n){},f3dc:function(e,t,n){e.exports=n.p+"assets/img/logo.82b9c7a5.png"}});