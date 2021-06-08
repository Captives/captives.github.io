(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-773532b1"],{"057f":function(t,e,n){var r=n("fc6a"),o=n("241c").f,a={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==a.call(t)?c(t):o(r(t))}},"0a22":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-main",{staticClass:"center"},[n("url-input",{attrs:{list:t.$videoList},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}}),n("video",{ref:"localVideo",staticClass:"video-item",attrs:{src:t.url,controls:"",loop:"",autoplay:""}}),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[n("el-table-column",{attrs:{prop:"label",label:"名称"}}),n("el-table-column",{attrs:{prop:"kind",label:"类型",width:"120",align:"center"}}),n("el-table-column",{attrs:{prop:"deviceId",label:"设备ID"}}),n("el-table-column",{attrs:{label:"操作",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(n){return t.changeDevice(e.row)}}},[t._v("选择")])]}}])})],1),t.error?n("el-tag",{staticClass:"error",attrs:{type:"danger"}},[t._v(t._s(t.error))]):t._e(),n("vue-source",{attrs:{src:"guide/views/webrtc/AudioOutput.vue",lang:"html"}})],1)},o=[],a=(n("4160"),n("159b"),n("53ca")),i=n("0d31"),c={name:"AudioOutput",components:{StreamTracks:i["a"]},data:function(){return{tableData:[],url:null,error:null}},mounted:function(){navigator.mediaDevices.enumerateDevices().then(this.gotDevices).catch(this.handleError)},destroyed:function(){},methods:{gotDevices:function(t){var e=this;t.forEach((function(t){"audiooutput"==t.kind&&e.tableData.push(t)}))},handleError:function(t){this.error=t},changeDevice:function(t){console.log(t);var e=this.$refs.localVideo;"audiooutput"===t.kind&&this.playback(e,t.deviceId)},playback:function(t,e){console.log("videoElement",e,t.sinkId,Object(a["a"])(t.sinkId)),"undefined"!==typeof t.sinkId?t.setSinkId(e).then((function(){console.log("Success, audio output device attached: ".concat(e))})).catch((function(t){var e=t;"SecurityError"===t.name&&(e="You need to use HTTPS for selecting audio output device: ".concat(t)),console.error(e)})):console.warn("Browser does not support output device selection.")}}},l=c,u=(n("bc78"),n("2877")),s=function(t){t.options.__source="src/guide/views/webrtc/AudioOutput.vue"},f=s,d=Object(u["a"])(l,r,o,!1,null,"39b1335f",null);"function"===typeof f&&f(d);e["default"]=d.exports},"0d31":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-table",{attrs:{data:t.tableData,stripe:""}},[n("el-table-column",{attrs:{label:"媒体流ID",align:"center"}},[n("el-table-column",{attrs:{label:"名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.label.substr(0,8))+"...")]}}])})],1),n("el-table-column",{attrs:{label:t.value&&t.value.id}},[n("el-table-column",{attrs:{prop:"kind",label:"类型",align:"center"}}),n("el-table-column",{attrs:{label:"id",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.id.substr(0,8))+"...")]}}])}),n("el-table-column",{attrs:{label:"state",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.readyState))]}}])}),n("el-table-column",{attrs:{label:"enabled",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.enabled))]}}])}),n("el-table-column",{attrs:{label:"muted",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.muted))]}}])}),t.edited?n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"移除轨道",placement:"left"}},[n("el-link",{staticClass:"el-icon-minus",on:{click:function(n){return t.removeTrack(e.row)}}})],1)]}}],null,!1,3439156443)}):t._e(),n("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-main",{staticClass:"table-expand"},[n("el-row",[n("h4",[t._v("Base:")]),n("el-col",{attrs:{span:12}},[t._v("label: "+t._s(e.row.label))]),n("el-col",{attrs:{span:12}},[t._v("ID: "+t._s(e.row.id))])],1),n("el-row",[n("h4",[t._v("Constraints:")]),t._l(e.row.getConstraints(),(function(e,r){return n("el-col",{key:r,attrs:{span:12}},[t._v(t._s(r)+" : "+t._s(e))])}))],2),n("el-row",[n("h4",[t._v("Settings:")]),t._l(e.row.getSettings(),(function(e,r){return n("el-col",{key:r,attrs:{span:12}},[t._v(t._s(r)+" : "+t._s(e))])}))],2),n("el-row",[n("h4",[t._v("Capabilities:")]),t._l(e.row.getCapabilities(),(function(e,r){return n("el-col",{key:r,attrs:{span:12}},[t._v(t._s(r)+" : "+t._s(e))])}))],2)],1)]}}])})],1)],1)},o=[],a=(n("99af"),{name:"StreamTracks",props:{value:{type:MediaStream,default:null},edited:{type:Boolean,default:!1}},data:function(){return{id:null,tableData:[]}},watch:{value:function(t){this.id=t.id,this.tableData=[],this.tableData=this.tableData.concat(t.getVideoTracks(),t.getAudioTracks())}},methods:{removeTrack:function(t){this.value&&(t.stop(),this.value.removeTrack(t),console.log("remove track id",t.label,t.id),this.$emit("input",this.value))}}}),i=a,c=(n("f8b5"),n("2877")),l=function(t){t.options.__source="src/guide/components/StreamTracks.vue"},u=l,s=Object(c["a"])(i,r,o,!1,null,"2e99fe9d",null);"function"===typeof u&&u(s);e["a"]=s.exports},"11f7":function(t,e,n){},"3ca3":function(t,e,n){"use strict";var r=n("6547").charAt,o=n("69f3"),a=n("7dd0"),i="String Iterator",c=o.set,l=o.getterFor(i);a(String,"String",(function(t){c(this,{type:i,string:String(t),index:0})}),(function(){var t,e=l(this),n=e.string,o=e.index;return o>=n.length?{value:void 0,done:!0}:(t=r(n,o),e.index+=t.length,{value:t,done:!1})}))},"53ca":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("a4d3"),n("e01a"),n("d28b"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");function r(t){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}},7260:function(t,e,n){},"746f":function(t,e,n){var r=n("428f"),o=n("5135"),a=n("e538"),i=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||i(e,t,{value:a.f(t)})}},a4d3:function(t,e,n){"use strict";var r=n("23e7"),o=n("da84"),a=n("d066"),i=n("c430"),c=n("83ab"),l=n("4930"),u=n("fdbf"),s=n("d039"),f=n("5135"),d=n("e8b5"),b=n("861d"),p=n("825a"),v=n("7b0b"),y=n("fc6a"),g=n("c04e"),m=n("5c6c"),h=n("7c73"),S=n("df75"),w=n("241c"),_=n("057f"),k=n("7418"),O=n("06cf"),D=n("9bf2"),j=n("d1e7"),T=n("9112"),C=n("6eeb"),E=n("5692"),I=n("f772"),x=n("d012"),P=n("90e3"),$=n("b622"),A=n("e538"),N=n("746f"),J=n("d44e"),B=n("69f3"),F=n("b727").forEach,V=I("hidden"),z="Symbol",H="prototype",L=$("toPrimitive"),M=B.set,Q=B.getterFor(z),W=Object[H],Y=o.Symbol,q=a("JSON","stringify"),G=O.f,K=D.f,R=_.f,U=j.f,X=E("symbols"),Z=E("op-symbols"),tt=E("string-to-symbol-registry"),et=E("symbol-to-string-registry"),nt=E("wks"),rt=o.QObject,ot=!rt||!rt[H]||!rt[H].findChild,at=c&&s((function(){return 7!=h(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=G(W,e);r&&delete W[e],K(t,e,n),r&&t!==W&&K(W,e,r)}:K,it=function(t,e){var n=X[t]=h(Y[H]);return M(n,{type:z,tag:t,description:e}),c||(n.description=e),n},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Y},lt=function(t,e,n){t===W&&lt(Z,e,n),p(t);var r=g(e,!0);return p(n),f(X,r)?(n.enumerable?(f(t,V)&&t[V][r]&&(t[V][r]=!1),n=h(n,{enumerable:m(0,!1)})):(f(t,V)||K(t,V,m(1,{})),t[V][r]=!0),at(t,r,n)):K(t,r,n)},ut=function(t,e){p(t);var n=y(e),r=S(n).concat(pt(n));return F(r,(function(e){c&&!ft.call(n,e)||lt(t,e,n[e])})),t},st=function(t,e){return void 0===e?h(t):ut(h(t),e)},ft=function(t){var e=g(t,!0),n=U.call(this,e);return!(this===W&&f(X,e)&&!f(Z,e))&&(!(n||!f(this,e)||!f(X,e)||f(this,V)&&this[V][e])||n)},dt=function(t,e){var n=y(t),r=g(e,!0);if(n!==W||!f(X,r)||f(Z,r)){var o=G(n,r);return!o||!f(X,r)||f(n,V)&&n[V][r]||(o.enumerable=!0),o}},bt=function(t){var e=R(y(t)),n=[];return F(e,(function(t){f(X,t)||f(x,t)||n.push(t)})),n},pt=function(t){var e=t===W,n=R(e?Z:y(t)),r=[];return F(n,(function(t){!f(X,t)||e&&!f(W,t)||r.push(X[t])})),r};if(l||(Y=function(){if(this instanceof Y)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=P(t),n=function(t){this===W&&n.call(Z,t),f(this,V)&&f(this[V],e)&&(this[V][e]=!1),at(this,e,m(1,t))};return c&&ot&&at(W,e,{configurable:!0,set:n}),it(e,t)},C(Y[H],"toString",(function(){return Q(this).tag})),C(Y,"withoutSetter",(function(t){return it(P(t),t)})),j.f=ft,D.f=lt,O.f=dt,w.f=_.f=bt,k.f=pt,A.f=function(t){return it($(t),t)},c&&(K(Y[H],"description",{configurable:!0,get:function(){return Q(this).description}}),i||C(W,"propertyIsEnumerable",ft,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:Y}),F(S(nt),(function(t){N(t)})),r({target:z,stat:!0,forced:!l},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var n=Y(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),r({target:"Object",stat:!0,forced:!l,sham:!c},{create:st,defineProperty:lt,defineProperties:ut,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:bt,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:s((function(){k.f(1)}))},{getOwnPropertySymbols:function(t){return k.f(v(t))}}),q){var vt=!l||s((function(){var t=Y();return"[null]"!=q([t])||"{}"!=q({a:t})||"{}"!=q(Object(t))}));r({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,n){var r,o=[t],a=1;while(arguments.length>a)o.push(arguments[a++]);if(r=e,(b(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ct(e))return e}),o[1]=e,q.apply(null,o)}})}Y[H][L]||T(Y[H],L,Y[H].valueOf),J(Y,z),x[V]=!0},bc78:function(t,e,n){"use strict";var r=n("7260"),o=n.n(r);o.a},d28b:function(t,e,n){var r=n("746f");r("iterator")},ddb0:function(t,e,n){var r=n("da84"),o=n("fdbc"),a=n("e260"),i=n("9112"),c=n("b622"),l=c("iterator"),u=c("toStringTag"),s=a.values;for(var f in o){var d=r[f],b=d&&d.prototype;if(b){if(b[l]!==s)try{i(b,l,s)}catch(v){b[l]=s}if(b[u]||i(b,u,f),o[f])for(var p in a)if(b[p]!==a[p])try{i(b,p,a[p])}catch(v){b[p]=a[p]}}}},e01a:function(t,e,n){"use strict";var r=n("23e7"),o=n("83ab"),a=n("da84"),i=n("5135"),c=n("861d"),l=n("9bf2").f,u=n("e893"),s=a.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new s(t):void 0===t?s():s(t);return""===t&&(f[e]=!0),e};u(d,s);var b=d.prototype=s.prototype;b.constructor=d;var p=b.toString,v="Symbol(test)"==String(s("test")),y=/^Symbol\((.*)\)[^)]+$/;l(b,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=p.call(t);if(i(f,t))return"";var n=v?e.slice(7,-1):e.replace(y,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,n){var r=n("b622");e.f=r},f8b5:function(t,e,n){"use strict";var r=n("11f7"),o=n.n(r);o.a}}]);