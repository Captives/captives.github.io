(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e5754"],{9524:function(e,n,r){"use strict";r.r(n);var o=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("el-main",{staticClass:"center"},[r("h3",[e._v("WebRTC录制")]),r("h4",[e._v("MediaRecorder")]),r("p",[r("em",[e._v("MediaRecorder")]),e._v(" 是 MediaStream Recording API 提供的用来进行媒体轻松录制的接口, 他需要通过调用 MediaRecorder() 构造方法进行实例化. ")]),r("vue-code",[r("pre",{attrs:{lang:"js"}},[e._v("var mediaRecorder = new MediaRecorder(stream[, options]);")])]),r("div",[e._v(' 创建一个新的MediaRecorder对象,对指定的MediaStream 对象进行录制,支持的配置项包括设置容器的MIME 类型 (例如"video/webm" 或者 "video/mp4")和音频及视频的码率或者二者同用一个码率 ')]),r("p",[r("b",[e._v("stream")]),e._v(", "),r("el-link",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/MediaRecorder",target:"_blank"}},[e._v("options")])],1),r("p",[e._v(" MediaStream 将要录制的流. 它可以是来自于使用 navigator.mediaDevices.getUserMedia() 创建的流或者来自于 <audio>, <video> 以及 <canvas> DOM元素. ")]),r("p",[e._v("检查是否支持指定编码")]),r("vue-code",[r("pre",{attrs:{lang:"js"}},[e._v("      var options = { mimeType: 'video/webm;codecs=h264' };\n      if (!MediaRecorder.isTypeSupported(options.mimeType)) {\n        console.log(options.mimeType + ' is not Supported');\n        options = { mimeType: 'video/webm;codecs=vp9' };\n\n        if (!MediaRecorder.isTypeSupported(options.mimeType)) {\n          console.log(options.mimeType + ' is not Supported');\n          options = { mimeType: 'video/webm;codecs=vp8' };\n\n          if (!MediaRecorder.isTypeSupported(options.mimeType)) {\n            console.log(options.mimeType + ' is not Supported');\n            options = { mimeType: 'video/webm' };\n\n            if (!MediaRecorder.isTypeSupported(options.mimeType)) {\n              console.log(options.mimeType + ' is not Supported');\n              options = { mimeType: '' };\n            }\n          }\n        }\n      }")])]),r("p",[e._v("创建录制对象")]),r("vue-code",[r("pre",{attrs:{lang:"js"}},[e._v("      try {\n        console.log('Recorder', options);\n        this.mediaRecorder = new MediaRecorder(stream, options);\n      } catch (e) {\n        alert('Exception while creating MediaRecorder: ' + e + '. mimeType: ' + options.mimeType);\n      }\n\n      console.log('Created MediaRecorder', this.mediaRecorder, 'with options', options);\n      this.mediaRecorder.onstart = (event) => {\n        this.recording = true;\n        //......\n      };\n\n      this.mediaRecorder.onstop = (event) => {\n        this.recording = false;\n        //......\n        console.log('Recorder stopped: ', event);\n      };\n\n      this.mediaRecorder.ondataavailable = (event) => {\n        //......\n      };\n\n      this.mediaRecorder.onerror = event => {\n        this.error = event;\n      }\n\n      this.mediaRecorder.start(200); // 数据收集200ms\n      console.log('MediaRecorder started', this.mediaRecorder);")])]),r("p",[e._v("停止录制")]),r("vue-code",[r("pre",{attrs:{lang:"js"}},[e._v("    if (this.mediaRecorder && this.recording) {\n        this.mediaRecorder.stop();\n    }")])]),r("h4",[e._v("FileReader")]),r("p",[r("em",[e._v("FileReader")]),e._v("对象允许Web应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 File 或 Blob 对象指定要读取的文件或数据。 "),r("el-link",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader",target:"_blank"}},[e._v("查看更多")])],1),r("vue-code",[r("pre",{attrs:{lang:"js"}},[e._v("var reader = new FileReader();")])]),r("p",[e._v("读取MediaRecorder缓冲区数据发送到服务器")]),r("vue-code",[r("pre",{attrs:{lang:"js"}},[e._v('    this.mediaRecorder.ondataavailable = (event) => {\n        if (event.data && event.data.size > 0) {\n          const reader = new FileReader();\n          reader.onerror = error => {\n            console.error(\'媒体流转换Binary数据失败\', error);\n          }\n\n          reader.onloadend = () => {\n            ws.send({\n              event: "REC_BLOB",\n              blob: reader.result,\n              uid: "user.id"\n            });\n          }\n\n          reader.readAsBinaryString(event.data);\n        }\n      };')])]),r("h4",[e._v("fs.createWriteStream")]),r("vue-code",[r("pre",{attrs:{lang:"js"}},[e._v("fs.createWriteStream(path[, options])")])]),r("p",[e._v("创建一个写入的文件流, 如果 options 是字符串，则它指定字符编码。")]),r("p",[e._v("接收客户端发送的缓冲数据, 进行写入文件")]),r("p"),r("vue-code",[r("pre",{attrs:{lang:"js"}},[e._v("const stream = streams[ws.uid];\nswitch (json.event) {\n    case \"register\":\n        console.log('received: %s', message);\n        ws.uid = Date.now();\n        ws.fileName = [json.name, \"_\", ws.uid, \".webm\"].join('');\n        break;\n    case \"START_REC_BLOB\":\n        const _path = path.join(__dirname, ws.fileName);\n        streams[ws.uid] = fs.createWriteStream(_path, 'binary');\n        break;\n    case \"REC_BLOB\":\n        if (stream) {\n            console.debug('Writing ' + json.blob.length + ' bytes to ' + stream.path)\n            stream.write(json.blob, 'binary');\n        }\n        break;\n    case \"STOP_REC_BLOB\":\n        if (stream) {\n            setTimeout(() => {\n                console.debug('录制已经停止', stream.path);\n                stream.end();\n            }, 1000);\n        }\n        break;\n};")])]),r("el-link",{attrs:{href:"guide.html#/webrtc/display-media-recorder-to-file",target:"_blank"}},[e._v("完整示例查看")])],1)},t=[],i=r("d4ec"),a=r("262e"),s=r("2caf"),d=r("9ab4"),c=r("1b40"),p=function(e){Object(a["a"])(r,e);var n=Object(s["a"])(r);function r(){return Object(i["a"])(this,r),n.apply(this,arguments)}return r}(c["l"]);p=Object(d["a"])([Object(c["a"])({name:"WebRTCRecorder"})],p);var l=p,m=l,v=r("2877"),u=function(e){e.options.__source="src/tutorial/views/articles/WebRTCRecorder.vue"},_=u,b=Object(v["a"])(m,o,t,!1,null,null,null);"function"===typeof _&&_(b);n["default"]=b.exports}}]);