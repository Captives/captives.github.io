(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-005c6b25"],{"025d":function(e,t,n){},"07ac":function(e,t,n){var s=n("23e7"),a=n("6f53").values;s({target:"Object",stat:!0},{values:function(e){return a(e)}})},"0f70":function(e,t,n){"use strict";var s=n("2817"),a=n.n(s);a.a},"1a48":function(e,t,n){"use strict";var s=n("24ac"),a=n.n(s);a.a},"1d1c":function(e,t,n){var s=n("23e7"),a=n("83ab"),i=n("37e8");s({target:"Object",stat:!0,forced:!a,sham:!a},{defineProperties:i})},"24ac":function(e,t,n){},2817:function(e,t,n){},"46f8":function(e,t,n){"use strict";var s=n("7326"),a=n.n(s);a.a},"490d":function(e,t,n){"use strict";var s=n("a741"),a=n.n(s);a.a},5021:function(e,t,n){"use strict";var s=n("b3c2"),a=n.n(s);a.a},"594f":function(e,t,n){},"597d":function(e,t,n){},"630a":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{attrs:{id:"app"}},[e.logined?[n("el-main",[n("CoursePanel",{ref:"course",staticClass:"content",attrs:{list:e.courseList},on:{change:e.courseChange}}),e.userData.role==e.RoleType.PUBLISHER?n("el-button-group",[n("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-arrow-left"},on:{click:e.prevPage}},[e._v("上一页")]),n("el-button",{attrs:{size:"mini"}},[e._v(e._s(e.coursePage))]),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.nextPage}},[e._v(" 下一页 "),n("i",{staticClass:"el-icon-arrow-right el-icon--right"})])],1):e._e()],1),n("el-drawer",{staticClass:"el-drawer-answer",attrs:{title:"答题中....",size:"100%",modal:!1,"show-close":!1,wrapperClosable:!1,"close-on-press-escape":!1,visible:e.courseStatus==e.CourseStatusType.ANSWER,direction:"ltr"},on:{"update:visible":function(t){return e.$set(e.courseStatus==e.CourseStatusType,"ANSWER",t)}}},[e.answerItem?n("AnswerPanel",{attrs:{item:e.answerItem,user:e.userData},on:{complete:e.answerCompleteHandler}}):e._e()],1),n("el-aside",{attrs:{width:"400px"}},[n("VideoDisplay",{staticClass:"video-display",attrs:{user:e.userData}}),n("VideoSeatList",{attrs:{list:e.tableData},model:{value:e.videoData,callback:function(t){e.videoData=t},expression:"videoData"}}),n("el-tabs",{staticClass:"online-list",attrs:{type:"border-card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"用户",name:"zero"}},[n("UserProfile",{attrs:{user:e.userData}},[n("el-button",{attrs:{type:"danger"},on:{click:e.logoutHandler}},[e._v("退出")])],1)],1),e.userData.role==e.RoleType.PUBLISHER?n("el-tab-pane",{attrs:{label:"题库",name:"second"}},[e.currentSubject?n("QuestionBank",{attrs:{data:e.currentSubject}},[e.currentSubject.done?e._e():n("el-button",{directives:[{name:"show",rawName:"v-show",value:!e.subject.starting,expression:"!subject.starting"}],attrs:{type:"danger"},on:{click:e.sendPageSubject}},[e._v("发送答题")])],1):e._e()],1):e._e(),n("el-tab-pane",{attrs:{label:"排行榜",name:"third"}},[n("el-table",{attrs:{data:e.rankList,border:"",stripe:"","show-header":!1}},[n("el-table-column",{attrs:{width:"100",prop:"id",label:"UID",align:"center"}}),n("el-table-column",{attrs:{width:"80",label:"昵称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.getUserById(t.row.id).name))]}}],null,!1,684902089)})],1)],1),n("el-tab-pane",{attrs:{id:"console",label:"Console",name:"console"}})],1),"console"==e.activeName?n("el-button",{staticClass:"clear-btn",attrs:{type:"primary",icon:"el-icon-delete"},on:{click:e.clearHistory}},[e._v("清除")]):e._e()],1),n("VideoList",{attrs:{list:e.videoData}}),n("el-dialog",{attrs:{title:e.dialogRank.title,visible:e.dialogRank.visible},on:{"update:visible":function(t){return e.$set(e.dialogRank,"visible",t)}}},[n("CompetitionList",{attrs:{data:e.rankList,lucky:e.lucky}})],1)]:n("el-main",{staticClass:"center"},[n("el-carousel",{attrs:{height:"100%",arrow:"never"}},e._l(["#409EFF","#67C23A","#F56C6C"],(function(e){return n("el-carousel-item",{key:e,style:{background:e}})})),1),n("Login",{staticClass:"login",on:{complete:e.loginComplete}})],1)],2)},a=[],i=(n("d81d"),n("07ac"),n("a4d3"),n("4de4"),n("4160"),n("1d1c"),n("7a82"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3"));function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-alert",{attrs:{type:"success",closable:!1}},[n("b",[e._v("班级：")]),e._v(" "+e._s(e.user.td)+" # "+e._s(e.user.label)+" ")]),n("el-alert",{attrs:{type:"info",closable:!1}},[n("b",[e._v("姓名：")]),e._v(" "+e._s(e.user.name)+" ")]),n("el-alert",{attrs:{type:"warning",closable:!1}},[n("b",[e._v("ID：")]),e._v(" "+e._s(e.user.id)+" ")]),n("el-alert",{attrs:{type:"info",closable:!1}},[n("b",[e._v("角色：")]),e._v(" "+e._s(e.RoleType[e.user.role])+" ")]),n("el-alert",{attrs:{type:"warning",closable:!1}},[n("b",[e._v("SID：")]),e._v(" "+e._s(e.user.sid)+" ")]),n("el-alert",{attrs:{type:"info",closable:!1}},[n("b",[e._v("登陆时间：")]),e._v(" "+e._s(e._f("localTime")(e.user.time))+" ")]),n("el-row",{staticClass:"footer"},[e._t("default",null,{data:e.user})],2)],1)},c=[],u={name:"UserProfile",props:{user:{}}},d=u,f=(n("1a48"),n("2877")),p=Object(f["a"])(d,o,c,!1,null,"26c1e8a6",null),b=p.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-table",{attrs:{data:e.data,border:"",stripe:"","show-header":!1}},[n("el-table-column",{attrs:{width:"100",prop:"id",label:"日期",align:"center"}}),n("el-table-column",{attrs:{width:"80",prop:"name",label:"姓名",align:"center"}}),n("el-table-column",{attrs:{prop:"role",label:"地址"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.RoleType[t.row.role]))]}}])}),n("el-table-column",{attrs:{prop:"time",label:"时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("localTime")(t.row.time)))]}}])})],1)},h=[],v={name:"OnlineList",props:{data:{}},data:function(){return{}},computed:{},methods:{}},g=v,y=Object(f["a"])(g,m,h,!1,null,null,null),_=y.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",[n("el-alert",{attrs:{title:e.data.title,type:"warning",closable:!1}}),e._l(e.data.options,(function(t,s){return n("el-alert",{key:s,attrs:{title:e.subjectOptionLabel[s]+"、"+t,type:"info",closable:!1}})})),n("el-alert",{attrs:{title:"正确选项："+e.data.correct,description:"",type:"success",closable:!1}}),n("el-row",{staticClass:"footer"},[e._t("default",null,{data:e.data})],2)],2)},S=[],j={name:"QuestionBank",props:{data:{}},data:function(){return{subjectOptionLabel:["A","B","C","D","E","F","G","H","I","J","K"]}}},k=j,O=(n("a226"),Object(f["a"])(k,w,S,!1,null,"c1e9fe50",null)),C=O.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",[n("h3",[e._v("排行榜")]),e._l(e.data,(function(t){return n("el-row",{key:t.id,staticClass:"el-row-list-item",class:[t.id===e.lucky.id?"lucky":""]},[t.total>0?[n("el-col",{attrs:{span:4,align:"center"}},[e._v(e._s(t.id))]),n("el-col",{attrs:{span:6,align:"center"}},[e._v(e._s(e.getUserById(t.id).name))]),n("el-col",{attrs:{span:5,align:"center"}},[e._v(e._s(e._f("formatTimeValue")(t.time)))]),n("el-col",{attrs:{span:6,align:"center"}},[n("el-rate",{attrs:{value:t.score,disabled:"","text-color":"#ff9900"}})],1),n("el-col",{attrs:{span:3,align:"center"}},[e._v(e._s(t.total))])]:e._e()],2)})),n("h2",[e._v("幸运奖")]),n("el-row",{staticClass:"el-row-lucky"},[n("el-col",{attrs:{span:4,align:"center"}},[e._v(e._s(e.lucky.id))]),n("el-col",{attrs:{span:9,align:"center"}},[e._v(e._s(e.getUserById(e.lucky.id).name))]),n("el-col",{attrs:{span:8,align:"center"}},[n("el-rate",{attrs:{value:e.lucky.luckyScore,disabled:"","text-color":"#ff9900"}})],1),n("el-col",{attrs:{span:3,align:"center"}},[e._v("+"+e._s(e.lucky.luckyScore))])],1)],2)},R=[],D=n("2f62"),x={name:"CompetitionList",props:{data:{},lucky:{}},data:function(){return{}},computed:r({},Object(D["c"])("user",["getUserById"])),methods:{luckyTabelRow:function(e){var t=e.row;e.index;if(t.id===this.lucky.id)return"success-row"}}},L=x,P=(n("0f70"),Object(f["a"])(L,I,R,!1,null,"6b57fc95",null)),$=P.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",[n("img",{staticClass:"course",attrs:{src:e.list[e.page-1]}})])},T=[],U={name:"CoursePanel",props:{list:{type:Array,defalute:function(){return[]}}},data:function(){return{page:1}},methods:{prevPage:function(){this.page--,this.page=this.page>0?this.page:1,this.$emit("change",this.page,this.list.length)},nextPage:function(){this.page++,this.page=this.page<this.list.length?this.page:this.list.length,this.$emit("change",this.page,this.list.length)},changePage:function(e){this.page=e,this.$emit("change",this.page,this.list.length)}},mounted:function(){this.$emit("change",this.page,this.list.length)}},B=U,V=(n("5021"),Object(f["a"])(B,E,T,!1,null,"17d31910",null)),H=V.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",[n("el-aside",[n("el-table",{attrs:{data:e.tableData}},[n("el-table-column",{attrs:{prop:"id",label:"ID"}}),n("el-table-column",{attrs:{label:"昵称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.getUserById(t.row.id).name))]}}])}),e.publisher?n("el-table-column",{attrs:{prop:"select",label:"选项"}}):e._e(),n("el-table-column",{attrs:{label:"结果"},scopedSlots:e._u([{key:"default",fn:function(e){return[n("i",{class:[e.row.result?"el-icon-check":"el-icon-close","icon-result"]})]}}])})],1),n("el-footer",[e._v("答题计时中: "+e._s(e._f("formatTimeValue")(e.time)))])],1),n("el-main",[n("el-row",{staticClass:"title"},[n("b",[e._v(e._s(e.item.title))])]),n("el-row",{staticClass:"el-list"},e._l(e.item.options,(function(t,s){return n("el-row",{key:s,class:[e.publisher?"":e.selectValue==s?"select current-row":"select"],attrs:{gutter:20},nativeOn:{click:function(t){return e.selectHandler(s)}}},[n("el-col",{attrs:{span:2}},[e._v(e._s(e.subjectOptionLabel[s])+"、")]),n("el-col",{attrs:{span:22}},[e._v(e._s(t))])],1)})),1),n("el-footer",[e.publisher?[n("el-button",{attrs:{type:"danger"},on:{click:e.closeSubject}},[e._v("关闭答题")])]:[n("p",[e._v("选择答案选项，并提交答案，等待老师结束答题")]),e.getResultById(e.user.id)?e._e():n("el-button",{attrs:{type:"success"},on:{click:e.submitResult}},[e._v("提交答案")])]],2)],1)],1)},N=[],z={name:"AnswerPanel",props:{item:{},user:{}},data:function(){return{time:0,result:"",selectValue:-1,subjectOptionLabel:["A","B","C","D","E","F","G","H","I","J","K"]}},computed:r(r(r(r({},Object(D["c"])("UserData",["getUserById"])),Object(D["c"])("SubjectData",["getResultById"])),Object(D["d"])("SubjectData",{subject:function(e){return e}})),{},{publisher:function(){return this.user&&this.user.role==this.RoleType.PUBLISHER},tableData:function(){return this.subject&&this.subject.list||[]}}),methods:r(r({},Object(D["b"])("SubjectData",["initResults","addResult","addRankingList"])),{},{selectHandler:function(e){this.selectValue=e},submitResult:function(){var e=this,t=this.subjectOptionLabel[this.selectValue];this.$confirm("您确认提交答案？提交后将不得再更改答案。","提交答案，选项 "+t,{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.client.subject("answer",t,e.addResult)}))},closeSubject:function(){var e=this;this.$confirm("确认结束答题？确认结束后，学生将不能提交答案。","结束答题",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.client.subject("stop",null,(function(t){e.$emit("complete",t)}))}))}}),mounted:function(){var e=this;this.client.on("reply",this.addResult),this.client.on("startTime",(function(t){return e.time=t})),this.client.on("stop",(function(t){e.$emit("complete",t)}))}},J=z,W=(n("d863"),Object(f["a"])(J,A,N,!1,null,"b7aaf868",null)),F=W.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"fill",attrs:{id:"video_display"}}),n("el-button",{staticClass:"setting",attrs:{type:"danger",icon:"el-icon-setting",circle:""},on:{click:function(t){e.dialog.visible=!0}}}),e._v("] "),n("el-dialog",{attrs:{title:"设置",visible:e.dialog.visible,"append-to-body":!0,"show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1,width:"600px"},on:{"update:visible":function(t){return e.$set(e.dialog,"visible",t)}}},[n("div",{staticClass:"pre-video"}),n("el-form",{ref:"form",attrs:{model:e.form,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"摄像头"}},[n("el-select",{attrs:{placeholder:"请选择摄像头"},model:{value:e.form.cameraId,callback:function(t){e.$set(e.form,"cameraId",t)},expression:"form.cameraId"}},e._l(e.videoStream.cameras,(function(e,t){return n("el-option",{key:t,attrs:{label:e.label,value:e.deviceId}})})),1)],1),n("el-form-item",{attrs:{label:"麦克风"}},[n("el-select",{attrs:{placeholder:"请选择麦克风"},model:{value:e.form.microphoneId,callback:function(t){e.$set(e.form,"microphoneId",t)},expression:"form.microphoneId"}},e._l(e.videoStream.microphones,(function(e,t){return n("el-option",{key:t,attrs:{label:e.label,value:e.deviceId}})})),1)],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialog.visible=!1}}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"}},[e._v("确 定")])],1)],1)],1)},Q=[],G={name:"VideoDisplay",props:{user:{type:Object,default:function(){}},td:{type:String,default:"1000"},appid:{type:String,default:"9bc022ca9b2d4b2e93ac03a4d548fc0d"}},data:function(){return{loading:!1,videoProfile:"480P_4",form:{cameraId:null,microphoneId:null},dialog:{visible:!1}}},computed:{publisher:function(){return this.user&&this.user.role==this.RoleType.PUBLISHER}},methods:{init:function(){var e=this;this.videoStream.init().then((function(t){var n=t.videoinput,s=t.audioinput;console.log("设备列表",n,s),e.videoStream.videoElement="video_display",e.videoStream.videoProfile=e.videoProfile,e.videoStream.streamID=e.user.id,e.videoStream.createStream().then((function(t){e.form.cameraId=e.videoStream.cameraId,e.form.microphoneId=e.videoStream.microphoneId,e.videoStream.display(),e.connect()}))["catch"]((function(t){console.log("localStream play err",t),e.$message({type:"error",message:t})}))}))},connect:function(){var e=this;this.videoClient.on("stream",(function(t){console.log("Remove Video Stream ADD",t),e.videoClient.player(t,"video_display"),e.publisher||(e.loading=!1)})),this.videoClient.on("removed",(function(t){console.log("Remove Video Stream REMOVE",t),e.videoClient.stopPlayer(t,"video_display")})),this.videoClient.on("error",(function(e){})),this.videoClient.on("rejected",(function(e){})),this.videoClient.connect(this.appid,this.td,this.user.role+""+this.user.id).then((function(){e.publisher&&(e.videoClient.publish(e.videoStream.localStream),e.loading=!1)}))}},mounted:function(){this.loading=!0,console.log(this.user),this.publisher?this.init():this.connect()}},K=G,X=(n("490d"),Object(f["a"])(K,M,Q,!1,null,"97df14a8",null)),Y=X.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"videos"},e._l(e.list,(function(e,t){return n("VideoItem",{key:t,style:{left:e.x+"px",top:e.y+"px"},attrs:{index:t+1,data:e}})})),1)},Z=[],ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"item",staticClass:"video-item"},[n("p",[e._v(e._s(e.data.id)+" - "+e._s(e.data.name))]),n("p",[e._v(e._s(e.RoleType[e.data.role]))])])},te=[],ne=(n("a9e3"),{name:"VideoItem",props:{index:{type:Number,default:1},data:{type:Object,default:function(){}}},data:function(){return{position:{},rect:{}}},methods:{onResize:function(){var e=this.$refs.item;this.position={x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight},this.rect=e.getBoundingClientRect(),this.win=e.ownerDocument.defaultView,this.offset={left:e.offsetLeft,top:e.offsetTop,x:this.rect.left+this.win.pageXOffset,y:this.rect.top+this.win.pageYOffset,width:e.offsetWidth,height:e.offsetHeight},console.log(JSON.stringify(this.offset)),this.$emit("change",this.data,this.offset)}},mounted:function(){var e=this;this.onResize(document.documentElement),this.elementEvent.on("resize",(function(){e.onResize(document.documentElement)}))}}),se=ne,ae=(n("46f8"),Object(f["a"])(se,ee,te,!1,null,"1fce4ead",null)),ie=ae.exports,le={name:"VideoList",components:{VideoItem:ie},props:{list:{type:Array,default:function(){return[]}}},data:function(){return{}}},re=le,oe=(n("e7e6"),Object(f["a"])(re,q,Z,!1,null,"362a8adc",null)),ce=oe.exports,ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-main",e._l(e.list,(function(t,s){return n("VideoItem",{key:s,attrs:{index:s+1,data:t},on:{change:e.itemChangeHandler}})})),1)},de=[],fe=(n("7db0"),{name:"VideoList",components:{VideoItem:ie},props:{value:{type:Array,default:function(){return[]}},list:{type:Array,default:function(){return[]}}},data:function(){return{videoData:[]}},methods:{itemChangeHandler:function(e,t){if(e.role===this.RoleType.SUBSCRIBER){var n=this.videoData.find((function(t){return t.id===e.id}));n?n=Object.assign({},e,t):this.videoData.push(Object.assign(e,t)),this.$emit("input",this.videoData)}}}}),pe=fe,be=(n("c9e2"),Object(f["a"])(pe,ue,de,!1,null,"1777030e",null)),me=be.exports,he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{attrs:{model:e.user,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"UID: "}},[n("el-select",{attrs:{placeholder:"请选择UID"},model:{value:e.user.id,callback:function(t){e.$set(e.user,"id",t)},expression:"user.id"}},e._l(e.idList,(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),n("el-form-item",{attrs:{label:"班级: "}},[n("el-select",{attrs:{placeholder:"请选择班级"},model:{value:e.user.td,callback:function(t){e.$set(e.user,"td",t)},expression:"user.td"}},e._l(e.classList,(function(e){var t=e.label,s=e.td;return n("el-option",{key:s,attrs:{label:t,value:s}})})),1)],1),n("el-form-item",{attrs:{label:"角色: "}},[n("el-select",{attrs:{placeholder:"请选择橘色"},model:{value:e.user.classType,callback:function(t){e.$set(e.user,"classType",t)},expression:"user.classType"}},e._l(e.classTypes,(function(e){var t=e.label,s=e.value;return n("el-option",{key:s,attrs:{label:t,value:s}})})),1)],1),n("el-form-item",{attrs:{label:"昵称"}},[n("el-input",{attrs:{placeholder:"请输入昵称"},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"success"},on:{click:function(t){return e.onSubmit(e.RoleType.PUBLISHER)}}},[e._v("老师进入")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit(e.RoleType.SUBSCRIBER)}}},[e._v("学生进入")])],1)],1)},ve=[],ge=(n("b0c0"),{name:"LoginPanel",data:function(){return{logined:!1,idList:[1001,1002,1003,1004,1005,1006,1007,1008,1009],classList:[{label:"甘露班",td:1001},{label:"晨曦班",td:1002},{label:"花儿班",td:1003},{label:"伶俐班",td:1004},{label:"铃茉莉班",td:1005},{label:"小太阳班",td:1006},{label:"冰淇淋班",td:1007},{label:"可爱猪班",td:1008}],classTypes:[{label:"直播",value:1},{label:"一对一",value:2},{label:"一对多",value:3}],user:{td:1002,id:1001,classType:1,name:"希西",label:"甘露班",role:0}}},methods:r(r({},Object(D["b"])("UserData",["setUser","initUsers","pushUser","removeUser"])),{},{connected:function(){this.logined=!1;var e=sessionStorage.getItem("live_user");if(e){var t=JSON.parse(e);this.user.name=t.name,this.user.td=t.td,this.user.label=t.label,this.onSubmit(t.role)}},disconnected:function(){this.logined=!1},closed:function(){this.logined=!1},onSubmit:function(e){var t=this,n=this,s=this.classList.filter((function(e){return e.td===t.user.td}));s.length>0&&(this.user.role=e,this.client.register(s[0].td,this.user.id,this.user.name,e,(function(e){var t=r(r({},n.user),e);sessionStorage.setItem("live_user",JSON.stringify({td:t.td,id:t.id,name:t.name,label:t.label,role:t.role})),n.setUser(t),n.$emit("complete",t)})))}}),mounted:function(){this.client.init("wss://"+window.location.hostname+":777","/live"),this.client.on("connected",this.connected),this.client.on("entry",this.pushUser),this.client.on("list",this.initUsers),this.client.on("leave",this.removeUser),this.client.on("disconnect",this.disconnected),this.client.on("closed",this.closed)}}),ye=ge,_e=(n("78cb"),Object(f["a"])(ye,he,ve,!1,null,"febd3e3a",null)),we=_e.exports,Se={NORMAL:"normal",ANSWER:"answer"},je={name:"Home",components:{Login:we,UserProfile:b,OnlineList:_,QuestionBank:C,CompetitionList:$,VideoDisplay:Y,VideoList:ce,VideoSeatList:me,CoursePanel:H,AnswerPanel:F},data:function(){return{CourseStatusType:Se,userData:null,videoData:[],logined:!1,courseStatus:Se.NORMAL,answerItem:null,activeName:"zero",coursePage:"",dialogRank:{visible:!1,title:""},lucky:null,rankList:[],courseList:[],currentSubject:null}},computed:r(r(r(r({},Object(D["c"])("UserData",["getUserById"])),Object(D["d"])("UserData",{user:function(e){return e}})),Object(D["d"])("SubjectData",{subject:function(e){return e}})),{},{tableData:function(){return this.user&&this.user.userList}}),methods:r(r({},Object(D["b"])("SubjectData",["startSubject","stopSubject"])),{},{logoutHandler:function(){this.client.close()},loginComplete:function(e){this.userData=e,this.logined=!0},prevPage:function(){this.$refs.course.prevPage()},nextPage:function(){this.$refs.course.nextPage()},courseChange:function(e,t){var n=this;this.coursePage=e+"/"+t,this.logined&&this.userData.role==this.RoleType.PUBLISHER&&this.client.subject("search",e,(function(e){n.currentSubject=Object.values(e).length?e:null}))},sendPageSubject:function(){var e=this;this.client.subject("start",this.$refs.course.page,(function(t){e.courseStatus=Se.ANSWER,e.answerItem=t,e.startSubject(t)}))},answerCompleteHandler:function(e){this.rankList=e.list||[],this.lucky=e.lucky,console.log("答题结束,幸运观众",this.lucky,this.rankList),this.courseStatus=Se.NORMAL,this.answerItem=null,this.stopSubject(),this.currentSubject.done=!0,this.dialogRank.visible=this.rankList.length>0},clearHistory:function(){console.clear()},luckyTabelRow:function(e){var t=e.row;e.index;if(t.id===this.lucky.id)return"success-row"}}),mounted:function(){var e=this;this.client.on("start",(function(t){e.courseStatus=Se.ANSWER,e.answerItem=t,e.currentSubject=t,e.startSubject(t)})),this.client.on("page",(function(t){e.$refs.course.changePage(t)})),this.client.on("closed",(function(){e.logined=!1,sessionStorage.removeItem("live_user")})),this.axios.get("/stellar/index.json").then((function(t){var n=t.data;e.courseList=n.list.map((function(e){return"/stellar/"+e}))}))}},ke=je,Oe=(n("63cd"),n("70bc"),Object(f["a"])(ke,s,a,!1,null,"2cd2bd37",null));t["default"]=Oe.exports},"63cd":function(e,t,n){"use strict";var s=n("7aff"),a=n.n(s);a.a},"6f53":function(e,t,n){var s=n("83ab"),a=n("df75"),i=n("fc6a"),l=n("d1e7").f,r=function(e){return function(t){var n,r=i(t),o=a(r),c=o.length,u=0,d=[];while(c>u)n=o[u++],s&&!l.call(r,n)||d.push(e?[n,r[n]]:r[n]);return d}};e.exports={entries:r(!0),values:r(!1)}},"70bc":function(e,t,n){"use strict";var s=n("f7d9"),a=n.n(s);a.a},7326:function(e,t,n){},"74c3":function(e,t,n){},"78cb":function(e,t,n){"use strict";var s=n("74c3"),a=n.n(s);a.a},"7aff":function(e,t,n){},a226:function(e,t,n){"use strict";var s=n("597d"),a=n.n(s);a.a},a741:function(e,t,n){},aee6:function(e,t,n){},b0c0:function(e,t,n){var s=n("83ab"),a=n("9bf2").f,i=Function.prototype,l=i.toString,r=/^\s*function ([^ (]*)/,o="name";s&&!(o in i)&&a(i,o,{configurable:!0,get:function(){try{return l.call(this).match(r)[1]}catch(e){return""}}})},b3c2:function(e,t,n){},c9e2:function(e,t,n){"use strict";var s=n("aee6"),a=n.n(s);a.a},d863:function(e,t,n){"use strict";var s=n("594f"),a=n.n(s);a.a},dbb4:function(e,t,n){var s=n("23e7"),a=n("83ab"),i=n("56ef"),l=n("fc6a"),r=n("06cf"),o=n("8418");s({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(e){var t,n,s=l(e),a=r.f,c=i(s),u={},d=0;while(c.length>d)n=a(s,t=c[d++]),void 0!==n&&o(u,t,n);return u}})},e7e6:function(e,t,n){"use strict";var s=n("025d"),a=n.n(s);a.a},f7d9:function(e,t,n){}}]);