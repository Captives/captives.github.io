(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cddc05dc"],{"27cb":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",["login"==e.activeName?a("el-card",{staticStyle:{width:"520px"},attrs:{shadow:"hover"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[e._v("登陆")]),a("span",{staticStyle:{float:"right",padding:"2px"}},[a("el-button",{attrs:{type:"text"},on:{click:function(t){return e.changeActive("register")}}},[e._v("注册")]),a("el-button",{attrs:{type:"text"},on:{click:function(t){return e.changeActive("manager")}}},[e._v("管理")])],1)]),a("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}},[a("template",{slot:"prepend"},[e._v("用户名")])],2),a("el-input",{attrs:{placeholder:"请输入密码"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}},[a("template",{slot:"prepend"},[e._v("密 码")])],2),a("el-button",{attrs:{type:"primary"},on:{click:e.loginHandler}},[e._v("登入")])],1):e._e(),"register"==e.activeName?a("el-card",{staticStyle:{width:"520px"},attrs:{shadow:"hover"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[e._v("注册")]),a("span",{staticStyle:{float:"right",padding:"2px"}},[a("el-button",{attrs:{type:"text"},on:{click:function(t){return e.changeActive("login")}}},[e._v("登陆")]),a("el-button",{attrs:{type:"text"},on:{click:function(t){return e.changeActive("manager")}}},[e._v("管理")])],1)]),a("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}},[a("template",{slot:"prepend"},[e._v("用户名")])],2),a("el-input",{attrs:{placeholder:"请输入密码"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}},[a("template",{slot:"prepend"},[e._v("密 码")])],2),a("el-button",{attrs:{type:"danger"},on:{click:e.regHandler}},[e._v("注册")])],1):e._e(),"manager"==e.activeName?a("el-card",{staticStyle:{width:"520px"},attrs:{shadow:"hover"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[e._v("管理")]),a("span",{staticStyle:{float:"right",padding:"2px"}},[a("el-button",{attrs:{type:"text"},on:{click:function(t){return e.changeActive("login")}}},[e._v("登陆")]),a("el-button",{attrs:{type:"text"},on:{click:function(t){return e.changeActive("register")}}},[e._v("注册")])],1)]),a("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}},[a("template",{slot:"prepend"},[e._v("用户名")])],2),a("el-input",{attrs:{placeholder:"请输入密码"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}},[a("template",{slot:"prepend"},[e._v("密 码")])],2),a("el-button",{attrs:{type:"primary",disabled:""}},[e._v("登入")])],1):e._e()],1)},r=[],s=a("d4ec"),c=a("bee2"),i=a("262e"),o=a("2caf"),u=a("9ab4"),l=a("1b40"),p=a("fcf1"),d=function(e){Object(i["a"])(a,e);var t=Object(o["a"])(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),e.actived=!1,e.activeName="login",e.user={name:"admin",password:"123456",role:"",channel:""},e}return Object(c["a"])(a,[{key:"changeActive",value:function(e){this.activeName=e}},{key:"loginHandler",value:function(){var e=this;p["a"].create(this.user.name,this.user.password).then((function(t){t.success?e.$router.push({path:"/home"}):e.$message({type:"danger",message:"用户名密码错误"})})).catch((function(t){e.$message({type:"danger",message:"请求失败"})}))}},{key:"regHandler",value:function(){var e=this;p["a"].register(this.user.name,this.user.password).then((function(t){t.success?e.$message({type:"success",message:"用户注册成功"}):e.$message({type:"danger",message:"用户注册失败"})}))}}]),a}(l["l"]);d=Object(u["b"])([Object(l["a"])({name:"Login"})],d);var v=d,h=v,f=(a("c99a"),a("2877")),m=function(e){e.options.__source="src/live/pages/Login.vue"},g=m,b=Object(f["a"])(h,n,r,!1,null,"2e63756c",null);"function"===typeof g&&g(b);t["default"]=b.exports},bee2:function(e,t,a){"use strict";function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}a.d(t,"a",(function(){return r}))},c99a:function(e,t,a){"use strict";var n=a("e2a7"),r=a.n(n);r.a},e2a7:function(e,t,a){},fcf1:function(e,t,a){"use strict";var n=a("d4ec"),r=a("262e"),s=a("2caf"),c=(a("d3b7"),a("bee2")),i=a("cebe"),o=a.n(i);o.a.defaults.withCredentials=!0;var u=function(){function e(){Object(n["a"])(this,e),this.prefix="",this.url="",this.axios=o.a}return Object(c["a"])(e,[{key:"request",value:function(e,t){var a=this;return new Promise((function(n,r){a.axios.post(a.prefix+e,t||{}).then((function(e){var t=e.data,a=t.code;t.message;10001===a?window.location.href="/error.html?code=".concat(a):n(e.data)})).catch(r)}))}}]),e}(),l=u,p=function(e){Object(r["a"])(a,e);var t=Object(s["a"])(a);function a(){var e;return Object(n["a"])(this,a),e=t.call(this),e.register=function(t,a){return e.request("/user/register",{name:t,password:a})},e.create=function(t,a){return e.request("/live/create",{name:t,password:a})},e.destory=function(){return e.request("/live/destory")},e.user=function(){return e.request("/live/user")},e.prefix="",e.url="",e}return a}(l);t["a"]=new p}}]);