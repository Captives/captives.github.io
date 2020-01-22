(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b6e2f94"],{"048d":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-main",[a("url-input",{attrs:{list:t.$videoList},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}}),a("el-row",{attrs:{gutter:50}},[a("el-col",{staticClass:"center",attrs:{xs:24,sm:24,md:12}},[a("el-divider",{attrs:{"content-position":"left"}},[t._v("Video")]),a("video",{ref:"localVideo",staticClass:"video-item",attrs:{src:t.url,controls:"",muted:"",loop:"",autoplay:""},domProps:{muted:!0}})],1),a("el-col",{staticClass:"center",attrs:{xs:24,sm:24,md:12}},[a("el-divider",{attrs:{"content-position":"left"}},[t._v("Capture")]),a("video",{ref:"playVideo",staticClass:"video-item",attrs:{autoplay:""}})],1)],1),a("StreamTracks",{model:{value:t.stream,callback:function(e){t.stream=e},expression:"stream"}}),a("vue-source",{attrs:{src:"webrtc/views/webrtc/VideoStreamFromVideo.vue",lang:"html"}})],1)},n=[],l=a("7775"),o={name:"VideoStreamFromVideo",components:{StreamTracks:l["a"]},data:function(){return{url:"",stream:null}},methods:{oncanplay:function(t){var e=this,a=0,r=this.$refs.playVideo;t.captureStream?this.stream=t.captureStream(a):t.mozCaptureStream?this.stream=t.mozCaptureStream(a):(console.error("Stream capture is not supported"),this.stream=null),r.addEventListener("loadedmetadata",(function(t){console.log("AudioTracks",e.stream.getAudioTracks()),console.log("VideoTracks",e.stream.getVideoTracks())})),r.autoplay=!0,r.srcObject=this.stream}},mounted:function(){var t=this,e=this.$refs.localVideo;e.addEventListener("canplay",(function(){t.oncanplay(e)}))},destroyed:function(){this.stream&&(this.stream=null)}},s=o,i=(a("d488"),a("2877")),c=Object(i["a"])(s,r,n,!1,null,"9ef1f240",null);e["default"]=c.exports},"1dde":function(t,e,a){var r=a("d039"),n=a("b622"),l=a("60ae"),o=n("species");t.exports=function(t){return l>=51||!r((function(){var e=[],a=e.constructor={};return a[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1f93":function(t,e,a){},"37d3":function(t,e,a){"use strict";var r=a("1f93"),n=a.n(r);n.a},7775:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-table",{attrs:{data:t.tableData,stripe:""}},[a("el-table-column",{attrs:{label:"媒体流ID",align:"center"}},[a("el-table-column",{attrs:{label:"名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.label.substr(0,8))+"...")]}}])})],1),a("el-table-column",{attrs:{label:t.value&&t.value.id}},[a("el-table-column",{attrs:{prop:"kind",label:"类型",align:"center"}}),a("el-table-column",{attrs:{label:"id",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.id.substr(0,8))+"...")]}}])}),a("el-table-column",{attrs:{label:"state",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.readyState))]}}])}),a("el-table-column",{attrs:{label:"enabled",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.enabled))]}}])}),a("el-table-column",{attrs:{label:"muted",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.muted))]}}])}),t.edited?a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"移除轨道",placement:"left"}},[a("el-link",{staticClass:"el-icon-minus",on:{click:function(a){return t.removeTrack(e.row)}}})],1)]}}],null,!1,3439156443)}):t._e(),a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-main",{staticClass:"table-expand"},[a("el-row",[a("h4",[t._v("Base:")]),a("el-col",{attrs:{span:12}},[t._v("label: "+t._s(e.row.label))]),a("el-col",{attrs:{span:12}},[t._v("ID: "+t._s(e.row.id))])],1),a("el-row",[a("h4",[t._v("Constraints:")]),t._l(e.row.getConstraints(),(function(e,r){return a("el-col",{key:r,attrs:{span:12}},[t._v(t._s(r)+" : "+t._s(e))])}))],2),a("el-row",[a("h4",[t._v("Settings:")]),t._l(e.row.getSettings(),(function(e,r){return a("el-col",{key:r,attrs:{span:12}},[t._v(t._s(r)+" : "+t._s(e))])}))],2),a("el-row",[a("h4",[t._v("Capabilities:")]),t._l(e.row.getCapabilities(),(function(e,r){return a("el-col",{key:r,attrs:{span:12}},[t._v(t._s(r)+" : "+t._s(e))])}))],2)],1)]}}])})],1)],1)},n=[],l=(a("99af"),{name:"StreamTracks",props:{value:{type:MediaStream,default:null},edited:{type:Boolean,default:!1}},data:function(){return{id:null,tableData:[]}},watch:{value:function(t){this.id=t.id,this.tableData=[],this.tableData=this.tableData.concat(t.getVideoTracks(),t.getAudioTracks())}},methods:{removeTrack:function(t){this.value&&(t.stop(),this.value.removeTrack(t),console.log("remove track id",t.label,t.id),this.$emit("input",this.value))}}}),o=l,s=(a("37d3"),a("2877")),i=Object(s["a"])(o,r,n,!1,null,"82e6b8c4",null);e["a"]=i.exports},8418:function(t,e,a){"use strict";var r=a("c04e"),n=a("9bf2"),l=a("5c6c");t.exports=function(t,e,a){var o=r(e);o in t?n.f(t,o,l(0,a)):t[o]=a}},"8f99":function(t,e,a){},"99af":function(t,e,a){"use strict";var r=a("23e7"),n=a("d039"),l=a("e8b5"),o=a("861d"),s=a("7b0b"),i=a("50c4"),c=a("8418"),u=a("65f0"),d=a("1dde"),f=a("b622"),m=a("60ae"),p=f("isConcatSpreadable"),v=9007199254740991,b="Maximum allowed index exceeded",_=m>=51||!n((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),h=d("concat"),k=function(t){if(!o(t))return!1;var e=t[p];return void 0!==e?!!e:l(t)},w=!_||!h;r({target:"Array",proto:!0,forced:w},{concat:function(t){var e,a,r,n,l,o=s(this),d=u(o,0),f=0;for(e=-1,r=arguments.length;e<r;e++)if(l=-1===e?o:arguments[e],k(l)){if(n=i(l.length),f+n>v)throw TypeError(b);for(a=0;a<n;a++,f++)a in l&&c(d,f,l[a])}else{if(f>=v)throw TypeError(b);c(d,f++,l)}return d.length=f,d}})},d488:function(t,e,a){"use strict";var r=a("8f99"),n=a.n(r);n.a}}]);