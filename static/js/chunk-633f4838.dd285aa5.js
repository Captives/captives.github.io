(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-633f4838"],{"159b":function(t,e,r){var a=r("da84"),n=r("fdbc"),o=r("17c2"),i=r("9112");for(var l in n){var c=a[l],s=c&&c.prototype;if(s&&s.forEach!==o)try{i(s,"forEach",o)}catch(u){s.forEach=o}}},"17c2":function(t,e,r){"use strict";var a=r("b727").forEach,n=r("b301");t.exports=n("forEach")?function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},"1dde":function(t,e,r){var a=r("d039"),n=r("b622"),o=r("60ae"),i=n("species");t.exports=function(t){return o>=51||!a((function(){var e=[],r=e.constructor={};return r[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1f93":function(t,e,r){},"37d3":function(t,e,r){"use strict";var a=r("1f93"),n=r.n(a);n.a},4160:function(t,e,r){"use strict";var a=r("23e7"),n=r("17c2");a({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},"65f0":function(t,e,r){var a=r("861d"),n=r("e8b5"),o=r("b622"),i=o("species");t.exports=function(t,e){var r;return n(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!n(r.prototype)?a(r)&&(r=r[i],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"697a":function(t,e,r){"use strict";var a=r("6e79"),n=r.n(a);n.a},"6e79":function(t,e,r){},7775:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-table",{attrs:{data:t.tableData,stripe:""}},[r("el-table-column",{attrs:{label:"媒体流ID",align:"center"}},[r("el-table-column",{attrs:{label:"名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.label.substr(0,8))+"...")]}}])})],1),r("el-table-column",{attrs:{label:t.value&&t.value.id}},[r("el-table-column",{attrs:{prop:"kind",label:"类型",align:"center"}}),r("el-table-column",{attrs:{label:"id",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.id.substr(0,8))+"...")]}}])}),r("el-table-column",{attrs:{label:"state",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.readyState))]}}])}),r("el-table-column",{attrs:{label:"enabled",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.enabled))]}}])}),r("el-table-column",{attrs:{label:"muted",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.muted))]}}])}),t.edited?r("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"移除轨道",placement:"left"}},[r("el-link",{staticClass:"el-icon-minus",on:{click:function(r){return t.removeTrack(e.row)}}})],1)]}}],null,!1,3439156443)}):t._e(),r("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-main",{staticClass:"table-expand"},[r("el-row",[r("h4",[t._v("Base:")]),r("el-col",{attrs:{span:12}},[t._v("label: "+t._s(e.row.label))]),r("el-col",{attrs:{span:12}},[t._v("ID: "+t._s(e.row.id))])],1),r("el-row",[r("h4",[t._v("Constraints:")]),t._l(e.row.getConstraints(),(function(e,a){return r("el-col",{key:a,attrs:{span:12}},[t._v(t._s(a)+" : "+t._s(e))])}))],2),r("el-row",[r("h4",[t._v("Settings:")]),t._l(e.row.getSettings(),(function(e,a){return r("el-col",{key:a,attrs:{span:12}},[t._v(t._s(a)+" : "+t._s(e))])}))],2),r("el-row",[r("h4",[t._v("Capabilities:")]),t._l(e.row.getCapabilities(),(function(e,a){return r("el-col",{key:a,attrs:{span:12}},[t._v(t._s(a)+" : "+t._s(e))])}))],2)],1)]}}])})],1)],1)},n=[],o=(r("99af"),{name:"StreamTracks",props:{value:{type:MediaStream,default:null},edited:{type:Boolean,default:!1}},data:function(){return{id:null,tableData:[]}},watch:{value:function(t){this.id=t.id,this.tableData=[],this.tableData=this.tableData.concat(t.getVideoTracks(),t.getAudioTracks())}},methods:{removeTrack:function(t){this.value&&(t.stop(),this.value.removeTrack(t),console.log("remove track id",t.label,t.id),this.$emit("input",this.value))}}}),i=o,l=(r("37d3"),r("2877")),c=Object(l["a"])(i,a,n,!1,null,"82e6b8c4",null);e["a"]=c.exports},8418:function(t,e,r){"use strict";var a=r("c04e"),n=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var i=a(e);i in t?n.f(t,i,o(0,r)):t[i]=r}},"99af":function(t,e,r){"use strict";var a=r("23e7"),n=r("d039"),o=r("e8b5"),i=r("861d"),l=r("7b0b"),c=r("50c4"),s=r("8418"),u=r("65f0"),f=r("1dde"),d=r("b622"),v=r("60ae"),b=d("isConcatSpreadable"),p=9007199254740991,m="Maximum allowed index exceeded",h=v>=51||!n((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),_=f("concat"),g=function(t){if(!i(t))return!1;var e=t[b];return void 0!==e?!!e:o(t)},S=!h||!_;a({target:"Array",proto:!0,forced:S},{concat:function(t){var e,r,a,n,o,i=l(this),f=u(i,0),d=0;for(e=-1,a=arguments.length;e<a;e++)if(o=-1===e?i:arguments[e],g(o)){if(n=c(o.length),d+n>p)throw TypeError(m);for(r=0;r<n;r++,d++)r in o&&s(f,d,o[r])}else{if(d>=p)throw TypeError(m);s(f,d++,o)}return f.length=d,f}})},b727:function(t,e,r){var a=r("f8c2"),n=r("44ad"),o=r("7b0b"),i=r("50c4"),l=r("65f0"),c=[].push,s=function(t){var e=1==t,r=2==t,s=3==t,u=4==t,f=6==t,d=5==t||f;return function(v,b,p,m){for(var h,_,g=o(v),S=n(g),y=a(b,p,3),k=i(S.length),w=0,L=m||l,T=e?L(v,k):r?L(v,0):void 0;k>w;w++)if((d||w in S)&&(h=S[w],_=y(h,w,g),t))if(e)T[w]=_;else if(_)switch(t){case 3:return!0;case 5:return h;case 6:return w;case 2:c.call(T,h)}else if(u)return!1;return f?-1:s||u?u:T}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},e8b5:function(t,e,r){var a=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}},f228:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-main",{staticClass:"center"},[r("video",{ref:"localVideo",staticClass:"video-item",attrs:{autoplay:""}}),r("StreamTracks",{model:{value:t.localStream,callback:function(e){t.localStream=e},expression:"localStream"}}),t.error?r("el-tag",{staticClass:"error",attrs:{type:"danger"}},[t._v(t._s(t.error))]):t._e(),r("vue-source",{attrs:{value:"src/webrtc/views/canvas/VideoStreamFromUserMedia.vue",lang:"html"}})],1)},n=[],o=(r("4160"),r("159b"),r("7775")),i={name:"UserMedia",components:{StreamTracks:o["a"]},data:function(){return{localStream:null,options:{audio:!0,video:{width:{exact:720},height:{exact:405}}},error:null}},methods:{init:function(){var t=this,e=this,r=this.$refs.localVideo;navigator.mediaDevices.getUserMedia(this.options).then((function(e){t.localStream=e,e.oninactive=function(){console.log("Stream inactive")},r.addEventListener("loadedmetadata",(function(t){console.log("AudioTracks",e.getAudioTracks()),console.log("VideoTracks",e.getVideoTracks())})),r.srcObject=e}))["catch"]((function(t){e.error=t,console.log("navigator.getUserMedia error: ",t)}))}},mounted:function(){this.init()},destroyed:function(){this.localStream&&this.localStream.getTracks().forEach((function(t){t.stop()}))}},l=i,c=(r("697a"),r("2877")),s=Object(c["a"])(l,a,n,!1,null,"4c3134af",null);e["default"]=s.exports},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);