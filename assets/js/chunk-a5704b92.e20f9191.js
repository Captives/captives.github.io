(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a5704b92"],{"0d31":function(e,t,o){"use strict";var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-table",{attrs:{data:e.tableData,stripe:""}},[o("el-table-column",{attrs:{label:"媒体流ID",align:"center"}},[o("el-table-column",{attrs:{label:"名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.label.substr(0,8))+"...")]}}])})],1),o("el-table-column",{attrs:{label:e.value&&e.value.id}},[o("el-table-column",{attrs:{prop:"kind",label:"类型",align:"center"}}),o("el-table-column",{attrs:{label:"id",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.id.substr(0,8))+"...")]}}])}),o("el-table-column",{attrs:{label:"state",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.readyState))]}}])}),o("el-table-column",{attrs:{label:"enabled",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.enabled))]}}])}),o("el-table-column",{attrs:{label:"muted",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.muted))]}}])}),e.edited?o("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"移除轨道",placement:"left"}},[o("el-link",{staticClass:"el-icon-minus",on:{click:function(o){return e.removeTrack(t.row)}}})],1)]}}],null,!1,3439156443)}):e._e(),o("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-main",{staticClass:"table-expand"},[o("el-row",[o("h4",[e._v("Base:")]),o("el-col",{attrs:{span:12}},[e._v("label: "+e._s(t.row.label))]),o("el-col",{attrs:{span:12}},[e._v("ID: "+e._s(t.row.id))])],1),o("el-row",[o("h4",[e._v("Constraints:")]),e._l(t.row.getConstraints(),(function(t,r){return o("el-col",{key:r,attrs:{span:12}},[e._v(e._s(r)+" : "+e._s(t))])}))],2),o("el-row",[o("h4",[e._v("Settings:")]),e._l(t.row.getSettings(),(function(t,r){return o("el-col",{key:r,attrs:{span:12}},[e._v(e._s(r)+" : "+e._s(t))])}))],2),o("el-row",[o("h4",[e._v("Capabilities:")]),e._l(t.row.getCapabilities(),(function(t,r){return o("el-col",{key:r,attrs:{span:12}},[e._v(e._s(r)+" : "+e._s(t))])}))],2)],1)]}}])})],1)],1)},a=[],i=(o("99af"),{name:"StreamTracks",props:{value:{type:MediaStream,default:null},edited:{type:Boolean,default:!1}},data:function(){return{id:null,tableData:[]}},watch:{value:function(e){this.id=e.id,this.tableData=[],this.tableData=this.tableData.concat(e.getVideoTracks(),e.getAudioTracks())}},methods:{removeTrack:function(e){this.value&&(e.stop(),this.value.removeTrack(e),console.log("remove track id",e.label,e.id),this.$emit("input",this.value))}}}),n=i,c=(o("f8b5"),o("2877")),s=function(e){e.options.__source="src/guide/components/StreamTracks.vue"},d=s,l=Object(c["a"])(n,r,a,!1,null,"2e99fe9d",null);"function"===typeof d&&d(l);t["a"]=l.exports},"11f7":function(e,t,o){},"8ce7":function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-main",{staticClass:"center"},[o("el-row",{attrs:{gutter:50}},[o("el-col",{staticClass:"center",attrs:{xs:24,sm:24,md:12}},[o("el-divider",{attrs:{"content-position":"left"}},[e._v("Publisher")]),o("video",{ref:"localVideo",staticClass:"video-item",attrs:{autoplay:""}}),e.localStream?o("div",[o("span",[e._v(e._s(e.state))]),e.rendering?e._e():o("el-button",{attrs:{type:"success"},on:{click:e.initLocalStream}},[e._v("开启录像")]),e.recording?[o("el-button",{attrs:{type:"danger"},on:{click:e.pauseRecoder}},[e._v("暂停录制")]),o("el-button",{attrs:{type:"danger"},on:{click:e.resumeRecoder}},[e._v("恢复录制")]),o("el-button",{attrs:{type:"danger"},on:{click:e.stopRecoder}},[e._v("停止录制")])]:[o("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.startRecoding(e.localStream)}}},[e._v("开始录制")])]],2):e._e()],1),o("el-col",{staticClass:"center",attrs:{xs:24,sm:24,md:12}},[o("el-divider",{attrs:{"content-position":"left"}},[e._v("Recorder")]),o("video",{ref:"playVideo",staticClass:"video-item",attrs:{autoplay:""}}),e.recordBlobs.length?o("div",[e.recording?o("el-tag",{attrs:{type:"danger"}},[e._v("Rec ....")]):o("el-button",{attrs:{type:"danger"},on:{click:e.downloadfile}},[e._v("下载视频")])],1):e._e()],1)],1),o("StreamTracks",{model:{value:e.localStream,callback:function(t){e.localStream=t},expression:"localStream"}}),e.error?o("el-tag",{staticClass:"error",attrs:{type:"danger"}},[e._v(e._s(e.error))]):e._e(),o("vue-source",{attrs:{src:"guide/views/webrtc/UserMediaRecorder.vue",lang:"html"}})],1)},a=[],i=(o("4160"),o("d3b7"),o("3ca3"),o("159b"),o("ddb0"),o("2b3d"),o("0d31")),n={name:"UserMediaRecorder",components:{StreamTracks:i["a"]},data:function(){return{mimeTypes:["audio/ogg","audio/wav","audio/webm","audio/webm;codecs=opus","video/webm","video/webm;codecs=vp8","video/webm;codecs=vp9","video/webm;codecs=vp8.0","video/webm;codecs=vp9.0","video/webm;codecs=h264","video/webm;codecs=avc1","video/webm;codecs=vp8,opus","video/WEBM;codecs=VP8,OPUS","video/webm;codecs=vp9,opus","video/webm;codecs=vp8,vp9,opus","video/webm;codecs=h264,opus","video/webm;codecs=h264,vp9,opus","video/x-matroska;codecs=avc1","video/mp4","video/mp4;codecs=avc1","video/mp4;codecs=h264","video/mpeg;codecs=h264","video/mpeg;codecs=vp8,opus"],rendering:!1,localStream:null,options:{audio:!0,video:!0},recordBlobs:[],recording:!1,mediaRecorder:null,error:null}},computed:{state:function(){return this.mediaRecorder&&this.mediaRecorder.state}},mounted:function(){this.init();var e={mimeType:"video/webm;codecs=h264",bitsPerSecond:1e5,audioBitrateMode:"vbr"};this.mimeTypes.forEach((function(t){console.log(MediaRecorder.isTypeSupported(t)?"√":"x",t),MediaRecorder.isTypeSupported(t)&&(e.mimeType=t)}))},destroyed:function(){this.localStream.getTracks().forEach((function(e){return e.stop()}))},methods:{init:function(){this.initLocalStream()},initLocalStream:function(){var e=this,t=this,o=this.$refs.localVideo;return new Promise((function(r,a){navigator.mediaDevices.getUserMedia(e.options).then((function(a){e.localStream=a,a.oninactive=function(){t.rendering=!1,console.log("Stream inactive")},o.addEventListener("loadedmetadata",(function(e){t.rendering=!0,console.log("AudioTracks",a.getAudioTracks()),console.log("VideoTracks",a.getVideoTracks())})),o.srcObject=a,r(a)})).catch((function(e){t.error=e,console.log("navigator.getUserMedia error: ",e),a(e)}))}))},startRecoding:function(e){var t=this;this.recordBlobs=[];var o={mimeType:"video/webm;codecs=vp9"};MediaRecorder.isTypeSupported(o.mimeType)||(console.log(o.mimeType+" is not Supported"),o={mimeType:"video/webm;codecs=vp8"},MediaRecorder.isTypeSupported(o.mimeType)||(console.log(o.mimeType+" is not Supported"),o={mimeType:"video/webm"},MediaRecorder.isTypeSupported(o.mimeType)||(console.log(o.mimeType+" is not Supported"),o={mimeType:""})));try{this.mediaRecorder=new MediaRecorder(e,o)}catch(r){alert("Exception while creating MediaRecorder: "+r+". mimeType: "+o.mimeType)}console.log("Created MediaRecorder",this.mediaRecorder,"with options",o),this.mediaRecorder.onstart=function(e){t.recording=!0},this.mediaRecorder.onstop=function(e){t.recording=!1,console.log("Recorder stopped: ",e)},this.mediaRecorder.ondataavailable=function(e){console.log("ondataavailable",e.data.size,t.mediaRecorder.videoBitsPerSecond,t.mediaRecorder.audioBitsPerSecond,t.mediaRecorder.audioBitrateMode),e.data&&e.data.size>0&&t.recordBlobs.push(e.data)},this.mediaRecorder.onpause=function(e){console.log("录制已经暂停")},this.mediaRecorder.onresume=function(e){console.log("录制已经恢复")},this.mediaRecorder.onerror=function(e){console.log("error",e),t.error=e},this.mediaRecorder.start(10),console.log("MediaRecorder started",this.mediaRecorder)},pauseRecoder:function(){this.recording&&this.mediaRecorder&&this.mediaRecorder.pause()},resumeRecoder:function(){this.recording&&this.mediaRecorder&&"paused"===this.mediaRecorder.state&&this.mediaRecorder.resume()},stopRecoder:function(){this.recording&&this.mediaRecorder&&this.mediaRecorder.stop();var e=this.$refs.playVideo;if(e.addEventListener("loadedmetadata",(function(t){console.log("loadedmetadata",e.currentTime,e.duration),e.duration===1/0&&(e.currentTime=1e101,e.ontimeupdate=function(){e.currentTime=0,e.ontimeupdate=function(){delete e.ontimeupdate,e.play()}})})),this.recordBlobs&&this.recordBlobs.length){var t=new Blob(this.recordBlobs,{type:"video/webm"});e.src=window.URL.createObjectURL(t)}},downloadfile:function(){if(this.recordBlobs&&this.recordBlobs.length){var e=new Blob(this.recordBlobs,{type:"video/webm"}),t=window.URL.createObjectURL(e),o=document.createElement("a");o.style.display="none",o.href=t,o.download="Rec_"+Date.now()+".webm",document.body.appendChild(o),o.click(),setTimeout((function(){document.body.removeChild(o),window.URL.revokeObjectURL(t)}),100)}}}},c=n,s=(o("b948"),o("2877")),d=function(e){e.options.__source="src/guide/views/webrtc/UserMediaRecorder.vue"},l=d,u=Object(s["a"])(c,r,a,!1,null,"3313c6e6",null);"function"===typeof l&&l(u);t["default"]=u.exports},b948:function(e,t,o){"use strict";var r=o("dacd"),a=o.n(r);a.a},dacd:function(e,t,o){},f8b5:function(e,t,o){"use strict";var r=o("11f7"),a=o.n(r);a.a}}]);