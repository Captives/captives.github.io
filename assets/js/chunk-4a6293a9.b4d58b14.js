(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a6293a9"],{4917:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("swiper",{ref:"mySwiper",staticStyle:{height:"200px",background:"red"},attrs:{options:e.swiperOptions}},[a("swiper-slide",[e._v("Slide 1")]),a("swiper-slide",[e._v("Slide 2")]),a("swiper-slide",[e._v("Slide 3")]),a("swiper-slide",[e._v("Slide 4")]),a("swiper-slide",[e._v("Slide 5")]),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1),a("vue-hash-calendar",{attrs:{visible:!0,isShowWeekView:!0,pickerType:"date",scrollChangeDate:!0,isShowArrow:!0,isShowAction:!0,showTodayButton:!0},on:{change:e.calendarChangeHandler},scopedSlots:e._u([{key:"week",fn:function(t){return a("div",{staticClass:"calendar-week"},[e._v(" 周"+e._s(t.week)+" ")])}},{key:"arrow",fn:function(e){return a("div",{staticClass:"calendar-arrow"},[a("van-icon",{attrs:{name:[e.show?"arrow-down":"cross"]}})],1)}}])},[a("div",{staticClass:"font-bold",attrs:{slot:"today"},slot:"today"},[e._v("今天")])]),a("van-button",{attrs:{type:"primary",block:""}},[e._v("Button")]),a("transition",{attrs:{mode:"out-in","enter-active-class":"animated bounceIn","leave-active-class":"animated bounceOut"}},[a("img",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],attrs:{alt:"Vue logo",src:n("ae96")},on:{click:function(t){e.show=!e.show}}})]),a("transition",{attrs:{mode:"out-in","enter-active-class":"animated bounceIn","leave-active-class":"animated bounceOut"}},[a("img",{directives:[{name:"show",rawName:"v-show",value:!e.show,expression:"!show"}],attrs:{alt:"Vue logo",src:n("ae96")},on:{click:function(t){e.show=!e.show}}})])],1)},o=[],i=(n("b0c0"),n("d4ec")),s=n("bee2"),r=n("262e"),c=n("2caf"),l=n("9ab4"),u=n("1b40"),d=function(e){Object(r["a"])(n,e);var t=Object(c["a"])(n);function n(){var e;return Object(i["a"])(this,n),e=t.apply(this,arguments),e.show=!1,e.swiperOptions={pagination:{el:".swiper-pagination"}},e}return Object(s["a"])(n,[{key:"beforeCreate",value:function(){var e=this;console.log(this.$route),this.$router.afterEach((function(){document.title=e.$route.name||document.title}))}},{key:"calendarChangeHandler",value:function(e){console.log("time",e.toLocaleString())}}]),n}(u["l"]);d=Object(l["b"])([Object(u["a"])({name:"Home"})],d);var w=d,p=w,v=(n("570b"),n("2877")),h=function(e){e.options.__source="src/travel/views/Home.vue"},f=h,b=Object(v["a"])(p,a,o,!1,null,"dc8b181e",null);"function"===typeof f&&f(b);t["default"]=b.exports},"570b":function(e,t,n){"use strict";var a=n("59e1"),o=n.n(a);o.a},"59e1":function(e,t,n){},ae96:function(e,t,n){e.exports=n.p+"assets/img/logo.82b9c7a5.png"},b0c0:function(e,t,n){var a=n("83ab"),o=n("9bf2").f,i=Function.prototype,s=i.toString,r=/^\s*function ([^ (]*)/,c="name";a&&!(c in i)&&o(i,c,{configurable:!0,get:function(){try{return s.call(this).match(r)[1]}catch(e){return""}}})},bee2:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function o(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n.d(t,"a",(function(){return o}))}}]);