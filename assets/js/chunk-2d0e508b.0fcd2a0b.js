(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e508b"],{9383:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-main",[n("el-row",{ref:"qrcode"}),n("el-row",[n("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}},[n("el-button",{attrs:{slot:"append",type:"danger"},on:{click:e.makeCode},slot:"append"},[e._v("生成")])],1)],1),n("el-row",[n("h1",[e._v("文本内容")]),e._v(" "+e._s(e.inputValue)+" ")]),n("vue-source",{attrs:{src:"home\\views\\QRCode.vue"}})],1)},i=[],r={name:"QRCode",data:function(){return{inputValue:"文本测试",qrcode:null}},methods:{init:function(){console.log(QRCode,this.$refs.qrcode.$el),this.qrcode=new QRCode(this.$refs.qrcode.$el,{width:200,height:200}),this.makeCode()},makeCode:function(){this.inputValue?(this.qrcode.clear(),this.qrcode.makeCode(this.inputValue)):this.$message({type:"error",message:"请输入内容"})}},mounted:function(){var e=this;this.$fetch("./libs/qrcode.min.js").then((function(t){var n=document.createElement("script");n.setAttribute("type","text/javascript"),n.innerText=t,document.querySelector("body").appendChild(n),e.init()}))}},s=r,u=n("2877"),l=Object(u["a"])(s,o,i,!1,null,null,null);t["default"]=l.exports}}]);