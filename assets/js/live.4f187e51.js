(function(e){function t(t){for(var o,a,s=t[0],c=t[1],l=t[2],d=0,f=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={live:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([1,"chunk-vendors"]),n()})({"02f2":function(e,t,n){"use strict";var o=n("d1f7"),r=n.n(o);r.a},"0c0c":function(e,t,n){"use strict";var o=n("f299"),r=n.n(o);r.a},"0f70":function(e,t,n){"use strict";var o=n("2817"),r=n.n(o);r.a},1:function(e,t,n){e.exports=n("8729")},"1a48":function(e,t,n){"use strict";var o=n("24ac"),r=n.n(o);r.a},2:function(e,t){},"24ac":function(e,t,n){},2817:function(e,t,n){},"33a8":function(e,t,n){},"39b0":function(e,t,n){},"43c2":function(e,t,n){"use strict";var o=n("33a8"),r=n.n(o);r.a},5021:function(e,t,n){"use strict";var o=n("b3c2"),r=n.n(o);r.a},"597d":function(e,t,n){},8729:function(e,t,n){"use strict";n.r(t);n("4de4"),n("6eba"),n("0d03"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{attrs:{id:"app"}},[e.logined?[n("el-main",[n("CoursePanel",{ref:"course",staticClass:"content",attrs:{list:e.courseList},on:{change:e.courseChange}}),e.userData.role==e.RoleType.PUBLISHER?n("el-button-group",[n("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-arrow-left"},on:{click:e.prevPage}},[e._v("上一页")]),n("el-button",{attrs:{size:"mini"}},[e._v(e._s(e.coursePage))]),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.nextPage}},[e._v(" 下一页 "),n("i",{staticClass:"el-icon-arrow-right el-icon--right"})])],1):e._e()],1),n("el-drawer",{staticClass:"el-drawer-answer",attrs:{title:"答题中....",size:"100%",modal:!1,"show-close":!1,wrapperClosable:!1,"close-on-press-escape":!1,visible:e.courseStatus==e.CourseStatusType.ANSWER,direction:"ltr"},on:{"update:visible":function(t){return e.$set(e.courseStatus==e.CourseStatusType,"ANSWER",t)}}},[e.answerItem?n("AnswerPanel",{attrs:{item:e.answerItem,user:e.userData},on:{complete:e.answerCompleteHandler}}):e._e()],1),n("el-aside",{attrs:{width:"400px"}},[n("VideoDisplay",{staticClass:"video-display",attrs:{user:e.userData}}),n("el-tabs",{staticClass:"online-list",attrs:{type:"border-card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"用户",name:"zero"}},[n("UserProfile",{attrs:{user:e.userData}},[n("el-button",{attrs:{type:"danger"},on:{click:e.logoutHandler}},[e._v("退出")])],1)],1),n("el-tab-pane",{attrs:{label:"座次表",name:"first"}},[n("OnlineList",{attrs:{data:e.tableData}})],1),e.userData.role==e.RoleType.PUBLISHER?n("el-tab-pane",{attrs:{label:"题库",name:"second"}},[e.currentSubject?n("QuestionBank",{attrs:{data:e.currentSubject}},[e.currentSubject.done?e._e():n("el-button",{directives:[{name:"show",rawName:"v-show",value:!e.subject.starting,expression:"!subject.starting"}],attrs:{type:"danger"},on:{click:e.sendPageSubject}},[e._v("发送答题")])],1):e._e()],1):e._e(),n("el-tab-pane",{attrs:{label:"排行榜",name:"third"}},[n("el-table",{attrs:{data:e.rankList,border:"",stripe:"","show-header":!1}},[n("el-table-column",{attrs:{width:"100",prop:"id",label:"UID",align:"center"}}),n("el-table-column",{attrs:{width:"80",label:"昵称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.getUserById(t.row.id).name))]}}],null,!1,684902089)})],1)],1),n("el-tab-pane",{attrs:{id:"console",label:"Console",name:"console"}})],1),"console"==e.activeName?n("el-button",{staticClass:"clear-btn",attrs:{type:"primary",icon:"el-icon-delete"},on:{click:e.clearHistory}},[e._v("清除")]):e._e()],1),n("el-dialog",{attrs:{title:e.dialogRank.title,visible:e.dialogRank.visible},on:{"update:visible":function(t){return e.$set(e.dialogRank,"visible",t)}}},[n("CompetitionList",{attrs:{data:e.rankList,lucky:e.lucky}})],1)]:n("el-main",{staticClass:"center"},[n("el-carousel",{attrs:{height:"100%",arrow:"never"}},e._l(["#409EFF","#67C23A","#F56C6C"],(function(e){return n("el-carousel-item",{key:e,style:{background:e}})})),1),n("Login",{staticClass:"login",on:{complete:e.loginComplete}})],1)],2)},i=[],a=(n("a4d3"),n("4160"),n("d81d"),n("1d1c"),n("7a82"),n("e439"),n("dbb4"),n("b64b"),n("07ac"),n("159b"),n("ade3")),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-alert",{attrs:{type:"success",closable:!1}},[n("b",[e._v("班级：")]),e._v(" "+e._s(e.user.td)+" # "+e._s(e.user.label)+" ")]),n("el-alert",{attrs:{type:"info",closable:!1}},[n("b",[e._v("姓名：")]),e._v(" "+e._s(e.user.name)+" ")]),n("el-alert",{attrs:{type:"warning",closable:!1}},[n("b",[e._v("ID：")]),e._v(" "+e._s(e.user.id)+" ")]),n("el-alert",{attrs:{type:"info",closable:!1}},[n("b",[e._v("角色：")]),e._v(" "+e._s(e.RoleType[e.user.role])+" ")]),n("el-alert",{attrs:{type:"warning",closable:!1}},[n("b",[e._v("SID：")]),e._v(" "+e._s(e.user.sid)+" ")]),n("el-alert",{attrs:{type:"info",closable:!1}},[n("b",[e._v("登陆时间：")]),e._v(" "+e._s(e._f("localTime")(e.user.time))+" ")]),n("el-row",{staticClass:"footer"},[e._t("default",null,{data:e.user})],2)],1)},c=[],l={name:"UserProfile",props:{user:{}}},u=l,d=(n("1a48"),n("2877")),f=Object(d["a"])(u,s,c,!1,null,"26c1e8a6",null),p=f.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-table",{attrs:{data:e.data,border:"",stripe:"","show-header":!1}},[n("el-table-column",{attrs:{width:"100",prop:"id",label:"日期",align:"center"}}),n("el-table-column",{attrs:{width:"80",prop:"name",label:"姓名",align:"center"}}),n("el-table-column",{attrs:{prop:"role",label:"地址"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.RoleType[t.row.role]))]}}])}),n("el-table-column",{attrs:{prop:"time",label:"时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("localTime")(t.row.time)))]}}])})],1)},b=[],h={name:"OnlineList",props:{data:{}},data:function(){return{}},computed:{},methods:{}},v=h,g=Object(d["a"])(v,m,b,!1,null,null,null),y=g.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",[n("el-alert",{attrs:{title:e.data.title,type:"warning",closable:!1}}),e._l(e.data.options,(function(t,o){return n("el-alert",{key:o,attrs:{title:e.subjectOptionLabel[o]+"、"+t,type:"info",closable:!1}})})),n("el-alert",{attrs:{title:"正确选项："+e.data.correct,description:"",type:"success",closable:!1}}),n("el-row",{staticClass:"footer"},[e._t("default",null,{data:e.data})],2)],2)},j=[],S={name:"QuestionBank",props:{data:{}},data:function(){return{subjectOptionLabel:["A","B","C","D","E","F","G","H","I","J","K"]}}},_=S,w=(n("a226"),Object(d["a"])(_,O,j,!1,null,"c1e9fe50",null)),k=w.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",[n("h3",[e._v("排行榜")]),e._l(e.data,(function(t){return n("el-row",{key:t.id,staticClass:"el-row-list-item",class:[t.id===e.lucky.id?"lucky":""]},[t.total>0?[n("el-col",{attrs:{span:4,align:"center"}},[e._v(e._s(t.id))]),n("el-col",{attrs:{span:6,align:"center"}},[e._v(e._s(e.getUserById(t.id).name))]),n("el-col",{attrs:{span:5,align:"center"}},[e._v(e._s(e._f("formatTimeValue")(t.time)))]),n("el-col",{attrs:{span:6,align:"center"}},[n("el-rate",{attrs:{value:t.score,disabled:"","text-color":"#ff9900"}})],1),n("el-col",{attrs:{span:3,align:"center"}},[e._v(e._s(t.total))])]:e._e()],2)})),n("h2",[e._v("幸运奖")]),n("el-row",{staticClass:"el-row-lucky"},[n("el-col",{attrs:{span:4,align:"center"}},[e._v(e._s(e.lucky.id))]),n("el-col",{attrs:{span:9,align:"center"}},[e._v(e._s(e.getUserById(e.lucky.id).name))]),n("el-col",{attrs:{span:8,align:"center"}},[n("el-rate",{attrs:{value:e.lucky.luckyScore,disabled:"","text-color":"#ff9900"}})],1),n("el-col",{attrs:{span:3,align:"center"}},[e._v("+"+e._s(e.lucky.luckyScore))])],1)],2)},E=[],L=n("2f62");function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){Object(a["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D={name:"CompetitionList",props:{data:{},lucky:{}},data:function(){return{}},computed:R({},Object(L["c"])("user",["getUserById"])),methods:{luckyTabelRow:function(e){var t=e.row;e.index;if(t.id===this.lucky.id)return"success-row"}}},T=D,C=(n("0f70"),Object(d["a"])(T,P,E,!1,null,"6b57fc95",null)),U=C.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",[n("img",{staticClass:"course",attrs:{src:e.list[e.page-1]}})])},x=[],B={name:"CoursePanel",props:{list:{type:Array,defalute:function(){return[]}}},data:function(){return{page:1}},methods:{prevPage:function(){this.page--,this.page=this.page>0?this.page:1,this.$emit("change",this.page,this.list.length)},nextPage:function(){this.page++,this.page=this.page<this.list.length?this.page:this.list.length,this.$emit("change",this.page,this.list.length)},changePage:function(e){this.page=e,this.$emit("change",this.page,this.list.length)}},mounted:function(){this.$emit("change",this.page,this.list.length)}},N=B,V=(n("5021"),Object(d["a"])(N,A,x,!1,null,"17d31910",null)),$=V.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",[n("el-aside",[n("el-table",{attrs:{data:e.tableData}},[n("el-table-column",{attrs:{prop:"id",label:"ID"}}),n("el-table-column",{attrs:{label:"昵称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.getUserById(t.row.id).name))]}}])}),e.publisher?n("el-table-column",{attrs:{prop:"select",label:"选项"}}):e._e(),n("el-table-column",{attrs:{label:"结果"},scopedSlots:e._u([{key:"default",fn:function(e){return[n("i",{class:[e.row.result?"el-icon-check":"el-icon-close","icon-result"]})]}}])})],1),n("el-footer",[e._v("答题计时中: "+e._s(e._f("formatTimeValue")(e.time)))])],1),n("el-main",[n("el-row",{staticClass:"title"},[n("b",[e._v(e._s(e.item.title))])]),n("el-row",{staticClass:"el-list"},e._l(e.item.options,(function(t,o){return n("el-row",{key:o,class:[e.publisher?"":e.selectValue==o?"select current-row":"select"],attrs:{gutter:20},nativeOn:{click:function(t){return e.selectHandler(o)}}},[n("el-col",{attrs:{span:2}},[e._v(e._s(e.subjectOptionLabel[o])+"、")]),n("el-col",{attrs:{span:22}},[e._v(e._s(t))])],1)})),1),n("el-footer",[e.publisher?[n("el-button",{attrs:{type:"danger"},on:{click:e.closeSubject}},[e._v("关闭答题")])]:[n("p",[e._v("选择答案选项，并提交答案，等待老师结束答题")]),e.getResultById(e.user.id)?e._e():n("el-button",{attrs:{type:"success"},on:{click:e.submitResult}},[e._v("提交答案")])]],2)],1)],1)},H=[];function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){Object(a["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var W={name:"AnswerPanel",props:{item:{},user:{}},data:function(){return{time:0,result:"",selectValue:-1,subjectOptionLabel:["A","B","C","D","E","F","G","H","I","J","K"]}},computed:z({},Object(L["c"])("user",["getUserById"]),{},Object(L["c"])("subject",["getResultById"]),{},Object(L["d"])("subject",{subject:function(e){return e}}),{publisher:function(){return this.user&&this.user.role==this.RoleType.PUBLISHER},tableData:function(){return this.subject&&this.subject.list||[]}}),methods:z({},Object(L["b"])("subject",["initResults","addResult","addRankingList"]),{selectHandler:function(e){this.selectValue=e},submitResult:function(){var e=this,t=this.subjectOptionLabel[this.selectValue];this.$confirm("您确认提交答案？提交后将不得再更改答案。","提交答案，选项 "+t,{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.client.subject("answer",t,e.addResult)}))},closeSubject:function(){var e=this;this.$confirm("确认结束答题？确认结束后，学生将不能提交答案。","结束答题",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.client.subject("stop",null,(function(t){e.$emit("complete",t)}))}))}}),mounted:function(){var e=this;this.client.on("reply",this.addResult),this.client.on("startTime",(function(t){return e.time=t})),this.client.on("stop",(function(t){e.$emit("complete",t)}))}},F=W,G=(n("b0f6"),Object(d["a"])(F,M,H,!1,null,"867e0be8",null)),K=G.exports,Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"fill",attrs:{id:"video_display"}})])},q=[],Y={name:"VideoDisplay",props:{user:{type:Object,default:function(){}},td:{type:String,default:"1000"},appid:{type:String,default:"9bc022ca9b2d4b2e93ac03a4d548fc0d"}},data:function(){return{loading:!1,videoProfile:"480P_4"}},computed:{publisher:function(){return this.user&&this.user.role==this.RoleType.PUBLISHER}},methods:{init:function(){var e=this;this.videoStream.init().then((function(t){var n=t.videoinput,o=t.audioinput;console.log("设备列表",n,o),e.videoStream.videoElement="video_display",e.videoStream.videoProfile=e.videoProfile,e.videoStream.streamID=e.user.id,e.videoStream.createStream().then((function(t){e.videoStream.display(),e.connect()}))["catch"]((function(e){console.log("localStream play err",e)}))}))},connect:function(){var e=this;this.videoClient.on("stream",(function(t){console.log("Remove Video Stream ADD",t),e.videoClient.player(t,"video_display"),e.publisher||(e.loading=!1)})),this.videoClient.on("removed",(function(t){console.log("Remove Video Stream REMOVE",t),e.videoClient.stopPlayer(t,"video_display")})),this.videoClient.on("error",(function(e){})),this.videoClient.on("rejected",(function(e){})),this.videoClient.connect(this.appid,this.td,this.user.role+""+this.user.id).then((function(){e.publisher&&(e.videoClient.publish(e.videoStream.localStream),e.loading=!1)}))}},mounted:function(){this.loading=!0,console.log(this.user),this.publisher?this.init():this.connect()}},X=Y,Z=(n("02f2"),Object(d["a"])(X,Q,q,!1,null,"44f50eaa",null)),ee=Z.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{attrs:{model:e.user,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"UID: "}},[n("el-select",{attrs:{placeholder:"请选择UID"},model:{value:e.user.id,callback:function(t){e.$set(e.user,"id",t)},expression:"user.id"}},e._l(e.idList,(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),n("el-form-item",{attrs:{label:"班级: "}},[n("el-select",{attrs:{placeholder:"请选择班级"},model:{value:e.user.td,callback:function(t){e.$set(e.user,"td",t)},expression:"user.td"}},e._l(e.classList,(function(e){var t=e.label,o=e.td;return n("el-option",{key:o,attrs:{label:t,value:o}})})),1)],1),n("el-form-item",{attrs:{label:"昵称"}},[n("el-input",{attrs:{placeholder:"请输入昵称"},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"success"},on:{click:function(t){return e.onSubmit(e.RoleType.PUBLISHER)}}},[e._v("老师进入")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit(e.RoleType.SUBSCRIBER)}}},[e._v("学生进入")])],1)],1)},ne=[];n("b0c0");function oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(n),!0).forEach((function(t){Object(a["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ie={name:"LoginPanel",data:function(){return{logined:!1,idList:[1001,1002,1003,1004,1005,1006,1007,1008,1009],classList:[{label:"甘露班",td:1001},{label:"晨曦班",td:1002},{label:"花儿班",td:1003},{label:"伶俐班",td:1004},{label:"铃茉莉班",td:1005},{label:"小太阳班",td:1006},{label:"冰淇淋班",td:1007},{label:"可爱猪班",td:1008}],user:{td:1002,id:1001,name:"希西",label:"甘露班",role:0}}},methods:re({},Object(L["b"])("user",["setUser","initUsers","pushUser","removeUser"]),{connected:function(){this.logined=!1;var e=null;if(e){var t=JSON.parse(e);this.user.name=t.name,this.user.td=t.td,this.user.label=t.label,this.onSubmit(t.role)}},disconnected:function(){this.logined=!1},closed:function(){this.logined=!1},onSubmit:function(e){var t=this,n=this,o=this.classList.filter((function(e){return e.td===t.user.td}));o.length>0&&(this.user.role=e,this.client.register(o[0].td,this.user.id,this.user.name,e,(function(e){var t=re({},n.user,{},e);sessionStorage.setItem("live_user",JSON.stringify({td:t.td,id:t.id,name:t.name,label:t.label,role:t.role})),n.setUser(t),n.$emit("complete",t)})))}}),mounted:function(){this.client.init("ws://"+window.location.hostname+":3000","/live"),this.client.on("connected",this.connected),this.client.on("entry",this.pushUser),this.client.on("list",this.initUsers),this.client.on("leave",this.removeUser),this.client.on("disconnect",this.disconnected),this.client.on("closed",this.closed)}},ae=ie,se=(n("43c2"),Object(d["a"])(ae,te,ne,!1,null,"05c6fd0e",null)),ce=se.exports;function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function ue(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(Object(n),!0).forEach((function(t){Object(a["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var de,fe,pe={NORMAL:"normal",ANSWER:"answer"},me={name:"App",components:{Login:ce,UserProfile:p,OnlineList:y,QuestionBank:k,CompetitionList:U,VideoDisplay:ee,CoursePanel:$,AnswerPanel:K},data:function(){return{CourseStatusType:pe,userData:null,logined:!1,courseStatus:pe.NORMAL,answerItem:null,activeName:"zero",coursePage:"",dialogRank:{visible:!1,title:""},lucky:null,rankList:[],courseList:[],currentSubject:null}},computed:ue({},Object(L["c"])("user",["getUserById"]),{},Object(L["d"])("user",{user:function(e){return e}}),{},Object(L["d"])("subject",{subject:function(e){return e}}),{tableData:function(){return this.user&&this.user.userList}}),methods:ue({},Object(L["b"])("subject",["startSubject","stopSubject"]),{logoutHandler:function(){this.client.close()},loginComplete:function(e){this.userData=e,this.logined=!0},prevPage:function(){this.$refs.course.prevPage()},nextPage:function(){this.$refs.course.nextPage()},courseChange:function(e,t){var n=this;this.coursePage=e+"/"+t,this.logined&&this.userData.role==this.RoleType.PUBLISHER&&this.client.subject("search",e,(function(e){n.currentSubject=Object.values(e).length?e:null}))},sendPageSubject:function(){var e=this;this.client.subject("start",this.$refs.course.page,(function(t){e.courseStatus=pe.ANSWER,e.answerItem=t,e.startSubject(t)}))},answerCompleteHandler:function(e){this.rankList=e.list||[],this.lucky=e.lucky,console.log("答题结束,幸运观众",this.lucky,this.rankList),this.courseStatus=pe.NORMAL,this.answerItem=null,this.stopSubject(),this.currentSubject.done=!0,this.dialogRank.visible=this.rankList.length>0},clearHistory:function(){console.clear()},luckyTabelRow:function(e){var t=e.row;e.index;if(t.id===this.lucky.id)return"success-row"}}),mounted:function(){var e=this;this.client.on("start",(function(t){e.courseStatus=pe.ANSWER,e.answerItem=t,e.currentSubject=t,e.startSubject(t)})),this.client.on("page",(function(t){e.$refs.course.changePage(t)})),this.client.on("closed",(function(){e.logined=!1,sessionStorage.removeItem("live_user")})),this.axios.get("/surfing/index.json").then((function(t){var n=t.data;e.courseList=n.list.map((function(e){return"/surfing/"+e}))}))}},be=me,he=(n("0c0c"),n("9a26"),Object(d["a"])(be,r,i,!1,null,"389abba9",null)),ve=he.exports,ge=(n("7db0"),n("a434"),{SET_USER:"setUser",USER_LIST:"userList",USER_ADD:"userAdd",USER_REMOVE:"userItem"}),ye={namespaced:!0,state:{user:null,userList:[]},mutations:(de={},Object(a["a"])(de,ge.SET_USER,(function(e,t){e.user=t})),Object(a["a"])(de,ge.USER_LIST,(function(e,t){e.userList=t})),Object(a["a"])(de,ge.USER_ADD,(function(e,t){for(var n in e.userList)e.userList[n].id===t.id&&e.userList.splice(n,1);e.userList.push(t)})),Object(a["a"])(de,ge.USER_REMOVE,(function(e,t){for(var n in e.userList)e.userList[n].id===t.id&&e.userList.splice(n,1)})),de),actions:{setUser:function(e,t){var n=e.commit;n(ge.SET_USER,t)},initUsers:function(e,t){var n=e.commit;n(ge.USER_LIST,t)},pushUser:function(e,t){var n=e.commit;n(ge.USER_ADD,t)},removeUser:function(e,t){var n=e.commit;n(ge.USER_REMOVE,t)}},getters:{getUserById:function(e){return function(t){return e.userList.find((function(e){return e.id==t}))}}}},Oe={START_SUBJECT:"start",INIT_LIST:"initList",ADD_RESULT:"addResult",RESET:"reset"},je={namespaced:!0,state:{starting:!1,list:[]},mutations:(fe={},Object(a["a"])(fe,Oe.START_SUBJECT,(function(e,t){e.starting=!0})),Object(a["a"])(fe,Oe.INIT_LIST,(function(e,t){e.list=t})),Object(a["a"])(fe,Oe.ADD_RESULT,(function(e,t){e.list.push(t)})),Object(a["a"])(fe,Oe.RESET,(function(e,t){e.starting=!1,e.list=[]})),fe),actions:{startSubject:function(e,t){var n=e.commit;n(Oe.START_SUBJECT,t)},initResults:function(e,t){var n=e.commit;n(Oe.INIT_LIST,t)},addResult:function(e,t){var n=e.commit;n(Oe.ADD_RESULT,t)},stopSubject:function(e,t){var n=e.commit;n(Oe.RESET,t)}},getters:{getResultById:function(e){return function(t){return e.list.find((function(e){return e.id==t}))}}}};o["default"].use(L["a"]);var Se=new L["a"].Store({modules:{user:ye,subject:je}}),_e={PUBLISHER:1,SUBSCRIBER:2,1:"PUBLISHER",2:"SUBSCRIBER"},we=function(e){var t=new Date(e);return t.toLocaleDateString()==(new Date).toLocaleDateString()?t.toLocaleTimeString("chinese",{hour12:!1}):t.toLocaleString("chinese",{hour12:!1})},ke=function(e){e=Math.floor(e/1e3);var t="-";e>=0&&(t=""),e=Math.round(Math.abs(e));var n=Math.floor(e/3600)%24,o=Math.floor(e/60)%60,r=e%60,i="";return 0!=n&&(i=n+":"),i+=i&&o<10?"0"+o:o+"",i+=r<10?":0"+r:":"+r,t+i},Pe=n("5c96"),Ee=n.n(Pe),Le=(n("0fae"),n("d4ec")),Ie=n("bee2"),Re=n("99de"),De=n("7e84"),Te=n("45eb"),Ce=n("262e"),Ue=n("8055"),Ae=n.n(Ue),xe=n("faa1"),Be=n.n(xe),Ne=function(e){function t(){return Object(Le["a"])(this,t),Object(Re["a"])(this,Object(De["a"])(t).call(this))}return Object(Ce["a"])(t,e),t}(Be.a.EventEmitter),Ve=Ne,$e=function(e){function t(){var e;return Object(Le["a"])(this,t),e=Object(Re["a"])(this,Object(De["a"])(t).call(this)),e.count=5,e.connected=!1,e}return Object(Ce["a"])(t,e),Object(Ie["a"])(t,[{key:"init",value:function(e,t){this.manager={path:t,secure:!0,transports:["websocket"],reconnection:!0,reconnectionAttempts:3},console.log(e,t),this.socket=Ae.a.connect(e,this.manager),this.listen(this.socket)}},{key:"listen",value:function(e){var t=this;e.on("connect",(function(){t.connected=!0,console.log("socket connected"),t.emit("connected")})),e.on("connect_error",(function(e){console.error("socket io","connect error",e),t.connected=!1})),e.on("connect_timeout",(function(){console.log("socket io","connect_timeout"),t.connected=!1})),e.on("disconnect",(function(){console.log("socket io","disconnect"),t.connected=!1,t.emit("disconnect",t.connected)})),e.on("reconnect",(function(e){console.log("socket io","reconnect",e)})),e.on("reconnect_attempt",(function(){console.log("socket io","reconnect attempt")})),e.on("reconnecting",(function(e){console.log("socket io","reconnecting",e),t.emit("reconnect",e,t.manager.reconnectionAttempts)})),e.on("reconnect_error",(function(e){console.error("socket io","reconnect error",e),t.connected=!1})),e.on("reconnect_failed",(function(){console.log("socket io","reconnect failed"),t.connected=!1,t.emit("closed")})),e.on("error",(function(e){console.error("socket io","error",e),t.connected=!1,t.emit("error")}))}},{key:"broadcast",value:function(e,t){this.connected&&this.socket.emit(e,t)}},{key:"close",value:function(){this.socket&&(this.socket.close(),this.emit("closed"))}}]),t}(Ve),Me=$e,He=function(e){function t(){return Object(Le["a"])(this,t),Object(Re["a"])(this,Object(De["a"])(t).call(this))}return Object(Ce["a"])(t,e),Object(Ie["a"])(t,[{key:"listen",value:function(e){var n=this;Object(Te["a"])(Object(De["a"])(t.prototype),"listen",this).call(this,e),e.on("entry",(function(e){return n.emit("entry",e)})),e.on("list",(function(e){return n.emit("list",e)})),e.on("leave",(function(e){return n.emit("leave",e)})),e.on("start",(function(e){return n.emit("start",e)})),e.on("startTime",(function(e){return n.emit("startTime",e)})),e.on("reply",(function(e){return n.emit("reply",e)})),e.on("stop",(function(e){return n.emit("stop",e)})),e.on("page",(function(e){return n.emit("page",e)})),e.on("share",(function(e,t){e.event?n.emit("share",e.event,e.data,t):console.log("share",e)}))}},{key:"register",value:function(e,t,n,o,r){this.socket.emit("register",{td:e,id:t,name:n,role:o},r)}},{key:"subject",value:function(e,t,n){this.connected&&this.connected&&this.socket.emit("subject",{type:e,data:t},n)}}]),t}(Me),Je=He,ze=(n("99af"),n("a15b"),n("a9e3"),n("d3b7"),n("e25e"),n("257e")),We=n("6b5f"),Fe=n.n(We);console.log("设备检测",Fe.a.checkSystemRequirements());var Ge=function(e){function t(){var e;return Object(Le["a"])(this,t),e=Object(Re["a"])(this,Object(De["a"])(t).call(this)),Object(a["a"])(Object(ze["a"])(e),"cameras",[]),Object(a["a"])(Object(ze["a"])(e),"microphones",[]),Object(a["a"])(Object(ze["a"])(e),"audios",[]),Object(a["a"])(Object(ze["a"])(e),"camera",null),Object(a["a"])(Object(ze["a"])(e),"microphone",null),Object(a["a"])(Object(ze["a"])(e),"localStream",null),Object(a["a"])(Object(ze["a"])(e),"videoProfile",null),Object(a["a"])(Object(ze["a"])(e),"videoElement",null),Object(a["a"])(Object(ze["a"])(e),"streamID",null),e}return Object(Ce["a"])(t,e),Object(Ie["a"])(t,[{key:"init",value:function(){var e=this;return new Promise((function(t,n){Fe.a.getDevices((function(o){e.audios=[],e.cameras=[],e.microphones=[],o&&o.length>0?(o.forEach((function(t){t=JSON.parse(JSON.stringify(t)),"videoinput"==t["kind"]?(t.label=t.label||"Camera "+(e.cameras.length+1),e.cameras.push(t)):"audioinput"==t["kind"]?(t.label=t.label||"Microphone "+(e.microphones.length+1),e.microphones.push(t)):"audiooutput"==t["kind"]&&(t.label=t.label||"Audio "+(e.audios.length+1),e.audios.push(t))})),t({videoinput:e.cameras,audioinput:e.microphones,audiooutput:e.audios})):n("DEVICES_NOT_FOUND")}))}))}},{key:"display",value:function(e,t){var n=this;return new Promise((function(o,r){console.log(n),n.localStream&&(n.localStream.isPlaying()&&n.localStream.stop(),n.localStream.play(e||n.videoElement,t,(function(e){e&&"aborted"!==e.status&&r({error:"播放失败，一般为浏览器策略阻止。引导用户用手势触发恢复播放"}),o()})))}))}},{key:"createStream",value:function(e){var t=this;return e=e||t.options,this.videoProfile=this.videoProfile||"360P_3",console.log("Create Stream",this.element,this.videoProfile,e),new Promise((function(n,o){t.localStream=Fe.a.createStream(e),t.localStream.setVideoProfile(t.videoProfile),t.localStream.on("accessAllowed",(function(){t.access=!0,console.log("localStream # accessAllowed")})),t.localStream.on("accessDenied",(function(){t.access=!1,console.warn("localStream # accessDenied")})),t.localStream.init((function(){console.log("getUserMedia successfully"),n(t.localStream)}),(function(e){console.log("getUserMedia failed",e),o(e.msg)}))}))}},{key:"switchDevice",value:function(e,t){var n=this;return new Promise((function(o,r){n.localStream.switchDevice(e,t,o,r)}))}},{key:"close",value:function(){null!=this.localStream&&this.localStream.close()}},{key:"options",get:function(){var e={streamID:parseInt(this.streamID),screen:!1,video:!0,audio:!1};return this.cameraId?(e.video=!0,e.cameraId=this.cameraId):console.warn("没有视频设备, 无视频信号"),this.microphoneId?(e.audio=!0,e.microphoneId=this.microphoneId):console.warn("没有麦克风设备, 无音频信号"),e}},{key:"cameraId",set:function(e){var t=this.cameras||[];this.camera=t.find((function(t){return t.deviceId===e}))},get:function(){return this.camera?this.camera.deviceId:this.cameras.length>0?this.cameras[0].deviceId:null}},{key:"microphoneId",set:function(e){var t=this,n=t.microphones||[];this.microphone=n.find((function(t){return t.deviceId===e}))},get:function(){return this.microphone?this.microphone.deviceId:this.microphones.length>0?this.microphones[0].deviceId:null}}]),t}(Ve),Ke=function(e){function t(){var e;return Object(Le["a"])(this,t),e=Object(Re["a"])(this,Object(De["a"])(t).call(this)),Object(a["a"])(Object(ze["a"])(e),"uid",null),Object(a["a"])(Object(ze["a"])(e),"channel",null),Object(a["a"])(Object(ze["a"])(e),"streamList",{}),Object(a["a"])(Object(ze["a"])(e),"clinet",null),Object(a["a"])(Object(ze["a"])(e),"appid",null),Fe.a.Logger.setLogLevel(Fe.a.Logger.WARN),Fe.a.Logger.enableLogUpload(),console.log("AgoraRTC.BUILD",Fe.a.BUILD),e.client=Fe.a.createClient({mode:"live",codec:"vp8"}),e.addListener(e.client),e}return Object(Ce["a"])(t,e),Object(Ie["a"])(t,[{key:"addListener",value:function(e){var t=this;e.on("stream-added",(function(t){var n=t.stream,o=n.getId();console.log("New stream added: ",o),console.log("Subscribe ",n),e.subscribe(n,(function(e){console.log("Subscribe stream failed",o,e)}))})),e.on("stream-subscribed",(function(e){var n=e.stream,o=n.getId();t.streamList[o]=n,console.log("Subscribe remote stream successfully: ",o,n.getAttributes(),"Video Track",n.getVideoTrack(),"Audio Track",n.getAudioTrack()),t.emit("stream",o)})),e.on("stream-removed",(function(e){var n=e.stream,o=n.getId();console.log("Remote stream is removed "+o),t.emit("removed",o),n.stop(),delete t.streamList[o]})),e.on("peer-leave",(function(e){var n=e.stream;if(n){var o=n.getId();console.log("Remote stream is removed "+o),t.emit("removed",o),n.stop(),delete t.streamList[o]}})),e.on("stream-reconnect-start",(function(e){console.log("尝试重新发布/订阅音视频流",e.uid)})),e.on("stream-reconnect-end",(function(e){console.log("重新发布/订阅音视频流结束",e.uid,e.success,e.reason)})),e.on("unmute-video",(function(e){var t=e.uid;console.log("unmute video:",t)})),e.on("client-banned",(function(e){var n=e.uid,o=e.attr;t.emit("rejected",n,o),console.warn(" user banned:"+n+", banntype:"+o)})),e.on("active-speaker",(function(e){var t=e.uid;console.log("update active speaker: client",t)})),e.on("volume-indicator",(function(e){var t=e.attr;t.forEach((function(e,t){console.log("".concat(t," UID ").concat(e.uid," Level ").concat(e.level))}))})),e.on("onTokenPrivilegeWillExpire",(function(){console.warn("---- token expire ----"),t.emit("tokenExpire")})),e.on("stream-type-changed",(function(e){console.log("Stream Type Change",e.uid,e.streamType)})),e.on("network-type-changed",(function(e){console.log("Network Type Changed to",e.networkType)})),e.on("camera-changed",(function(e){console.log("Camera Changed",e.state,e.device)})),e.on("recording-device-changed",(function(e){console.log("Recording Device Changed",e.state,e.device)})),e.on("playout-device-changed",(function(e){console.log("Playout Device Changed",e.state,e.device)})),e.on("reconnect",(function(){console.log("reconnect")})),e.on("connected",(function(){console.log("connected")})),e.on("connection-state-change",(function(e){t.connected="CONNECTED"===e.curState,console.log("Connection status changes",e.prevState,e.curState),t.emit("connection",e.prevState,e.curState)})),e.on("network-quality",(function(e){})),e.on("error",(function(e){console.error("AgoraRTC SDK Error:"+e),t.emit("error",e.reason)}))}},{key:"connect",value:function(e,t,n,o){var r=this,i=this;return this.appid=e,this.channel="AGD"+t,console.log("VIDEO CLIENT::",this.appid,this.channel),new Promise((function(e,t){i.appid?i.client.init(i.appid,(function(){i.client.join(o,r.channel,n,(function(t){i.uid=t,console.log("JOIN 成功",i.appid,r.channel,t),e(t)}),(function(e){t(e)}))}),(function(e){t(e)})):(console.warn("AgoraRTC appid must not be empty",i.appid),t("AgoraRTC appid must not be empty"+i.appid))}))}},{key:"publish",value:function(e){var t=this;return new Promise((function(n,o){t.client.publish(e,(function(e){console.warn("Publish local stream error: ",e),o(e)})),t.client.on("stream-published",(function(e){console.log("Publish local stream successfully"),n()}))}))}},{key:"getStream",value:function(e){var t=this.streamList[e];return t||console.warn("指定token的媒体流已经丢失",e)}},{key:"player",value:function(e,t,n){var o=this.getStream(e);return new Promise((function(r,i){o?(o.isPlaying()&&o.stop(),o.play(t,n||{fit:"contain"},(function(e){e&&"aborted"!==e.status&&i({error:"播放失败，一般为浏览器策略阻止。引导用户用手势触发恢复播放"}),r()}))):(console.warn("指定token的媒体流已经丢失或未获取...",e,t),i({error:"为查询到指定".concat(e,"的媒体流")}))}))}},{key:"stopPlayer",value:function(e,t){var n=this.getStream(e);n&&n.stop(),document.getElementById(t).innerText="",console.log(e,"Stream stopPlayer",e,this.streamList)}},{key:"toggleVideo",value:function(e,t){var n=this.getStream(e);t?n.unmuteVideo():(n.muteVideo(),console.log("视频图像已经关闭",e))}},{key:"getAudioVolume",value:function(e){var t=localStorage.getItem(this.channel+e);return Number(t||100)}},{key:"setAudioVolume",value:function(e,t){var n=this.getStream(e);n&&n.setAudioVolume(t),localStorage.setItem(this.channel+e,t)}},{key:"toggleAudio",value:function(e,t){var n=this.getStream(e);n&&(t?(n.muteAudio(),console.log("视频声音已经关闭 ",e)):n.unmuteAudio())}},{key:"unpublish",value:function(e,t){e&&this.client.unpublish(e,(function(e){switch(e){case"STREAM_NOT_YET_PUBLISHED":console.warn("指定的stream还没发布");break;case"INVALID_LOCAL_STREAM":console.warn("传入无效stream对象");break;case"INVALID_OPERATION":console.warn("当前不在频道中,取消订阅失败");break;default:console.error("Unpublish local stream failed",e)}t&&t(e)}))}},{key:"destroyed",value:function(){var e=this;return new Promise((function(t,n){Object.keys(e.streamList).map((function(t){e.stopPlayer(t)})),e.streamList={},e.client.leave((function(){console.log("Leavel channel successfully"),t()}),(function(e){console.warn("Leave channel failed"),n(e)}))}))}}]),t}(Ve),Qe=(n("e89b"),n("bc3a")),qe=n.n(Qe),Ye=n("a7fe"),Xe=n.n(Ye);o["default"].use(Ee.a,{size:"small",zIndex:3e3}),o["default"].prototype.client=new Je,o["default"].prototype.videoStream=new Ge,o["default"].prototype.videoClient=new Ke,o["default"].prototype.$fingerprint=Date.now(),o["default"].filter("localTime",we),o["default"].filter("formatTimeValue",ke),o["default"].use(Xe.a,qe.a),o["default"].prototype.RoleType=_e,o["default"].config.productionTip=!1,new o["default"]({store:Se,render:function(e){return e(ve)}}).$mount("#app")},"9a26":function(e,t,n){"use strict";var o=n("39b0"),r=n.n(o);r.a},a226:function(e,t,n){"use strict";var o=n("597d"),r=n.n(o);r.a},b0f6:function(e,t,n){"use strict";var o=n("b48a"),r=n.n(o);r.a},b3c2:function(e,t,n){},b48a:function(e,t,n){},d1f7:function(e,t,n){},f299:function(e,t,n){}});