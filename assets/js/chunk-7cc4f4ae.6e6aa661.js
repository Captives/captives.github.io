(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7cc4f4ae"],{"0d31":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-table",{attrs:{data:t.tableData,stripe:""}},[a("el-table-column",{attrs:{label:"媒体流ID",align:"center"}},[a("el-table-column",{attrs:{label:"名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.label.substr(0,8))+"...")]}}])})],1),a("el-table-column",{attrs:{label:t.value&&t.value.id}},[a("el-table-column",{attrs:{prop:"kind",label:"类型",align:"center"}}),a("el-table-column",{attrs:{label:"id",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.id.substr(0,8))+"...")]}}])}),a("el-table-column",{attrs:{label:"state",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.readyState))]}}])}),a("el-table-column",{attrs:{label:"enabled",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.enabled))]}}])}),a("el-table-column",{attrs:{label:"muted",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.muted))]}}])}),t.edited?a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"移除轨道",placement:"left"}},[a("el-link",{staticClass:"el-icon-minus",on:{click:function(a){return t.removeTrack(e.row)}}})],1)]}}],null,!1,3439156443)}):t._e(),a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-main",{staticClass:"table-expand"},[a("el-row",[a("h4",[t._v("Base:")]),a("el-col",{attrs:{span:12}},[t._v("label: "+t._s(e.row.label))]),a("el-col",{attrs:{span:12}},[t._v("ID: "+t._s(e.row.id))])],1),a("el-row",[a("h4",[t._v("Constraints:")]),t._l(e.row.getConstraints(),(function(e,n){return a("el-col",{key:n,attrs:{span:12}},[t._v(t._s(n)+" : "+t._s(e))])}))],2),a("el-row",[a("h4",[t._v("Settings:")]),t._l(e.row.getSettings(),(function(e,n){return a("el-col",{key:n,attrs:{span:12}},[t._v(t._s(n)+" : "+t._s(e))])}))],2),a("el-row",[a("h4",[t._v("Capabilities:")]),t._l(e.row.getCapabilities(),(function(e,n){return a("el-col",{key:n,attrs:{span:12}},[t._v(t._s(n)+" : "+t._s(e))])}))],2)],1)]}}])})],1)],1)},r=[],s=(a("99af"),{name:"StreamTracks",props:{value:{type:MediaStream,default:null},edited:{type:Boolean,default:!1}},data:function(){return{id:null,tableData:[]}},watch:{value:function(t){this.id=t.id,this.tableData=[],this.tableData=this.tableData.concat(t.getVideoTracks(),t.getAudioTracks())}},methods:{removeTrack:function(t){this.value&&(t.stop(),this.value.removeTrack(t),console.log("remove track id",t.label,t.id),this.$emit("input",this.value))}}}),l=s,o=(a("8449"),a("2877")),i=Object(o["a"])(l,n,r,!1,null,"553f836b",null);e["a"]=i.exports},"1dde":function(t,e,a){var n=a("d039"),r=a("b622"),s=a("2d00"),l=r("species");t.exports=function(t){return s>=51||!n((function(){var e=[],a=e.constructor={};return a[l]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},4795:function(t,e,a){var n=a("23e7"),r=a("da84"),s=a("342f"),l=[].slice,o=/MSIE .\./.test(s),i=function(t){return function(e,a){var n=arguments.length>2,r=n?l.call(arguments,2):void 0;return t(n?function(){("function"==typeof e?e:Function(e)).apply(this,r)}:e,a)}};n({global:!0,bind:!0,forced:o},{setTimeout:i(r.setTimeout),setInterval:i(r.setInterval)})},"620d":function(t,e,a){"use strict";var n=a("7b55"),r=a.n(n);r.a},"7b55":function(t,e,a){},"7d03":function(t,e,a){},8418:function(t,e,a){"use strict";var n=a("c04e"),r=a("9bf2"),s=a("5c6c");t.exports=function(t,e,a){var l=n(e);l in t?r.f(t,l,s(0,a)):t[l]=a}},8449:function(t,e,a){"use strict";var n=a("7d03"),r=a.n(n);r.a},8986:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-main",[a("el-row",{attrs:{gutter:50}},[a("el-col",{staticClass:"center",attrs:{xs:24,sm:24,md:12}},[a("el-divider",{attrs:{"content-position":"left"}},[t._v("Canvas")]),a("div",{ref:"chart",staticClass:"video-item"})],1),a("el-col",{staticClass:"center",attrs:{xs:24,sm:24,md:12}},[a("el-divider",{attrs:{"content-position":"left"}},[t._v("Capture")]),a("video",{ref:"playVideo",staticClass:"video-item",attrs:{autoplay:"",muted:""},domProps:{muted:!0}})],1)],1),a("StreamTracks",{model:{value:t.stream,callback:function(e){t.stream=e},expression:"stream"}}),a("vue-source",{attrs:{src:"guide/views/webrtc/VideoStreamFromCanvas.vue",lang:"html"}})],1)},r=[],s=(a("4160"),a("b680"),a("159b"),a("4795"),a("0d31")),l={name:"VideoStreamFromCanvas",components:{StreamTracks:s["a"]},data:function(){return{chart:null,stream:null}},methods:{drawCanvas:function(t){var e={tooltip:{formatter:"{a} <br/>{b} : {c}%"},toolbox:{feature:{restore:{},saveAsImage:{}}},series:[{name:"CPU",type:"gauge",detail:{formatter:"{value}%"},data:[t]}]};this.chart.setOption(e),window.onresize=this.chart.resize},oncanplay:function(t){var e=this,a=this.$refs.playVideo,n=t.querySelector("canvas");n&&(this.stream=n.captureStream(),a.addEventListener("loadedmetadata",(function(t){console.log("AudioTracks",e.stream.getAudioTracks()),console.log("VideoTracks",e.stream.getVideoTracks())})),a.autoplay=!0,a.srcObject=this.stream,a.paused?a.play():a.pause())}},mounted:function(){var t=this;this.chart=this.$echarts.init(this.$refs.chart);var e={value:50,name:"Use"};this.drawCanvas(e),setInterval((function(){e.value=(100*Math.random()).toFixed(2)-0,t.drawCanvas(e)}),1e3),this.oncanplay(this.$refs.chart)},destroyed:function(){this.stream&&(this.stream.getTracks().forEach((function(t){return t.stop()})),this.stream=null)}},o=l,i=(a("620d"),a("2877")),c=Object(i["a"])(o,n,r,!1,null,"9f5535e2",null);e["default"]=c.exports},"99af":function(t,e,a){"use strict";var n=a("23e7"),r=a("d039"),s=a("e8b5"),l=a("861d"),o=a("7b0b"),i=a("50c4"),c=a("8418"),u=a("65f0"),d=a("1dde"),f=a("b622"),v=a("2d00"),m=f("isConcatSpreadable"),p=9007199254740991,b="Maximum allowed index exceeded",h=v>=51||!r((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),_=d("concat"),g=function(t){if(!l(t))return!1;var e=t[m];return void 0!==e?!!e:s(t)},w=!h||!_;n({target:"Array",proto:!0,forced:w},{concat:function(t){var e,a,n,r,s,l=o(this),d=u(l,0),f=0;for(e=-1,n=arguments.length;e<n;e++)if(s=-1===e?l:arguments[e],g(s)){if(r=i(s.length),f+r>p)throw TypeError(b);for(a=0;a<r;a++,f++)a in s&&c(d,f,s[a])}else{if(f>=p)throw TypeError(b);c(d,f++,s)}return d.length=f,d}})}}]);