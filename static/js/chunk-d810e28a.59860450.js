(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d810e28a"],{"159b":function(t,e,n){var r=n("da84"),o=n("fdbc"),a=n("17c2"),i=n("9112");for(var s in o){var c=r[s],l=c&&c.prototype;if(l&&l.forEach!==a)try{i(l,"forEach",a)}catch(u){l.forEach=a}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,o=n("b301");t.exports=o("forEach")?function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},"1dde":function(t,e,n){var r=n("d039"),o=n("b622"),a=n("60ae"),i=o("species");t.exports=function(t){return a>=51||!r((function(){var e=[],n=e.constructor={};return n[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1f93":function(t,e,n){},"37d3":function(t,e,n){"use strict";var r=n("1f93"),o=n.n(r);o.a},4160:function(t,e,n){"use strict";var r=n("23e7"),o=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"65f0":function(t,e,n){var r=n("861d"),o=n("e8b5"),a=n("b622"),i=a("species");t.exports=function(t,e){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?r(n)&&(n=n[i],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},7775:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-table",{attrs:{data:t.tableData,stripe:""}},[n("el-table-column",{attrs:{label:"媒体流ID",align:"center"}},[n("el-table-column",{attrs:{label:"名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.label.substr(0,8))+"...")]}}])})],1),n("el-table-column",{attrs:{label:t.value&&t.value.id}},[n("el-table-column",{attrs:{prop:"kind",label:"类型",align:"center"}}),n("el-table-column",{attrs:{label:"id",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.id.substr(0,8))+"...")]}}])}),n("el-table-column",{attrs:{label:"state",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.readyState))]}}])}),n("el-table-column",{attrs:{label:"enabled",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.enabled))]}}])}),n("el-table-column",{attrs:{label:"muted",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.muted))]}}])}),t.edited?n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"移除轨道",placement:"left"}},[n("el-link",{staticClass:"el-icon-minus",on:{click:function(n){return t.removeTrack(e.row)}}})],1)]}}],null,!1,3439156443)}):t._e(),n("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-main",{staticClass:"table-expand"},[n("el-row",[n("h4",[t._v("Base:")]),n("el-col",{attrs:{span:12}},[t._v("label: "+t._s(e.row.label))]),n("el-col",{attrs:{span:12}},[t._v("ID: "+t._s(e.row.id))])],1),n("el-row",[n("h4",[t._v("Constraints:")]),t._l(e.row.getConstraints(),(function(e,r){return n("el-col",{key:r,attrs:{span:12}},[t._v(t._s(r)+" : "+t._s(e))])}))],2),n("el-row",[n("h4",[t._v("Settings:")]),t._l(e.row.getSettings(),(function(e,r){return n("el-col",{key:r,attrs:{span:12}},[t._v(t._s(r)+" : "+t._s(e))])}))],2),n("el-row",[n("h4",[t._v("Capabilities:")]),t._l(e.row.getCapabilities(),(function(e,r){return n("el-col",{key:r,attrs:{span:12}},[t._v(t._s(r)+" : "+t._s(e))])}))],2)],1)]}}])})],1)],1)},o=[],a=(n("99af"),{name:"StreamTracks",props:{value:{type:MediaStream,default:null},edited:{type:Boolean,default:!1}},data:function(){return{id:null,tableData:[]}},watch:{value:function(t){this.id=t.id,this.tableData=[],this.tableData=this.tableData.concat(t.getVideoTracks(),t.getAudioTracks())}},methods:{removeTrack:function(t){this.value&&(t.stop(),this.value.removeTrack(t),console.log("remove track id",t.label,t.id),this.$emit("input",this.value))}}}),i=a,s=(n("37d3"),n("2877")),c=Object(s["a"])(i,r,o,!1,null,"82e6b8c4",null);e["a"]=c.exports},8418:function(t,e,n){"use strict";var r=n("c04e"),o=n("9bf2"),a=n("5c6c");t.exports=function(t,e,n){var i=r(e);i in t?o.f(t,i,a(0,n)):t[i]=n}},"93d6":function(t,e,n){"use strict";var r=n("d7c3"),o=n.n(r);o.a},"99af":function(t,e,n){"use strict";var r=n("23e7"),o=n("d039"),a=n("e8b5"),i=n("861d"),s=n("7b0b"),c=n("50c4"),l=n("8418"),u=n("65f0"),d=n("1dde"),f=n("b622"),p=n("60ae"),h=f("isConcatSpreadable"),m=9007199254740991,v="Maximum allowed index exceeded",b=p>=51||!o((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),g=d("concat"),S=function(t){if(!i(t))return!1;var e=t[h];return void 0!==e?!!e:a(t)},_=!b||!g;r({target:"Array",proto:!0,forced:_},{concat:function(t){var e,n,r,o,a,i=s(this),d=u(i,0),f=0;for(e=-1,r=arguments.length;e<r;e++)if(a=-1===e?i:arguments[e],S(a)){if(o=c(a.length),f+o>m)throw TypeError(v);for(n=0;n<o;n++,f++)n in a&&l(d,f,a[n])}else{if(f>=m)throw TypeError(v);l(d,f++,a)}return d.length=f,d}})},b727:function(t,e,n){var r=n("f8c2"),o=n("44ad"),a=n("7b0b"),i=n("50c4"),s=n("65f0"),c=[].push,l=function(t){var e=1==t,n=2==t,l=3==t,u=4==t,d=6==t,f=5==t||d;return function(p,h,m,v){for(var b,g,S=a(p),_=o(S),w=r(h,m,3),y=i(_.length),k=0,L=v||s,x=e?L(p,y):n?L(p,0):void 0;y>k;k++)if((f||k in _)&&(b=_[k],g=w(b,k,S),t))if(e)x[k]=g;else if(g)switch(t){case 3:return!0;case 5:return b;case 6:return k;case 2:c.call(x,b)}else if(u)return!1;return d?-1:l||u?u:x}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},c638:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-main",{staticClass:"center"},[n("el-row",{attrs:{gutter:50}},[n("el-col",{staticClass:"center",attrs:{xs:24,sm:24,md:12}},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("Audio Stream")]),n("video",{ref:"localVideo",staticClass:"video-item",attrs:{autoplay:""}})],1),n("el-col",{staticClass:"center",attrs:{xs:24,sm:24,md:12}},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("Audio Stream Volume")]),t.soundMeter?n("el-form",{attrs:{"label-width":"80px"}},[n("el-form-item",{attrs:{label:"Instant:"}},[n("el-progress",{attrs:{"stroke-width":20,"text-inside":!0,percentage:Math.floor(500*t.soundMeter.instant)}})],1),n("el-form-item",{attrs:{label:"Slow:"}},[n("el-progress",{attrs:{"stroke-width":20,"text-inside":!0,percentage:Math.floor(500*t.soundMeter.slow),color:"#67C23A"}})],1),n("el-form-item",{attrs:{label:"Clip:"}},[n("el-progress",{attrs:{"stroke-width":20,"text-inside":!0,percentage:Math.floor(500*t.soundMeter.clip),color:"#F56C6C"}})],1)],1):t._e()],1)],1),n("StreamTracks",{model:{value:t.localStream,callback:function(e){t.localStream=e},expression:"localStream"}}),t.error?n("el-tag",{staticClass:"error",attrs:{type:"danger"}},[t._v(t._s(t.error))]):t._e()],1)},o=[],a=(n("4160"),n("d3b7"),n("159b"),n("7775"));function i(t){this.context=t,this.instant=0,this.slow=0,this.clip=0,this.script=t.createScriptProcessor(2048,1,1);var e=this;this.script.onaudioprocess=function(t){var n,r=t.inputBuffer.getChannelData(0),o=0,a=0;for(n=0;n<r.length;++n)o+=r[n]*r[n],Math.abs(r[n])>.99&&(a+=1);e.instant=Math.sqrt(o/r.length),e.slow=.95*e.slow+.05*e.instant,e.clip=a/r.length}}i.prototype.connectToSource=function(t,e){console.log("SoundMeter connecting");try{this.mic=this.context.createMediaStreamSource(t),this.mic.connect(this.script),this.script.connect(this.context.destination),"undefined"!==typeof e&&e(null)}catch(n){console.error(n),"undefined"!==typeof e&&e(n)}},i.prototype.stop=function(){this.mic.disconnect(),this.script.disconnect()};var s=i,c={name:"AudioStreamVolume",components:{StreamTracks:a["a"]},data:function(){return{localStream:null,options:{audio:!0,video:!1},soundMeter:null,error:null}},methods:{init:function(){var t=this;this.initLocalStream().then((function(e){t.addAudioContextListener(e)}))},initLocalStream:function(){var t=this,e=this,n=this.$refs.localVideo;return new Promise((function(r,o){navigator.mediaDevices.getUserMedia(t.options).then((function(e){t.localStream=e,e.oninactive=function(){console.log("Stream inactive")},n.addEventListener("loadedmetadata",(function(t){console.log("AudioTracks",e.getAudioTracks()),console.log("VideoTracks",e.getVideoTracks())})),n.srcObject=e,r(e)}))["catch"]((function(t){e.error=t,console.log("navigator.getUserMedia error: ",t),o(t)}))}))},addAudioContextListener:function(t){var e=this;try{var n=window.AudioContext||window.webkitAudioContext,r=new n;this.soundMeter=new s(r),this.soundMeter.connectToSource(t,(function(t){t&&(e.error=t)}))}catch(o){alert("Web Audio API not supported.")}}},mounted:function(){this.init()},destroyed:function(){this.soundMeter&&this.soundMeter.stop(),this.localStream&&this.localStream.getTracks().forEach((function(t){t.stop()}))}},l=c,u=(n("93d6"),n("2877")),d=Object(u["a"])(l,r,o,!1,null,"5b187424",null);e["default"]=d.exports},d7c3:function(t,e,n){},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);