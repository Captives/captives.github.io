(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ac42ef6"],{"0d31":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-table",{attrs:{data:t.tableData,stripe:""}},[n("el-table-column",{attrs:{label:"媒体流ID",align:"center"}},[n("el-table-column",{attrs:{label:"名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.label.substr(0,8))+"...")]}}])})],1),n("el-table-column",{attrs:{label:t.value&&t.value.id}},[n("el-table-column",{attrs:{prop:"kind",label:"类型",align:"center"}}),n("el-table-column",{attrs:{label:"id",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.id.substr(0,8))+"...")]}}])}),n("el-table-column",{attrs:{label:"state",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.readyState))]}}])}),n("el-table-column",{attrs:{label:"enabled",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.enabled))]}}])}),n("el-table-column",{attrs:{label:"muted",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.muted))]}}])}),t.edited?n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"移除轨道",placement:"left"}},[n("el-link",{staticClass:"el-icon-minus",on:{click:function(n){return t.removeTrack(e.row)}}})],1)]}}],null,!1,3439156443)}):t._e(),n("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-main",{staticClass:"table-expand"},[n("el-row",[n("h4",[t._v("Base:")]),n("el-col",{attrs:{span:12}},[t._v("label: "+t._s(e.row.label))]),n("el-col",{attrs:{span:12}},[t._v("ID: "+t._s(e.row.id))])],1),n("el-row",[n("h4",[t._v("Constraints:")]),t._l(e.row.getConstraints(),(function(e,o){return n("el-col",{key:o,attrs:{span:12}},[t._v(t._s(o)+" : "+t._s(e))])}))],2),n("el-row",[n("h4",[t._v("Settings:")]),t._l(e.row.getSettings(),(function(e,o){return n("el-col",{key:o,attrs:{span:12}},[t._v(t._s(o)+" : "+t._s(e))])}))],2),n("el-row",[n("h4",[t._v("Capabilities:")]),t._l(e.row.getCapabilities(),(function(e,o){return n("el-col",{key:o,attrs:{span:12}},[t._v(t._s(o)+" : "+t._s(e))])}))],2)],1)]}}])})],1)],1)},r=[],a=(n("99af"),{name:"StreamTracks",props:{value:{type:MediaStream,default:null},edited:{type:Boolean,default:!1}},data:function(){return{id:null,tableData:[]}},watch:{value:function(t){this.id=t.id,this.tableData=[],this.tableData=this.tableData.concat(t.getVideoTracks(),t.getAudioTracks())}},methods:{removeTrack:function(t){this.value&&(t.stop(),this.value.removeTrack(t),console.log("remove track id",t.label,t.id),this.$emit("input",this.value))}}}),s=a,i=(n("8449"),n("2877")),l=Object(i["a"])(s,o,r,!1,null,"553f836b",null);e["a"]=l.exports},"0ffd":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-main",{staticClass:"center"},[n("el-row",{attrs:{gutter:50}},[n("el-col",{staticClass:"center",attrs:{xs:24,sm:24,md:12}},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("Audio Stream")]),n("video",{ref:"localVideo",staticClass:"video-item",attrs:{autoplay:""}})],1),n("el-col",{staticClass:"center",attrs:{xs:24,sm:24,md:12}},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("Audio Stream Volume")]),t.soundMeter?n("el-form",{attrs:{"label-width":"80px"}},[n("el-form-item",{attrs:{label:"Instant:"}},[n("el-progress",{attrs:{"stroke-width":20,"text-inside":!0,percentage:Math.floor(500*t.soundMeter.instant)}})],1),n("el-form-item",{attrs:{label:"Slow:"}},[n("el-progress",{attrs:{"stroke-width":20,"text-inside":!0,percentage:Math.floor(500*t.soundMeter.slow),color:"#67C23A"}})],1),n("el-form-item",{attrs:{label:"Clip:"}},[n("el-progress",{attrs:{"stroke-width":20,"text-inside":!0,percentage:Math.floor(500*t.soundMeter.clip),color:"#F56C6C"}})],1)],1):t._e()],1)],1),n("StreamTracks",{model:{value:t.localStream,callback:function(e){t.localStream=e},expression:"localStream"}}),t.error?n("el-tag",{staticClass:"error",attrs:{type:"danger"}},[t._v(t._s(t.error))]):t._e(),n("vue-source",{attrs:{src:"webrtc/views/webrtc/AudioStreamVolume.vue",lang:"html"}})],1)},r=[],a=(n("4160"),n("d3b7"),n("159b"),n("0d31"));function s(t){this.context=t,this.instant=0,this.slow=0,this.clip=0,this.script=t.createScriptProcessor(2048,1,1);var e=this;this.script.onaudioprocess=function(t){var n,o=t.inputBuffer.getChannelData(0),r=0,a=0;for(n=0;n<o.length;++n)r+=o[n]*o[n],Math.abs(o[n])>.99&&(a+=1);e.instant=Math.sqrt(r/o.length),e.slow=.95*e.slow+.05*e.instant,e.clip=a/o.length}}s.prototype.connectToSource=function(t,e){console.log("SoundMeter connecting");try{this.mic=this.context.createMediaStreamSource(t),this.mic.connect(this.script),this.script.connect(this.context.destination),"undefined"!==typeof e&&e(null)}catch(n){console.error(n),"undefined"!==typeof e&&e(n)}},s.prototype.stop=function(){this.mic.disconnect(),this.script.disconnect()};var i=s,l={name:"AudioStreamVolume",components:{StreamTracks:a["a"]},data:function(){return{localStream:null,options:{audio:!0,video:!1},soundMeter:null,error:null}},methods:{init:function(){var t=this;this.initLocalStream().then((function(e){t.addAudioContextListener(e)}))},initLocalStream:function(){var t=this,e=this,n=this.$refs.localVideo;return new Promise((function(o,r){navigator.mediaDevices.getUserMedia(t.options).then((function(e){t.localStream=e,e.oninactive=function(){console.log("Stream inactive")},n.addEventListener("loadedmetadata",(function(t){console.log("AudioTracks",e.getAudioTracks()),console.log("VideoTracks",e.getVideoTracks())})),n.srcObject=e,o(e)}))["catch"]((function(t){e.error=t,console.log("navigator.getUserMedia error: ",t),r(t)}))}))},addAudioContextListener:function(t){var e=this;try{var n=window.AudioContext||window.webkitAudioContext,o=new n;this.soundMeter=new i(o),this.soundMeter.connectToSource(t,(function(t){t&&(e.error=t)}))}catch(r){alert("Web Audio API not supported.")}}},mounted:function(){this.init()},destroyed:function(){this.soundMeter&&this.soundMeter.stop(),this.localStream&&this.localStream.getTracks().forEach((function(t){t.stop()}))}},c=l,u=(n("cb03"),n("2877")),d=Object(u["a"])(c,o,r,!1,null,"2fa23f7c",null);e["default"]=d.exports},"1dde":function(t,e,n){var o=n("d039"),r=n("b622"),a=n("2d00"),s=r("species");t.exports=function(t){return a>=51||!o((function(){var e=[],n=e.constructor={};return n[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"51ed":function(t,e,n){},"7d03":function(t,e,n){},8418:function(t,e,n){"use strict";var o=n("c04e"),r=n("9bf2"),a=n("5c6c");t.exports=function(t,e,n){var s=o(e);s in t?r.f(t,s,a(0,n)):t[s]=n}},8449:function(t,e,n){"use strict";var o=n("7d03"),r=n.n(o);r.a},"99af":function(t,e,n){"use strict";var o=n("23e7"),r=n("d039"),a=n("e8b5"),s=n("861d"),i=n("7b0b"),l=n("50c4"),c=n("8418"),u=n("65f0"),d=n("1dde"),f=n("b622"),p=n("2d00"),m=f("isConcatSpreadable"),h=9007199254740991,v="Maximum allowed index exceeded",b=p>=51||!r((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),_=d("concat"),g=function(t){if(!s(t))return!1;var e=t[m];return void 0!==e?!!e:a(t)},w=!b||!_;o({target:"Array",proto:!0,forced:w},{concat:function(t){var e,n,o,r,a,s=i(this),d=u(s,0),f=0;for(e=-1,o=arguments.length;e<o;e++)if(a=-1===e?s:arguments[e],g(a)){if(r=l(a.length),f+r>h)throw TypeError(v);for(n=0;n<r;n++,f++)n in a&&c(d,f,a[n])}else{if(f>=h)throw TypeError(v);c(d,f++,a)}return d.length=f,d}})},cb03:function(t,e,n){"use strict";var o=n("51ed"),r=n.n(o);r.a}}]);