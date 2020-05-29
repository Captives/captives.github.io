(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c53a822"],{a860:function(e,n,r){},b404:function(e,n,r){"use strict";var t=r("a860"),o=r.n(t);o.a},c65d:function(e,n,r){"use strict";r.r(n);var t=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("el-main",[r("el-row",[r("h3",[r("router-link",{attrs:{to:"/webrtc/stream-from-usermedia"}},[e._v("Stream from UserMedia")])],1),r("vue-code",[r("pre",{attrs:{lang:"javascript"}},[e._v("navigator.mediaDevices.getUserMedia({ video:true, audio:true }).then((stream) => {\n  stream.oninactive = function () {\n    console.log('Stream inactive - stop!');\n  };\n\n  video.srcObject = stream;\n}).catch(function (error) {\n  console.log('navigator.getUserMedia error: ', error);\n});\n")])])],1),r("el-row",[r("h3",[r("router-link",{attrs:{to:"/webrtc/stream-from-displaymedia"}},[e._v("Stream from DisplayMedia")])],1),r("vue-code",[r("pre",{attrs:{lang:"javascript"}},[e._v("getDisplayMedia() {\n    if (navigator.getDisplayMedia) {\n        return navigator.getDisplayMedia({ video: true });\n    } else if (navigator.mediaDevices.getDisplayMedia) {\n        return navigator.mediaDevices.getDisplayMedia({ video: true });\n    } else {\n        return navigator.mediaDevices.getUserMedia({ video: { mediaSource: 'screen' } });\n    }\n},\n\ngetDisplayMedia().then((stream) => {\n    stream.oninactive = function () {\n      console.log('Capture stream inactive - stop recording!');\n    };\n\n    video.srcObject = stream;\n  }).catch(function (error) {\n    console.log('navigator.getUserMedia error: ', error);\n  });\n")])])],1),r("el-row",[r("h3",[r("router-link",{attrs:{to:"/webrtc/stream-from-video"}},[e._v("Stream from video element")])],1),r("vue-code",[r("pre",{attrs:{lang:"javascript"}},[e._v("const video = this.$refs.localVideo;\nvideo.addEventListener('canplay', () => {\n  const fps = 0;\n  const player = this.$refs.playVideo;\n  if (video.captureStream) {\n    this.stream = video.captureStream(fps);\n  } else if (video.mozCaptureStream) {\n    this.stream = video.mozCaptureStream(fps);\n  } else {\n    console.error('Stream capture is not supported');\n    this.stream = null;\n  }\n\n  player.srcObject = this.stream;\n});\n")])])],1),r("el-row",[r("h3",[r("router-link",{attrs:{to:"/webrtc/stream-from-canvas"}},[e._v("Stream from canvas element")])],1),r("vue-code",[r("pre",{attrs:{lang:"javascript"}},[e._v("const stream = canvas.captureStream();\nvideo.srcObject = stream;\n")])])],1),r("el-row",[r("h3",[r("router-link",{attrs:{to:"/webrtc/stream-from-displaymedia"}},[e._v("Close video stream")])],1),r("vue-code",[r("pre",{attrs:{lang:"javascript"}},[e._v("stream.getTracks().forEach(track => track.stop());\n")])])],1),r("el-row",[r("h3",[r("router-link",{attrs:{to:"/webrtc/recorder"}},[e._v("Recording media streaming to blob")])],1),r("vue-code",[r("pre",{attrs:{lang:"javascript"}},[e._v("data() {\n    return {\n        recordBlobs: [],\n        recording: false,\n        mediaRecorder: null,\n        error: null\n    }\n},\nstartRecoding(stream) {\n  this.recordBlobs = [];\n  var options = { mimeType: 'video/webm;codecs=vp9' };\n  if (!MediaRecorder.isTypeSupported(options.mimeType)) {\n    console.log(options.mimeType + ' is not Supported');\n    options = { mimeType: 'video/webm;codecs=vp8' };\n\n    if (!MediaRecorder.isTypeSupported(options.mimeType)) {\n      console.log(options.mimeType + ' is not Supported');\n      options = { mimeType: 'video/webm' };\n\n      if (!MediaRecorder.isTypeSupported(options.mimeType)) {\n        console.log(options.mimeType + ' is not Supported');\n        options = { mimeType: '' };\n      }\n    }\n  }\n\n  try {\n    this.mediaRecorder = new MediaRecorder(stream, options);\n  } catch (e) {\n    alert('Exception while creating MediaRecorder: ' + e + '. mimeType: ' + options.mimeType);\n  }\n\n  console.log('Created MediaRecorder', this.mediaRecorder, 'with options', options);\n  this.mediaRecorder.onstart = (event) => {\n    this.recording = true;\n  };\n\n  this.mediaRecorder.onstop = (event) => {\n    this.recording = false;\n    console.log('Recorder stopped: ', event);\n  };\n\n  this.mediaRecorder.ondataavailable = (event) => {\n    if (event.data && event.data.size > 0) {\n      this.recordBlobs.push(event.data);\n    }\n  };\n\n  this.mediaRecorder.onerror = event => {\n    this.error = event;\n  }\n\n  this.mediaRecorder.start(10); // 数据收集10ms\n  console.log('MediaRecorder started', this.mediaRecorder);\n},\nstopRecoder() {\n  if (this.mediaRecorder && this.recording) {\n    this.mediaRecorder.stop();\n  }\n},\n")])])],1),r("el-row",[r("h3",[r("router-link",{attrs:{to:"/webrtc/recorder"}},[e._v("Play blob media stream")])],1),r("vue-code",[r("pre",{attrs:{lang:"javascript"}},[e._v("data() {\n    return {\n        recordBlobs: [],\n        error: null\n    }\n},\nplayStream() {\n    //播放\n    const video = this.$refs.playVideo;\n    video.addEventListener('loadedmetadata', event => {\n        console.log(\"loadedmetadata\", video.currentTime, video.duration);\n        if (video.duration === Infinity) {\n            video.currentTime = 1e101;\n            video.ontimeupdate = function () {\n                video.currentTime = 0;\n                video.ontimeupdate = function () {\n                    delete video.ontimeupdate;\n                    video.play();\n                };\n            };\n        }\n    });\n\n    if (this.recordBlobs && this.recordBlobs.length) {\n        const blob = new Blob(this.recordBlobs, { type: 'video/webm' });\n        video.src = window.URL.createObjectURL(blob);\n    }\n}\n")])])],1),r("el-row",[r("h3",[r("router-link",{attrs:{to:"/webrtc/recorder"}},[e._v("Download blob media stream")])],1),r("vue-code",[r("pre",{attrs:{lang:"javascript"}},[e._v("data() {\n    return {\n        recordBlobs: [],\n        error: null\n    }\n},\ndownloadfile() {\n  if (this.recordBlobs && this.recordBlobs.length) {\n    const blob = new Blob(this.recordBlobs, { type: 'video/webm' });\n    const url = window.URL.createObjectURL(blob);\n    const a = document.createElement('a');\n    a.style.display = 'none';\n    a.href = url;\n    a.download = 'Rec_' + Date.now() + '.webm';\n    document.body.appendChild(a);\n    a.click();\n    setTimeout(() => {\n      document.body.removeChild(a);\n      window.URL.revokeObjectURL(url);\n    }, 100);\n  }\n}\n")])])],1),r("el-row",[r("h3",[e._v("资料")]),r("ul",[r("li",[r("el-link",{attrs:{href:"https://www.webrtc-experiment.com/"}},[e._v("WebRTC Experiment")])],1)])])],1)},o=[],i={name:"index"},a=i,s=(r("b404"),r("2877")),d=Object(s["a"])(a,t,o,!1,null,"3fb02340",null);n["default"]=d.exports}}]);