(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-769f4dfa"],{"0b25":function(t,e,r){},"159b":function(t,e,r){var n=r("da84"),o=r("fdbc"),a=r("17c2"),i=r("9112");for(var s in o){var c=n[s],l=c&&c.prototype;if(l&&l.forEach!==a)try{i(l,"forEach",a)}catch(u){l.forEach=a}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,o=r("b301");t.exports=o("forEach")?function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),a=r("60ae"),i=o("species");t.exports=function(t){return a>=51||!n((function(){var e=[],r=e.constructor={};return r[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1f93":function(t,e,r){},"37d3":function(t,e,r){"use strict";var n=r("1f93"),o=r.n(n);o.a},4160:function(t,e,r){"use strict";var n=r("23e7"),o=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},6483:function(t,e,r){"use strict";var n=r("0b25"),o=r.n(n);o.a},"65f0":function(t,e,r){var n=r("861d"),o=r("e8b5"),a=r("b622"),i=a("species");t.exports=function(t,e){var r;return o(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[i],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},7775:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-table",{attrs:{data:t.tableData,stripe:""}},[r("el-table-column",{attrs:{label:"媒体流ID",align:"center"}},[r("el-table-column",{attrs:{label:"名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.label.substr(0,8))+"...")]}}])})],1),r("el-table-column",{attrs:{label:t.value&&t.value.id}},[r("el-table-column",{attrs:{prop:"kind",label:"类型",align:"center"}}),r("el-table-column",{attrs:{label:"id",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.id.substr(0,8))+"...")]}}])}),r("el-table-column",{attrs:{label:"state",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.readyState))]}}])}),r("el-table-column",{attrs:{label:"enabled",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.enabled))]}}])}),r("el-table-column",{attrs:{label:"muted",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.muted))]}}])}),t.edited?r("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"移除轨道",placement:"left"}},[r("el-link",{staticClass:"el-icon-minus",on:{click:function(r){return t.removeTrack(e.row)}}})],1)]}}],null,!1,3439156443)}):t._e(),r("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-main",{staticClass:"table-expand"},[r("el-row",[r("h4",[t._v("Base:")]),r("el-col",{attrs:{span:12}},[t._v("label: "+t._s(e.row.label))]),r("el-col",{attrs:{span:12}},[t._v("ID: "+t._s(e.row.id))])],1),r("el-row",[r("h4",[t._v("Constraints:")]),t._l(e.row.getConstraints(),(function(e,n){return r("el-col",{key:n,attrs:{span:12}},[t._v(t._s(n)+" : "+t._s(e))])}))],2),r("el-row",[r("h4",[t._v("Settings:")]),t._l(e.row.getSettings(),(function(e,n){return r("el-col",{key:n,attrs:{span:12}},[t._v(t._s(n)+" : "+t._s(e))])}))],2),r("el-row",[r("h4",[t._v("Capabilities:")]),t._l(e.row.getCapabilities(),(function(e,n){return r("el-col",{key:n,attrs:{span:12}},[t._v(t._s(n)+" : "+t._s(e))])}))],2)],1)]}}])})],1)],1)},o=[],a=(r("99af"),{name:"StreamTracks",props:{value:{type:MediaStream,default:null},edited:{type:Boolean,default:!1}},data:function(){return{id:null,tableData:[]}},watch:{value:function(t){this.id=t.id,this.tableData=[],this.tableData=this.tableData.concat(t.getVideoTracks(),t.getAudioTracks())}},methods:{removeTrack:function(t){this.value&&(t.stop(),this.value.removeTrack(t),console.log("remove track id",t.label,t.id),this.$emit("input",this.value))}}}),i=a,s=(r("37d3"),r("2877")),c=Object(s["a"])(i,n,o,!1,null,"82e6b8c4",null);e["a"]=c.exports},8418:function(t,e,r){"use strict";var n=r("c04e"),o=r("9bf2"),a=r("5c6c");t.exports=function(t,e,r){var i=n(e);i in t?o.f(t,i,a(0,r)):t[i]=r}},"99af":function(t,e,r){"use strict";var n=r("23e7"),o=r("d039"),a=r("e8b5"),i=r("861d"),s=r("7b0b"),c=r("50c4"),l=r("8418"),u=r("65f0"),d=r("1dde"),f=r("b622"),p=r("60ae"),h=f("isConcatSpreadable"),m=9007199254740991,v="Maximum allowed index exceeded",b=p>=51||!o((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),g=d("concat"),S=function(t){if(!i(t))return!1;var e=t[h];return void 0!==e?!!e:a(t)},w=!b||!g;n({target:"Array",proto:!0,forced:w},{concat:function(t){var e,r,n,o,a,i=s(this),d=u(i,0),f=0;for(e=-1,n=arguments.length;e<n;e++)if(a=-1===e?i:arguments[e],S(a)){if(o=c(a.length),f+o>m)throw TypeError(v);for(r=0;r<o;r++,f++)r in a&&l(d,f,a[r])}else{if(f>=m)throw TypeError(v);l(d,f++,a)}return d.length=f,d}})},b727:function(t,e,r){var n=r("f8c2"),o=r("44ad"),a=r("7b0b"),i=r("50c4"),s=r("65f0"),c=[].push,l=function(t){var e=1==t,r=2==t,l=3==t,u=4==t,d=6==t,f=5==t||d;return function(p,h,m,v){for(var b,g,S=a(p),w=o(S),_=n(h,m,3),y=i(w.length),k=0,L=v||s,x=e?L(p,y):r?L(p,0):void 0;y>k;k++)if((f||k in w)&&(b=w[k],g=_(b,k,S),t))if(e)x[k]=g;else if(g)switch(t){case 3:return!0;case 5:return b;case 6:return k;case 2:c.call(x,b)}else if(u)return!1;return d?-1:l||u?u:x}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},c638:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-main",{staticClass:"center"},[r("el-row",{attrs:{gutter:50}},[r("el-col",{staticClass:"center",attrs:{xs:24,sm:24,md:12}},[r("el-divider",{attrs:{"content-position":"left"}},[t._v("Audio Stream")]),r("video",{ref:"localVideo",staticClass:"video-item",attrs:{autoplay:""}})],1),r("el-col",{staticClass:"center",attrs:{xs:24,sm:24,md:12}},[r("el-divider",{attrs:{"content-position":"left"}},[t._v("Audio Stream Volume")]),t.soundMeter?r("el-form",{attrs:{"label-width":"80px"}},[r("el-form-item",{attrs:{label:"Instant:"}},[r("el-progress",{attrs:{"stroke-width":20,"text-inside":!0,percentage:Math.floor(500*t.soundMeter.instant)}})],1),r("el-form-item",{attrs:{label:"Slow:"}},[r("el-progress",{attrs:{"stroke-width":20,"text-inside":!0,percentage:Math.floor(500*t.soundMeter.slow),color:"#67C23A"}})],1),r("el-form-item",{attrs:{label:"Clip:"}},[r("el-progress",{attrs:{"stroke-width":20,"text-inside":!0,percentage:Math.floor(500*t.soundMeter.clip),color:"#F56C6C"}})],1)],1):t._e()],1)],1),r("StreamTracks",{model:{value:t.localStream,callback:function(e){t.localStream=e},expression:"localStream"}}),t.error?r("el-tag",{staticClass:"error",attrs:{type:"danger"}},[t._v(t._s(t.error))]):t._e(),r("vue-source",{attrs:{src:"src/webrtc/views/webrtc/AudioStreamVolume.vue",lang:"html"}})],1)},o=[],a=(r("4160"),r("d3b7"),r("159b"),r("7775"));function i(t){this.context=t,this.instant=0,this.slow=0,this.clip=0,this.script=t.createScriptProcessor(2048,1,1);var e=this;this.script.onaudioprocess=function(t){var r,n=t.inputBuffer.getChannelData(0),o=0,a=0;for(r=0;r<n.length;++r)o+=n[r]*n[r],Math.abs(n[r])>.99&&(a+=1);e.instant=Math.sqrt(o/n.length),e.slow=.95*e.slow+.05*e.instant,e.clip=a/n.length}}i.prototype.connectToSource=function(t,e){console.log("SoundMeter connecting");try{this.mic=this.context.createMediaStreamSource(t),this.mic.connect(this.script),this.script.connect(this.context.destination),"undefined"!==typeof e&&e(null)}catch(r){console.error(r),"undefined"!==typeof e&&e(r)}},i.prototype.stop=function(){this.mic.disconnect(),this.script.disconnect()};var s=i,c={name:"AudioStreamVolume",components:{StreamTracks:a["a"]},data:function(){return{localStream:null,options:{audio:!0,video:!1},soundMeter:null,error:null}},methods:{init:function(){var t=this;this.initLocalStream().then((function(e){t.addAudioContextListener(e)}))},initLocalStream:function(){var t=this,e=this,r=this.$refs.localVideo;return new Promise((function(n,o){navigator.mediaDevices.getUserMedia(t.options).then((function(e){t.localStream=e,e.oninactive=function(){console.log("Stream inactive")},r.addEventListener("loadedmetadata",(function(t){console.log("AudioTracks",e.getAudioTracks()),console.log("VideoTracks",e.getVideoTracks())})),r.srcObject=e,n(e)}))["catch"]((function(t){e.error=t,console.log("navigator.getUserMedia error: ",t),o(t)}))}))},addAudioContextListener:function(t){var e=this;try{var r=window.AudioContext||window.webkitAudioContext,n=new r;this.soundMeter=new s(n),this.soundMeter.connectToSource(t,(function(t){t&&(e.error=t)}))}catch(o){alert("Web Audio API not supported.")}}},mounted:function(){this.init()},destroyed:function(){this.soundMeter&&this.soundMeter.stop(),this.localStream&&this.localStream.getTracks().forEach((function(t){t.stop()}))}},l=c,u=(r("6483"),r("2877")),d=Object(u["a"])(l,n,o,!1,null,"1850d63e",null);e["default"]=d.exports},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);