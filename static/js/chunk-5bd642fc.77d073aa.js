(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5bd642fc"],{"0d03":function(e,n,t){var i=t("6eeb"),o=Date.prototype,r="Invalid Date",s="toString",a=o[s],c=o.getTime;new Date(NaN)+""!=r&&i(o,s,(function(){var e=c.call(this);return e===e?a.call(this):r}))},"0f6c":function(e,n,t){"use strict";var i=t("8dd8"),o=t.n(i);o.a},"25f0":function(e,n,t){"use strict";var i=t("6eeb"),o=t("825a"),r=t("d039"),s=t("ad6d"),a="toString",c=RegExp.prototype,l=c[a],u=r((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=l.name!=a;(u||d)&&i(RegExp.prototype,a,(function(){var e=o(this),n=String(e.source),t=e.flags,i=String(void 0===t&&e instanceof RegExp&&!("flags"in c)?s.call(e):t);return"/"+n+"/"+i}),{unsafe:!0})},"802b":function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("el-main",[t("el-row",{attrs:{gutter:50}},[t("el-col",{staticClass:"center",attrs:{xs:24,sm:24,md:12}},[t("el-divider",{attrs:{"content-position":"left"}},[e._v("Publisher")]),t("div",{staticClass:"textarea",attrs:{contenteditable:""},on:{input:e.inputHandler}})],1),t("el-col",{staticClass:"center",attrs:{xs:24,sm:24,md:12}},[t("el-divider",{attrs:{"content-position":"left"}},[e._v("Subscriber")]),t("div",{staticClass:"textarea"},[e._v(e._s(e.outputText))])],1)],1),t("el-tag",{staticClass:"error"},[e._v("左侧输入信息，右侧同步显示")]),t("vue-source",{attrs:{src:"src/webrtc/views/webrtc/PeerConnection.vue",lang:"html"}})],1)},o=[],r=(t("0d03"),t("d3b7"),t("25f0"),{name:"PeerConnection",data:function(){return{inputText:"",outputText:"",servers:null,dataChannel:null,publisherPeerConnection:null,subscriberPeerConnection:null,error:null}},methods:{inputHandler:function(e){this.inputText=e.target.outerText,this.dataChannel&&"open"===this.dataChannel.readyState&&this.dataChannel.send(this.inputText)},init:function(){this.createPublisher(),this.createSubscriber()},createPublisher:function(){var e=this;this.publisherPeerConnection=new RTCPeerConnection(this.servers),this.dataChannel=this.publisherPeerConnection.createDataChannel("sendDataChannel"),this.dataChannel.onopen=function(n){console.log("Send channel state is: "+e.dataChannel.readyState)},this.dataChannel.onclose=function(n){console.log("Send channel state is: "+e.dataChannel.readyState)},this.publisherPeerConnection.onicecandidate=function(n){e.handleCandidate(n.candidate,e.subscriberPeerConnection,"localPeer#:","local")},this.publisherPeerConnection.createOffer({offerToReceiveAudio:1,offerToReceiveVideo:1}).then((function(n){e.publisherPeerConnection.setLocalDescription(n),console.log("Offer from publisherPeerConnection \n"+n.sdp),e.subscriberPeerConnection.setRemoteDescription(n),e.subscriberPeerConnection.createAnswer().then((function(n){e.subscriberPeerConnection.setLocalDescription(n),console.log("Answer from subscriberPeerConnection \n"+n.sdp),e.publisherPeerConnection.setRemoteDescription(n)}))["catch"]((function(e){console.log("Failed to create session description: "+e.toString())}))}))["catch"]((function(e){console.log("Failed to create session description: "+e.toString())}))},createSubscriber:function(){var e=this;this.subscriberPeerConnection=new RTCPeerConnection(this.servers),this.subscriberPeerConnection.onicecandidate=function(n){e.handleCandidate(n.candidate,e.publisherPeerConnection,"remotePeer#:","remote")},this.subscriberPeerConnection.ondatachannel=function(n){var t=n.channel;t.onmessage=function(n){e.outputText=n.data},t.onopen=t.onclose=function(){var e=t.readyState;console.log("Receive channel state is: "+e)}}},handleCandidate:function(e,n,t,i){n.addIceCandidate(e).then((function(){console.log("AddIceCandidate success.")}))["catch"]((function(e){console.log("Failed to add ICE candidate: "+e.toString())})),console.log(t+"New "+i+" ICE candidate: "+(e?e.candidate:"(null)"))}},mounted:function(){this.init()},destroyed:function(){this.publisherPeerConnection.close(),this.subscriberPeerConnection.close()}}),s=r,a=(t("0f6c"),t("2877")),c=Object(a["a"])(s,i,o,!1,null,"052d97f2",null);n["default"]=c.exports},"8dd8":function(e,n,t){}}]);