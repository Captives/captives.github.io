(function(t){function e(e){for(var a,o,r=e[0],l=e[1],c=e[2],u=0,d=[];u<r.length;u++)o=r[u],s[o]&&d.push(s[o][0]),s[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],a=!0,r=1;r<i.length;r++){var l=i[r];0!==s[l]&&(a=!1)}a&&(n.splice(e--,1),t=o(o.s=i[0]))}return t}var a={},s={innerEntry:0},n=[];function o(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=a,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(i,a,function(e){return t[e]}.bind(null,a));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var p=l;n.push([7,"chunk-vendors","chunk-common"]),i()})({"417b":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var a=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Home")],1)},n=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("div",{staticClass:"page_center"},[t._m(0),i("div",{staticClass:"innerTip"},[t._v("此页面仅限于内部使用")]),i("p",{staticClass:"title"},[t._v("内部视频会议公用平台")]),i("p",{staticClass:"subhead"},[t._v("请选择你想使用的会议模式")]),i("ul",{staticClass:"list"},[i("li",{staticClass:"first"},[i("div",{staticClass:"img"}),i("div",{staticClass:"btnBox"},[i("span",{staticClass:"btn1",on:{click:function(e){return t.entryVideo(1,2,1)}}},[t._v("发起人")]),i("span",{staticClass:"btn2",on:{click:function(e){return t.entryVideo(1,1,1)}}},[t._v("参与人")])])]),i("li",{staticClass:"second"},[i("div",{staticClass:"img"}),i("div",{staticClass:"btnBox"},[i("span",{staticClass:"btn1",on:{click:function(e){return t.entryVideo(1,2,4)}}},[t._v("发起人")]),i("span",{staticClass:"btn2",on:{click:function(e){return t.entryVideo(1,1,4)}}},[t._v("参与人")])])]),i("li",{staticClass:"third"},[i("div",{staticClass:"img"}),i("div",{staticClass:"btnBox"},[i("span",{staticClass:"btn1",on:{click:function(e){return t.entryVideo(2,2,"不限")}}},[t._v("发起人")]),i("span",{staticClass:"btn2",on:{click:function(e){return t.entryVideo(2,1,"不限")}}},[t._v("参与人")])])])]),i("p",{staticClass:"tip"},[t._v("（每个会议室只能有一个会议主持）")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isLogin||t.isCreated,expression:"isLogin || isCreated"}],staticClass:"mask"}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isLogin,expression:"isLogin"}],staticClass:"login",attrs:{id:"loginPanel"}},[i("span",{staticClass:"iconfont icon-close",on:{click:function(e){t.isLogin=!1}}}),i("p",{staticClass:"login_title"},[t._v(t._s(t.dialogData.title))]),i("div",{staticClass:"inputBox"},[i("p",{directives:[{name:"show",rawName:"v-show",value:t.dialogData.firstLabel,expression:"dialogData.firstLabel"}],staticClass:"input"},[i("label",[t._v(t._s(t.dialogData.firstLabel))]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{placeholder:t.dialogData.firstPlaceholder},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t.firstErrorTip?i("span",{staticClass:"inputTip"},[t._v(t._s(t.firstErrorTip))]):t._e()]),i("p",{directives:[{name:"show",rawName:"v-show",value:t.dialogData.secondLabel,expression:"dialogData.secondLabel"}],staticClass:"input"},[i("label",[t._v(t._s(t.dialogData.secondLabel))]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.room_id,expression:"room_id"}],attrs:{type:"number",placeholder:t.dialogData.secondPlaceholder},domProps:{value:t.room_id},on:{input:function(e){e.target.composing||(t.room_id=e.target.value)}}}),t.secondErrorTip?i("span",{staticClass:"inputTip"},[t._v("会议室编号不能为空")]):t._e()]),i("p",{staticClass:"input"},[i("label",[t._v("参会人数：")]),i("span",[t._v(t._s(t.member_count))])])]),t.errorTip?i("p",{staticClass:"errorTip"},[t._v(t._s(t.errorTip))]):t._e(),i("span",{staticClass:"btn_cancel",on:{click:t.login}},[t._v(t._s(t.dialogData.btnText))]),i("p",{directives:[{name:"show",rawName:"v-show",value:t.dialogData.exchangeText,expression:"dialogData.exchangeText"}],staticClass:"exchange",on:{click:t.exchangeDialog}},[t._v(t._s(t.dialogData.exchangeText))])]),t.isCreated?i("div",{staticClass:"login"},[i("span",{staticClass:"iconfont icon-close",on:{click:function(e){t.isCreated=!1}}}),i("p",{staticClass:"login_title"},[t._v("会议室生成成功")]),i("p"),i("div",{staticClass:"inputBox"},[i("p",{staticClass:"input"},[i("label",[t._v("用户名：")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{placeholder:"建议填写公司内常用称呼"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t.firstErrorTip?i("span",{staticClass:"inputTip"},[t._v(t._s(t.firstErrorTip))]):t._e()]),i("p",{staticClass:"input"},[i("label",[t._v("会议室编号：")]),i("span",[t._v(t._s(t.room_id))])]),i("p",{staticClass:"input"},[i("label",[t._v("参会人数：")]),i("span",[t._v(t._s(t.member_count))])])]),i("p",{staticClass:"errorTip"},[t._v("请将您的会议室编号告知您的参与人")]),i("span",{staticClass:"btn_cancel",on:{click:t.entryRoom}},[t._v("进入会议室")]),i("p",{staticClass:"exchange",on:{click:t.exchangeDialogByCreated}},[t._v("切换已有会议室")])]):t._e()])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"imgbox"},[i("div",{staticClass:"log_web"})])}],l=(i("6b54"),i("bc3a")),c=i.n(l),p=function(t,e){return c.a.post("/meeting/createRoom",{type:t,member_count:e})},u=function(t,e,i){return c.a.post("/meeting/entryRoom",{room_id:t,user_id:e,user_type:i})},d={type1:{title:"创建会议室",btnText:"生成会议室",exchangeText:"切换已有会议室"},type2:{title:"已有会议室",firstLabel:"用户名：",firstPlaceholder:"建议填写公司内常用称呼",secondLabel:"会议室编号：",secondPlaceholder:"请输入会议室编号",btnText:"进入",exchangeText:"切换创建会议室"},type3:{title:"进入会议室",firstLabel:"用户名：",firstPlaceholder:"建议填写公司内常用称呼",secondLabel:"会议室编号：",secondPlaceholder:"请输入会议室编号",btnText:"进入"}},m={name:"home",data:function(){return{isLogin:!1,isCreated:!1,type:"",user_type:"",member_count:"",email:"",room_id:"001",firstErrorTip:"",secondErrorTip:!1,errorTip:!1,dialogType:"type1",dialogData:d.type1}},methods:{entryVideo:function(t,e,i){this.clearInput(),this.type=t,this.user_type=e,this.member_count=i,this.isLogin=!0,this.dialogType=2===e?"type1":"type3",this.dialogData=d[this.dialogType]},exchangeDialog:function(){this.clearInput(),this.dialogType="type1"===this.dialogType?"type2":"type1",this.dialogData=d[this.dialogType]},exchangeDialogByCreated:function(){this.clearInput(),this.isCreated=!1,this.isLogin=!0,this.dialogType="type2",this.dialogData=d[this.dialogType]},login:function(){var t=this;if("type1"===this.dialogType){var e="不限"==this.member_count?0:this.member_count;p(this.type,e).then(function(e){var i=e.data,a=i.result.room_id;t.room_id=a,t.isLogin=!1,t.isCreated=!0})}else this.entryRoom()},entryRoom:function(){this.entryRoomCheckout()&&u(this.room_id,this.email,this.user_type).then(function(t){var e=t.data,i=e.result.url;window.location.href=i})},entryRoomCheckout:function(){return this.clearErrorTip(),this.email.trim()?this.email.length>30?(this.firstErrorTip="长度不能超过30",!1):!!this.room_id.toString().trim()||(this.secondErrorTip=!0,!1):(this.firstErrorTip="用户名不能为空",!1)},clearInput:function(){this.email="",this.room_id="",this.clearErrorTip()},clearErrorTip:function(){this.firstErrorTip="",this.secondErrorTip=!1}}},v=m,f=(i("d8e9"),i("2877")),h=Object(f["a"])(v,o,r,!1,null,"6ea5fe4e",null),_=h.exports,g={name:"App",components:{Home:_}},b=g,y=(i("c876"),Object(f["a"])(b,s,n,!1,null,null,null)),C=y.exports;i("8963"),i("8591");a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(C)}}).$mount("#app")},7:function(t,e,i){t.exports=i("417b")},8591:function(t,e,i){},8963:function(t,e,i){},bdcd:function(t,e,i){},c3f4:function(t,e,i){},c876:function(t,e,i){"use strict";var a=i("c3f4"),s=i.n(a);s.a},d8e9:function(t,e,i){"use strict";var a=i("bdcd"),s=i.n(a);s.a}});
//# sourceMappingURL=innerEntry.2293561f.js.map