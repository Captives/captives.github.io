(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-219ab6d6"],{"0538":function(t,e,r){"use strict";var n=r("1c0b"),i=r("861d"),o=[].slice,a={},c=function(t,e,r){if(!(e in a)){for(var n=[],i=0;i<e;i++)n[i]="a["+i+"]";a[e]=Function("C,a","return new C("+n.join(",")+")")}return a[e](t,r)};t.exports=Function.bind||function(t){var e=n(this),r=o.call(arguments,1),a=function(){var n=r.concat(o.call(arguments));return this instanceof a?c(e,n.length,n):e.apply(t,n)};return i(e.prototype)&&(a.prototype=e.prototype),a}},"0b25":function(t,e,r){var n=r("a691"),i=r("50c4");t.exports=function(t){if(void 0===t)return 0;var e=n(t),r=i(e);if(e!==r)throw RangeError("Wrong length or index");return r}},"0d31":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-table",{attrs:{data:t.tableData,stripe:""}},[r("el-table-column",{attrs:{label:"媒体流ID",align:"center"}},[r("el-table-column",{attrs:{label:"名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.label.substr(0,8))+"...")]}}])})],1),r("el-table-column",{attrs:{label:t.value&&t.value.id}},[r("el-table-column",{attrs:{prop:"kind",label:"类型",align:"center"}}),r("el-table-column",{attrs:{label:"id",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.id.substr(0,8))+"...")]}}])}),r("el-table-column",{attrs:{label:"state",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.readyState))]}}])}),r("el-table-column",{attrs:{label:"enabled",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.enabled))]}}])}),r("el-table-column",{attrs:{label:"muted",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.muted))]}}])}),t.edited?r("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"移除轨道",placement:"left"}},[r("el-link",{staticClass:"el-icon-minus",on:{click:function(r){return t.removeTrack(e.row)}}})],1)]}}],null,!1,3439156443)}):t._e(),r("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-main",{staticClass:"table-expand"},[r("el-row",[r("h4",[t._v("Base:")]),r("el-col",{attrs:{span:12}},[t._v("label: "+t._s(e.row.label))]),r("el-col",{attrs:{span:12}},[t._v("ID: "+t._s(e.row.id))])],1),r("el-row",[r("h4",[t._v("Constraints:")]),t._l(e.row.getConstraints(),(function(e,n){return r("el-col",{key:n,attrs:{span:12}},[t._v(t._s(n)+" : "+t._s(e))])}))],2),r("el-row",[r("h4",[t._v("Settings:")]),t._l(e.row.getSettings(),(function(e,n){return r("el-col",{key:n,attrs:{span:12}},[t._v(t._s(n)+" : "+t._s(e))])}))],2),r("el-row",[r("h4",[t._v("Capabilities:")]),t._l(e.row.getCapabilities(),(function(e,n){return r("el-col",{key:n,attrs:{span:12}},[t._v(t._s(n)+" : "+t._s(e))])}))],2)],1)]}}])})],1)],1)},i=[],o=(r("99af"),{name:"StreamTracks",props:{value:{type:MediaStream,default:null},edited:{type:Boolean,default:!1}},data:function(){return{id:null,tableData:[]}},watch:{value:function(t){this.id=t.id,this.tableData=[],this.tableData=this.tableData.concat(t.getVideoTracks(),t.getAudioTracks())}},methods:{removeTrack:function(t){this.value&&(t.stop(),this.value.removeTrack(t),console.log("remove track id",t.label,t.id),this.$emit("input",this.value))}}}),a=o,c=(r("8449"),r("2877")),s=Object(c["a"])(a,n,i,!1,null,"553f836b",null);e["a"]=s.exports},"145e":function(t,e,r){"use strict";var n=r("7b0b"),i=r("23cb"),o=r("50c4"),a=Math.min;t.exports=[].copyWithin||function(t,e){var r=n(this),c=o(r.length),s=i(t,c),u=i(e,c),f=arguments.length>2?arguments[2]:void 0,l=a((void 0===f?c:i(f,c))-u,c-s),d=1;u<s&&s<u+l&&(d=-1,u+=l-1,s+=l-1);while(l-- >0)u in r?r[s]=r[u]:delete r[s],s+=d,u+=d;return r}},"170b":function(t,e,r){"use strict";var n=r("ebb5"),i=r("50c4"),o=r("23cb"),a=r("4840"),c=n.aTypedArray,s=n.exportTypedArrayMethod;s("subarray",(function(t,e){var r=c(this),n=r.length,s=o(t,n);return new(a(r,r.constructor))(r.buffer,r.byteOffset+s*r.BYTES_PER_ELEMENT,i((void 0===e?n:o(e,n))-s))}))},"182d":function(t,e,r){var n=r("f8cd");t.exports=function(t,e){var r=n(t);if(r%e)throw RangeError("Wrong offset");return r}},"1dde":function(t,e,r){var n=r("d039"),i=r("b622"),o=r("2d00"),a=i("species");t.exports=function(t){return o>=51||!n((function(){var e=[],r=e.constructor={};return r[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"219c":function(t,e,r){"use strict";var n=r("ebb5"),i=n.aTypedArray,o=n.exportTypedArrayMethod,a=[].sort;o("sort",(function(t){return a.call(i(this),t)}))},"25a1":function(t,e,r){"use strict";var n=r("ebb5"),i=r("d58f").right,o=n.aTypedArray,a=n.exportTypedArrayMethod;a("reduceRight",(function(t){return i(o(this),t,arguments.length,arguments.length>1?arguments[1]:void 0)}))},2954:function(t,e,r){"use strict";var n=r("ebb5"),i=r("4840"),o=r("d039"),a=n.aTypedArray,c=n.aTypedArrayConstructor,s=n.exportTypedArrayMethod,u=[].slice,f=o((function(){new Int8Array(1).slice()}));s("slice",(function(t,e){var r=u.call(a(this),t,e),n=i(this,this.constructor),o=0,s=r.length,f=new(c(n))(s);while(s>o)f[o]=r[o++];return f}),f)},3280:function(t,e,r){"use strict";var n=r("ebb5"),i=r("e58c"),o=n.aTypedArray,a=n.exportTypedArrayMethod;a("lastIndexOf",(function(t){return i.apply(o(this),arguments)}))},"32bd":function(t,e,r){"use strict";var n=r("bf21"),i=r.n(n);i.a},"3a7b":function(t,e,r){"use strict";var n=r("ebb5"),i=r("b727").findIndex,o=n.aTypedArray,a=n.exportTypedArrayMethod;a("findIndex",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},"3c5d":function(t,e,r){"use strict";var n=r("ebb5"),i=r("50c4"),o=r("182d"),a=r("7b0b"),c=r("d039"),s=n.aTypedArray,u=n.exportTypedArrayMethod,f=c((function(){new Int8Array(1).set({})}));u("set",(function(t){s(this);var e=o(arguments.length>1?arguments[1]:void 0,1),r=this.length,n=a(t),c=i(n.length),u=0;if(c+e>r)throw RangeError("Wrong length");while(u<c)this[e+u]=n[u++]}),f)},"3fcc":function(t,e,r){"use strict";var n=r("ebb5"),i=r("b727").map,o=r("4840"),a=n.aTypedArray,c=n.aTypedArrayConstructor,s=n.exportTypedArrayMethod;s("map",(function(t){return i(a(this),t,arguments.length>1?arguments[1]:void 0,(function(t,e){return new(c(o(t,t.constructor)))(e)}))}))},"5cc6":function(t,e,r){var n=r("74e8");n("Uint8",(function(t){return function(e,r,n){return t(this,e,r,n)}}))},"5f96":function(t,e,r){"use strict";var n=r("ebb5"),i=n.aTypedArray,o=n.exportTypedArrayMethod,a=[].join;o("join",(function(t){return a.apply(i(this),arguments)}))},"60bd":function(t,e,r){"use strict";var n=r("da84"),i=r("ebb5"),o=r("e260"),a=r("b622"),c=a("iterator"),s=n.Uint8Array,u=o.values,f=o.keys,l=o.entries,d=i.aTypedArray,h=i.exportTypedArrayMethod,y=s&&s.prototype[c],p=!!y&&("values"==y.name||void 0==y.name),b=function(){return u.call(d(this))};h("entries",(function(){return l.call(d(this))})),h("keys",(function(){return f.call(d(this))})),h("values",b,!p),h(c,b,!p)},"621a":function(t,e,r){"use strict";var n=r("da84"),i=r("83ab"),o=r("a981"),a=r("9112"),c=r("e2cc"),s=r("d039"),u=r("19aa"),f=r("a691"),l=r("50c4"),d=r("0b25"),h=r("77a7"),y=r("e163"),p=r("d2bb"),b=r("241c").f,v=r("9bf2").f,g=r("81d5"),w=r("d44e"),A=r("69f3"),m=A.get,T=A.set,x="ArrayBuffer",_="DataView",S="prototype",C="Wrong length",M="Wrong index",k=n[x],E=k,I=n[_],R=I&&I[S],O=Object.prototype,B=n.RangeError,U=h.pack,D=h.unpack,L=function(t){return[255&t]},V=function(t){return[255&t,t>>8&255]},F=function(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]},q=function(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]},W=function(t){return U(t,23,4)},Y=function(t){return U(t,52,8)},j=function(t,e){v(t[S],e,{get:function(){return m(this)[e]}})},N=function(t,e,r,n){var i=d(r),o=m(t);if(i+e>o.byteLength)throw B(M);var a=m(o.buffer).bytes,c=i+o.byteOffset,s=a.slice(c,c+e);return n?s:s.reverse()},P=function(t,e,r,n,i,o){var a=d(r),c=m(t);if(a+e>c.byteLength)throw B(M);for(var s=m(c.buffer).bytes,u=a+c.byteOffset,f=n(+i),l=0;l<e;l++)s[u+l]=f[o?l:e-l-1]};if(o){if(!s((function(){k(1)}))||!s((function(){new k(-1)}))||s((function(){return new k,new k(1.5),new k(NaN),k.name!=x}))){E=function(t){return u(this,E),new k(d(t))};for(var $,z=E[S]=k[S],G=b(k),J=0;G.length>J;)($=G[J++])in E||a(E,$,k[$]);z.constructor=E}p&&y(R)!==O&&p(R,O);var H=new I(new E(2)),K=R.setInt8;H.setInt8(0,2147483648),H.setInt8(1,2147483649),!H.getInt8(0)&&H.getInt8(1)||c(R,{setInt8:function(t,e){K.call(this,t,e<<24>>24)},setUint8:function(t,e){K.call(this,t,e<<24>>24)}},{unsafe:!0})}else E=function(t){u(this,E,x);var e=d(t);T(this,{bytes:g.call(new Array(e),0),byteLength:e}),i||(this.byteLength=e)},I=function(t,e,r){u(this,I,_),u(t,E,_);var n=m(t).byteLength,o=f(e);if(o<0||o>n)throw B("Wrong offset");if(r=void 0===r?n-o:l(r),o+r>n)throw B(C);T(this,{buffer:t,byteLength:r,byteOffset:o}),i||(this.buffer=t,this.byteLength=r,this.byteOffset=o)},i&&(j(E,"byteLength"),j(I,"buffer"),j(I,"byteLength"),j(I,"byteOffset")),c(I[S],{getInt8:function(t){return N(this,1,t)[0]<<24>>24},getUint8:function(t){return N(this,1,t)[0]},getInt16:function(t){var e=N(this,2,t,arguments.length>1?arguments[1]:void 0);return(e[1]<<8|e[0])<<16>>16},getUint16:function(t){var e=N(this,2,t,arguments.length>1?arguments[1]:void 0);return e[1]<<8|e[0]},getInt32:function(t){return q(N(this,4,t,arguments.length>1?arguments[1]:void 0))},getUint32:function(t){return q(N(this,4,t,arguments.length>1?arguments[1]:void 0))>>>0},getFloat32:function(t){return D(N(this,4,t,arguments.length>1?arguments[1]:void 0),23)},getFloat64:function(t){return D(N(this,8,t,arguments.length>1?arguments[1]:void 0),52)},setInt8:function(t,e){P(this,1,t,L,e)},setUint8:function(t,e){P(this,1,t,L,e)},setInt16:function(t,e){P(this,2,t,V,e,arguments.length>2?arguments[2]:void 0)},setUint16:function(t,e){P(this,2,t,V,e,arguments.length>2?arguments[2]:void 0)},setInt32:function(t,e){P(this,4,t,F,e,arguments.length>2?arguments[2]:void 0)},setUint32:function(t,e){P(this,4,t,F,e,arguments.length>2?arguments[2]:void 0)},setFloat32:function(t,e){P(this,4,t,W,e,arguments.length>2?arguments[2]:void 0)},setFloat64:function(t,e){P(this,8,t,Y,e,arguments.length>2?arguments[2]:void 0)}});w(E,x),w(I,_),t.exports={ArrayBuffer:E,DataView:I}},"649e":function(t,e,r){"use strict";var n=r("ebb5"),i=r("b727").some,o=n.aTypedArray,a=n.exportTypedArrayMethod;a("some",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},7156:function(t,e,r){var n=r("861d"),i=r("d2bb");t.exports=function(t,e,r){var o,a;return i&&"function"==typeof(o=e.constructor)&&o!==r&&n(a=o.prototype)&&a!==r.prototype&&i(t,a),t}},"72f7":function(t,e,r){"use strict";var n=r("ebb5").exportTypedArrayMethod,i=r("d039"),o=r("da84"),a=o.Uint8Array,c=a&&a.prototype||{},s=[].toString,u=[].join;i((function(){s.call({})}))&&(s=function(){return u.call(this)});var f=c.toString!=s;n("toString",s,f)},"735e":function(t,e,r){"use strict";var n=r("ebb5"),i=r("81d5"),o=n.aTypedArray,a=n.exportTypedArrayMethod;a("fill",(function(t){return i.apply(o(this),arguments)}))},"74e8":function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("83ab"),a=r("8aa7"),c=r("ebb5"),s=r("621a"),u=r("19aa"),f=r("5c6c"),l=r("9112"),d=r("50c4"),h=r("0b25"),y=r("182d"),p=r("c04e"),b=r("5135"),v=r("f5df"),g=r("861d"),w=r("7c73"),A=r("d2bb"),m=r("241c").f,T=r("a078"),x=r("b727").forEach,_=r("2626"),S=r("9bf2"),C=r("06cf"),M=r("69f3"),k=r("7156"),E=M.get,I=M.set,R=S.f,O=C.f,B=Math.round,U=i.RangeError,D=s.ArrayBuffer,L=s.DataView,V=c.NATIVE_ARRAY_BUFFER_VIEWS,F=c.TYPED_ARRAY_TAG,q=c.TypedArray,W=c.TypedArrayPrototype,Y=c.aTypedArrayConstructor,j=c.isTypedArray,N="BYTES_PER_ELEMENT",P="Wrong length",$=function(t,e){var r=0,n=e.length,i=new(Y(t))(n);while(n>r)i[r]=e[r++];return i},z=function(t,e){R(t,e,{get:function(){return E(this)[e]}})},G=function(t){var e;return t instanceof D||"ArrayBuffer"==(e=v(t))||"SharedArrayBuffer"==e},J=function(t,e){return j(t)&&"symbol"!=typeof e&&e in t&&String(+e)==String(e)},H=function(t,e){return J(t,e=p(e,!0))?f(2,t[e]):O(t,e)},K=function(t,e,r){return!(J(t,e=p(e,!0))&&g(r)&&b(r,"value"))||b(r,"get")||b(r,"set")||r.configurable||b(r,"writable")&&!r.writable||b(r,"enumerable")&&!r.enumerable?R(t,e,r):(t[e]=r.value,t)};o?(V||(C.f=H,S.f=K,z(W,"buffer"),z(W,"byteOffset"),z(W,"byteLength"),z(W,"length")),n({target:"Object",stat:!0,forced:!V},{getOwnPropertyDescriptor:H,defineProperty:K}),t.exports=function(t,e,r){var o=t.match(/\d+$/)[0]/8,c=t+(r?"Clamped":"")+"Array",s="get"+t,f="set"+t,p=i[c],b=p,v=b&&b.prototype,S={},C=function(t,e){var r=E(t);return r.view[s](e*o+r.byteOffset,!0)},M=function(t,e,n){var i=E(t);r&&(n=(n=B(n))<0?0:n>255?255:255&n),i.view[f](e*o+i.byteOffset,n,!0)},O=function(t,e){R(t,e,{get:function(){return C(this,e)},set:function(t){return M(this,e,t)},enumerable:!0})};V?a&&(b=e((function(t,e,r,n){return u(t,b,c),k(function(){return g(e)?G(e)?void 0!==n?new p(e,y(r,o),n):void 0!==r?new p(e,y(r,o)):new p(e):j(e)?$(b,e):T.call(b,e):new p(h(e))}(),t,b)})),A&&A(b,q),x(m(p),(function(t){t in b||l(b,t,p[t])})),b.prototype=v):(b=e((function(t,e,r,n){u(t,b,c);var i,a,s,f=0,l=0;if(g(e)){if(!G(e))return j(e)?$(b,e):T.call(b,e);i=e,l=y(r,o);var p=e.byteLength;if(void 0===n){if(p%o)throw U(P);if(a=p-l,a<0)throw U(P)}else if(a=d(n)*o,a+l>p)throw U(P);s=a/o}else s=h(e),a=s*o,i=new D(a);I(t,{buffer:i,byteOffset:l,byteLength:a,length:s,view:new L(i)});while(f<s)O(t,f++)})),A&&A(b,q),v=b.prototype=w(W)),v.constructor!==b&&l(v,"constructor",b),F&&l(v,F,c),S[c]=b,n({global:!0,forced:b!=p,sham:!V},S),N in b||l(b,N,o),N in v||l(v,N,o),_(c)}):t.exports=function(){}},"77a7":function(t,e){var r=1/0,n=Math.abs,i=Math.pow,o=Math.floor,a=Math.log,c=Math.LN2,s=function(t,e,s){var u,f,l,d=new Array(s),h=8*s-e-1,y=(1<<h)-1,p=y>>1,b=23===e?i(2,-24)-i(2,-77):0,v=t<0||0===t&&1/t<0?1:0,g=0;for(t=n(t),t!=t||t===r?(f=t!=t?1:0,u=y):(u=o(a(t)/c),t*(l=i(2,-u))<1&&(u--,l*=2),t+=u+p>=1?b/l:b*i(2,1-p),t*l>=2&&(u++,l/=2),u+p>=y?(f=0,u=y):u+p>=1?(f=(t*l-1)*i(2,e),u+=p):(f=t*i(2,p-1)*i(2,e),u=0));e>=8;d[g++]=255&f,f/=256,e-=8);for(u=u<<e|f,h+=e;h>0;d[g++]=255&u,u/=256,h-=8);return d[--g]|=128*v,d},u=function(t,e){var n,o=t.length,a=8*o-e-1,c=(1<<a)-1,s=c>>1,u=a-7,f=o-1,l=t[f--],d=127&l;for(l>>=7;u>0;d=256*d+t[f],f--,u-=8);for(n=d&(1<<-u)-1,d>>=-u,u+=e;u>0;n=256*n+t[f],f--,u-=8);if(0===d)d=1-s;else{if(d===c)return n?NaN:l?-r:r;n+=i(2,e),d-=s}return(l?-1:1)*n*i(2,d-e)};t.exports={pack:s,unpack:u}},"7d03":function(t,e,r){},"81d5":function(t,e,r){"use strict";var n=r("7b0b"),i=r("23cb"),o=r("50c4");t.exports=function(t){var e=n(this),r=o(e.length),a=arguments.length,c=i(a>1?arguments[1]:void 0,r),s=a>2?arguments[2]:void 0,u=void 0===s?r:i(s,r);while(u>c)e[c++]=t;return e}},"82f8":function(t,e,r){"use strict";var n=r("ebb5"),i=r("4d64").includes,o=n.aTypedArray,a=n.exportTypedArrayMethod;a("includes",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},8418:function(t,e,r){"use strict";var n=r("c04e"),i=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var a=n(e);a in t?i.f(t,a,o(0,r)):t[a]=r}},8449:function(t,e,r){"use strict";var n=r("7d03"),i=r.n(n);i.a},"8aa7":function(t,e,r){var n=r("da84"),i=r("d039"),o=r("1c7e"),a=r("ebb5").NATIVE_ARRAY_BUFFER_VIEWS,c=n.ArrayBuffer,s=n.Int8Array;t.exports=!a||!i((function(){s(1)}))||!i((function(){new s(-1)}))||!o((function(t){new s,new s(null),new s(1.5),new s(t)}),!0)||i((function(){return 1!==new s(new c(2),1,void 0).length}))},"99af":function(t,e,r){"use strict";var n=r("23e7"),i=r("d039"),o=r("e8b5"),a=r("861d"),c=r("7b0b"),s=r("50c4"),u=r("8418"),f=r("65f0"),l=r("1dde"),d=r("b622"),h=r("2d00"),y=d("isConcatSpreadable"),p=9007199254740991,b="Maximum allowed index exceeded",v=h>=51||!i((function(){var t=[];return t[y]=!1,t.concat()[0]!==t})),g=l("concat"),w=function(t){if(!a(t))return!1;var e=t[y];return void 0!==e?!!e:o(t)},A=!v||!g;n({target:"Array",proto:!0,forced:A},{concat:function(t){var e,r,n,i,o,a=c(this),l=f(a,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?a:arguments[e],w(o)){if(i=s(o.length),d+i>p)throw TypeError(b);for(r=0;r<i;r++,d++)r in o&&u(l,d,o[r])}else{if(d>=p)throw TypeError(b);u(l,d++,o)}return l.length=d,l}})},"9a8c":function(t,e,r){"use strict";var n=r("ebb5"),i=r("145e"),o=n.aTypedArray,a=n.exportTypedArrayMethod;a("copyWithin",(function(t,e){return i.call(o(this),t,e,arguments.length>2?arguments[2]:void 0)}))},a078:function(t,e,r){var n=r("7b0b"),i=r("50c4"),o=r("35a1"),a=r("e95a"),c=r("0366"),s=r("ebb5").aTypedArrayConstructor;t.exports=function(t){var e,r,u,f,l,d,h=n(t),y=arguments.length,p=y>1?arguments[1]:void 0,b=void 0!==p,v=o(h);if(void 0!=v&&!a(v)){l=v.call(h),d=l.next,h=[];while(!(f=d.call(l)).done)h.push(f.value)}for(b&&y>2&&(p=c(p,arguments[2],2)),r=i(h.length),u=new(s(this))(r),e=0;r>e;e++)u[e]=b?p(h[e],e):h[e];return u}},a975:function(t,e,r){"use strict";var n=r("ebb5"),i=r("b727").every,o=n.aTypedArray,a=n.exportTypedArrayMethod;a("every",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},a981:function(t,e){t.exports="undefined"!==typeof ArrayBuffer&&"undefined"!==typeof DataView},ace4:function(t,e,r){"use strict";var n=r("23e7"),i=r("d039"),o=r("621a"),a=r("825a"),c=r("23cb"),s=r("50c4"),u=r("4840"),f=o.ArrayBuffer,l=o.DataView,d=f.prototype.slice,h=i((function(){return!new f(2).slice(1,void 0).byteLength}));n({target:"ArrayBuffer",proto:!0,unsafe:!0,forced:h},{slice:function(t,e){if(void 0!==d&&void 0===e)return d.call(a(this),t);var r=a(this).byteLength,n=c(t,r),i=c(void 0===e?r:e,r),o=new(u(this,f))(s(i-n)),h=new l(this),y=new l(o),p=0;while(n<i)y.setUint8(p++,h.getUint8(n++));return o}})},b39a:function(t,e,r){"use strict";var n=r("da84"),i=r("ebb5"),o=r("d039"),a=n.Int8Array,c=i.aTypedArray,s=i.exportTypedArrayMethod,u=[].toLocaleString,f=[].slice,l=!!a&&o((function(){u.call(new a(1))})),d=o((function(){return[1,2].toLocaleString()!=new a([1,2]).toLocaleString()}))||!o((function(){a.prototype.toLocaleString.call([1,2])}));s("toLocaleString",(function(){return u.apply(l?f.call(c(this)):c(this),arguments)}),d)},bf21:function(t,e,r){},c0b6:function(t,e,r){var n=r("23e7"),i=r("0538");n({target:"Function",proto:!0},{bind:i})},c1ac:function(t,e,r){"use strict";var n=r("ebb5"),i=r("b727").filter,o=r("4840"),a=n.aTypedArray,c=n.aTypedArrayConstructor,s=n.exportTypedArrayMethod;s("filter",(function(t){var e=i(a(this),t,arguments.length>1?arguments[1]:void 0),r=o(this,this.constructor),n=0,s=e.length,u=new(c(r))(s);while(s>n)u[n]=e[n++];return u}))},ca91:function(t,e,r){"use strict";var n=r("ebb5"),i=r("d58f").left,o=n.aTypedArray,a=n.exportTypedArrayMethod;a("reduce",(function(t){return i(o(this),t,arguments.length,arguments.length>1?arguments[1]:void 0)}))},cd26:function(t,e,r){"use strict";var n=r("ebb5"),i=n.aTypedArray,o=n.exportTypedArrayMethod,a=Math.floor;o("reverse",(function(){var t,e=this,r=i(e).length,n=a(r/2),o=0;while(o<n)t=e[o],e[o++]=e[--r],e[r]=t;return e}))},d139:function(t,e,r){"use strict";var n=r("ebb5"),i=r("b727").find,o=n.aTypedArray,a=n.exportTypedArrayMethod;a("find",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},d58f:function(t,e,r){var n=r("1c0b"),i=r("7b0b"),o=r("44ad"),a=r("50c4"),c=function(t){return function(e,r,c,s){n(r);var u=i(e),f=o(u),l=a(u.length),d=t?l-1:0,h=t?-1:1;if(c<2)while(1){if(d in f){s=f[d],d+=h;break}if(d+=h,t?d<0:l<=d)throw TypeError("Reduce of empty array with no initial value")}for(;t?d>=0:l>d;d+=h)d in f&&(s=r(s,f[d],d,u));return s}};t.exports={left:c(!1),right:c(!0)}},d5d6:function(t,e,r){"use strict";var n=r("ebb5"),i=r("b727").forEach,o=n.aTypedArray,a=n.exportTypedArrayMethod;a("forEach",(function(t){i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},e58c:function(t,e,r){"use strict";var n=r("fc6a"),i=r("a691"),o=r("50c4"),a=r("a640"),c=r("ae40"),s=Math.min,u=[].lastIndexOf,f=!!u&&1/[1].lastIndexOf(1,-0)<0,l=a("lastIndexOf"),d=c("indexOf",{ACCESSORS:!0,1:0}),h=f||!l||!d;t.exports=h?function(t){if(f)return u.apply(this,arguments)||0;var e=n(this),r=o(e.length),a=r-1;for(arguments.length>1&&(a=s(a,i(arguments[1]))),a<0&&(a=r+a);a>=0;a--)if(a in e&&e[a]===t)return a||0;return-1}:u},e6f2:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-main",{staticClass:"center"},[r("el-row",{attrs:{gutter:50}},[r("el-col",{staticClass:"center",attrs:{xs:24,sm:24,md:12}},[r("el-divider",{attrs:{"content-position":"left"}},[t._v("Camera")]),r("video",{ref:"localVideo",staticClass:"video-item",attrs:{autoplay:""}})],1),r("el-col",{staticClass:"center",attrs:{xs:24,sm:24,md:12}},[r("el-divider",{attrs:{"content-position":"left"}},[t._v("Audio Spectrum")]),r("canvas",{ref:"canvas",staticClass:"video-item"})],1)],1),r("StreamTracks",{model:{value:t.localStream,callback:function(e){t.localStream=e},expression:"localStream"}}),t.error?r("el-tag",{staticClass:"error",attrs:{type:"danger"}},[t._v(t._s(t.error))]):t._e(),r("vue-source",{attrs:{src:"webrtc/views/webrtc/MediaStreamVisualizer.vue",lang:"html"}})],1)},i=[],o=(r("4160"),r("159b"),r("0d31")),a=(r("ace4"),r("c0b6"),r("d3b7"),r("5cc6"),r("9a8c"),r("a975"),r("735e"),r("c1ac"),r("d139"),r("3a7b"),r("d5d6"),r("82f8"),r("e91f"),r("60bd"),r("5f96"),r("3280"),r("3fcc"),r("ca91"),r("25a1"),r("cd26"),r("3c5d"),r("2954"),r("649e"),r("219c"),r("170b"),r("b39a"),r("72f7"),308),c=231,s=.8,u=2048;function f(t,e){console.log("Creating StreamVisualizer with stream and canvas: ",t,e),this.canvas=e,this.drawContext=this.canvas.getContext("2d"),"function"===typeof AudioContext?this.context=new AudioContext:"function"===typeof webkitAudioContext?this.context=new webkitAudioContext:alert("Sorry! Web Audio is not supported by this browser"),this.source=this.context.createMediaStreamSource(t),console.log("Created Web Audio source from remote stream: ",this.source),this.analyser=this.context.createAnalyser(),this.analyser.minDecibels=-140,this.analyser.maxDecibels=0,this.freqs=new Uint8Array(this.analyser.frequencyBinCount),this.times=new Uint8Array(this.analyser.frequencyBinCount),this.source.connect(this.analyser),this.startTime=0,this.startOffset=0}f.prototype.start=function(){requestAnimationFrame(this.draw.bind(this))},f.prototype.draw=function(){this.analyser.smoothingTimeConstant=s,this.analyser.fftSize=u,this.analyser.getByteFrequencyData(this.freqs),this.analyser.getByteTimeDomainData(this.times),this.canvas.width=a,this.canvas.height=c;for(var t=0;t<this.analyser.frequencyBinCount;t++){var e=this.freqs[t],r=e/256,n=c*r,i=c-n-1,o=a/this.analyser.frequencyBinCount,f=t/this.analyser.frequencyBinCount*360;this.drawContext.fillStyle="hsl("+f+", 100%, 50%)",this.drawContext.fillRect(t*o,i,o,n)}for(t=0;t<this.analyser.frequencyBinCount;t++)e=this.times[t],r=e/256,n=c*r,i=c-n-1,o=a/this.analyser.frequencyBinCount,this.drawContext.fillStyle="white",this.drawContext.fillRect(t*o,i,1,2);requestAnimationFrame(this.draw.bind(this))},f.prototype.getFrequencyValue=function(t){var e=this.context.sampleRate/2,r=Math.round(t/e*this.freqs.length);return this.freqs[r]};var l=f,d={name:"MediaStreamVisualizer",components:{StreamTracks:o["a"]},data:function(){return{localStream:null,options:{audio:!0,video:{width:{exact:720},height:{exact:405}}},error:null}},methods:{init:function(){var t=this,e=this,r=this.$refs.localVideo;navigator.mediaDevices.getUserMedia(this.options).then((function(e){t.localStream=e,e.oninactive=function(){console.log("Stream inactive")},r.onloadedmetadata=function(t){console.log("AudioTracks",e.getAudioTracks()),console.log("VideoTracks",e.getVideoTracks())},r.srcObject=e;var n=new l(e,t.$refs.canvas);n.start()}))["catch"]((function(t){e.error=t,console.log("navigator.getUserMedia error: ",t)}))}},mounted:function(){this.init()},destroyed:function(){this.localStream&&this.localStream.getTracks().forEach((function(t){t.stop()}))}},h=d,y=(r("32bd"),r("2877")),p=Object(y["a"])(h,n,i,!1,null,"7121ba0c",null);e["default"]=p.exports},e91f:function(t,e,r){"use strict";var n=r("ebb5"),i=r("4d64").indexOf,o=n.aTypedArray,a=n.exportTypedArrayMethod;a("indexOf",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},ebb5:function(t,e,r){"use strict";var n,i=r("a981"),o=r("83ab"),a=r("da84"),c=r("861d"),s=r("5135"),u=r("f5df"),f=r("9112"),l=r("6eeb"),d=r("9bf2").f,h=r("e163"),y=r("d2bb"),p=r("b622"),b=r("90e3"),v=a.Int8Array,g=v&&v.prototype,w=a.Uint8ClampedArray,A=w&&w.prototype,m=v&&h(v),T=g&&h(g),x=Object.prototype,_=x.isPrototypeOf,S=p("toStringTag"),C=b("TYPED_ARRAY_TAG"),M=i&&!!y&&"Opera"!==u(a.opera),k=!1,E={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},I=function(t){var e=u(t);return"DataView"===e||s(E,e)},R=function(t){return c(t)&&s(E,u(t))},O=function(t){if(R(t))return t;throw TypeError("Target is not a typed array")},B=function(t){if(y){if(_.call(m,t))return t}else for(var e in E)if(s(E,n)){var r=a[e];if(r&&(t===r||_.call(r,t)))return t}throw TypeError("Target is not a typed array constructor")},U=function(t,e,r){if(o){if(r)for(var n in E){var i=a[n];i&&s(i.prototype,t)&&delete i.prototype[t]}T[t]&&!r||l(T,t,r?e:M&&g[t]||e)}},D=function(t,e,r){var n,i;if(o){if(y){if(r)for(n in E)i=a[n],i&&s(i,t)&&delete i[t];if(m[t]&&!r)return;try{return l(m,t,r?e:M&&v[t]||e)}catch(c){}}for(n in E)i=a[n],!i||i[t]&&!r||l(i,t,e)}};for(n in E)a[n]||(M=!1);if((!M||"function"!=typeof m||m===Function.prototype)&&(m=function(){throw TypeError("Incorrect invocation")},M))for(n in E)a[n]&&y(a[n],m);if((!M||!T||T===x)&&(T=m.prototype,M))for(n in E)a[n]&&y(a[n].prototype,T);if(M&&h(A)!==T&&y(A,T),o&&!s(T,S))for(n in k=!0,d(T,S,{get:function(){return c(this)?this[C]:void 0}}),E)a[n]&&f(a[n],C,n);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:k&&C,aTypedArray:O,aTypedArrayConstructor:B,exportTypedArrayMethod:U,exportTypedArrayStaticMethod:D,isView:I,isTypedArray:R,TypedArray:m,TypedArrayPrototype:T}},f8cd:function(t,e,r){var n=r("a691");t.exports=function(t){var e=n(t);if(e<0)throw RangeError("The argument can't be less than 0");return e}}}]);