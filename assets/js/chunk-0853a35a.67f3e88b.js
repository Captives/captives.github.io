(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0853a35a"],{"29b7":function(e,t,n){"use strict";var i=n("cd69"),o=n.n(i);o.a},5912:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",[n("el-aside",{attrs:{width:"220px"}},[e.list.length?n("el-menu",{attrs:{router:!0,"default-active":e.selectIndex,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}},e._l(e.list,(function(t,i){return n("el-menu-item",{key:i,attrs:{index:"m"+(i+1),route:"/canvas"+t.to}},[n("i",{class:t.icon}),e._v(" "+e._s(t.label)+" ")])})),1):e._e()],1),n("el-container",[n("router-view"),n("el-footer")],1)],1)},o=[],r=(n("7db0"),n("c975"),n("ac1f"),n("1276"),{name:"Web",data:function(){return{selectIndex:"m1",list:[{label:"API",to:"/index",icon:"el-icon-printer"},{label:"视频绘图",to:"/video",icon:"el-icon-printer"},{label:"视频画面分屏",to:"/video-split",icon:"el-icon-printer"},{label:"视频画面拼接",to:"/video-splicing",icon:"el-icon-printer"},{label:"视频画面绿屏抠图",to:"/video-green-screen",icon:"el-icon-printer"},{label:"视频画面分割拷贝",to:"/video-split-copy",icon:"el-icon-printer"},{label:"fabric 基础",to:"/base",icon:"el-icon-printer"},{label:"视频绘图fabric",to:"/video-for-fabric",icon:"el-icon-printer"}]}},mounted:function(){var e=this.$route.path;e=e&&e.split("/"),e="/"+e[e.length-1],console.log(e);var t=this.list.find((function(t,n){return e==t.to}));this.selectIndex="m"+(this.list.indexOf(t)+1)}}),c=r,l=(n("29b7"),n("2877")),a=Object(l["a"])(c,i,o,!1,null,"322d7d1c",null);t["default"]=a.exports},"7db0":function(e,t,n){"use strict";var i=n("23e7"),o=n("b727").find,r=n("44d2"),c=n("ae40"),l="find",a=!0,d=c(l);l in[]&&Array(1)[l]((function(){a=!1})),i({target:"Array",proto:!0,forced:a||!d},{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),r(l)},c975:function(e,t,n){"use strict";var i=n("23e7"),o=n("4d64").indexOf,r=n("a640"),c=n("ae40"),l=[].indexOf,a=!!l&&1/[1].indexOf(1,-0)<0,d=r("indexOf"),s=c("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:a||!d||!s},{indexOf:function(e){return a?l.apply(this,arguments)||0:o(this,e,arguments.length>1?arguments[1]:void 0)}})},cd69:function(e,t,n){}}]);