(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41a166ec"],{"3fb8":function(t,e,i){},7794:function(t,e,i){"use strict";i.r(e);var l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-main",[i("el-row",{staticStyle:{width:"100%",height:"301px",overflow:"hidden"}},[i("VueScroller",{attrs:{data:t.list,"class-option":{limitMoveNum:4,direction:2}}},[i("Hotel",{attrs:{list:t.list}})],1)],1),i("el-row",{staticStyle:{width:"100%",height:"301px",overflow:"hidden"}},[i("VueScroller",{attrs:{data:t.list,"class-option":{limitMoveNum:4,direction:3,hoverStop:!1}}},[i("Hotel",{attrs:{list:t.list}})],1)],1),i("div",{staticStyle:{width:"227px",height:"100%",overflow:"hidden",position:"absolute",top:"0",left:"50px"}},[i("VueScroller",{attrs:{data:t.list,"class-option":{direction:0}}},[i("Hotel",{staticStyle:{"flex-direction":"column"},attrs:{list:t.list}})],1)],1),i("div",{staticStyle:{width:"227px",height:"100%",overflow:"hidden",position:"absolute",top:"0",right:"50px"}},[i("VueScroller",{attrs:{data:t.list,"class-option":{direction:1}}},[i("Hotel",{staticStyle:{"flex-direction":"column"},attrs:{list:t.list}})],1)],1),i("vue-source",{attrs:{src:"guide/views/web/VueSeamlessScroll.vue",lang:"html"}})],1)},s=[],o=i("a939"),n=i.n(o),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",t._l(t.list,(function(e){return i("li",{key:e.id,style:{"background-image":"url("+e.listImg+")"}},[i("span",[t._v(t._s(e.title))])])})),0)},a=[],c={name:"Hotel",props:{list:{type:Array,defaute:function(){return[]}}}},u=c,d=(i("e2d5"),i("2877")),f=Object(d["a"])(u,r,a,!1,null,"80817544",null),h=f.exports,p={name:"VueSeamlessScroll",components:{VueScroller:n.a,Hotel:h},data:function(){return{list:[]}},created:function(){var t=this;this.$fetch("/assets/hotel.json").then((function(e){t.list=e}))}},v=p,w=(i("e34b"),Object(d["a"])(v,l,s,!1,null,"d0036498",null));e["default"]=w.exports},e2d5:function(t,e,i){"use strict";var l=i("e2ef"),s=i.n(l);s.a},e2ef:function(t,e,i){},e34b:function(t,e,i){"use strict";var l=i("3fb8"),s=i.n(l);s.a}}]);