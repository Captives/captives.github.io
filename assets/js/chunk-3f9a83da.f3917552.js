(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f9a83da"],{"0ccb":function(t,e,a){var r=a("50c4"),n=a("1148"),o=a("1d80"),i=Math.ceil,u=function(t){return function(e,a,u){var l,c,d=String(o(e)),s=d.length,f=void 0===u?" ":String(u),h=r(a);return h<=s||""==f?d:(l=h-s,c=n.call(f,i(l/f.length)),c.length>l&&(c=c.slice(0,l)),t?d+c:c+d)}};t.exports={start:u(!1),end:u(!0)}},1148:function(t,e,a){"use strict";var r=a("a691"),n=a("1d80");t.exports="".repeat||function(t){var e=String(n(this)),a="",o=r(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(a+=e);return a}},4362:function(t,e,a){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=a("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var r=a("1d80"),n=a("5899"),o="["+n+"]",i=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),l=function(t){return function(e){var a=String(r(e));return 1&t&&(a=a.replace(i,"")),2&t&&(a=a.replace(u,"")),a}};t.exports={start:l(1),end:l(2),trim:l(3)}},7156:function(t,e,a){var r=a("861d"),n=a("d2bb");t.exports=function(t,e,a){var o,i;return n&&"function"==typeof(o=e.constructor)&&o!==a&&r(i=o.prototype)&&i!==a.prototype&&n(t,i),t}},"843c":function(t,e,a){"use strict";var r=a("23e7"),n=a("0ccb").end,o=a("9a0c");r({target:"String",proto:!0,forced:o},{padEnd:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},9784:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("van-row",[a("van-button",{attrs:{type:"default"}},[t._v("凯迪拉克")]),a("van-field",{attrs:{type:"number",label:"次数"},model:{value:t.cadillac.count,callback:function(e){t.$set(t.cadillac,"count",e)},expression:"cadillac.count"}}),a("van-cell",{attrs:{border:!1,title:"结果"}},[t._v(" "+t._s(t.cadillac.result)+" ")]),a("van-cell",[a("van-button",{attrs:{type:"default"},on:{click:t.requestHandler}},[t._v("开始请求")]),a("van-button",{attrs:{type:"danger"},on:{click:t.stopHandler}},[t._v("停止请求")])],1),a("van-button",{attrs:{type:"default"}},[t._v("大众奥迪")]),a("van-field",{attrs:{type:"number",label:"次数"},model:{value:t.audi.count,callback:function(e){t.$set(t.audi,"count",e)},expression:"audi.count"}}),a("van-cell",{attrs:{border:!1,title:"结果"}},[t._v(" "+t._s(t.audi.result)+" ")]),a("van-cell",[a("van-button",{attrs:{type:"default"},on:{click:t.requestAudiHandler}},[t._v("开始请求")]),a("van-button",{attrs:{type:"danger"},on:{click:t.stopAudiHandler}},[t._v("停止请求")])],1)],1)},n=[],o=(a("a9e3"),a("d3b7"),a("25f0"),a("843c"),a("d4ec")),i=a("bee2"),u=a("262e"),l=a("2caf"),c=a("9ab4"),d=a("1b40"),s=a("bc3a"),f=a.n(s),h=a("2ef0"),p=a.n(h),v=["黄浦区","徐汇区","长宁区","静安区","普陀区 ","虹口区","杨浦区","浦东新区","闵行区","宝山区","嘉定区","金山区","松江区","青浦区","奉贤区","崇明区"],m=function(t){Object(u["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.cadillac={count:0,params:{ts:"1621938294443",selmodel:2252,driverName:"哈哈哈",model:"上海市",city:"静安区",sex:"1",dealer:"CD1061",driverPhone:"13356788778",driverPlan:"1",driverRead:"1",privacyRead:"on",mz_ca:"",mz_sp:"",mz_kw:"",utm_source:"SP - CA0000001_00000000",utm_medium:"",utm_term:"",utm_content:"",utm_campaign:"",wSourceID:"0"},autoId:null,result:""},t.audi={count:0,params:{atd_atdIntentCar:163760,atd_atdIntentModel:164060,atd_atdDealerProvince:500,atd_atdDealerCity:501,atd_atdIntentDealer:-1,atd_atdName:"",atd_atdGender:2,atd_atdMobile:14388889999,atd_atdPlanBuytime:"146",atd_apStandby1:"https://contact.audi.cn/testdrive.html",atd_apStandby2:p.a},autoId:null,result:""},t}return Object(i["a"])(a,[{key:"requestHandler",value:function(){var t=this,e=[1,2,4,5,30];this.cadillac.params=Object.assign(this.cadillac.params,{ts:Date.now()-Math.floor(99999*Math.random()),driverName:v[Math.floor(Math.random()*v.length)],city:v[Math.floor(Math.random()*v.length)],driverPlan:e[Math.floor(Math.random()*e.length)].toString(),selmodel:Number(Math.floor(9999*Math.random())),dealer:p.a.padEnd("CD10"+Math.floor(100*Math.random()),5,"1"),driverPhone:p.a.padEnd("1"+Math.floor(9999999999*Math.random()),11,"2"),driverRead:Math.random()>.5?"1":"0"}),f()({method:"get",url:"https://www.cadillac.com.cn/api/testdrive.ashx",params:this.cadillac.params}).then((function(e){console.log(e.data),t.cadillac.count++,t.cadillac.result=t.cadillac.params.driverName+"-"+t.cadillac.params.driverPhone+"\n"+e.data,t.stopHandler(),t.cadillac.autoId=setTimeout(t.requestHandler.bind(t),50)}))}},{key:"stopHandler",value:function(){this.cadillac.autoId&&clearTimeout(this.cadillac.autoId)}},{key:"requestAudiHandler",value:function(){var t=this;this.audi.params=Object.assign(this.audi.params,{atd_atdName:v[Math.floor(Math.random()*v.length)],atd_atdIntentCar:163e3+Math.floor(1e3*Math.random()),atd_atdIntentModel:164e3+Math.floor(1e3*Math.random()),atd_atdDealerProvince:Math.floor(9999*Math.random()),atd_atdDealerCity:Math.floor(1e5*Math.random()),atd_atdPlanBuytime:Math.floor(100*Math.random()),atd_atdGender:Math.random()>.5?1:2,atd_atdMobile:p.a.padEnd("1"+Math.floor(9999999999*Math.random()),11,"2")}),f()({method:"POST",url:"https://contact.audi.cn/contact/testdrive_add.json",params:this.audi.params}).then((function(e){t.audi.count++,t.audi.result=t.audi.params.atd_atdName+"-"+t.audi.params.atd_atdMobile+"-"+e.data.message,t.stopAudiHandler(),t.audi.autoId=setTimeout(t.requestAudiHandler.bind(t),50)}))}},{key:"stopAudiHandler",value:function(){this.audi.autoId&&clearTimeout(this.audi.autoId)}}]),a}(d["l"]);m=Object(c["b"])([Object(d["a"])({name:"About"})],m);var b=m,g=b,_=a("2877"),y=function(t){t.options.__source="src/travel/views/About.vue"},M=y,I=Object(_["a"])(g,r,n,!1,null,null,null);"function"===typeof M&&M(I);e["default"]=I.exports},"9a0c":function(t,e,a){var r=a("342f");t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)},a9e3:function(t,e,a){"use strict";var r=a("83ab"),n=a("da84"),o=a("94ca"),i=a("6eeb"),u=a("5135"),l=a("c6b6"),c=a("7156"),d=a("c04e"),s=a("d039"),f=a("7c73"),h=a("241c").f,p=a("06cf").f,v=a("9bf2").f,m=a("58a8").trim,b="Number",g=n[b],_=g.prototype,y=l(f(_))==b,M=function(t){var e,a,r,n,o,i,u,l,c=d(t,!1);if("string"==typeof c&&c.length>2)if(c=m(c),e=c.charCodeAt(0),43===e||45===e){if(a=c.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+c}for(o=c.slice(2),i=o.length,u=0;u<i;u++)if(l=o.charCodeAt(u),l<48||l>n)return NaN;return parseInt(o,r)}return+c};if(o(b,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var I,A=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof A&&(y?s((function(){_.valueOf.call(a)})):l(a)!=b)?c(new g(M(e)),a,A):M(e)},w=r?h(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;w.length>N;N++)u(g,I=w[N])&&!u(A,I)&&v(A,I,p(g,I));A.prototype=_,_.constructor=A,i(n,b,A)}},bee2:function(t,e,a){"use strict";function r(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,e,a){return e&&r(t.prototype,e),a&&r(t,a),t}a.d(e,"a",(function(){return n}))},df7c:function(t,e,a){(function(t){function a(t,e){for(var a=0,r=t.length-1;r>=0;r--){var n=t[r];"."===n?t.splice(r,1):".."===n?(t.splice(r,1),a++):a&&(t.splice(r,1),a--)}if(e)for(;a--;a)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,a=0,r=-1,n=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!n){a=e+1;break}}else-1===r&&(n=!1,r=e+1);return-1===r?"":t.slice(a,r)}function n(t,e){if(t.filter)return t.filter(e);for(var a=[],r=0;r<t.length;r++)e(t[r],r,t)&&a.push(t[r]);return a}e.resolve=function(){for(var e="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var i=o>=0?arguments[o]:t.cwd();if("string"!==typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(e=i+"/"+e,r="/"===i.charAt(0))}return e=a(n(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),i="/"===o(t,-1);return t=a(n(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&i&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(n(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,a){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var a=t.length-1;a>=0;a--)if(""!==t[a])break;return e>a?[]:t.slice(e,a-e+1)}t=e.resolve(t).substr(1),a=e.resolve(a).substr(1);for(var n=r(t.split("/")),o=r(a.split("/")),i=Math.min(n.length,o.length),u=i,l=0;l<i;l++)if(n[l]!==o[l]){u=l;break}var c=[];for(l=u;l<n.length;l++)c.push("..");return c=c.concat(o.slice(u)),c.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),a=47===e,r=-1,n=!0,o=t.length-1;o>=1;--o)if(e=t.charCodeAt(o),47===e){if(!n){r=o;break}}else n=!1;return-1===r?a?"/":".":a&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var a=r(t);return e&&a.substr(-1*e.length)===e&&(a=a.substr(0,a.length-e.length)),a},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,a=0,r=-1,n=!0,o=0,i=t.length-1;i>=0;--i){var u=t.charCodeAt(i);if(47!==u)-1===r&&(n=!1,r=i+1),46===u?-1===e?e=i:1!==o&&(o=1):-1!==e&&(o=-1);else if(!n){a=i+1;break}}return-1===e||-1===r||0===o||1===o&&e===r-1&&e===a+1?"":t.slice(e,r)};var o="b"==="ab".substr(-1)?function(t,e,a){return t.substr(e,a)}:function(t,e,a){return e<0&&(e=t.length+e),t.substr(e,a)}}).call(this,a("4362"))}}]);