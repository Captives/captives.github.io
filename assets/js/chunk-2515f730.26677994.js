(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2515f730"],{"3b00":function(e,t,r){"use strict";var o=r("572b"),n=r.n(o);n.a},"3ca3":function(e,t,r){"use strict";var o=r("6547").charAt,n=r("69f3"),a=r("7dd0"),i="String Iterator",c=n.set,d=n.getterFor(i);a(String,"String",(function(e){c(this,{type:i,string:String(e),index:0})}),(function(){var e,t=d(this),r=t.string,n=t.index;return n>=r.length?{value:void 0,done:!0}:(e=o(r,n),t.index+=e.length,{value:e,done:!1})}))},"4b8b":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-main",{staticClass:"center"},[r("el-row",{attrs:{gutter:50}},[r("el-col",{staticClass:"center",attrs:{xs:24,sm:24,md:12}},[r("el-divider",{attrs:{"content-position":"left"}},[e._v("Video Player")]),r("video",{ref:"localVideo",staticClass:"video-item"}),r("el-progress",{attrs:{percentage:e.percentage}})],1)],1),e.error?r("el-tag",{staticClass:"error",attrs:{type:"danger"}},[e._v(e._s(e.error))]):e._e(),r("vue-source",{attrs:{src:"guide/views/web/MediaSource.vue",lang:"html"}})],1)},n=[],a=(r("d3b7"),r("3ca3"),r("ddb0"),r("2b3d"),{name:"MediaSource",data:function(){return{mimeCodec:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',mediaSource:null,percentage:0,error:null}},mounted:function(){this.init()},methods:{fetch:function(e){var t=this;return new Promise((function(r,o){console.log("fetch",e);var n=new XMLHttpRequest;n.open("get",e),n.responseType="arraybuffer",n.onloadstart=function(){return t.percentage=0},n.onload=function(){t.percentage=100,r(n.response)},n.onprogress=function(e){t.percentage=Math.round(100*e.loaded/e.total)},n.send()}))},init:function(){var e=this,t=this.$refs.localVideo;"MediaSource"in window&&MediaSource.isTypeSupported(this.mimeCodec)?(this.mediaSource=new MediaSource,console.log("1, mediaSource.readyState",this.mediaSource.readyState),t.src=URL.createObjectURL(this.mediaSource),this.mediaSource.addEventListener("sourceopen",(function(){console.log("2, mediaSource.readyState",e.mediaSource.readyState);var r=e.mediaSource.addSourceBuffer(e.mimeCodec);e.fetch("/medias/Piper_720P.mp4").then((function(o){r.addEventListener("updateend",(function(){console.log("4, mediaSource.readyState",e.mediaSource.readyState),e.mediaSource.endOfStream(),t.play()})),r.appendBuffer(o),console.log("3, mediaSource.readyState",e.mediaSource.readyState)}))}))):console.log("不支持MIME类型编解码",this.mimeCodec)}}}),i=a,c=(r("3b00"),r("2877")),d=function(e){e.options.__source="src/guide/views/web/MediaSource.vue"},s=d,u=Object(c["a"])(i,o,n,!1,null,"6fbf4e5c",null);"function"===typeof s&&s(u);t["default"]=u.exports},"572b":function(e,t,r){},ddb0:function(e,t,r){var o=r("da84"),n=r("fdbc"),a=r("e260"),i=r("9112"),c=r("b622"),d=c("iterator"),s=c("toStringTag"),u=a.values;for(var l in n){var f=o[l],p=f&&f.prototype;if(p){if(p[d]!==u)try{i(p,d,u)}catch(S){p[d]=u}if(p[s]||i(p,s,l),n[l])for(var m in a)if(p[m]!==a[m])try{i(p,m,a[m])}catch(S){p[m]=a[m]}}}}}]);