(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2467db56"],{"50c5":function(e,t,l){},"570c":function(e,t,l){"use strict";var n=l("50c5"),r=l.n(n);r.a},b9ec:function(e,t,l){e.exports=l.p+"assets/img/logo.82b9c7a5.png"},cb6de:function(e,t,l){"use strict";l.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"center"},[n("img",{attrs:{alt:"Vue logo",src:l("b9ec")}}),n("VueSync",{attrs:{title:e.title},on:{"update:title":function(t){e.title=t}}}),n("VueModel",{model:{value:e.list,callback:function(t){e.list=t},expression:"list"}}),n("VueModelBase",{attrs:{title:e.list},model:{value:e.list,callback:function(t){e.list=t},expression:"list"}}),n("ul",e._l(e.list,(function(t,l){return n("li",{key:l},[e._v(e._s(t.name)+" | "+e._s(t.age))])})),0),n("HelloWorld",{attrs:{msg:e.title}})],1)},r=[],i=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"hello"},[l("h1",[e._v(e._s(e.msg))]),e._m(0),l("h3",[e._v("Installed CLI Plugins")]),e._m(1),l("h3",[e._v("Essential Links")]),e._m(2),l("h3",[e._v("Ecosystem")]),e._m(3),l("h3",[e._v("TypeScript")]),e._m(4)])},o=[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),l("br"),e._v(" check out the "),l("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ul",[l("li",[l("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),l("li",[l("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),l("li",[l("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ul",[l("li",[l("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),l("li",[l("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),l("li",[l("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),l("li",[l("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),l("li",[l("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ul",[l("li",[l("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),l("li",[l("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),l("li",[l("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),l("li",[l("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),l("li",[l("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ul",[l("li",[l("a",{attrs:{href:"https://www.tslang.cn/index.html"}},[e._v("TypeScript 中文网")])]),l("li",[l("a",{attrs:{href:"https://basarat.gitbook.io/typescript/"}},[e._v("TypeScript深入研究")])]),l("li",[l("a",{attrs:{href:"https://gyufei.github.io/2018/07/23/vue-with-typescript/",target:"_blank",rel:"noopener"}},[e._v("使用 TypeScript 构建 Vue 项目")])])])}],s={name:"HelloWorld",props:{msg:String}},a=s,u=(l("570c"),l("2877")),c=Object(u["a"])(a,i,o,!1,null,"5427d893",null),p=c.exports,v=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("h1",[e._v(e._s(e.title))]),l("button",{on:{click:e.onClick}},[e._v("更改标题")])])},h=[],_={name:"VueSync",props:{title:{type:String,default:"标题"}},computed:{docTitle:{get:function(){return this.title},set:function(e){this.$emit("update:title",e)}}},methods:{onClick:function(){this.docTitle="This is Vue.js Web App !"}}},f=_,m=Object(u["a"])(f,v,h,!1,null,null,null),g=m.exports,d=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("h1",[e._v(e._s(e.title))]),l("button",{on:{click:e.onClick}},[e._v("更改标题 - model")])])},b=[],k={name:"VueModel",model:{prop:"title",event:"change"},props:{title:{type:Array,default:function(){}}},methods:{onClick:function(){var e=this.title;e.push({name:"BB",age:12304}),this.$emit("change",e)}}},j=k,y=Object(u["a"])(j,d,b,!1,null,null,null),w=y.exports,C=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("h1",[e._v(e._s(e.title))]),l("button",{on:{click:e.onClick}},[e._v("增加项A")]),l("button",{on:{click:e.onClickB}},[e._v("增加项B")])])},$=[],V={name:"VueModelBase",props:{value:{type:Array,default:function(){}},title:{type:Array,default:function(){}}},methods:{onClick:function(){var e=this.title;e.push({name:"BB",age:12304}),this.$emit("input:title",e)},onClickB:function(){var e=this.title;e.push({name:"BB",age:12304}),this.$emit("input",e)}}},B=V,E=Object(u["a"])(B,C,$,!1,null,null,null),x=E.exports,S={name:"home",components:{HelloWorld:p,VueSync:g,VueModel:w,VueModelBase:x},data:function(){return{list:[{name:"AA",age:10}],title:"Welcome to Your Vue.js App !"}}},A=S,T=Object(u["a"])(A,n,r,!1,null,null,null);t["default"]=T.exports}}]);