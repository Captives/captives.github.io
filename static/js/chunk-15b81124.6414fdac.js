(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15b81124"],{"0540":function(t,e,i){"use strict";var a=i("1f0f"),n=i.n(a);n.a},"1f0f":function(t,e,i){},"6e44":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-main",[i("url-input",{attrs:{list:t.$videoList},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}}),i("el-row",{attrs:{gutter:50}},[i("el-col",{staticClass:"center",attrs:{xs:24,sm:24,md:12}},[i("el-divider",{attrs:{"content-position":"left"}},[t._v("Video")]),i("video",{ref:"localVideo",staticClass:"video-item",attrs:{src:t.url,controls:"",muted:"",loop:"",autoplay:""},domProps:{muted:!0}})],1),i("el-col",{staticClass:"center",attrs:{xs:24,sm:24,md:12}},[i("el-divider",{attrs:{"content-position":"left"}},[t._v("Canvas")]),i("canvas",{ref:"canvas",staticClass:"video-item"})],1)],1),i("el-row",[t._v("通过将video元素的功能与结合使用canvas，您可以实时处理视频数据，")]),i("vue-source",{attrs:{value:"src/webrtc/views/canvas/DrawVideo.vue",lang:"html"}})],1)},n=[],s={name:"DrawVideo",data:function(){return{url:"",canvas:null,context:null}},methods:{init:function(t){var e=this.$refs.canvas;e.setAttribute("width",t.target.offsetWidth),e.setAttribute("height",t.target.offsetHeight),this.context=e.getContext("2d"),this.animate()},animate:function(){var t=this.$refs.localVideo;this.context.clearRect(0,0,t.offsetWidth,t.offsetHeight),this.context.drawImage(t,0,0,t.offsetWidth,t.offsetHeight),"requestAnimationFrame"in window?requestAnimationFrame(this.animate):"webkitRequestAnimationFrame"in window?webkitRequestAnimationFrame(this.animate):"msRequestAnimationFrame"in window?msRequestAnimationFrame(this.animate):"mozRequestAnimationFrame"in window&&mozRequestAnimationFrame(this.animate)}},mounted:function(){var t=this.$refs.localVideo;t.addEventListener("canplay",this.init)}},o=s,r=(i("0540"),i("2877")),c=Object(r["a"])(o,a,n,!1,null,"861c79be",null);e["default"]=c.exports}}]);