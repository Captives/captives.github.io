(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f95583a6"],{5615:function(t,e,a){"use strict";var n=a("5cf8"),i=a.n(n);i.a},"5cf8":function(t,e,a){},ca70:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-main",[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:10}},[t._v("动态添加iframe页面")]),t.activateData?a("el-col",{attrs:{span:13}},[t._v(" 当前激活交互窗口"+t._s(t.activateData.id)+" "),a("el-button",{attrs:{type:"danger"},on:{click:t.sendPageIframeHandler}},[t._v("发送指令")])],1):t._e(),a("el-col",{attrs:{span:1}},[a("el-button",{attrs:{type:"primary",tyle:"small"},on:{click:t.addHandler}},[t._v("增加")])],1)],1),a("el-carousel",{attrs:{trigger:"click",height:"500px",interval:6e4}},t._l(t.list,(function(t){return a("el-carousel-item",{key:t.id},[a("iframe",{attrs:{id:"iframe_"+t.id,src:t.src,frameborder:"0",title:t.title}})])})),1)],1)},i=[],r={name:"DynamicIframeDeliver",data:function(){return{activateData:null,list:[{id:11,title:"窗口1",src:"vue.html"}]}},mounted:function(){window.addEventListener("message",this.onmessageHandler.bind(this))},methods:{addHandler:function(){var t=Math.floor(999999*Math.random());this.list.push({id:t,title:"窗口 "+t,src:"vue.html?v="+t})},onmessageHandler:function(t){var e=t.data;e.event&&"actived"===e.event&&(this.activateData=e),console.log("VUE --",t.data)},sendPageIframeHandler:function(){var t=document.getElementById(this.activateData.id);t.contentWindow.command((new Date).toLocaleTimeString())}}},c=r,l=(a("5615"),a("2877")),s=function(t){t.options.__source="src/guide/views/web/DynamicIframeDeliver.vue"},o=s,d=Object(l["a"])(c,n,i,!1,null,"572a180d",null);"function"===typeof o&&o(d);e["default"]=d.exports}}]);