(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66b0b3c4"],{"0d31":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-table",{attrs:{data:e.tableData,stripe:""}},[a("el-table-column",{attrs:{label:"媒体流ID",align:"center"}},[a("el-table-column",{attrs:{label:"名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.label.substr(0,8))+"...")]}}])})],1),a("el-table-column",{attrs:{label:e.value&&e.value.id}},[a("el-table-column",{attrs:{prop:"kind",label:"类型",align:"center"}}),a("el-table-column",{attrs:{label:"id",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.id.substr(0,8))+"...")]}}])}),a("el-table-column",{attrs:{label:"state",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.readyState))]}}])}),a("el-table-column",{attrs:{label:"enabled",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.enabled))]}}])}),a("el-table-column",{attrs:{label:"muted",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.muted))]}}])}),e.edited?a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"移除轨道",placement:"left"}},[a("el-link",{staticClass:"el-icon-minus",on:{click:function(a){return e.removeTrack(t.row)}}})],1)]}}],null,!1,3439156443)}):e._e(),a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-main",{staticClass:"table-expand"},[a("el-row",[a("h4",[e._v("Base:")]),a("el-col",{attrs:{span:12}},[e._v("label: "+e._s(t.row.label))]),a("el-col",{attrs:{span:12}},[e._v("ID: "+e._s(t.row.id))])],1),a("el-row",[a("h4",[e._v("Constraints:")]),e._l(t.row.getConstraints(),(function(t,n){return a("el-col",{key:n,attrs:{span:12}},[e._v(e._s(n)+" : "+e._s(t))])}))],2),a("el-row",[a("h4",[e._v("Settings:")]),e._l(t.row.getSettings(),(function(t,n){return a("el-col",{key:n,attrs:{span:12}},[e._v(e._s(n)+" : "+e._s(t))])}))],2),a("el-row",[a("h4",[e._v("Capabilities:")]),e._l(t.row.getCapabilities(),(function(t,n){return a("el-col",{key:n,attrs:{span:12}},[e._v(e._s(n)+" : "+e._s(t))])}))],2)],1)]}}])})],1)],1)},r=[],l=(a("99af"),{name:"StreamTracks",props:{value:{type:MediaStream,default:null},edited:{type:Boolean,default:!1}},data:function(){return{id:null,tableData:[]}},watch:{value:function(e){this.id=e.id,this.tableData=[],this.tableData=this.tableData.concat(e.getVideoTracks(),e.getAudioTracks())}},methods:{removeTrack:function(e){this.value&&(e.stop(),this.value.removeTrack(e),console.log("remove track id",e.label,e.id),this.$emit("input",this.value))}}}),o=l,c=(a("8449"),a("2877")),s=Object(c["a"])(o,n,r,!1,null,"553f836b",null);t["a"]=s.exports},"1dde":function(e,t,a){var n=a("d039"),r=a("b622"),l=a("2d00"),o=r("species");e.exports=function(e){return l>=51||!n((function(){var t=[],a=t.constructor={};return a[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"78bc":function(e,t,a){"use strict";var n=a("9bf7"),r=a.n(n);r.a},"7d03":function(e,t,a){},8418:function(e,t,a){"use strict";var n=a("c04e"),r=a("9bf2"),l=a("5c6c");e.exports=function(e,t,a){var o=n(t);o in e?r.f(e,o,l(0,a)):e[o]=a}},8449:function(e,t,a){"use strict";var n=a("7d03"),r=a.n(n);r.a},"99af":function(e,t,a){"use strict";var n=a("23e7"),r=a("d039"),l=a("e8b5"),o=a("861d"),c=a("7b0b"),s=a("50c4"),i=a("8418"),u=a("65f0"),d=a("1dde"),f=a("b622"),b=a("2d00"),v=f("isConcatSpreadable"),m=9007199254740991,p="Maximum allowed index exceeded",_=b>=51||!r((function(){var e=[];return e[v]=!1,e.concat()[0]!==e})),h=d("concat"),g=function(e){if(!o(e))return!1;var t=e[v];return void 0!==t?!!t:l(e)},k=!_||!h;n({target:"Array",proto:!0,forced:k},{concat:function(e){var t,a,n,r,l,o=c(this),d=u(o,0),f=0;for(t=-1,n=arguments.length;t<n;t++)if(l=-1===t?o:arguments[t],g(l)){if(r=s(l.length),f+r>m)throw TypeError(p);for(a=0;a<r;a++,f++)a in l&&i(d,f,l[a])}else{if(f>=m)throw TypeError(p);i(d,f++,l)}return d.length=f,d}})},"9bf7":function(e,t,a){},e253:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-main",{staticClass:"center"},[a("video",{ref:"localVideo",staticClass:"video-item",attrs:{autoplay:""}}),a("StreamTracks",{model:{value:e.localStream,callback:function(t){e.localStream=t},expression:"localStream"}}),e.error?a("el-tag",{staticClass:"error",attrs:{type:"danger"}},[e._v(e._s(e.error))]):e._e(),a("vue-source",{attrs:{src:"webrtc/views/webrtc/VideoStreamFromUserMedia.vue",lang:"html"}})],1)},r=[],l=(a("4160"),a("159b"),a("0d31")),o={name:"UserMedia",components:{StreamTracks:l["a"]},data:function(){return{localStream:null,options:{audio:!0,video:{width:{exact:720},height:{exact:405}}},error:null}},methods:{init:function(){var e=this,t=this,a=this.$refs.localVideo;navigator.mediaDevices.getUserMedia(this.options).then((function(t){e.localStream=t,t.oninactive=function(){console.log("Stream inactive")},a.addEventListener("loadedmetadata",(function(e){console.log("AudioTracks",t.getAudioTracks()),console.log("VideoTracks",t.getVideoTracks())})),a.srcObject=t}))["catch"]((function(e){t.error=e,console.log("navigator.getUserMedia error: ",e)}))}},mounted:function(){this.init()},destroyed:function(){this.localStream&&this.localStream.getTracks().forEach((function(e){e.stop()}))}},c=o,s=(a("78bc"),a("2877")),i=Object(s["a"])(c,n,r,!1,null,"3d6fe9c9",null);t["default"]=i.exports}}]);