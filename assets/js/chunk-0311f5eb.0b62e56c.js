(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0311f5eb"],{"375f":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-main",[n("el-row",{staticStyle:{margin:"20px 0"}},[n("el-col",{staticStyle:{"text-align":"center"},attrs:{span:2}},[t._v("内容标题")]),n("el-col",{attrs:{span:22}},[n("el-input",{attrs:{placeholder:"请输入内容标题"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1)],1),n("editor",{attrs:{apiKey:"9j0jjt7739g05sqrj9uki6phym2b0gxsjqaamqdox4gj52hw",init:t.options},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),n("el-divider",{attrs:{"content-position":"left"}},[t._v("输出")]),n("div",{domProps:{innerHTML:t._s(t.content)}}),n("el-divider",{attrs:{"content-position":"left"}},[t._v("内容")]),n("div",[t._v(t._s(t.content))])],1)},i=[],r=n("d4ec"),a=n("262e"),s=n("2caf"),l=n("9ab4"),c=n("60a3"),p=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],u=function(t){return-1!==p.indexOf(t)},d=function(t,e,n){Object.keys(e).filter(u).forEach((function(o){var i=e[o];"function"===typeof i&&("onInit"===o?i(t,n):n.on(o.substring(2),(function(t){return i(t,n)})))}))},f=function(t,e){var n=t.$props.modelEvents?t.$props.modelEvents:null,o=Array.isArray(n)?n.join(" "):n;t.$watch("value",(function(n,o){e&&"string"===typeof n&&n!==o&&n!==e.getContent({format:t.$props.outputFormat})&&e.setContent(n)})),e.on(o||"change keyup undo redo",(function(){t.$emit("input",e.getContent({format:t.$props.outputFormat}))}))},h=function(t,e,n){var o=e.$props.value?e.$props.value:"",i=e.$props.initialValue?e.$props.initialValue:"";n.setContent(o||i),e.$listeners.input&&f(e,n),d(t,e.$listeners,n)},v=0,m=function(t){var e=Date.now(),n=Math.floor(1e9*Math.random());return v++,t+"_"+n+v+String(e)},g=function(t){return null!==t&&"textarea"===t.tagName.toLowerCase()},y=function(t){return"undefined"===typeof t||""===t?[]:Array.isArray(t)?t:t.split(" ")},b=function(t,e){return y(t).concat(y(e))},S=function(t){return null===t||void 0===t},w=function(){return{listeners:[],scriptId:m("tiny-script"),scriptLoaded:!1}},$=function(){var t=w(),e=function(t,e,n,o){var i=e.createElement("script");i.referrerPolicy="origin",i.type="application/javascript",i.id=t,i.src=n;var r=function(){i.removeEventListener("load",r),o()};i.addEventListener("load",r),e.head&&e.head.appendChild(i)},n=function(n,o,i){t.scriptLoaded?i():(t.listeners.push(i),n.getElementById(t.scriptId)||e(t.scriptId,n,o,(function(){t.listeners.forEach((function(t){return t()})),t.scriptLoaded=!0})))},o=function(){t=w()};return{load:n,reinitialize:o}},j=$(),k=n("c4a9f"),C={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],value:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(t){return"html"===t||"text"===t}}},x=function(){return x=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var i in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},x.apply(this,arguments)},O=function(t,e,n){return t(n||"div",{attrs:{id:e}})},E=function(t,e){return t("textarea",{attrs:{id:e},style:{visibility:"hidden"}})},D=function(t){return function(){var e=x(x({},t.$props.init),{readonly:t.$props.disabled,selector:"#"+t.elementId,plugins:b(t.$props.init&&t.$props.init.plugins,t.$props.plugins),toolbar:t.$props.toolbar||t.$props.init&&t.$props.init.toolbar,inline:t.inlineEditor,setup:function(e){t.editor=e,e.on("init",(function(n){return h(n,t,e)})),t.$props.init&&"function"===typeof t.$props.init.setup&&t.$props.init.setup(e)}});g(t.element)&&(t.element.style.visibility=""),Object(k["a"])().init(e)}},M={props:C,created:function(){this.elementId=this.$props.id||m("tiny-vue"),this.inlineEditor=this.$props.init&&this.$props.init.inline||this.$props.inline},watch:{disabled:function(){this.editor.setMode(this.disabled?"readonly":"design")}},mounted:function(){if(this.element=this.$el,null!==Object(k["a"])())D(this)();else if(this.element&&this.element.ownerDocument){var t=this.$props.cloudChannel?this.$props.cloudChannel:"5",e=this.$props.apiKey?this.$props.apiKey:"no-api-key",n=S(this.$props.tinymceScriptSrc)?"https://cdn.tiny.cloud/1/"+e+"/tinymce/"+t+"/tinymce.min.js":this.$props.tinymceScriptSrc;j.load(this.element.ownerDocument,n,D(this))}},beforeDestroy:function(){null!==Object(k["a"])()&&Object(k["a"])().remove(this.editor)},render:function(t){return this.inlineEditor?O(t,this.elementId,this.$props.tagName):E(t,this.elementId)}},P=M,_=[{title:"时间选择器",description:"el-time-select",content:"<el-time-select\n        v-model=\"value\"\n        :picker-options=\"{\n          start: '08:30',\n          step: '00:15',\n          end: '18:30'\n        }\"\n        placeholder=\"选择时间\">\n      </el-time-select>\n      \n      <script>\n        export default {\n          data() {\n            return {\n              value: ''\n            };\n          }\n        }\n      <\/script>"},{title:"日期选择器",description:"el-date-picker",content:'<template>\n      <div class="block">\n        <span class="demonstration">默认</span>\n        <el-date-picker\n          v-model="value1"\n          type="date"\n          placeholder="选择日期">\n        </el-date-picker>\n      </div></template>\n\n      <script>\n        export default {\n          data() {\n            return {\n              value1: \'\',\n              value2: \'\',\n            };\n          }\n        };\n      <\/script>'},{title:"Vue代码库",description:"el-date-picker",content:'<div ref="code" class="code">\n    <pre  class="language-javascript"></pre>\n  </div>'}],A=function(t){Object(a["a"])(n,t);var e=Object(s["a"])(n);function n(){var t;return Object(r["a"])(this,n),t=e.apply(this,arguments),t.title="",t.content="",t.options={height:600,language:"zh_CN",branding:!1,elementpath:!1,statusbar:!1,browser_spellcheck:!0,plugins:["advcode advlist anchor autolink paste imagetools","codesample template fullscreen preview","lists link image media searchreplace print help"],templates:_,content_css:"//www.tiny.cloud/css/codepen.min.css",menubar:!1,fontsize_formats:"8pt 10pt 12pt 14pt 18pt 24pt 36pt",toolbar:"\n    template | undo redo | \n    bold italic underline strikethrough | \n    fontsizeselect forecolor backcolor | \n    alignleft aligncenter alignright | \n    image media link | \n    codeformat codesample code preview publishButton | searchreplace help",setup:function(t){t.ui.registry.addButton("publishButton",{tooltip:"发布",icon:"save",onAction:function(){alert("发布内容"),"Prism"in window&&window["Prism"].highlightAll()}})},codesample_languages:[{text:"HTML/XML",value:"markup"},{text:"CSS",value:"css"},{text:"Less",value:"less"},{text:"Stylus",value:"stylus"},{text:"JavaScript",value:"javascript"},{text:"TypeScript",value:"typescript"},{text:"SQL",value:"sql"},{text:"GraphQL",value:"graphql"},{text:"PowerShell",value:"powershell"},{text:"Markdown",value:"markdown"}],help_tabs:["shortcuts","keyboardnav","plugins"]},t}return n}(c["f"]);A=Object(l["a"])([Object(c["a"])({name:"VueEditor",components:{Editor:P}})],A);var L=A,B=L,I=(n("f411"),n("2877")),K=Object(I["a"])(B,o,i,!1,null,"16ffe3d8",null);e["default"]=K.exports},"902b":function(t,e,n){},c4a9f:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return i}));var o=function(){return"undefined"!==typeof window?window:t},i=function(){var t=o();return t&&t.tinymce?t.tinymce:null}}).call(this,n("c8ba"))},f411:function(t,e,n){"use strict";var o=n("902b"),i=n.n(o);i.a}}]);